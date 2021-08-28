<script>
	import ForceGraph3D from '3d-force-graph';
	import { onMount } from 'svelte';

	let graphDiv = undefined;
	let Graph = undefined;

	//#region Random tree
	// const N = 300;
	// const gData = {
	// 	nodes: [...Array(N).keys()].map((i) => ({ id: i })),
	// 	links: [...Array(N).keys()]
	// 		.filter((id) => id) // return an array without the key 0
	// 		.map((id) => ({
	// 			source: id,
	// 			target: Math.round(Math.random() * (id - 1)),
	// 		})),
	// };
	//#endregion

	onMount(() => {
		Graph = ForceGraph3D()(graphDiv).graphData({
			nodes: [], // initial data
			links: [],
		});
	});

	function addNode() {
		if (!Graph) {
			console.error('Graph is undefined !');
			return;
		}
		let { nodes, links } = Graph.graphData();
		let id = nodes.length;
		Graph.graphData({
			nodes: [...nodes, { id }],
			links: [
				...links,
				{ source: id, target: Math.round(Math.random() * (id - 1)) },
			],
		});
		Graph = Graph;
	}
</script>

<button type="button" on:click={addNode}>Add Node</button>
<div id="graph" bind:this={graphDiv} />

<style>
</style>
