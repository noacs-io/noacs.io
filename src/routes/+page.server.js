import githubFetch from "../lib/githubFetch.js"

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
  return githubFetch()
}

