import githubFetch from '@functions/githubFetch.ts';

// TMP: This is a temporary workaround for the Carousel component not being able to be rendered on the server. Causing the page to have an incorrect viewport on mobile.
export const ssr = false;

/** @type {import('./$types').PageServerLoad} */
export function load() {
	return githubFetch();
}
