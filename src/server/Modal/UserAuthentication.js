const config = require('../config').config;
const _firebase = require('firebase');
if (!_firebase.apps.length)
    _firebase.initializeApp(config)
let bcrypt = require('bcryptjs');
let secretKey = require('../secretKey');
let walletAPIurl = require('../walletAPI/walletAPIurl');
const axios = require('axios');
let jwt = require('jsonwebtoken');

function UserAuthentication(Email, Authenticate) {
    this.Email = Email || null;
    this.Authenticate = Authenticate;
    this.AuthenticationToken='';
    console.log('inside UserAuthentication');
}

UserAuthentication.prototype.getEmail = function () {
    return this.Email;
}
UserAuthentication.prototype.setUserAuthenticationData = function (querySnapshot) {
    // querySnapshot.docs.forEach(doc => console.log(doc.data().authenticationToken));
    let data = querySnapshot.docs.map(function (item) {
        return item.id;
    });
    this.AuthenticationToken = data;
}

UserAuthentication.prototype.getAuthenticationToken = function () {
    // expires in 24 hours
    // this.AuthenticationToken = jwt.sign({ id: this.getEmail() }, secretKey, { expiresIn: 86400 });
    // return this.AuthenticationToken;

    let db = _firebase.firestore();
    db.collection('users').limit(1).where(`email`, `==`, this.getEmail()).get().then(querySnapshot => {
        this.setUserAuthenticationData(querySnapshot);
    });
}

UserAuthentication.prototype.getAuthToken = function(){
    console.log(this.AuthenticationToken);
    return this.AuthenticationToken;
}


module.exports = UserAuthentication;