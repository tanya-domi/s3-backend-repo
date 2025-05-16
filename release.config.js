module.exports = {
    branches: ["main"], // better as an array
    repositoryUrl: "https://github.com/your-username/your-repo",
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/git',
      '@semantic-release/github'
    ]
  };
  