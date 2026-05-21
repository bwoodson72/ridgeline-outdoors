<script lang="ts">
	/**
	 * Polymorphic button — renders an <a> when href is provided, <button> otherwise.
	 *
	 * Variants:
	 *   primary     — solid brand fill; main call-to-action on light backgrounds
	 *   secondary   — brand-outlined; secondary actions on light backgrounds
	 *   ghost       — text-only brand colour; low-emphasis actions (service cards)
	 *   cta-primary — white fill on brand background (CTASection primary button)
	 *   cta-ghost   — white-bordered ghost on brand background (CTASection secondary)
	 */
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		variant?: 'primary' | 'secondary' | 'ghost' | 'cta-primary' | 'cta-ghost';
		size?: 'sm' | 'md' | 'lg';
		href?: string;
		type?: 'button' | 'submit';
		disabled?: boolean;
		class?: ClassValue;
		children: Snippet;
	}

	let {
		variant = 'primary',
		size = 'md',
		href,
		type = 'button',
		disabled = false,
		class: className,
		children
	}: Props = $props();

	const base =
		'rounded-md font-semibold transition-colors duration-200 inline-flex items-center gap-2';

	const variantClasses: Record<NonNullable<Props['variant']>, string> = {
		primary: 'bg-brand text-white hover:bg-brand-dark',
		secondary: 'border border-brand text-brand hover:bg-brand-light',
		ghost: 'text-brand hover:bg-brand-light',
		'cta-primary': 'bg-white text-brand hover:bg-brand-light',
		'cta-ghost': 'border border-white/40 text-white hover:bg-white/10'
	};

	const sizeClasses: Record<NonNullable<Props['size']>, string> = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-3 text-base',
		lg: 'px-8 py-4 text-lg'
	};
</script>

{#if href}
	<a
		{href}
		aria-disabled={disabled || undefined}
		class={[
			base,
			variantClasses[variant],
			sizeClasses[size],
			disabled && 'opacity-50 pointer-events-none',
			className
		]}
	>
		{@render children()}
	</a>
{:else}
	<button
		{type}
		{disabled}
		class={[
			base,
			variantClasses[variant],
			sizeClasses[size],
			'disabled:opacity-50 disabled:cursor-not-allowed',
			className
		]}
	>
		{@render children()}
	</button>
{/if}
