<script lang="ts">
	/**
	 * Horizontal process timeline driven by siteContent.process.
	 * Each step delegates to ProcessStep, which uses Svelte 5 multiple root elements
	 * to own both the step tile and the trailing chevron separator in one component.
	 */
	import { siteContent } from '$lib/content/site';
	import Container from '$lib/components/ui/Container.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import ProcessStep from '$lib/components/ui/ProcessStep.svelte';

	const { eyebrow, heading, subheading } = siteContent.processSection;
	const steps = siteContent.process;
</script>

<section id="process" class="bg-surface py-section">
	<Container>
		<SectionHeading {eyebrow} {heading} {subheading} class="mb-16" />

		<div class="flex flex-col gap-8 md:flex-row md:items-center md:gap-0">
			{#each steps as step, i (step.number)}
				<ProcessStep
					number={step.number}
					title={step.title}
					description={step.description}
					isLast={i === steps.length - 1}
				/>
			{/each}
		</div>
	</Container>
</section>
