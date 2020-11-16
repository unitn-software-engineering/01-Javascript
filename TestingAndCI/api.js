const express = require('express')
var bodyParser = require('body-parser')

const app = express()
app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));

//this is an environment variable available on Heroku
const PORT = process.env.PORT || 3000

var courses_offered = [{id: 21, name: 'HCI'}, {id: 28, name:'sweng'}]

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/courses', (req, res) => {
   res.json(courses_offered)
})

// In reality we should probably verify the name does not exist already
app.post('/courses', (req, res) => {
    const course_name = req.body.name
    const new_id = course_name.replace(/\s/g, '')
    const new_course =  {id:new_id, name:course_name}
    courses_offered.push(new_course)
    res.status(201)
    res.json(new_course)
    console.log(courses_offered)
})

app.post('/students', (req, res) => {
    const url_parameters = req.query
    console.log(url_parameters)
    res.status(201)
    res.json({status: 'done'})
})


app.put('/courses', (req, res) => {
   // find if a course with that id exists, if so replace it
   // else, add the new one (if the format is correct)
    // reply with the correct status code
})

app.delete('/courses/:courseid', (req, res) => {

    const index = courses_offered.findIndex((item) => {return item.id===req.params.courseid})
    courses_offered.splice(index,1)
    console.log('\ndeleting ',req.params.id)
    console.log('now:',courses_offered)
    res.sendStatus(204) // delete, no content
})


app.listen(PORT, () => console.log('App listening on port ' + PORT) )
