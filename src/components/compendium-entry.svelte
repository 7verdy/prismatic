<script>
	import { clickOutside } from '../utils/outside.js';
	/**
	 * @type {string}
	 */
	export let title;
	/**
	 * @type {string}
	 */
	export let description;
	/**
	 * @type {string}
	 */
	export let category;

	const displayEntry = () => {
		const div = document.getElementById(title);
		if (div) {
			div.classList.remove('hidden');
			div.classList.add('block');
		}
	};
	const hideEntry = () => {
		const div = document.getElementById(title);
		if (div) {
			div.classList.remove('block');
			div.classList.add('hidden');
		}
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="compendium-entry p-4" on:click={displayEntry}>
	<div class="header flex flex-row justify-between mx-4">
		<h1>{title}</h1>
		<div class="category-block p-1">
			<h2>{category}</h2>
		</div>
	</div>
	<div class="description text-center mt-2">
		<p>{description}</p>
	</div>
</div>
<div class="expanded-entry h-screen hidden top-0 left-0" id={title}>
	<div
		use:clickOutside
		class="compendium-entry p-4 w-1/3 m-auto top-1/2 translate-y-1/2 h-screen max-h-1/2"
		on:click_outside={hideEntry}
	>
		<div class="header flex flex-row justify-between mx-4">
			<h1>{title}</h1>
			<div class="category-block p-1">
				<h2>{category}</h2>
			</div>
		</div>
		<div class="description text-center mt-2">
			<p>{description}</p>
		</div>
	</div>
</div>
