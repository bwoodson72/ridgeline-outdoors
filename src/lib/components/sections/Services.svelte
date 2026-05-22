<script lang="ts">
	import { siteContent } from '$lib/content/site';
	import Container from '$lib/components/ui/Container.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';

	const { eyebrow, heading, subheading } = siteContent.servicesSection;
</script>

<section id="services" class="bg-surface py-section">
	<Container>
		<SectionHeading {eyebrow} {heading} {subheading} class="mb-12" />

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each siteContent.services as service (service.title)}
				<article class="group relative h-72 overflow-hidden rounded-xl">

					<!-- Image or branded gradient fallback -->
					{#if service.imageSrc}
						<img
							src={service.imageSrc}
							alt={service.title}
							class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							loading="lazy"
						/>
					{:else}
						<div class="absolute inset-0 bg-brand"></div>
					{/if}

					<!-- Gradient overlay -->
					<div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent"></div>

					<!-- Price badge -->
					{#if service.price}
						<div class="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-text-primary shadow-sm">
							{service.price}
						</div>
					{/if}

					<!-- Text -->
					<div class="absolute bottom-0 left-0 right-0 p-5">
						<h3 class="mb-1.5 font-display text-lg font-bold text-white">{service.title}</h3>
						<p class="text-sm leading-normal text-white/75">{service.description}</p>
					</div>

				</article>
			{/each}
		</div>
	</Container>
</section>
