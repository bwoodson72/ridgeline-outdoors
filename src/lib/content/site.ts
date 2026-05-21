/**
 * Site content configuration — the single file to edit when adapting this template.
 *
 * All section components import directly from `siteContent`, so most customisation
 * work is done here rather than in .svelte files. After updating content, adjust
 * design tokens in src/app.css to re-brand colours and typography.
 */

/** A navigation link rendered in the Header and Footer. */
export interface NavLink {
	label: string;
	/** Anchor href, e.g. '#services'. Use a full path for multi-page sites. */
	href: string;
}

/** Content for the two-column hero section at the top of the page. */
export interface HeroContent {
	/** Small badge displayed above the headline. */
	eyebrow: string;
	headline: string;
	subheadline: string;
	primaryCTA: string;
	secondaryCTA: string;
	primaryCTAHref: string;
	secondaryCTAHref: string;
	/**
	 * Path to the hero image relative to /static (e.g. '/images/hero.jpg').
	 * Set to an empty string to show the branded placeholder instead.
	 */
	imageSrc: string;
	imageAlt: string;
	/** Short phrases shown below the CTAs with a checkmark icon. */
	trustSignals: string[];
}

/**
 * Content for the Problem agitation section.
 * The Problem.svelte component is not yet built — data is ready when you are.
 */
export interface ProblemContent {
	heading: string;
	subheading: string;
	/** Bullet-point pain items displayed as a list. */
	points: string[];
}

/**
 * An icon feature card for the Features grid.
 * The Features.svelte component is not yet built — data is ready when you are.
 */
export interface FeatureCard {
	/** Icon identifier — wire this to your icon library in Features.svelte. */
	icon: string;
	title: string;
	description: string;
}

/** A service offering shown in the Services section grid. */
export interface ServiceCard {
	title: string;
	description: string;
	/** Displayed as a price badge (e.g. 'From $350'). Omit to hide the badge entirely. */
	price?: string;
}

/** A single step in the horizontal Process timeline. */
export interface ProcessStep {
	/** Zero-padded display number shown in the circle, e.g. '01'. */
	number: string;
	title: string;
	description: string;
}

/** A customer testimonial shown in the Testimonials section. */
export interface TestimonialCard {
	quote: string;
	name: string;
	/** Job title or role (e.g. 'Homeowner', 'Property Manager'). */
	title: string;
	/** Company name or location shown beside the title. */
	company: string;
	/** URL to an avatar photo. Omit to auto-generate initials from name. */
	avatarSrc?: string;
}

/** A single FAQ entry rendered in the accordion. */
export interface FAQItem {
	question: string;
	answer: string;
}

/** Contact information shown in the Footer and Contact section. */
export interface ContactDetails {
	email: string;
	/** Omit to hide phone rows in the Footer, CTASection, and ContactForm. */
	phone?: string;
	/** Omit to hide the address row in the ContactForm. */
	address?: string;
}

/** Page-level SEO and Open Graph metadata injected via +layout.svelte. */
export interface MetaContent {
	/** Browser tab title and primary SEO signal. Keep under 60 characters. */
	title: string;
	/** Meta description shown in search results. Keep under 160 characters. */
	description: string;
	/** og:title for social sharing cards. Can differ from title. */
	ogTitle: string;
	/** og:description for social sharing cards. */
	ogDescription: string;
	/** Canonical URL — must be the full absolute URL of the production site. */
	canonicalUrl: string;
}

/**
 * Shared header fields used by every section — passed directly to SectionHeading.
 * eyebrow is the small all-caps label above the h2.
 */
export interface SectionMeta {
	eyebrow: string;
	heading: string;
	subheading: string;
}

/** Content for the full-width CTA band (bg-brand section above the FAQ). */
export interface CtaContent {
	heading: string;
	subtext: string;
	/** Primary button label — links to #contact. */
	primaryCTA: string;
	/** Secondary button label — links to tel:{contact.phone} when phone is set. */
	secondaryCTA: string;
}

/**
 * Root content object — the single source of truth for the entire landing page.
 *
 * Each *Section property holds the eyebrow/heading/subheading for that section header.
 * Each array property (services, process, testimonials, faqs) drives the rendered cards.
 */
export interface SiteContent {
	/** Displayed in the Header logo and Footer brand column. */
	companyName: string;
	/** Short brand tagline — currently unused but available for custom use. */
	tagline: string;
	/** Longer tagline shown in the Footer brand column below the company name. */
	footerTagline: string;
	meta: MetaContent;
	/** Navigation links rendered in both the desktop nav and mobile menu. */
	nav: NavLink[];
	hero: HeroContent;
	problem: ProblemContent;
	features: FeatureCard[];
	servicesSection: SectionMeta;
	services: ServiceCard[];
	processSection: SectionMeta;
	process: ProcessStep[];
	testimonialsSection: SectionMeta;
	testimonials: TestimonialCard[];
	faqSection: SectionMeta;
	faqs: FAQItem[];
	cta: CtaContent;
	contactSection: SectionMeta;
	contact: ContactDetails;
}

