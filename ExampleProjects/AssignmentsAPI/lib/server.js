const app = require('./app.js');

const port = 8000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
