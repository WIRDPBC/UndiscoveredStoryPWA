// 'use strict'

const config = require('./config').config;
const firebase = require('firebase')
const bcrypt = require('bcryptjs')

class createUser {
    constructor(email, password) {
        this._Email = email;
        this._Password = password;
    }
    getEmail() {
        return this._Email;
    }
    getPassword() {
        return this._Password;
    }
    hashPassword(Password) {
        var salt = bcrypt.genSaltSync(saltRounds);
        var passwordHash = bcrypt.hashSync(Password, salt);
        return passwordHash;
    }
    checkPassword(hashedPassword, simplePassword) {
        return bcrypt.compare(simplePassword, hashedPassword);
    }
    create(params) {

        // let newUserDocId = null;
        //   let db = firebase.firestore();

        //Bigchain DB
        //Once stellar is configured then remove it


        // var transaction = bigchainDBTransaction.creatingTransaction();

        // var token = jwt.sign({ id: params.email }, secretKey.secretKey, { expiresIn: 86400 }); // expires in 24 hours

        // var userData = {
        //     email: params.email,
        //     password: passwordHash,
        //     signupDateTime: firebase.firestore.Timestamp.now(),
        //     authenticationToken: token,
        //     lastLogin: firebase.firestore.Timestamp.now()
        // };

        // var assets = {
        //     privateKey: transaction.privateKey,
        //     publicKey: transaction.publicKey,
        //     email: params.email

        // };
        // db.collection("users").add(userData).then((docID) => {
        //     newUserDocId = docID.id;
        // });
        // if (newUserDocId !== null)
        //     return db.collection("users").doc(newUserDocId).get();
        // else
        //     return "Error occured while fetching info for newly created user";
    }
}

module.exports = {
    createUser
};

