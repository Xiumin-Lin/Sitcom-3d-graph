import App from './App.svelte';
import { trad as t } from './store';

let world = undefined;
t.subscribe((value) => (world = value['world']));

const app = new App({
	target: document.body,
	props: {
		name: world,
	},
});

export default app;
