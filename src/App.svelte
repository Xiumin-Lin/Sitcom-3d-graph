<script>
	import { trad as t } from './store';
	import Graph3D from './components/Graph3D.svelte';
	export let name;
</script>

<main>
	<h1>{$t['hello']} {name}!</h1>
	<Graph3D />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
