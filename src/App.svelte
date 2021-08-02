<script>
	import { trad as t } from './store';
	import ForceGraph3D from '3d-force-graph';
	import { onMount } from 'svelte';
	export let name;
	let graphDiv = undefined;

	// Random tree
	const N = 300;
	const gData = {
		nodes: [...Array(N).keys()].map((i) => ({ id: i })),
		links: [...Array(N).keys()]
			.filter((id) => id)
			.map((id) => ({
				source: id,
				target: Math.round(Math.random() * (id - 1)),
			})),
	};
	onMount(() => {
		const Graph = ForceGraph3D()(graphDiv).graphData(gData);
	});
</script>

<main>
	<h1>{$t['hello']} {name}!</h1>
	<div id="3d-graph" bind:this={graphDiv} />
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
