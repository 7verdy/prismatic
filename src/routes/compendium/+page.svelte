<script>
	import Banner from "../../components/banner.svelte";
    let value = "";
    let results = [];
</script>
<svelte:head>
    <title>Compendium | Prismatic</title>
</svelte:head>
<Banner title="Compendium" />
<div class="content flex flex-col justify-center items-center">
    <input type="search" id="search" placeholder="Enter a query..." bind:value />
    <div class="card results flex justify-center">
        {#if results.length == 0}
            <h2>No result found...</h2>
        {/if}
    </div>
</div>