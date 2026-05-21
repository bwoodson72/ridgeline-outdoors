<script lang="ts">
	/**
	 * Landing page assembly — add, remove, or reorder sections here.
	 *
	 * Each section is self-contained and reads its content from siteContent in
	 * src/lib/content/site.ts. To remove a section, delete the import and the
	 * element. To add a section, create a new component in src/lib/components/sections/
	 * and add its import and element in the desired position below.
	 *
	 * Problem and Features are placeholder sections whose data exists in siteContent
	 * but whose components have not been built yet.
	 */
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	// import Problem from '$lib/components/sections/Problem.svelte'; // TODO: not yet built
	// import Features from '$lib/components/sections/Features.svelte'; // TODO: not yet built
	import Services from '$lib/components/sections/Services.svelte';
	import Process from '$lib/components/sections/Process.svelte';
	import Testimonials from '$lib/components/sections/Testimonials.svelte';
	import CTASection from '$lib/components/sections/CTASection.svelte';
	import FAQ from '$lib/components/sections/FAQ.svelte';
	import ContactForm from '$lib/components/sections/ContactForm.svelte';
</script>

<Header />

<main>
	<Hero />
	<!-- <Problem /> -->
	<!-- <Features /> -->
	<Services />
	<Process />
	<Testimonials />
	<CTASection />
	<FAQ />
	<ContactForm />
</main>

<Footer />
