import githubFetch from "../lib/githubFetch.ts"

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
  return githubFetch()
}

