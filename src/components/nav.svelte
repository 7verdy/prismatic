<script>
    import { page } from '$app/stores';
</script>

<div>
	<nav class="container px-6 py-8 mx-auto md:flex md:items-center">
		<div class="nav-first">
			<a class="text-xl font-bold md:text-2xl underline-stroke" href="/"><h1>Prismatic</h1></a>
		</div>

		<div class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 md:justify-center">
			<a class="nav-links" class:active={$page.url.pathname === "/stats-calculator"} href="/stats-calculator"><h2>Stats Calculator</h2></a>
			<a class="nav-links" class:active={$page.url.pathname === "/compendium"} href="/compendium"><h2>Compendium</h2></a>
			<a class="nav-links" href="#"><h2>Coming soon...</h2></a>
		</div>
		<div class="nav-last">
			<button class="nav-links" href="https://discord.gg/kurechii"><h2>Join the Postknights!</h2></button>
		</div>
	</nav>
</div>
