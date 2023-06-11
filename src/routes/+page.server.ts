import githubFetch from '@functions/githubFetch.ts';

/** @type {import('./$types').PageServerLoad} */
export function load() {
	return githubFetch();
}
