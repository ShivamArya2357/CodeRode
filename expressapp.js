require('dotenv').config();

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/about', (req, res) => {
    res.send('This is about CodeRode!');
})

app.listen(port, () => {
    console.log(`Application is listening on port ${port}`);
})