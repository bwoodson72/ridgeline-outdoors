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
	/** Path to the card image relative to /static (e.g. '/images/services/lawn-care.avif'). Omit to show a branded gradient placeholder. */
	imageSrc?: string;
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
	companyName: 'Ridgeline Outdoor Co.',
	tagline: 'Rooted in Quality. Grown for You.',
	footerTagline:
		'Serving the Denver metro since 2011. Licensed, insured, and passionate about turning ordinary yards into extraordinary outdoor spaces.',

	meta: {
		title: 'Ridgeline Outdoor Co. | Denver Landscaping & Design',
		description:
			'Expert landscaping, hardscaping, and lawn care in the Denver metro. Free consultations, 2-year installation warranty, fully licensed and insured. Call (720) 555-0184.',
		ogTitle: 'Ridgeline Outdoor Co. — Rooted in Quality. Grown for You.',
		ogDescription:
			"Denver's most trusted landscaping company. Lawn care, landscape design, patios, irrigation, and seasonal cleanup. Transparent pricing, no surprises.",
		canonicalUrl: 'https://www.ridgelineoutdoor.com'
	},

	nav: [
		{ label: 'Services', href: '#services' },
		{ label: 'How It Works', href: '#process' },
		{ label: 'Reviews', href: '#testimonials' },
		{ label: 'FAQ', href: '#faq' },
		{ label: 'Contact', href: '#contact' }
	],

	hero: {
		eyebrow: "Denver's #1 Rated Landscaping Company",
		headline: 'The Outdoor Space You\'ve Always Imagined',
		subheadline:
			'Ridgeline Outdoor Co. designs, builds, and maintains stunning landscapes across the Denver metro — backed by a 2-year installation warranty and a crew that shows up when they say they will.',
		primaryCTA: 'Get a Free Consultation',
		primaryCTAHref: '#contact',
		secondaryCTA: 'See Our Services',
		secondaryCTAHref: '#services',
		imageSrc: '/images/hero-landscape.avif',
		imageAlt: 'Ridgeline crew installing a stone patio and garden beds at a Denver home',
		trustSignals: ['Licensed & Insured', 'Free Consultations', '5-Star Rated']
	},

	problem: {
		heading: 'Most Landscapers Leave Your Yard Half-Finished',
		subheading:
			"A neglected yard is frustrating enough without chasing down contractors who vanish mid-project. Here's what homeowners tell us they experienced before finding Ridgeline:",
		points: [
			'Estimates that double once the crew shows up',
			'Projects dragging on for weeks with no communication',
			'Plants that die within a season due to poor installation',
			'No irrigation plan — just guesswork left to you'
		]
	},

	features: [
		{
			icon: 'shield-check',
			title: '2-Year Installation Warranty',
			description:
				'Every landscape we install is covered for two full years. If plantings fail or hardscaping shifts due to our work, we make it right — no arguments, no fine print.'
		},
		{
			icon: 'clock',
			title: 'On-Time, Every Time',
			description:
				'We text you the morning of your appointment and arrive in the agreed window. Your schedule matters as much as the job itself.'
		},
		{
			icon: 'document-check',
			title: 'Fully Licensed & Insured',
			description:
				'Ridgeline holds a Colorado landscape contractor license and carries $2M general liability. Every project is done to code so your property stays protected.'
		},
		{
			icon: 'currency-dollar',
			title: 'Transparent, Itemized Quotes',
			description:
				"You'll receive a line-by-line estimate before any work begins — plants, materials, labor, and timeline all broken out. No surprise fees."
		}
	],

	servicesSection: {
		eyebrow: 'What We Offer',
		heading: 'Landscaping Services for Every Need',
		subheading:
			'From routine lawn care to a full backyard transformation, Ridgeline handles it all — with the same care and craftsmanship on every job.'
	},

	services: [
		{
			title: 'Landscape Design & Installation',
			description:
				'Custom planting plans, garden beds, trees, shrubs, and seasonal color. Designed for your climate, soil, and lifestyle — installed with a 2-year warranty.',
			price: 'From $2,500',
			imageSrc: '/images/services/landscape-design.avif'
		},
		{
			title: 'Hardscaping',
			description:
				'Patios, walkways, retaining walls, and fire pit surrounds built with natural stone, pavers, or brick. Structures that last decades and add real property value.',
			price: 'From $4,000',
			imageSrc: '/images/services/hardscaping.avif'
		},
		{
			title: 'Lawn Care & Maintenance',
			description:
				'Weekly or bi-weekly mowing, edging, and blowing plus seasonal fertilization, aeration, and overseeding. Consistent crews all season long.',
			price: 'From $65/visit',
			imageSrc: '/images/services/lawn-care.avif'
		},
		{
			title: 'Irrigation & Sprinkler Systems',
			description:
				'Smart drip and spray irrigation designed around your specific plantings. Installation, seasonal startup, winterization, and repairs for any brand.',
			price: 'From $1,800',
			imageSrc: '/images/services/irrigation.avif'
		},
		{
			title: 'Seasonal Cleanup & Mulching',
			description:
				'Spring and fall cleanups including leaf removal, bed edging, fresh mulch, and debris haul-away. We leave your yard looking sharp every season.',
			price: 'From $250',
			imageSrc: '/images/services/seasonal-cleanup.avif'
		},
		{
			title: 'Tree & Shrub Care',
			description:
				'Professional pruning, shaping, and health assessments for established trees and shrubs. Proper cuts at the right time of year for long-term structure.',
			price: 'From $150',
			imageSrc: '/images/services/tree-care.avif'
		}
	],

	processSection: {
		eyebrow: 'How It Works',
		heading: 'From First Call to Finished Yard',
		subheading:
			'Four straightforward steps. No chasing us down for updates, no surprise charges, no unfinished projects.'
	},

	process: [
		{
			number: '01',
			title: 'Schedule a Free Consultation',
			description:
				'Book online or call us. A Ridgeline designer visits your property within 48 hours, walks the space with you, and listens to how you want to use your yard.'
		},
		{
			number: '02',
			title: 'Review Your Design & Quote',
			description:
				'You receive a detailed written estimate within 24 hours — plant selections, materials, labor, and a project timeline all broken out. No pressure to sign that day.'
		},
		{
			number: '03',
			title: 'We Handle Sourcing & Scheduling',
			description:
				"Once you approve, we source materials, schedule the crew, and lock in your start date. You'll get a confirmation text the evening before work begins."
		},
		{
			number: '04',
			title: 'Installation & Final Walkthrough',
			description:
				"Our crew completes the project, cleans the site completely, and walks you through the finished work — including care instructions for new plantings. Warranty docs in hand."
		}
	],

	testimonialsSection: {
		eyebrow: 'Customer Reviews',
		heading: 'What Denver Homeowners Are Saying',
		subheading:
			"Over 500 five-star reviews and counting. Here's what a few of our customers had to say about working with Ridgeline."
	},

	testimonials: [
		{
			quote:
				"Ridgeline completely transformed our backyard — new patio, garden beds, and a drip system. From first meeting to final walkthrough it was three weeks. Every other landscaper I called never followed up. These guys had a design ready in 24 hours.",
			name: 'Diane Kowalski',
			title: 'Homeowner',
			company: 'Littleton, CO'
		},
		{
			quote:
				"I manage several rental properties and Ridgeline handles all of them. They're the rare contractor that actually communicates — I always know what's being done and what it costs. Curb appeal has noticeably improved across the board.",
			name: 'Marcus Webb',
			title: 'Property Manager',
			company: 'Webb Property Group'
		},
		{
			quote:
				'After two other companies planted shrubs that died within a season, Ridgeline came in, assessed our soil and drainage, and replanted everything correctly. Two years later it all looks incredible.',
			name: 'Priya Anand',
			title: 'Homeowner',
			company: 'Aurora, CO'
		},
		{
			quote:
				"Honest pricing, immaculate cleanup, and they noticed our sprinkler head was damaged and fixed it without charging extra. That's the kind of company you recommend to everyone on the block.",
			name: 'Tom Richter',
			title: 'Homeowner',
			company: 'Castle Rock, CO'
		}
	],

	faqSection: {
		eyebrow: 'Got Questions?',
		heading: 'Frequently Asked Questions',
		subheading:
			"Everything you need to know before hiring a landscaping company. Don't see your answer? Give us a call."
	},

	faqs: [
		{
			question: 'How long does a landscape installation project take?',
			answer:
				"It depends on scope. A garden bed refresh can be done in a day. A full backyard design with hardscaping and irrigation typically runs one to three weeks. We'll give you a specific timeline in your written quote and keep you updated at every stage."
		},
		{
			question: 'What happens if my plants die after installation?',
			answer:
				"All plantings are covered under our 2-year installation warranty. If a plant fails due to our selection or installation — not neglect or drought — we replace it at no charge. We'll also walk you through proper watering and care at the final walkthrough."
		},
		{
			question: 'Do you offer maintenance plans after a design project?',
			answer:
				'Yes. Most of our design clients move onto a weekly or bi-weekly maintenance plan after installation. It keeps everything looking its best and gives you one reliable crew that already knows your yard.'
		},
		{
			question: 'Can you work with my existing irrigation system?',
			answer:
				"Absolutely. We service and repair all major brands, and we can integrate new zones into an existing system. During the consultation we'll assess what you have and recommend what makes sense — upgrade only where it's needed."
		}
	],

	cta: {
		heading: 'Ready for a Yard You Actually Love?',
		subtext:
			'Join 500+ Denver homeowners who chose Ridgeline for design, craftsmanship, and outdoor spaces built to last.',
		primaryCTA: 'Get Your Free Consultation',
		secondaryCTA: 'Call (720) 555-0184'
	},

	contactSection: {
		eyebrow: 'Get in Touch',
		heading: 'Request Your Free Consultation',
		subheading:
			'Fill out the form and a Ridgeline designer will reach out within one business day to schedule your on-site visit.'
	},

	contact: {
		email: 'hello@ridgelineoutdoor.com',
		phone: '(720) 555-0184',
		address: '4820 Sheridan Blvd, Denver, CO 80212'
	}
};
