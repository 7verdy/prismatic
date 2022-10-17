<script>
    import { areas } from '../stores/stats.js';

    let selectedArea = 'Maille';
    let onChangeSelectedArea = 'Maille';

    const onChange = () => {
        onChangeSelectedArea = selectedArea;
    }
</script>
<div class="equipment">
    <select id="area-selector" bind:value={selectedArea} on:change={onChange}>
        {#each $areas as area}
        <option value={area}>{area}</option>
        {/each}
    </select>
    <div class="area">
        {onChangeSelectedArea}
    </div>
</div>