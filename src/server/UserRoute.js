const express = require('express');
const UserRouter = express.Router();
let CreateUser = require('./Modal/UserModal');

let request = require('request');
const axios = require('axios');

UserRouter
    .route('/create')
    .post(function (req, res) {
        let email = req.body.Email;
        let password = req.body.Password;
         CreateUser = new CreateUser(email, password, 'authenticationToken');

        res.sendStatus( CreateUser.signup() );
        // res.sendStatus('Data: ' + CreateUser.getBalance());

    });


module.exports = UserRouter;