<script lang="ts">
	import logo from '$lib/images/logo.png';
	import type { ApiResponseIP, ApiResponseMultiIP, IPRecord } from 'src/types';
	import InfoTable from './InfoTable.svelte';
	import Map from './Map.svelte';

	let searchValue = '';
	let results: IPRecord[] = [];

	const query = async (addr: string) => {
		if (addr.trim().length === 0) {
			return;
		}

		let endpoint = `/api/ip_address/info/${addr}`;
		let isDomain = false;

		if (addr.match(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/)) {
			endpoint = `/api/domain/info/${addr}`;
			isDomain = true;
		}

		const req = await fetch(endpoint);
		const json = await req.json();

		if (!isDomain) {
			results = [(json as ApiResponseIP).record];
		} else {
			results = (json as ApiResponseMultiIP).records;
		}
	};

	const setSearchValue = (addr: string) => {
		return () => {
			searchValue = addr;
		};
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	{#if results.length > 0}
		<Map
			center={[results[0].location.latitude, results[0].location.longitude]}
			markers={results.map((r) => {
				return [r.location.latitude, r.location.longitude, r.ip_address]
			})}
		/>

		<div class="results-container">
			{#each results as result}
				<InfoTable info={result} />
			{/each}
		</div>
	{:else}
		<h1>
			<img class="logo" src={logo} alt="GeoIP Service" />
		</h1>

		<div>
			<input
				class="search-input"
				placeholder="Search IP or domain"
				on:keydown={(e) => {
					if (e.key === 'Enter') {
						query(searchValue);
					}
				}}
				bind:value={searchValue}
			/>
			<div class="search-actions">
				<button on:click={() => query(searchValue)}>Search</button>
			</div>
		</div>

		<h2>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			Try <code class="clickable" on:click={setSearchValue("1.1.1.1")}>1.1.1.1</code> or&nbsp;
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<code class="clickable"on:click={setSearchValue("example.com")}>example.com</code>
		</h2>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
		font-family: var(--heading-font);
		font-size: 4em;
	}

	img.logo {
		width: 50vw;
		max-width: 300px;
	}

	input.search-input {
		outline: 0;
		background: #222;
		border: 1px solid #000;
		padding: 8px 10px;
		border-radius: 5px;
		color: var(--color-text);
		max-width: 400px;
		width: 90vw;
	}

	.search-actions {
		text-align: center;
		padding-top: 10px;
	}

	.search-actions > button {
		color: var(--color-text);
		font-family: var(--heading-font);
		font-size: 18px;
		padding: 8px 12px;
		background: #171717;
		border: 1px solid black;
		border-radius: 5px;
		cursor: pointer;
	}

	.search-actions > button:hover {
		background: #202020;
	}

	.results-container {
		width: 100%;
	}
</style>
