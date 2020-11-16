const fetch = require("node-fetch");
const url = process.env.HEROKU || "http://localhost:3000/courses"


it('works with get and post', () => {
    var store=1
    expect.assertions(2);
    return fetch(url)
        .then(r => r.json())
        .then( data => {
            expect(data[0]).toEqual({"id": 21, "name": "HCI"})
             store +=  data[0].id
        } )
        .then(r => {
            console.log(store, r)
        })
        .then(r => {
             return fetch(url, {
                method: 'POST',
                body: JSON.stringify({name: 'hello course'+ store}),
                headers: {
                'Content-Type': 'application/json',
            },
        })})
        .then(r => r.json())
        .then(data => expect(data.id).toEqual("hellocourse"+store) )
        .then(r => console.log(store+10, r))
})


it('works with get', async () => {
    expect.assertions(1)
    var response = await fetch(url)
    expect(response.status).toEqual(200)
})


it('works with post', async () => {
    expect.assertions(1)
    var response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({name: 'hello course'}),
        headers: {
        'Content-Type': 'application/json',
        }
    })
    var json = await response.json()
    expect(response.status).toEqual(201)
})
