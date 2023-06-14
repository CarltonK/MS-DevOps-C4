const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ hello: 'world' });
});

app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`);
});