<script lang="ts">
	import { onMount } from 'svelte';
	import { dnsServers } from '../store';
	import Header from './Header.svelte';
	import './styles.css';

	onMount(async () => {
		const req = await fetch('/api/dns_servers');
		const json = (await req.json()) as { data: string[] };
		dnsServers.set(json.data);
	});
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>&copy; {(new Date()).getFullYear()} <a href="https://github.com/wisepythagoras">wisepythagoras</a></p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
