const github = require('@actions/github')
const core = require('@actions/core')

async function getData() {
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN')
    console.log('Get Data from Github API here token', GITHUB_TOKEN)

    const octokit = github.getOctokit(GITHUB_TOKEN)    

    const res = await octokit.request('GET /repos/{owner}/{repo}/actions/workflows', {
        owner: 'mozilla-mobile',
        repo: 'mozilla-vpn-client'
    })

    console.log(res);
}

getData()