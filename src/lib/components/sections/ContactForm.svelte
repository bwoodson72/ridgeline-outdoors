<script lang="ts">
	/**
	 * Contact section — two-column layout with contact detail strips on the left
	 * and a form card on the right.
	 *
	 * Form state machine: idle → submitting → success | error
	 * The submit handler currently simulates a 1.5 s network call with setTimeout.
	 * Replace the try block in handleSubmit with a real API call (e.g. Formspree,
	 * a SvelteKit +server.ts endpoint, or Resend) to wire up actual delivery.
	 *
	 * Validation is client-side only (name ≥ 2 chars, valid email, message ≥ 10 chars).
	 * Always validate server-side in the real submission handler.
	 */
	import { siteContent } from '$lib/content/site';
	import Container from '$lib/components/ui/Container.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	type FormState = 'idle' | 'submitting' | 'success' | 'error';

	const serviceOptions = [...siteContent.services.map((s) => s.title), 'Not sure yet'];
	const { eyebrow, heading, subheading } = siteContent.contactSection;
	const { email: contactEmail, phone, address } = siteContent.contact;

	let formState = $state<FormState>('idle');
	let name = $state('');
	let email = $state('');
	let company = $state('');
	let message = $state('');
	let serviceInterest = $state('');

	interface FormErrors {
		name?: string;
		email?: string;
		message?: string;
	}

	let errors = $state<FormErrors>({});

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	function validate(): boolean {
		const next: FormErrors = {};
		if (!name.trim() || name.trim().length < 2) {
			next.name = 'Please enter your full name (at least 2 characters).';
		}
		if (!email.trim() || !emailRegex.test(email.trim())) {
			next.email = 'Please enter a valid email address.';
		}
		if (!message.trim() || message.trim().length < 10) {
			next.message = 'Please describe your project (at least 10 characters).';
		}
		errors = next;
		return Object.keys(next).length === 0;
	}

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (!validate()) return;
		formState = 'submitting';
		try {
			await new Promise<void>((resolve) => setTimeout(resolve, 1500));
			formState = 'success';
		} catch {
			formState = 'error';
		}
	}

	const inputBase =
		'w-full rounded-md border px-4 py-3 text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand bg-surface transition-colors';
</script>

