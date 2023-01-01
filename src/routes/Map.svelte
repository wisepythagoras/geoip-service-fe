<script lang="ts">
	import markerIcon from 'leaflet/dist/images/marker-icon.png';
    import * as L from 'leaflet';
    import 'leaflet/dist/leaflet.css';
	import { beforeUpdate } from 'svelte';

    export let center: [number, number];
    export let markers: [number, number, string][];

    let map: L.Map;
    const mapMarkers: L.Marker<any>[] = [];

    const addMarkers = () => {
        markers.map((m) => {
            const icon = new L.Icon({
                iconUrl: markerIcon,
                iconSize: [24, 36],
                iconAnchor: [12, 36],
                popupAnchor: [0, -36],
            });
            const marker = L.marker([m[0], m[1]], { icon });
            marker.addTo(map).bindPopup(m[2]);
            mapMarkers.push(marker);
        });
    };

    const initRef = (div: HTMLDivElement) => {
        map = L.map(div).setView(center, 9);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20
        }).addTo(map);

        addMarkers();

        return {
            destroy: () => map.remove()
        };
    };

    beforeUpdate(() => {
        if (!map) {
            return;
        }

        mapMarkers.forEach((marker) => {
            map.removeLayer(marker);
        });

        addMarkers();

        map.flyTo([center[0], center[1]]);
    });
</script>

<div class="map" use:initRef />

<style>
    .map {
        width: 100%;
        height: 300px;
    }
</style>
