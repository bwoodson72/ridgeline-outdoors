<script lang="ts">
	/**
	 * Site footer — three-column grid (brand, quick links, contact).
	 * phone and address rows render conditionally based on siteContent.contact.
	 */
	import { siteContent } from '$lib/content/site';
	import Container from '$lib/components/ui/Container.svelte';

	const year = new Date().getFullYear();
</script>

<footer class="bg-neutral-900 text-neutral-400">
	<!-- Main columns -->
	<Container>
		<div class="grid grid-cols-1 gap-12 py-16 md:grid-cols-3">
			<!-- Col 1: Brand -->
			<div>
				<p class="font-display text-xl font-bold text-white">{siteContent.companyName}</p>
				<p class="mt-3 text-sm leading-relaxed">{siteContent.footerTagline}</p>
			</div>

			<!-- Col 2: Quick links -->
			<div>
				<h3 class="text-sm font-semibold uppercase tracking-wider text-neutral-300">
					Quick Links
				</h3>
				<ul class="mt-4 space-y-2">
					{#each siteContent.nav as link (link.href)}
						<li>
							<a
								href={link.href}
								class="text-sm transition-colors duration-200 hover:text-white"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Col 3: Contact -->
			<div>
				<h3 class="text-sm font-semibold uppercase tracking-wider text-neutral-300">Contact</h3>
				<ul class="mt-4 space-y-2 text-sm">
					<li>
						<a
							href="mailto:{siteContent.contact.email}"
							class="transition-colors duration-200 hover:text-white"
						>
							{siteContent.contact.email}
						</a>
					</li>
					{#if siteContent.contact.phone}
						<li>
							<a
								href="tel:{siteContent.contact.phone}"
								class="transition-colors duration-200 hover:text-white"
							>
								{siteContent.contact.phone}
							</a>
						</li>
					{/if}
					{#if siteContent.contact.address}
						<li>{siteContent.contact.address}</li>
					{/if}
				</ul>
			</div>
		</div>
	</Container>

	<!-- Bottom bar -->
	<div class="border-t border-neutral-800">
		<Container>
			<p class="py-6 text-center text-sm">
				&copy; {year}
				{siteContent.companyName}. All rights reserved.
			</p>
		</Container>
	</div>
</footer>
