<script>
    import { page } from '$app/stores';
	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<div>
	<nav class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
		<div class="flex items-center justify-between">
			<a class="text-xl font-bold md:text-2xl" href="/"> PrismHUB </a>
			<!-- Mobile menu button -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div on:click={toggleNavbar} class="flex md:hidden">
				<button type="button" class="hover:text-gray-400 focus:outline-none focus:text-gray-400" />
			</div>
		</div>

		<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
		<div
			class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
				? 'flex'
				: 'hidden'}"
		>
			<a class="nav-links" class:active={$page.url.pathname === "/stats-calculator"} href="/stats-calculator">Stats Calculator</a>
			<a class="nav-links" href="#">Compendium</a>
			<a class="nav-links" href="#">Coming soon...</a>
		</div>
		<div class="flex items-center justify-between">
			<a class="nav-links" href="https://discord.gg/kurechii">Join the Postknights!</a>
		</div>
	</nav>
</div>
