let config = require('.././config');
let firebase = require('firebase');
let bcrypt = require('bcryptjs');
let secretKey = require('../secretKey');
let walletAPIurl = require('../walletAPI/walletAPIurl');
const axios = require('axios');
let jwt = require('jsonwebtoken');

function CreateUser(Email, Password, AuthenticationToken) {
    this.Email = Email || null;
    this.Password = Password || null;

}
CreateUser.prototype.getEmail = function () {
    return this.Email;
}
CreateUser.prototype.getPassword = function () {
    return this.hashPassword(this.Password);
}
CreateUser.prototype.setSaltRounds = function (saltRounds) {
    this.saltRounds = saltRounds;
}
CreateUser.prototype.getSaltRounds = function () {
    if (this.saltRounds === 'undefined' || this.saltRounds === 0 || this.saltRounds === null) {
        this.saltRounds = 10;
    }
    return this.saltRounds;
}
CreateUser.prototype.getBalance = function () {
    return axios.post(walletAPIurl.getBalances, { "publicKey": "GAOQN3HOSGW6WCTZUPSQX4IN3HU25OYLF6XOYUNUD75T52K3KHWWLFSB" })
        .then(response => {
            // returning the data here allows the caller to get it through another .then(...)
            return response.data
        })
}

CreateUser.prototype.createWallet = function () {
    return axios.post(walletAPIurl.createKeyPair, { "emailId": this.getEmail() })
        .then(response => {
            // returning the data here allows the caller to get it through another .then(...)
            return response.data
        })
}
CreateUser.prototype.setWallet = function (walletData) {
    this.walletData = walletData;
}

CreateUser.prototype.getWallet = function () {
    return this.walletData;
}


CreateUser.prototype.setBalance = function (data) {
    this.balance = data;
}

CreateUser.prototype.hashPassword = function (Password) {
    this.saltRounds = this.getSaltRounds();
    var salt = bcrypt.genSaltSync(this.saltRounds);
    var passwordHash = bcrypt.hashSync(Password, salt);
    return passwordHash;
}
CreateUser.prototype.checkPassword = function (hashedPassword, simplePassword) {
    return bcrypt.compare(simplePassword, hashedPassword);
}

CreateUser.prototype.getAuthenticationToken = function () {
    // expires in 24 hours
    this.AuthenticationToken = jwt.sign({ id: this.getEmail() }, secretKey, { expiresIn: 86400 });
    return this.AuthenticationToken;
}

CreateUser.prototype.setValue = function (value) {
    console.log(value);
}
CreateUser.prototype.signup = function () {
    //this.getBalance().then(data => { this.setBalance(data); });
    if (!firebase.apps.length)
        firebase.initializeApp({
            apiKey: "AIzaSyCKfSefhgtukqGPZAslH3-GYovrXNTVtYY",
            authDomain: "udgt-7790b.firebaseapp.com",
            databaseURL: "https://udgt-7790b.firebaseio.com",
            projectId: "udgt-7790b",
            storageBucket: "udgt-7790b.appspot.com",
            messagingSenderId: "386121684282"
        });
    let userData = {
        AuthenticationToken: this.getAuthenticationToken(),
        email: this.getEmail(),
        password: this.getPassword(),
        signupDateTime: firebase.firestore.Timestamp.now(),
        lastLogin: firebase.firestore.Timestamp.now()
    }
    let db = firebase.firestore();
    db.collection("users").add(userData);
    this.createWallet.then(data => {
        this.setWallet(data);
    });
    userData.wallet = this.walletData;
    return userData;
}

module.exports = CreateUser;