<script>
    /**
	 * @type {string}
	 */
    export let title;
    /**
	 * @type {any}
	 */
     export let content;

</script>

<div class="card">
    {title}
    <svelte:component this={content}></svelte:component>
</div>