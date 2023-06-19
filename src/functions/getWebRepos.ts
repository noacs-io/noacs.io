import type { OctokitResponse } from '@octokit/types/';

function getWebRepos(githubData: OctokitResponse<any>) {
	const validWebTopics = ['student-project', 'phd-project', 'research-project', 'webpublish'];
	const webRepos = githubData.filter(repo);
}

export default getWebRepos;
