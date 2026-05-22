<script lang="ts">
	/**
	 * Root layout — wraps every page.
	 *
	 * Injects global <head> meta from siteContent.meta and loads the global
	 * stylesheet. Add any site-wide <head> tags (analytics, fonts, etc.) here.
	 */
	import '../app.css';
	import { siteContent } from '$lib/content/site';
	import favicon from '$lib/assets/favicon.svg';
	import heroImg from '$lib/assets/hero-landscape.avif?enhanced';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<!--
		Preload the hero image so the browser fetches it immediately on first HTML byte,
		rather than waiting to discover it after parsing the rendered <picture> element.
		imagesrcset/imagesizes must match exactly what enhanced:img generates.
	-->
	<link
		rel="preload"
		as="image"
		href={heroImg.img.src}
		imagesrcset={heroImg.sources['avif'] ?? heroImg.sources['webp']}
		imagesizes="100vw"
		fetchpriority="high"
	/>
	<title>{siteContent.meta.title}</title>
	<meta name="description" content={siteContent.meta.description} />
	<meta property="og:title" content={siteContent.meta.ogTitle} />
	<meta property="og:description" content={siteContent.meta.ogDescription} />
	<link rel="canonical" href={siteContent.meta.canonicalUrl} />
	<meta name="robots" content="index, follow" />
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
