<script lang="ts">
	/**
	 * Testimonial card with 5-star rating, quote, and reviewer info.
	 *
	 * When avatarSrc is omitted, initials are derived from the reviewer's name
	 * and displayed in a brand-coloured circle as a fallback avatar.
	 */
	interface Props {
		quote: string;
		name: string;
		title: string;
		company: string;
		avatarSrc?: string;
	}

	let { quote, name, title, company, avatarSrc }: Props = $props();

	// Derive up to two initials from the full name for the avatar fallback.
	const initials = $derived(
		name
			.split(' ')
			.filter(Boolean)
			.slice(0, 2)
			.map((w) => w[0].toUpperCase())
			.join('')
	);
</script>

<div class="flex flex-col rounded-xl border border-border bg-surface p-8 shadow-card">
	<!-- Stars -->
	<div class="mb-4 flex text-lg text-accent" aria-label="5 out of 5 stars">
		<span aria-hidden="true">★★★★★</span>
	</div>

	<!-- Decorative quote mark + quote text -->
	<div class="mb-6 flex-1">
		<p class="font-display text-4xl leading-none text-brand" aria-hidden="true">"</p>
		<p class="mt-2 text-base italic leading-normal text-text-primary">{quote}</p>
	</div>

	<!-- Reviewer row -->
	<div class="mt-auto flex items-center gap-4">
		{#if avatarSrc}
			<img
				src={avatarSrc}
				alt={name}
				class="h-12 w-12 shrink-0 rounded-full object-cover"
			/>
		{:else}
			<div
				class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-light text-sm font-bold text-brand"
				aria-hidden="true"
			>
				{initials}
			</div>
		{/if}

		<div>
			<p class="text-sm font-semibold text-text-primary">{name}</p>
			<p class="text-sm text-text-muted">{title} · {company}</p>
		</div>
	</div>
</div>
