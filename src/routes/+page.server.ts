import githubFetch from "../lib/github-fetch.ts"

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
  return githubFetch()
}

