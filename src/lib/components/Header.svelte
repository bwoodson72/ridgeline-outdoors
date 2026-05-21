<script lang="ts">
	/**
	 * Sticky site header with desktop nav and an animated mobile menu.
	 *
	 * The mobile drawer uses a CSS grid-rows collapse trick rather than JS height
	 * animation: toggling between grid-rows-[0fr] and grid-rows-[1fr] with an inner
	 * min-h-0 div allows smooth transition-[grid-template-rows] without measuring
	 * element heights in JavaScript or using a max-height hack.
	 */
	import { siteContent } from '$lib/content/site';
	import Button from '$lib/components/ui/Button.svelte';
	import Container from '$lib/components/ui/Container.svelte';

	let menuOpen = $state(false);

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<header class="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-sm">
	<!-- Main bar -->
	<Container>
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<a
				href="/"
				class="font-display text-xl font-bold text-text-primary"
				onclick={closeMenu}
			>
				{siteContent.companyName}
			</a>

			<!-- Desktop nav -->
			<nav class="hidden items-center gap-8 md:flex" aria-label="Main navigation">
				{#each siteContent.nav as link (link.href)}
					<a
						href={link.href}
						class="text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
					>
						{link.label}
					</a>
				{/each}
			</nav>

			<!-- Desktop CTA + mobile hamburger -->
			<div class="flex items-center gap-3">
				<div class="hidden md:block">
					<Button variant="primary" size="sm" href="#contact">Get a Quote</Button>
				</div>

				<button
					class="rounded-md p-2 text-text-secondary transition-colors duration-200 hover:bg-neutral-100 hover:text-text-primary md:hidden"
					onclick={toggleMenu}
					aria-label={menuOpen ? 'Close menu' : 'Open menu'}
					aria-expanded={menuOpen}
					aria-controls="mobile-menu"
				>
					{#if menuOpen}
						<!-- X icon -->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					{:else}
						<!-- Hamburger icon -->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</Container>

	<!-- Mobile menu (CSS grid-row collapse transition) -->
	<div
		id="mobile-menu"
		class={[
			'grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out md:hidden',
			menuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
		]}
	>
		<div class="min-h-0">
			<Container>
				<nav class="flex flex-col gap-1 py-4" aria-label="Mobile navigation">
					{#each siteContent.nav as link (link.href)}
						<a
							href={link.href}
							class="rounded-md px-3 py-2.5 text-sm font-medium text-text-secondary transition-colors duration-200 hover:bg-neutral-50 hover:text-text-primary"
							onclick={closeMenu}
						>
							{link.label}
						</a>
					{/each}
					<div class="mt-2 pb-2">
						<Button variant="primary" size="sm" href="#contact" class="w-full justify-center">
							Get a Quote
						</Button>
					</div>
				</nav>
			</Container>
		</div>
	</div>
</header>
