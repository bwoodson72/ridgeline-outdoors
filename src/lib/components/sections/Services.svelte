<script lang="ts">
	/**
	 * Services section — responsive card grid driven by siteContent.services.
	 * Add or remove objects in that array to change the number of cards.
	 * The price badge is hidden automatically when ServiceCard.price is omitted.
	 */
	import { siteContent } from '$lib/content/site';
	import Button from '$lib/components/ui/Button.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';

	const { eyebrow, heading, subheading } = siteContent.servicesSection;
</script>

<section id="services" class="bg-surface-alt py-section">
	<Container>
		<SectionHeading {eyebrow} {heading} {subheading} class="mb-12" />

		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each siteContent.services as service (service.title)}
				<div
					class="flex flex-col rounded-xl border border-border bg-surface p-8 shadow-card transition-shadow duration-200 hover:shadow-elevated"
				>
					<h3 class="mb-3 font-display text-xl font-bold text-text-primary">{service.title}</h3>
					<p class="mb-4 text-sm leading-normal text-text-secondary">{service.description}</p>
					{#if service.price}
						<p class="mb-4 text-lg font-bold text-brand">{service.price}</p>
					{/if}
					<div class="mt-auto pt-2">
						<Button variant="ghost" size="sm" href="#contact">Learn More</Button>
					</div>
				</div>
			{/each}
		</div>
	</Container>
</section>
