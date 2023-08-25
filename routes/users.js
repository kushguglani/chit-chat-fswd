const express = require('express');
const UserModel = require('../models/user')


const routes = express.Router();

// duumy api for testing
routes.get('/dummyapi', (req, res) => {
    res.send("dummy api working");
})


// user login api

routes.get('/login', (req, res) => {
    // validate user req body (username and password);
    console.log(req.body);
    if (!req.body.userName) {
        res.status(400).send("username can not be empty");
    } else if (!req.body.password) {
        res.status(400).send("password can not be empty");
    } else {
        // validate from mongodb
    }
})

routes.post('/signup', (req, res) => {
    // validate user req body (username and password);
    console.log(req.body);
    if (!req.body.name) {
        res.status(400).send("name can not be empty");
    }
    else if (!req.body.userName) {
        res.status(400).send("username can not be empty");
    } else if (!req.body.password) {
        res.status(400).send("password can not be empty");
    } else {
        const newUser = new UserModel({
            name:req.body.name,
            userName:req.body.userName,
            password:req.body.password,
        })
        newUser.save().then(user=>{
            console.log(user);
            res.send(user)
        })
    }
})

module.exports = routes;