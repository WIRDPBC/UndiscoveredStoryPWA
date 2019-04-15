const config = require('../config').config
const collectionName = require('./collectionName')
let utilities = require('./utilities')
const _firebase = require('firebase')

if (!_firebase.apps.length)
    _firebase.initializeApp(config)


function updatePassword() {

}


/**
 * @requires email
 * @requires password
 * @requires id
 * @requires response object
 */
updatePassword.prototype.updatePassword = function (email, password, id, res) {
    let db = _firebase.firestore();
    let _utilities = new utilities();

    var documentID = _utilities.getDocumentIDbyEmail(email)
        .then(documentID => {
            let docID = documentID.documentID;
            /**
             * Check if the record exists aginst this email
             *Therefore we will get documentID
             */
            if (docID !== undefined) {
                let pw = _utilities.hashPassword(password);
                db.collection(collectionName.users).where("shortID", "==", id).update({
                    password: pw
                }).then(() => {
                    res.send({
                        Message: 'Password Updated'
                    })
                })
            }
        })
    console.log(documentID)

}


module.exports = updatePassword;