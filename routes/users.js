const express = require('express');



const routes = express.Router();


// app.post('');

routes.get('/dummyapi', (req, res) => {
    res.send("dummy api working");
})

module.exports = routes;