const express = require('express');
const res = require('express/lib/response');

const app = express();

app.get('/', (req, res) => {
    return res.send("Hello World");
});

app.listen(3000);