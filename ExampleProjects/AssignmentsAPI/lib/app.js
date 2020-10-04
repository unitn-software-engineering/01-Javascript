const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

/* Moduli per la gestione delle richieste alle API */
const assignments = require('./assignments.js');
const marks = require('./marks.js');
const users = require('./users.js');


app.post('/api/v1/assignments', assignments.postAssignment);
app.get('/api/v1/assignments', assignments.getAssignments);
app.get('/api/v1/assignments/:id', assignments.getAssignment);
app.put('/api/v1/assignments/:id', assignments.putAssignment);
app.delete('/api/v1/assignments/:id', assignments.deleteAssignment);

app.post('/api/v1/marks', marks.postMark);
app.get('/api/v1/marks', marks.getMarks);

app.get('/api/v1/users/:id', users.getUser);
app.post('/api/v1/users', users.postUser);

/* Default 404 handler */
app.use((req, res) => {
    res.status(404);
    res.json({ error: 'Not found' });
});

const db = require('./db');
const people = require('./db/demo-data/people');
people.forEach(person => {
    db.users.insert(person);
});

module.exports = app;
