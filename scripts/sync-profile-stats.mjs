import { writeFile } from 'node:fs/promises';

const username = 'khushijain2004M';
const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'khushi-portfolio-build' };

async function getJson(url) {
  const response = await fetch(url, { headers });
  if (!response.ok) throw new Error(`GitHub request failed: ${response.status}`);
  return response.json();
}

try {
  const [profile, repos] = await Promise.all([
    getJson(`https://api.github.com/users/${username}`),
    getJson(`https://api.github.com/users/${username}/repos?per_page=100&type=owner`),
  ]);
  const data = {
    updatedAt: new Date().toISOString(),
    leetcode: { solved: 0, acceptance: 0, submissions: 0, ranking: 0 },
    hackerrank: { topPercent: 0, stars: 0, solved: 0, rank: 0, certificates: [] },
    github: {
      repositories: profile.public_repos ?? repos.length,
      stars: repos.reduce((total, repo) => total + (repo.stargazers_count ?? 0), 0),
      followers: profile.followers ?? 0,
      contributions: [],
    },
  };
  await writeFile(new URL('../src/data/live-stats.json', import.meta.url), `${JSON.stringify(data, null, 2)}\n`);
  console.log(`Synced public GitHub data for @${username}.`);
} catch (error) {
  console.warn(`Keeping the last verified GitHub snapshot: ${error.message}`);
}
