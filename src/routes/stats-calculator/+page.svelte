<script>
	import Card from '../../components/card.svelte';
	import Stats from '../../components/stats.svelte';
	import Equipment from '../../components/equipment.svelte';
</script>
<svelte:head>
	<title>Stats Calculator | Prismatic</title>
</svelte:head>

<div class="content flex flex-row justify-center items-center">
	<Card title="Stats" content={Stats} />
	<Card title="Equipment" content={Equipment} />
</div>