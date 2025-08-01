/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/harrylam174.github.io' : '',
  assetPrefix: isGithubPages ? '/harrylam174.github.io/' : '',
};

module.exports = nextConfig;
