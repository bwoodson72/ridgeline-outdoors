<script lang="ts">
	/**
	 * Testimonials section — three-column card grid driven by siteContent.testimonials.
	 * Add or remove objects in that array to change the number of cards.
	 */
	import { siteContent } from '$lib/content/site';
	import Container from '$lib/components/ui/Container.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import TestimonialCard from '$lib/components/ui/TestimonialCard.svelte';

	const { eyebrow, heading, subheading } = siteContent.testimonialsSection;
</script>

<section id="testimonials" class="bg-surface-alt py-section">
	<Container>
		<SectionHeading {eyebrow} {heading} {subheading} variant="dark" class="mb-12" />

		<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
			{#each siteContent.testimonials as testimonial (testimonial.name)}
				<TestimonialCard
					quote={testimonial.quote}
					name={testimonial.name}
					title={testimonial.title}
					company={testimonial.company}
					avatarSrc={testimonial.avatarSrc}
				/>
			{/each}
		</div>
	</Container>
</section>
