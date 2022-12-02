const github = require('@actions/github')
const core = require('@actions/core')

const octokit = github.getOctokit(process.env.GITHUB_TOKEN);

async function getData() {
    const res = await getAllWorkflows();
    console.log(res.workflows[0])
}

getData()

const getAllWorkflows = async () => {
    const res = await octokit.request('GET /repos/{owner}/{repo}/actions/workflows', {
        owner: 'mozilla-mobile',
        repo: 'mozilla-vpn-client'
    })

    return res.data
}