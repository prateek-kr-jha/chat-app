const express = require("express");
const data = require('./data/data');
const dotenv = require("dotenv");
// console.log(data);
const app = express();
dotenv.config();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send("Api is running!!!");
});

app.get('/api/chat', (req, res) => {
    res.send(data)
})

app.get('/api/chat/:id', (req, res) => {
    console.log(req.params.id);
    const singleChat = data.find(c => {
        return c._id == req.params.id;
    })

    res.send(singleChat);
})
app.listen(port, console.log(`Server Started at PORT ${port}`))