export const siteContent: SiteContent = {
	companyName: 'Summit Roofing Co.',
	tagline: 'Built to Last. Backed by Us.',
	footerTagline:
		'Serving the Denver metro since 2009. Licensed, insured, and committed to doing the job right the first time.',

	meta: {
		title: 'Summit Roofing Co. | Denver Roofing & Repair',
		description:
			'Expert residential and commercial roofing in the Denver metro. Free estimates, 10-year workmanship warranty, fully licensed and insured. Call (720) 555-0184.',
		ogTitle: 'Summit Roofing Co. — Built to Last. Backed by Us.',
		ogDescription:
			"Denver's most trusted roofing contractor. Roof replacement, repair, storm damage inspections, and gutters. Transparent pricing, no surprises.",
		canonicalUrl: 'https://www.summitroofingco.com'
	},

	nav: [
		{ label: 'Services', href: '#services' },
		{ label: 'How It Works', href: '#process' },
		{ label: 'Reviews', href: '#testimonials' },
		{ label: 'FAQ', href: '#faq' },
		{ label: 'Contact', href: '#contact' }
	],

	hero: {
		eyebrow: "Denver's #1 Rated Roofing Company",
		headline: "The Last Roof You'll Ever Have to Worry About",
		subheadline:
			'Summit Roofing Co. delivers expert residential and commercial roofing across the Denver metro — backed by a 10-year workmanship warranty and a crew that shows up when they say they will.',
		primaryCTA: 'Get a Free Estimate',
		primaryCTAHref: '#contact',
		secondaryCTA: 'See Our Work',
		secondaryCTAHref: '#services',
		imageSrc: '/images/hero-roof.jpg',
		imageAlt: 'Summit Roofing crew installing shingles on a suburban home in Denver',
		trustSignals: ['Licensed & Insured', 'Free Estimates', '5-Star Rated']
	},

	problem: {
		heading: 'Most Roofing Companies Leave You Guessing',
		subheading:
			"A leaking roof is stressful enough without chasing down contractors who ghost you mid-job. Here's what homeowners tell us they've dealt with before finding Summit:",
		points: [
			'Quotes that balloon 30–40% once work begins',
			'Crews that disappear for days mid-project with no update',
			'Repairs that fail before the next storm season',
			'Zero documentation — no permits, no warranty paperwork'
		]
	},

	features: [
		{
			icon: 'shield-check',
			title: '10-Year Workmanship Warranty',
			description:
				'Every roof we install is covered for a full decade. If something goes wrong due to our work, we fix it — no arguments, no fine print.'
		},
		{
			icon: 'clock',
			title: 'On-Time, Every Time',
			description:
				'We text you the morning of your appointment and show up in the agreed window. Your time matters as much as the job itself.'
		},
		{
			icon: 'document-check',
			title: 'Fully Licensed & Insured',
			description:
				'Summit holds a Colorado Class A contractor license and carries $2M general liability. We pull every required permit so your insurance claim stays clean.'
		},
		{
			icon: 'currency-dollar',
			title: 'Transparent, Itemized Quotes',
			description:
				"You'll receive a line-by-line estimate before any work begins. No surprise fees, no material markups hidden in labor rates."
		}
	],

	servicesSection: {
		eyebrow: 'What We Offer',
		heading: 'Roofing Services for Every Need',
		subheading:
			'From a single storm-damaged shingle to a full commercial replacement, Summit handles it all — with the same transparency and craftsmanship on every job.'
	},

	services: [
		{
			title: 'Full Roof Replacement',
			description:
				'Complete tear-off and installation of asphalt, metal, or tile roofing systems. Includes decking inspection, ice & water shield, and ridge ventilation.',
			price: 'From $8,500'
		},
		{
			title: 'Roof Repair',
			description:
				'Targeted fixes for leaks, missing shingles, flashing failures, and storm damage. Most repairs completed same week, often same day.',
			price: 'From $350'
		},
		{
			title: 'Storm Damage Inspection',
			description:
				'Free post-storm assessment with a written damage report suitable for insurance submission. We work directly with all major carriers.',
			price: 'Free'
		},
		{
			title: 'Gutter Installation & Replacement',
			description:
				'Seamless aluminum gutters in 20+ colors, with optional leaf-guard systems. Properly pitched and fastened to protect your foundation.',
			price: 'From $1,200'
		}
	],

	processSection: {
		eyebrow: 'How It Works',
		heading: 'From First Call to Final Warranty',
		subheading:
			'Four steps is all it takes. No chasing us down for updates, no surprise charges, no unfinished job sites.'
	},

	process: [
		{
			number: '01',
			title: 'Schedule a Free Inspection',
			description:
				'Book online or call us. A Summit estimator visits your property within 48 hours, assesses the roof from ridge to drip edge, and photographs any damage.'
		},
		{
			number: '02',
			title: 'Review Your Itemized Quote',
			description:
				'You receive a detailed written estimate within 24 hours of inspection — materials, labor, permit fees, and timeline all broken out. No pressure to sign that day.'
		},
		{
			number: '03',
			title: 'We Handle Permits & Scheduling',
			description:
				"Once you approve the quote, we pull the permit, order materials, and lock in a start date. You'll get a confirmation text the evening before work begins."
		},
		{
			number: '04',
			title: 'Expert Installation & Final Walkthrough',
			description:
				'Our crew completes the job to code, cleans the site with magnetic nail sweeps, and walks you through the finished work before we leave. Warranty docs in hand.'
		}
	],

	testimonialsSection: {
		eyebrow: 'Customer Reviews',
		heading: 'What Denver Homeowners Are Saying',
		subheading:
			"Over 400 five-star reviews and counting. Here's what a few of our customers had to say about working with Summit."
	},

	testimonials: [
		{
			quote:
				"Summit replaced our roof after the September hail storm. From inspection to final walkthrough it was 11 days. Every other contractor I called either didn't show up or gave me a verbal quote. These guys had paperwork for everything.",
			name: 'Diane Kowalski',
			title: 'Homeowner',
			company: 'Littleton, CO'
		},
		{
			quote:
				"I manage four commercial properties in the metro and Summit is the only roofing crew I trust. They're the rare contractor that actually communicates — I always know what's happening and what it costs.",
			name: 'Marcus Webb',
			title: 'Property Manager',
			company: 'Webb Property Group'
		},
		{
			quote:
				'After two failed repairs from another company, Summit found the real source of our leak in 20 minutes. Fixed the same afternoon. The 10-year warranty gave us real peace of mind.',
			name: 'Priya Anand',
			title: 'Homeowner',
			company: 'Aurora, CO'
		},
		{
			quote:
				"Honest pricing, clean job site, and they even re-seeded the small patch of lawn their ladder damaged without us asking. That's the kind of company you recommend to everyone you know.",
			name: 'Tom Richter',
			title: 'Homeowner',
			company: 'Castle Rock, CO'
		}
	],

	faqSection: {
		eyebrow: 'Got Questions?',
		heading: 'Frequently Asked Questions',
		subheading:
			"Everything you need to know before hiring a roofing contractor. Don't see your answer? Give us a call."
	},

	faqs: [
		{
			question: 'How long does a full roof replacement take?',
			answer:
				"Most residential replacements are completed in one to two days depending on size and complexity. We'll give you a specific timeline in your written quote. We don't leave a job unfinished overnight unless weather forces it, and we always secure the site before leaving."
		},
		{
			question: "Will my homeowner's insurance cover the replacement?",
			answer:
				"If the damage was caused by a covered event like hail or wind, there's a strong chance your policy covers most of the cost minus your deductible. We provide a detailed damage report and can join the call with your adjuster if that helps. We never inflate claims — that's insurance fraud and it's not how we operate."
		},
		{
			question: 'Do you offer financing?',
			answer:
				'Yes. We partner with GreenSky to offer 12-month same-as-cash and longer-term financing options. Apply during your estimate appointment — most approvals take under five minutes.'
		},
		{
			question: 'What roofing materials do you carry?',
			answer:
				"We install GAF and Owens Corning architectural shingles, standing-seam and corrugated metal, and concrete or clay tile. We'll recommend the best fit for your roof pitch, climate exposure, and budget during the inspection."
		}
	],

	cta: {
		heading: "Ready for a Roof You Can Count On?",
		subtext:
			"Join 400+ Denver homeowners who chose Summit for quality, transparency, and craftsmanship that lasts.",
		primaryCTA: 'Get Your Free Estimate',
		secondaryCTA: 'Call (720) 555-0184'
	},

	contactSection: {
		eyebrow: 'Get in Touch',
		heading: 'Request Your Free Estimate',
		subheading:
			'Fill out the form and a Summit estimator will reach out within one business day to schedule your inspection.'
	},

	contact: {
		email: 'hello@summitroofingco.com',
		phone: '(720) 555-0184',
		address: '4820 Sheridan Blvd, Denver, CO 80212'
	}
};
