import githubFetch from "@functions/githubFetch.js"

/** @type {import('./$types').PageServerLoad} */
export function load() {
  return githubFetch()
}

