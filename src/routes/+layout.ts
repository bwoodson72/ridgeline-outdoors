// Pre-render every route at build time so the output is a static site.
// Required when using adapter-static or adapter-vercel in static mode.
export const prerender = true;
export const ssr = true;
