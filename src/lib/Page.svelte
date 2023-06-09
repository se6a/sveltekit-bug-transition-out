<script>
	import { xy } from '$lib/store';

	export let name = '';
	$xy = name;
</script>

<main>
	PAGE COMPONENT: {name}
	<slot />
</main>

<style>
	main {
		border: 10px solid black;
		margin-top: 10px;
		height: 100px;
	}
</style>
