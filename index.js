// 3rd party packages
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

//core module
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 8080;
const server = app.listen(port, () => {
    console.log('server is up on port', port)
})

app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.use(bodyParser.json());