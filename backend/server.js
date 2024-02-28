const express = require("express");
const data = require('./data/data');
console.log(data);
const app = express();

app.get('/', (req, res) => {
    res.send("Api is running");
});

app.get('/api/chat/', (req, res) => {
    res.send(data)
})

app.listen(5000, console.log("Server Started at PORT 5000"))