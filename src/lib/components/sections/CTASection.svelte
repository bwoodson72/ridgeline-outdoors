<script lang="ts">
	/**
	 * Full-width CTA band with a brand-coloured background.
	 * Primary button links to #contact. Secondary button links to tel:{phone}
	 * when siteContent.contact.phone is set, or falls back to #contact.
	 */
	import { siteContent } from '$lib/content/site';
	import Container from '$lib/components/ui/Container.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	const { heading, subtext, primaryCTA, secondaryCTA } = siteContent.cta;
	const phone = siteContent.contact.phone;
</script>

<section class="bg-brand py-section">
	<Container>
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="font-display text-4xl font-bold leading-tight text-white">
				{heading}
			</h2>
			<p class="mb-8 mt-4 text-lg text-white/80">{subtext}</p>
			<div class="flex flex-wrap justify-center gap-4">
				<Button variant="cta-primary" size="lg" href="#contact">
					{primaryCTA}
				</Button>
				{#if phone}
					<Button variant="cta-ghost" size="lg" href="tel:{phone}">
						{secondaryCTA}
					</Button>
				{:else}
					<Button variant="cta-ghost" size="lg" href="#contact">
						{secondaryCTA}
					</Button>
				{/if}
			</div>
		</div>
	</Container>
</section>
