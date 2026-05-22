<script lang="ts">
	/**
	 * Standard section header used by every content section.
	 *
	 * eyebrow  — small all-caps label above the h2 (brand colour)
	 * heading  — the h2 itself (required)
	 * subheading — descriptive paragraph below the h2 (capped at max-w-2xl when centred)
	 * align    — 'center' (default) or 'left'; left-aligns the two-column FAQ layout
	 */
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		eyebrow?: string;
		heading: string;
		subheading?: string;
		align?: 'left' | 'center';
		class?: ClassValue;
		variant?: 'light' | 'dark';
	}

	let { eyebrow, heading, subheading, align = 'center', class: className, variant = 'light' }: Props = $props();
</script>

<div class={[align === 'center' ? 'text-center' : 'text-left', className]}>
	{#if eyebrow}
		<p class={['mb-3 text-sm font-semibold uppercase tracking-wider', variant === 'dark' ? 'text-white' : 'text-brand']}>
			{eyebrow}
		</p>
	{/if}
	<h2 class={['mb-4 font-display text-3xl font-bold leading-tight md:text-4xl', variant === 'dark' ? 'text-text-tertiary' : 'text-text-primary']}>
		{heading}
	</h2>
	{#if subheading}
		<p class={['text-lg', variant === 'dark' ? 'text-text-tertiary/80' : 'text-text-secondary', align === 'center' && 'mx-auto max-w-2xl']}>
			{subheading}
		</p>
	{/if}
</div>
