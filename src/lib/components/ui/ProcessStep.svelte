<script lang="ts">
	/**
	 * A single process step tile with an optional trailing chevron.
	 *
	 * This component uses Svelte 5's multiple root elements (fragment) pattern:
	 * it renders two sibling elements (the step div + the chevron div) without a
	 * wrapper. This lets Process.svelte manage them as direct flex children so the
	 * chevron sits between tiles rather than inside one.
	 *
	 * isLast suppresses the chevron for the final step.
	 */
	interface Props {
		number: string;
		title: string;
		description: string;
		isLast: boolean;
	}

	let { number, title, description, isLast }: Props = $props();
</script>

<div class="flex flex-1 flex-col items-center px-4 text-center">
	<div
		class="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand font-display text-xl font-bold text-white"
	>
		{number}
	</div>
	<h3 class="mb-2 font-semibold text-text-primary">{title}</h3>
	<p class="max-w-xs text-sm text-text-secondary">{description}</p>
</div>
{#if !isLast}
	<div class="hidden shrink-0 items-center px-2 text-neutral-300 md:flex" aria-hidden="true">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
		</svg>
	</div>
{/if}
