module.exports = {
    branches: ["main"], // better as an array
    repositoryUrl: "https://github.com/tanya-domi/s3-backend-repo.git",
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/git',
      '@semantic-release/github'
    ]
  }
  
