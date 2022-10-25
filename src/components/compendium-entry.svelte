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
	<div class="entry">
		<div class="header flex flex-row justify-between">
			<h1>{title}</h1>
			<div class="category-block p-1">
				<h2>{category}</h2>
			</div>
		</div>
		<div class="body">
			<div class="description text-center mt-2">
				<p>{description}</p>
			</div>
			<div class="details">
				<svg
					width="11"
					height="13"
					viewBox="0 0 11 13"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M5.50065 4.33337C4.85732 4.33337 4.33398 4.85671 4.33398 5.50071C4.33398 6.14404 4.85732 6.66671 5.50065 6.66671C6.14398 6.66671 6.66732 6.14404 6.66732 5.50071C6.66732 4.85671 6.14398 4.33337 5.50065 4.33337ZM5.50065 7.66671C4.30598 7.66671 3.33398 6.69537 3.33398 5.50071C3.33398 4.30537 4.30598 3.33337 5.50065 3.33337C6.69532 3.33337 7.66732 4.30537 7.66732 5.50071C7.66732 6.69537 6.69532 7.66671 5.50065 7.66671Z"
						fill="#DA4646"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M5.5 1C3.01867 1 1 3.038 1 5.542C1 8.728 4.74933 11.832 5.5 11.9973C6.25067 11.8313 10 8.72733 10 5.542C10 3.038 7.98133 1 5.5 1ZM5.5 13C4.304 13 0 9.29867 0 5.542C0 2.486 2.46733 0 5.5 0C8.53267 0 11 2.486 11 5.542C11 9.29867 6.696 13 5.5 13Z"
						fill="#DA4646"
					/>
				</svg>
			</div>
		</div>
	</div>
</div>
<div class="expanded-entry h-screen hidden top-0 left-0" id={title}>
	<div
		use:clickOutside
		class="compendium-entry p-4 w-1/3 h-auto m-auto top-1/2 translate-y-1/2 h-screen max-h-1/2"
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

		<div class="details" />
	</div>
</div>
