<script>
	import Banner from "../../components/banner.svelte";
    import CompendiumEntry from "../../components/compendium-entry.svelte";
    import { compendium } from "../../stores/compendium.js";
    let value = "";
    let entries = Object.entries($compendium);
</script>
<svelte:head>
    <title>Compendium | Prismatic</title>
</svelte:head>
<Banner title="Compendium" />
<div class="content flex flex-col justify-center items-center">
    <input type="search" id="search" placeholder="Enter a query..." bind:value />
    <div class="results grid grid-cols-3 gap-5 justify-center align-center">
        {#each entries as [_, entry]}
            <CompendiumEntry title={entry['name']} description={entry['description']} category={entry['category']} />
        {/each}
    </div>
</div>