import { Octokit } from "octokit"
import {GITHUB_OWNER, GITHUB_API_TOKEN} from "$env/static/private"

async function githubFetch (query) {
  const octocit = new Octokit ({
    auth: GITHUB_API_TOKEN
  })

  await octokit.request("GET /repos")
}
