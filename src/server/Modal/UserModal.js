/**
 * The code has been rewritten to make it more clear
 * and understandable with comments added
 * Utilizing object methodology to add methods
 */

const config = require('.././config').config;
const _firebase = require('firebase');
if (!_firebase.apps.length)
    _firebase.initializeApp(config)
let bcrypt = require('bcryptjs');
let secretKey = require('../secretKey');
let walletAPIurl = require('../walletAPI/walletAPIurl');
const axios = require('axios');
let jwt = require('jsonwebtoken');
let utilities = require('./utilities');

//Contructor requiring two params to utilize
//them in the methods defined
function CreateUser(Email, Password) {
    this.Email = Email || null;
    this.Password = Password || null;
    this.initialSignupBalance = 88;
}
// Returns the email
CreateUser.prototype.getEmail = function () {
    return this.Email;
}
// Returns the hashed password
CreateUser.prototype.getPassword = function () {
    return this.hashPassword(this.Password);
}
//Salt settings for hashing the password
CreateUser.prototype.setSaltRounds = function (saltRounds) {
    this.saltRounds = saltRounds;
}
//Returns the number of Salts set for the hashing
CreateUser.prototype.getSaltRounds = function () {
    if (this.saltRounds === 'undefined' || this.saltRounds === 0 || this.saltRounds === null) {
        this.saltRounds = 10;
    }
    return this.saltRounds;
}
// Returns the available balance based on the public key passed
// This method can be utilized in the later stages
CreateUser.prototype.getBalance = function (publicKey) {
    return axios.post(walletAPIurl.getBalances, { "publicKey": publicKey })
        .then(response => {
            // returning the data here allows the caller to get it through another .then(...)
            return response.data
        })
}

// Creating wallet based on the email address set
// using the contructor and it is fetched using the getEmail method
CreateUser.prototype.createWallet = function () {
    return axios.post(walletAPIurl.createKeyPair, { "emailId": this.getEmail() })
        .then(response => {
            // returning the data here allows the caller to get it through another .then(...)
            return response.data
        })
}
// Wallet data is assigned to the userSignupData object
CreateUser.prototype.setWallet = function (walletData) {
    this.walletData = walletData;
    this.userSignupData.walletData = JSON.stringify(walletData);
    console.log(`setwallet: ${this.userSignupData.walletData}`);
}
// Returns the wallet with the entire data available
CreateUser.prototype.getWallet = function () {
    console.log('getwallet(): ' + JSON.stringify(this.userSignupData));
}

CreateUser.prototype.setBalance = function (data) {
    this.balance = data;
}
// Hash password is used while getPassword is called
CreateUser.prototype.hashPassword = function (Password) {
    this.saltRounds = this.getSaltRounds();
    var salt = bcrypt.genSaltSync(this.saltRounds);
    var passwordHash = bcrypt.hashSync(Password, salt);
    return passwordHash;
}
// Checks if the password hashed is valid or not
CreateUser.prototype.checkPassword = function (hashedPassword, simplePassword) {
    return bcrypt.compareSync(simplePassword, hashedPassword);

}
// Returns the authentication token using  JWT
CreateUser.prototype.getAuthenticationToken = function () {
    // expires in 24 hours
    this.AuthenticationToken = jwt.sign({ id: this.getEmail() }, secretKey, { expiresIn: 86400 });
    return this.AuthenticationToken;
}

CreateUser.prototype.signup = function (res) {
    //this.getBalance().then(data => { this.setBalance(data); });

    let _utilities = new utilities();
    _utilities.getDocumentIDbyEmail(this.getEmail()).then((resolved) => {
        if (resolved) {
            console.log(resolved);
            res.send({ Message: "User already registered!" });
        }
        else {

            this.userSignupData = {
                authenticationToken: this.getAuthenticationToken(),
                email: this.getEmail(),
                password: this.getPassword(),
                signupDateTime: _firebase.firestore.Timestamp.now(),
                lastLogin: _firebase.firestore.Timestamp.now(),
                walletData: '',
                balance: this.initialSignupBalance
            }
            let db = _firebase.firestore();
            db.collection("users").add(userSignupData).then(() => {
                res.send(this.userLoginData)
            })
        }
    })
}

CreateUser.prototype.login = function (res) {
    this.userLoginData = {
        AuthenticationToken: this.getAuthenticationToken(),
        lastLogin: _firebase.firestore.Timestamp.now(),
        walletData: ''
    }
    let dt = _firebase.firestore();
    let _utilities = new utilities();
    _utilities.getDocumentIDbyEmail(this.getEmail()).then((resolved) => {
        if (resolved.documentID === undefined) {
            res.send({
                Message: 'Unregistered user'
            })
        } else {
            _utilities.getEmailAndPasswordByDocumentID(resolved.documentID)
                .then((resolved) => {
                    let fetchedPassword = resolved.documentID.password;
                    // console.log(`Email:  ${this.getEmail()}`);
                    // console.log(`fetchedEmail:  ${fetchedEmail}`);
                    // console.log(`Password:  ${this.getPassword()}`);
                    // console.log(`fetchedPassword:  ${fetchedPassword}`);
                    // console.log(`password matched:  ${this.checkPassword(fetchedPassword,this.getPassword())}`);
                    let password_ISValid = this.checkPassword(fetchedPassword, this.getPassword());
                    if (!password_ISValid) {
                        res.send({
                            Message: 'Invalid Password'
                        })
                    } else {
                        // updating data and letting user to get in
                        dt.collection('users').doc(resolved.documentID).update(this.userLoginData).then(() => { });
                        dt.collection('users').doc(resolved.documentID).get().then((doc) => {
                            res.send({
                                AuthenticationToken: this.getAuthenticationToken(),
                                lastLogin: _firebase.firestore.Timestamp.now(),
                                firstName: doc.data().firstName,
                                lastName: doc.data().lastName,
                                paypalEmail: doc.data().paypalEmail,
                                email: doc.data().email,
                                walletData: ''
                            })
                        })
                    }
                })
        }
    })
}


module.exports = CreateUser;
