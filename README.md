# SvelteKit Landing Page Template

A production-ready, single-page landing page template built with SvelteKit 2, Svelte 5, TypeScript, and Tailwind CSS v4. All content lives in one TypeScript file — swap the placeholder copy and you have a working site.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | SvelteKit 2 (static adapter) |
| UI language | Svelte 5 (runes syntax) |
| Styling | Tailwind CSS v4 (CSS-first `@theme`) |
| Types | TypeScript |
| Fonts | Sora (display) + DM Sans (body) via Google Fonts |

---

## Getting started

### 1. Clone and install

```bash
git clone <repo-url> my-project
cd my-project
npm install
```

### 2. Start the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## Customising the template

### Step 1 — Edit content (`src/lib/content/site.ts`)

This is the **only file most customisations require**. It exports a single `siteContent` object that every section component reads from.

```
companyName      → Header logo, Footer brand column
tagline          → available for use in any custom section
footerTagline    → Footer brand column sub-text
meta             → <title>, meta description, og:title, og:description, canonical URL
nav              → Header and Footer navigation links
hero             → Headline, sub-headline, CTAs, hero image, trust signals
services         → Services section cards (title, description, optional price)
process          → Process timeline steps (number, title, description)
testimonials     → Testimonial cards (quote, name, title, company, optional avatar)
faqs             → FAQ accordion items (question, answer)
cta              → CTA band (heading, subtext, button labels)
contactSection   → Contact section header copy
contact          → Email, phone, address (phone and address are optional)
```

> **String quoting rule:** Use double quotes for any string that contains an apostrophe (e.g. `"We'll be in touch"`). Single-quoted strings with apostrophes will cause a Vite parse error.

#### Optional fields

| Field | Effect when omitted |
|---|---|
| `hero.imageSrc` (empty string) | Shows a branded aspect-ratio placeholder |
| `contact.phone` | Hides phone rows in Footer, CTASection, and ContactForm |
| `contact.address` | Hides the address row in ContactForm |
| `service.price` | Hides the price badge on that service card |
| `testimonial.avatarSrc` | Auto-generates initials from the reviewer's name |

### Step 2 — Change colours and fonts (`src/app.css`)

Design tokens live in the `@theme {}` block. Tailwind v4 converts every token into utility classes automatically — no `tailwind.config.js` needed.

```css
@theme {
  --color-brand: #2563eb;      /* change this to re-brand the entire site */
  --color-brand-dark: #1d4ed8; /* hover/active state */
  --color-brand-light: #eff6ff;/* tinted backgrounds */
  --font-display: "Sora", sans-serif;
  --font-body: "DM Sans", sans-serif;
  /* ... */
}
```

To switch fonts, replace the Google Fonts `@import` URL at the top of `app.css` and update `--font-display` and `--font-body`.

### Step 3 — Add a hero image

1. Place your image in `/static/images/` (e.g. `hero.jpg`).
2. Set `hero.imageSrc` in `site.ts` to `'/images/hero.jpg'`.
3. Update `hero.imageAlt` with a descriptive alt text.

---

## Page structure

Sections are assembled in `src/routes/+page.svelte`. To **remove** a section, delete its import and element. To **reorder** sections, move the elements.

```
Header (sticky)
└── main
    ├── Hero
    ├── Problem        ← data ready, component not yet built
    ├── Features       ← data ready, component not yet built
    ├── Services
    ├── Process
    ├── Testimonials
    ├── CTASection
    ├── FAQ
    └── ContactForm
Footer
```

### Adding a new section

1. Create `src/lib/components/sections/MySection.svelte`.
2. Add the section's content fields to `SiteContent` in `site.ts` and populate them in `siteContent`.
3. Import and place `<MySection />` in `+page.svelte`.

---

## Component reference

### UI primitives (`src/lib/components/ui/`)

| Component | Props | Notes |
|---|---|---|
| `Button` | `variant`, `size`, `href`, `type`, `disabled`, `class` | Renders `<a>` when `href` is set, `<button>` otherwise |
| `Container` | `as`, `class` | Max-width centred wrapper; `as` sets the HTML element |
| `SectionHeading` | `eyebrow`, `heading`, `subheading`, `align`, `class` | Shared section header used by every section |
| `ProcessStep` | `number`, `title`, `description`, `isLast` | Svelte 5 fragment — renders step tile + chevron as sibling elements |
| `TestimonialCard` | `quote`, `name`, `title`, `company`, `avatarSrc` | Shows initials avatar when `avatarSrc` is omitted |
| `FAQAccordion` | `items: FAQItem[]` | Single-open accordion with CSS grid-rows animation |

### Button variants

| Variant | Use case |
|---|---|
| `primary` | Main CTA on light backgrounds |
| `secondary` | Secondary action, outlined |
| `ghost` | Low-emphasis action (service card "Learn More") |
| `cta-primary` | Primary button on the brand-coloured CTA band |
| `cta-ghost` | Secondary button on the brand-coloured CTA band |

---

## Wiring up the contact form

The form currently simulates submission with a 1.5 s `setTimeout`. Replace the `try` block in `handleSubmit` inside `ContactForm.svelte` with a real API call.

### Option A — Formspree (no backend required)

```ts
async function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  if (!validate()) return;
  formState = 'submitting';
  try {
    const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ name, email, company, serviceInterest, message })
    });
    if (!res.ok) throw new Error();
    formState = 'success';
  } catch {
    formState = 'error';
  }
}
```

### Option B — SvelteKit API route

Create `src/routes/api/contact/+server.ts`:

```ts
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
  const body = await request.json();
  // send email via Resend, Nodemailer, etc.
  return json({ ok: true });
};
```

Then call `/api/contact` from `handleSubmit`.

---

## Building and deploying

### Build for static hosting

```bash
npm run build
npm run preview  # verify the build locally
```

The output goes to `build/`. Deploy that folder to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.).

### Vercel (default adapter)

The project is pre-configured with `adapter-vercel`. Push to a GitHub repo, import it in Vercel, and deploy — no configuration needed.

### Switch to a different adapter

Install the adapter you want, then update `svelte.config.js`:

```bash
npm install -D @sveltejs/adapter-netlify
```

```js
// svelte.config.js
import adapter from '@sveltejs/adapter-netlify';
```

---

## Project structure

```
src/
├── app.css                        # design tokens (@theme) + base styles
├── lib/
│   ├── assets/
│   │   └── favicon.svg
│   ├── components/
│   │   ├── Header.svelte          # sticky nav with mobile menu
│   │   ├── Footer.svelte          # three-column footer
│   │   ├── sections/
│   │   │   ├── Hero.svelte
│   │   │   ├── Services.svelte
│   │   │   ├── Process.svelte
│   │   │   ├── Testimonials.svelte
│   │   │   ├── CTASection.svelte
│   │   │   ├── FAQ.svelte
│   │   │   └── ContactForm.svelte
│   │   └── ui/
│   │       ├── Button.svelte
│   │       ├── Container.svelte
│   │       ├── SectionHeading.svelte
│   │       ├── ProcessStep.svelte
│   │       ├── TestimonialCard.svelte
│   │       └── FAQAccordion.svelte
│   └── content/
│       └── site.ts                # ← edit this file to customise the site
└── routes/
    ├── +layout.ts                 # prerender = true, ssr = true
    ├── +layout.svelte             # global <head> meta + stylesheet import
    └── +page.svelte               # section assembly
static/
└── images/                        # put your hero image here
```
