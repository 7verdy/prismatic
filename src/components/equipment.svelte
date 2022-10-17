<script>
    const areas = [ 'Maille', 'Pompon', 'Caldemount', 'Violetfair',
                    'Aldor', 'Sagacia', 'Regalle' ];
</script>
<div class="equipment">
    {#each areas as area}
    <div class="area">
        {area}
    </div>
    {/each}
</div>