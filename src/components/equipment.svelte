<script>
    import { areas, sets } from '../stores/stats.js';

    const areasTmp = [ 'Maille', 'Pompon', 'Caldemount', 'Violetfair',
                    'Aldor', 'Sagacia', 'Regalle' ];
    let selectedArea = 'Maille';
    let onChangeSelectedArea = 'Maille';

    const onChange = () => {
        onChangeSelectedArea = selectedArea;
    }
</script>
<div class="equipment">
    <select id="area-selector" bind:value={selectedArea} on:change={onChange}>
        {#each areasTmp as area}
        <option value={area}>{area}</option>
        {/each}
    </select>
    <div class="area">
        {onChangeSelectedArea}
        {#each sets as set}
        <div class="set">
            {set.name}
            {#each set.items as item}
            <div class="item">
                <img src={item.image} alt={item.name} />
            </div>
            {/each}
        </div>
    </div>
</div>