<section id="contact" class="bg-surface-alt py-section">
	<Container>
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

			<!-- Left: section heading + contact detail strips -->
			<div>
				<SectionHeading {eyebrow} {heading} {subheading} align="left" variant="dark" />

				<address class="mt-10 not-italic">
					<ul class="space-y-5">

						<!-- Email -->
						<li class="flex items-start gap-4">
							<div
								class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand"
								aria-hidden="true"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="18"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									aria-hidden="true"
								>
									<rect width="20" height="16" x="2" y="4" rx="2" />
									<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
								</svg>
							</div>
							<div>
								<p class="text-sm font-medium text-text-tertiary">Email</p>
								<a
									href="mailto:{contactEmail}"
									class="text-sm text-white/80 transition-colors hover:text-white"
								>
									{contactEmail}
								</a>
							</div>
						</li>

						<!-- Phone -->
						{#if phone}
							<li class="flex items-start gap-4">
								<div
									class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand"
									aria-hidden="true"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										aria-hidden="true"
									>
										<path
											d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
										/>
									</svg>
								</div>
								<div>
									<p class="text-sm font-medium text-text-tertiary">Phone</p>
									<a
										href="tel:{phone}"
										class="text-sm text-white/80 transition-colors hover:text-white"
									>
										{phone}
									</a>
								</div>
							</li>
						{/if}

						<!-- Address -->
						{#if address}
							<li class="flex items-start gap-4">
								<div
									class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand"
									aria-hidden="true"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										aria-hidden="true"
									>
										<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
										<circle cx="12" cy="10" r="3" />
									</svg>
								</div>
								<div>
									<p class="text-sm font-medium text-text-tertiary">Office</p>
									<p class="text-sm text-white/80">{address}</p>
								</div>
							</li>
						{/if}

					</ul>
				</address>
			</div>

			<!-- Right: form card -->
			<!-- aria-live so success/error state changes are announced to screen readers -->
			<div class="rounded-xl border border-border bg-surface p-8 shadow-elevated" aria-live="polite">

				{#if formState === 'success'}
					<!-- role="status" implies aria-live="polite" and aria-atomic="true" -->
					<div role="status" class="flex flex-col items-center py-12 text-center">
						<div class="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="40"
								height="40"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="text-green-500"
								aria-hidden="true"
							>
								<path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
							</svg>
						</div>
						<h3 class="mb-3 font-display text-2xl font-bold text-text-primary">
							Thanks! We'll be in touch soon.
						</h3>
						<p class="text-sm leading-relaxed text-text-secondary">
							A Ridgeline designer will reach out within one business day to schedule your
							on-site visit.
						</p>
					</div>

				{:else}

					<!-- Error banner -->
					{#if formState === 'error'}
						<div
							class="mb-6 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-600"
							role="alert"
						>
							Something went wrong. Please try again or email us directly at
							<a href="mailto:{contactEmail}" class="font-medium underline hover:no-underline">
								{contactEmail}
							</a>.
						</div>
					{/if}

					<form
						onsubmit={handleSubmit}
						novalidate
						aria-label="Request a consultation"
						aria-busy={formState === 'submitting'}
						class="space-y-5"
					>
						<p class="text-xs text-text-secondary">
							Fields marked <span aria-hidden="true">*</span><span class="sr-only">with an asterisk</span> are required.
						</p>

						<!-- Name -->
						<div>
							<label for="cf-name" class="mb-1 block text-sm font-medium text-text-primary">
								Full Name <span class="text-red-500" aria-hidden="true">*</span>
							</label>
							<input
								id="cf-name"
								type="text"
								bind:value={name}
								autocomplete="name"
								placeholder="Jane Smith"
								required
								aria-required="true"
								aria-invalid={errors.name ? 'true' : undefined}
								aria-describedby={errors.name ? 'cf-name-error' : undefined}
								class={[inputBase, errors.name ? 'border-red-400' : 'border-border']}
							/>
							{#if errors.name}
								<p id="cf-name-error" class="mt-1 text-xs text-red-500" role="alert">
									{errors.name}
								</p>
							{/if}
						</div>

						<!-- Email -->
						<div>
							<label for="cf-email" class="mb-1 block text-sm font-medium text-text-primary">
								Email Address <span class="text-red-500" aria-hidden="true">*</span>
							</label>
							<input
								id="cf-email"
								type="email"
								bind:value={email}
								autocomplete="email"
								placeholder="jane@example.com"
								required
								aria-required="true"
								aria-invalid={errors.email ? 'true' : undefined}
								aria-describedby={errors.email ? 'cf-email-error' : undefined}
								class={[inputBase, errors.email ? 'border-red-400' : 'border-border']}
							/>
							{#if errors.email}
								<p id="cf-email-error" class="mt-1 text-xs text-red-500" role="alert">
									{errors.email}
								</p>
							{/if}
						</div>

						<!-- Company / Website -->
						<div>
							<label for="cf-company" class="mb-1 block text-sm font-medium text-text-primary">
								Company or Website
							</label>
							<input
								id="cf-company"
								type="text"
								bind:value={company}
								autocomplete="organization"
								placeholder="Acme Corp or acme.com"
								class={[inputBase, 'border-border']}
							/>
						</div>

						<!-- Service interest -->
						<div>
							<label for="cf-service" class="mb-1 block text-sm font-medium text-text-primary">
								Service Interested In
							</label>
							<select
								id="cf-service"
								bind:value={serviceInterest}
								class={[inputBase, 'border-border']}
							>
								<option value="">Select a service (optional)</option>
								{#each serviceOptions as option (option)}
									<option value={option}>{option}</option>
								{/each}
							</select>
						</div>

						<!-- Message -->
						<div>
							<label for="cf-message" class="mb-1 block text-sm font-medium text-text-primary">
								Message <span class="text-red-500" aria-hidden="true">*</span>
							</label>
							<textarea
								id="cf-message"
								bind:value={message}
								rows={5}
								placeholder="Tell us about your landscaping project or goals..."
								required
								aria-required="true"
								aria-invalid={errors.message ? 'true' : undefined}
								aria-describedby={errors.message ? 'cf-message-error' : undefined}
								class={[inputBase, 'resize-y', errors.message ? 'border-red-400' : 'border-border']}
							></textarea>
							{#if errors.message}
								<p id="cf-message-error" class="mt-1 text-xs text-red-500" role="alert">
									{errors.message}
								</p>
							{/if}
						</div>

						<!-- Submit -->
						<Button
							variant="primary"
							size="lg"
							type="submit"
							disabled={formState === 'submitting'}
							class="w-full justify-center"
						>
							{formState === 'submitting' ? 'Sending…' : 'Send Message'}
						</Button>

					</form>
				{/if}

			</div>
		</div>
	</Container>
</section>
