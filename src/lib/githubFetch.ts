import { Octokit } from "octokit"
import {GITHUB_OWNER, GITHUB_API_TOKEN} from "$env/static/private"

async function githubFetch (query) {
  const octokit = new Octokit ({
    auth: GITHUB_API_TOKEN
  })

  const response = await octokit.request("GET /orgs/" + GITHUB_OWNER + "/repos", {
    org: GITHUB_OWNER,
     headers: {
       'X-GitHub-Api-Version': '2022-11-28'
     }
  })

  return response
}

export default githubFetch
