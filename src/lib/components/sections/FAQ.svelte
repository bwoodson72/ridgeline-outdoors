<script lang="ts">
	/**
	 * FAQ section — two-column layout with the section heading on the left and
	 * the accordion on the right. Add or remove objects in siteContent.faqs
	 * to change the number of questions.
	 */
	import { siteContent } from '$lib/content/site';
	import Container from '$lib/components/ui/Container.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import FAQAccordion from '$lib/components/ui/FAQAccordion.svelte';

	const { eyebrow, heading, subheading } = siteContent.faqSection;
</script>

<section id="faq" class="bg-surface py-section">
	<Container>
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
			<!-- Left: heading + supporting text -->
			<div>
				<SectionHeading {eyebrow} {heading} {subheading} align="left" />
				<p class="mt-6 text-sm leading-normal text-text-secondary">
					Still have a question not covered here? Reach out directly at
					<a
						href="mailto:{siteContent.contact.email}"
						class="font-medium text-brand transition-colors hover:text-brand-dark"
					>
						{siteContent.contact.email}
					</a>
					and we'll get back to you the same business day.
				</p>
			</div>

			<!-- Right: accordion -->
			<FAQAccordion items={siteContent.faqs} />
		</div>
	</Container>
</section>
