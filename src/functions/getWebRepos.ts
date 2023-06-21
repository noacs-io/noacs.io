import type { OctokitResponse } from '@octokit/types/';

function getWebRepos(githubData: OctokitResponse<any>) {
	const validWebTopics = ['student-project', 'phd-project', 'research-project', 'webpublish'];
	// Filter githubData for repos that have a valid web topic
	const webRepos = githubData.filter((repo) => {
		repo.topics.some((topic) => validWebTopics.includes(topic));
		return repo;
	});
	return webRepos;
}

export default getWebRepos;
