<script lang="ts">
	import type { IPRecord } from "src/types";

    export let info: IPRecord;
    console.log(info);
</script>

<div class="table-container">
    <table>
        <tr>
            <td>Country</td>
            <td>{info.country.name?.en || 'N/A'} - {info.country.iso_code}</td>
        </tr>
        <tr>
            <td>City</td>
            <td>{info.city.name?.en || 'N/A'}</td>
        </tr>
        <tr>
            <td>Coordinates</td>
            <td>{info.location.longitude}, {info.location.latitude}</td>
        </tr>
        <tr>
            <td>IP Address</td>
            <td>{info.ip_address}</td>
        </tr>
        <tr>
            <td>ISP</td>
            <td>{info.org} (ASN: {info.asn})</td>
        </tr>
    </table>
</div>

<style>
    .table-container {
        margin-bottom: 20px;
    }

    .table-container > table {
        width: 100%;
        border-spacing: 0; 
    }

    .table-container > table > tr {
        border-bottom: 1px solid #444;
    }

    .table-container > table > tr:first-child > td {
        border-top: 1px solid #444;
    }

    .table-container > table > tr > td {
        border-bottom: 1px solid #444;
        padding: 10px 0;
    }

    .table-container > table > tr > td:first-child {
        max-width: 200px;
        width: 20vw;
        font-weight: bold;
    }
</style>