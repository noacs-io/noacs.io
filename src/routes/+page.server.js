import githubFetch from "../lib/githubFetch.js"

/** @type {import('./$types').PageServerLoad} */
export function load() {
  return githubFetch()
}

