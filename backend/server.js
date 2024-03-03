const express = require("express");
const data = require('./data/data');
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require('colors');
const userRoutes = require("./routes/userRoutes");
// console.log(data);
const app = express();
dotenv.config();
connectDB();

const port = process.env.PORT || 4000;
app.use(express.json()); // to accept JSON data
app.get('/', (req, res) => {
    res.send("Api is running!!!");
});

app.use('/api/user', userRoutes);

app.listen(port, console.log(`Server Started at PORT ${port}`.yellow.bold))