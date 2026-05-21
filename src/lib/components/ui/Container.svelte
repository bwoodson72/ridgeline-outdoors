<script lang="ts">
	/**
	 * Centred max-width wrapper used by every section.
	 *
	 * The `as` prop lets callers emit a semantically correct element
	 * (e.g. as="section", as="article") without needing a wrapper div.
	 * Defaults to "div" for layout-only usage.
	 */
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		as?: string;
		class?: ClassValue;
		children: Snippet;
	}

	let { as = 'div', class: className, children }: Props = $props();
</script>

<svelte:element this={as} class={['mx-auto w-full max-w-6xl px-6', className]}>
	{@render children()}
</svelte:element>
