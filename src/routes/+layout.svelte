<div>
	{#each [0, 1] as route}
		<a href="/{route ? `route-${route}` : ''}"> ROUTE {route}</a>
	{/each}
</div>

<slot />

<style>
	div {
		height: 50px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1em;
	}
</style>
