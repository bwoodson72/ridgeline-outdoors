<script lang="ts">
	/**
	 * Full-width two-column hero section.
	 *
	 * Right column shows the hero image when siteContent.hero.imageSrc is set,
	 * or a branded aspect-ratio placeholder when it is empty. Place the image
	 * in /static/images/ and set imageSrc to '/images/filename.jpg'.
	 */
	import { siteContent } from '$lib/content/site';
	import Button from '$lib/components/ui/Button.svelte';
	import Container from '$lib/components/ui/Container.svelte';

	const { eyebrow, headline, subheadline, primaryCTA, primaryCTAHref, secondaryCTA,
		secondaryCTAHref, imageSrc, imageAlt, trustSignals } = siteContent.hero;
</script>

<section class="bg-surface pb-section pt-24">
	<Container>
		<div class="grid grid-cols-1 items-center gap-16 md:min-h-[80vh] md:grid-cols-2">

			<!-- Left: text content -->
			<div class="flex flex-col gap-6">

				<!-- Eyebrow badge -->
				<span class="inline-flex w-fit items-center rounded-full bg-brand-light px-3 py-1 text-sm font-semibold text-brand">
					{eyebrow}
				</span>

				<!-- Headline -->
				<h1 class="font-display text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-5xl">
					{headline}
				</h1>

				<!-- Subheadline -->
				<p class="max-w-lg text-lg leading-normal text-text-secondary">
					{subheadline}
				</p>

				<!-- CTA row -->
				<div class="flex flex-wrap gap-4">
					<Button variant="primary" size="lg" href={primaryCTAHref}>
						{primaryCTA}
					</Button>
					<Button variant="secondary" size="lg" href={secondaryCTAHref}>
						{secondaryCTA}
					</Button>
				</div>

				<!-- Trust signals -->
				<div class="flex flex-wrap gap-x-6 gap-y-2 pt-2">
					{#each trustSignals as signal (signal)}
						<div class="flex items-center gap-1.5 text-sm text-text-secondary">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="h-4 w-4 shrink-0 text-brand"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143z"
									clip-rule="evenodd"
								/>
							</svg>
							{signal}
						</div>
					{/each}
				</div>
			</div>

			<!-- Right: image or placeholder -->
			<div class="overflow-hidden rounded-xl shadow-elevated">
				{#if imageSrc}
					<img
						src={imageSrc}
						alt={imageAlt}
						class="h-full w-full object-cover"
					/>
				{:else}
					<div class="flex aspect-video w-full items-center justify-center bg-brand-light">
						<p class="text-sm font-medium text-brand">Hero Image</p>
					</div>
				{/if}
			</div>

		</div>
	</Container>
</section>
