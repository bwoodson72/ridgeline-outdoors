<script lang="ts">
	import { siteContent } from '$lib/content/site';
	import Button from '$lib/components/ui/Button.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import heroImg from '$lib/assets/hero-landscape.avif?enhanced';

	const { eyebrow, headline, subheadline, primaryCTA, primaryCTAHref, secondaryCTA,
		secondaryCTAHref, trustSignals } = siteContent.hero;
</script>

<section class="relative flex min-h-screen items-center">

	<!-- Background image: full-bleed, aria-hidden since it's atmospheric -->
	<div class="absolute inset-0" aria-hidden="true">
		<enhanced:img
			src={heroImg}
			alt=""
			class="h-full w-full object-cover"
			sizes="100vw"
			fetchpriority="high"
		/>
	</div>

	<!-- Gradient overlay: dense left for legibility, fades right to reveal the image -->
	<div class="absolute inset-0 bg-linear-to-r from-black/75 via-black/45 to-black/10"></div>

	<!-- Content -->
	<Container class="relative z-10 py-32 pt-48">
		<div class="flex max-w-2xl flex-col gap-6">

			<!-- Eyebrow badge -->
			<span class="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/15 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm">
				{eyebrow}
			</span>

			<!-- Headline -->
			<h1 class="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
				{headline}
			</h1>

			<!-- Subheadline -->
			<p class="max-w-xl text-lg leading-normal text-white/85">
				{subheadline}
			</p>

			<!-- CTA row -->
			<div class="flex flex-wrap gap-4 pt-2">
				<Button variant="primary" size="lg" href={primaryCTAHref}>
					{primaryCTA}
				</Button>
				<Button variant="cta-ghost" size="lg" href={secondaryCTAHref}>
					{secondaryCTA}
				</Button>
			</div>

			<!-- Trust signals -->
			<div class="flex flex-wrap gap-x-6 gap-y-2">
				{#each trustSignals as signal (signal)}
					<div class="flex items-center gap-1.5 text-sm text-white/90">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="h-4 w-4 shrink-0 text-accent"
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
	</Container>
</section>
