<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header>
	<div class="corner-icon">
		<a href="/">
			<img src={logo} alt="GeoIP Service" />
		</a>
	</div>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/dns' ? 'page' : undefined}>
				<a href="/dns">DNS Servers</a>
			</li>
		</ul>
	</nav>

	<div class="corner-icon">
		<a href="https://github.com/wisepythagoras/geoip-service">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner-icon {
		width: 3em;
		height: 3em;
	}

	.corner-icon a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner-icon img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(27, 27, 27, 0.7);
	}

	ul {
		position: relative;
		padding: 0 20px;
		margin: 0;
		height: 3em;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 3px;
		content: '';
		width: 100%;
		position: absolute;
		bottom: 0;
		left: -3px;
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--highlight-color);
		transform: rotate(-180deg);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		font-family: var(--heading-font);
		font-size: 18px;
	}

	a:hover {
		color: var(--highlight-color);
	}
</style>
