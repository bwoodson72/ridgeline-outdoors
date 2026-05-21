<script lang="ts">
	/**
	 * Single-open accordion using <dl>/<dt>/<dd> semantics.
	 *
	 * Answer panels expand and collapse via the CSS grid-rows trick:
	 * transitioning grid-template-rows between '0fr' and '1fr' with an inner
	 * min-h-0 div produces a smooth height animation without any JavaScript
	 * height measurement or max-height hacks.
	 *
	 * The plus icon rotates 45° to become an × when the item is open.
	 */
	import type { FAQItem } from '$lib/content/site';

	interface Props {
		items: FAQItem[];
	}

	let { items }: Props = $props();

	// null means all items closed; a number means that index is open.
	let openIndex = $state<number | null>(null);

	function toggle(i: number) {
		openIndex = openIndex === i ? null : i;
	}
</script>

<dl>
	{#each items as item, i (item.question)}
		<div class="border-b border-border last:border-none">
			<dt>
				<button
					type="button"
					class="flex w-full items-center justify-between py-5 text-left font-semibold text-text-primary transition-colors duration-200 hover:text-brand"
					onclick={() => toggle(i)}
					aria-expanded={openIndex === i}
				>
					<span>{item.question}</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class={[
							'ml-4 shrink-0 transition-transform duration-300',
							openIndex === i && 'rotate-45'
						]}
						aria-hidden="true"
					>
						<path d="M12 5v14M5 12h14" />
					</svg>
				</button>
			</dt>
			<dd
				class="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out"
				style:grid-template-rows={openIndex === i ? '1fr' : '0fr'}
			>
				<div class="min-h-0">
					<p class="pb-5 text-sm leading-normal text-text-secondary">{item.answer}</p>
				</div>
			</dd>
		</div>
	{/each}
</dl>
