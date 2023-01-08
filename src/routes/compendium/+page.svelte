<script>
	import Banner from '../../components/banner.svelte';
	let value = '';
	import { gears } from '../../stores/stats.js';
</script>

<svelte:head>
	<title>Compendium | Prismatic</title>
</svelte:head>
<div class="content flex flex-col justify-center items-center">
	<Banner title="Compendium" />
	<input type="search" id="search" placeholder="Enter a query..." bind:value />
	<div class="card results flex justify-center">
		{#if $gears.length == 0}
			<h2>No result found...</h2>
		{/if}
		{#each $gears as gear}
			{#if gear.name.toLowerCase().includes(value.toLowerCase())}
				<div class="card">
					<div class="top-row">
						<h2>{gear.name}</h2>
						<div class="area-set">
                            <span>{gear.origin}</span>
							<span>{gear.set}</span>
						</div>
					</div>
					<p>{gear.description}</p>
					{#if gear.stats}
						<h3>Stats</h3>
						<ul>
							{#each gear.stats as stat}
								{#each Object.keys(stat) as key}
									<li>{key}: {stat[key]}</li>
								{/each}
							{/each}
						</ul>
					{/if}
                    {#if gear.hidden}
                        <h3>Hidden Stats</h3>
                        <ul>
                            {#each gear.hidden as stat}
                                {#each Object.keys(stat) as key}
                                    <li>{key}: {stat[key]}</li>
                                {/each}
                            {/each}
                        </ul>
                    {/if}
				</div>
			{/if}
		{/each}
	</div>
</div>
