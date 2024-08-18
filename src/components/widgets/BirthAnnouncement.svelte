<script lang="ts">
	// Declare the boolean prop
	export let guessed: boolean = false;
</script>

{#if guessed}
<h3>Introducing</h3>
<div>
Sadie Opatowski Shulman
</div>

<h3>Born</h3>
<div>
10:00AM on August 26th, 2024
</div>
<div>
7lbs 6oz
</div>
<div>
19inches
</div>
{:else}
<h3>You Didn't Guess!</h3>
<div>
You'll have to call Aunt Suzi. By now she <strong>must</strong> know!
</div>
<div>
Try her at 303-898-5564
</div>
{/if}


<style>
	div {
		display: flex;
		justify-content: center;
		gap: 8px;
	}
</style>
