<script>
	import Banner from "../../components/banner.svelte";
    let value = "";
</script>
<svelte:head>
    <title>Compendium | Prismatic</title>
</svelte:head>
<Banner title="Compendium" />
<div class="content flex flex-col justify-center items-center">
    <input type="text" id="search" placeholder="Enter a query..." bind:value />
    <div class="card results"></div>
</div>