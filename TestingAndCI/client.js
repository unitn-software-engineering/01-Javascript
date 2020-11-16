const fetch = require("node-fetch");
const url = "http://localhost:3000/"

async function get(url) {
    console.log('getting ' + url)
    const response = await fetch(url)
    const json = await response.json()
    console.log(json)
    return json
}

async function postBody(url, body) {
    console.log('posting ' + url, body)
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    console.log(response.status)
    const json = await response.json()
    console.log(json)
    return json
}

async function getCourses() {
    return get(url+'courses')
}

getCourses()