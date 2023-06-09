<script>
	import Page from '$lib/Page.svelte';
	import { fade } from 'svelte/transition';
</script>

<Page name="Route 0">
	{#each [{}, {}] as _}
		<div out:fade>
			<slot name="title" />
		</div>
	{/each}
</Page>
