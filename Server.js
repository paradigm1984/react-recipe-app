// server.js - root file

const express = require("express");
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
// const port = process.env.PORT || 5000;
const port = 5000;

require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


app.listen(port, () => {
    console.log(`server is running on port: ${port}`.blue.bold)
});