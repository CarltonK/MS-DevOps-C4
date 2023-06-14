const express = require('express');

const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.status(200).send({ 'hello': 'world' })
})

app.listen(PORT, () => {
    console.log('Server is running');
});