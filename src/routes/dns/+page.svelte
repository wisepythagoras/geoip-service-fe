<script lang="ts">
	import { dnsServers } from "../../store";

	let dnsServerList: string[] = [];
	
	dnsServers.subscribe((val) => {
		dnsServerList = val;
	})
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>DNS servers used</h1>

	<p>
		This API uses a number of DNS servers around the world to query, in order to get a more reliable
		picture of how a domain is distributed.
	</p>

	<!-- <pre>
		{dnsServerList.map((server) => {
			return `${server}\n`;
		})}
	</pre> -->
	<pre>{#each dnsServerList as server}<div>{server}</div>{/each}</pre>
</div>
