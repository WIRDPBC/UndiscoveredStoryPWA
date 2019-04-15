const config = require('../config').config;
const _firebase = require('firebase');
const collectionNames = require('./collectionName')

if (!_firebase.apps.length)
    _firebase.initializeApp(config)

function updateUserInformation(firstName, lastName, email, paypalEmail) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.paypalEmail = paypalEmail;
}

updateUserInformation.prototype.getFirstName = function () {
    return this.firstName;
}
updateUserInformation.prototype.getLastName = function () {
    return this.lastName;
}
updateUserInformation.prototype.getEmail = function () {
    return this.email;
}
updateUserInformation.prototype.getPaypalEmail = function () {
    return this.paypalEmail;
}

updateUserInformation.prototype.update = function (res) {
    let db = _firebase.firestore();
    let documentID = db.collection(collectionNames.users).where("email", "==", this.getEmail()).get().then(function (querySnapshot) {
        var id;
        querySnapshot.forEach(function (doc) {
            id = doc.id;
        });
        return id;
    }).then(function (data) {
        return data;
    }).catch(function (error) {
        console.log(error);
    });

    documentID.then((resolved) => {
        var data = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            paypalEmail: this.paypalEmail
        }
        db.collection(collectionNames.users).doc(resolved).update(data).then(function () {
            res.send({
                message: 'Information Updated'
            });
        }).catch(function(error){
            res.send({
                message: error
            });
        })
    }, (error) => {
        res.send({
            message: error
        });
    })
}

module.exports = updateUserInformation;