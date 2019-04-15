const config = require('.././config').config;
const utilities = require('./utilities');
const _firebase = require('firebase');
const messages = require('./messages');
const collectionName = require('../Modal/collectionName');
const Type = "advertisementType";

if (!_firebase.apps.length)
    _firebase.initializeApp(config)
function advertisement() {
}

advertisement.prototype.loadAdvertismentDescription = function (res) {
    let db = _firebase.firestore();
    db.collection(collectionName.advertisement).get().then(doc => {
        let data = [];
        doc.forEach(docs => {
            data.push({
                advertisementDescription: docs.data().advertisementDescription,
                advertisementType: docs.data().advertisementType
            })
        })
        res.send(data)
    })
}


/**
 * Adds a new comment in the advertisement section
 * @requires comment
 * @requires email
 * @requires advertisementType
 */
advertisement.prototype.addComment = function (comment, email, advertisementType, res) {
    let _utilities = new utilities();
    let db = _firebase.firestore();
    db.collection("users").where("email", "==", email).get().then(
        (querySnapshot) => {
            let array = [];
            querySnapshot.forEach(element => {

                array.push(element.data().firstName)
            })
            let metaData = {
                comment: comment,
                commentedBy_Email: email,
                advertisementType: advertisementType,
                firstName: array[0]
            }
            _utilities.addRecord(collectionName.advertisementComment, metaData).then(id => {
                res.send({
                    Message: messages.Advertisement.DESCRIPTION_ADDED
                })
            })
        })
}

/**
 * Returs the entire comments which are present in the database
 * @requires advertisementType
 * @requires result object
 */
advertisement.prototype.getAllComments = function (advertisementType, res) {
    let db = _firebase.firestore();
    db.collection(collectionName.advertisementComment)
        .where(Type, "==", advertisementType)
        .get()
        .then(doc => {
            let data = [];
            doc.forEach(docID => {
                let metaData = {
                    comment: docID.data().comment,
                    commentedBy_Email: docID.data().commentedBy_Email,
                    advertisementType: docID.data().advertisementType,
                    firstName: docID.data().firstName
                }
                data.push(metaData);
            })
            res.send({
                data: data
            })
        });
}

module.exports = advertisement;