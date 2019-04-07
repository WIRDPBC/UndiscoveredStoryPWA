const config = require('.././config').config;
const utilities = require('./utilities');
const _firebase = require('firebase');
const messages = require('./messages');
if (!_firebase.apps.length)
    _firebase.initializeApp(config)
function advertisement() {
}

advertisement.prototype.loadAdvertismentDescription = function (collectionName, metaDataString) {
    let _utilities = new utilities();
    _utilities.addRecord(collectionName, metaDataString).then((documentID) => {
        res.send({ Message: messages.Advertisement.DESCRIPTION_ADDED })
    });
}

advertisement.prototype.addComment = function (authenticationToken, advertisementType, comment, res) {
    let _utilities = new utilities();
    this.getDocumentID(authenticationToken, _utilities).then((resolved) => {
        console.log(`resolved:${resolved}`)
    })
    // _utilities.getEmailAndPasswordByDocumentID(documentID).then((result) => {
    //     res.send(result.documentID.email)
    // })
}

advertisement.prototype.getDocumentID = async function (authenticationToken,_utilities) {
    await _utilities.getDocumentIDbyAuthenticationToken(authenticationToken).then((documentID) => {
        return documentID
    }).then((documentID) => {
        return documentID
    })
}

advertisement.prototype.getAllAdvertisements = function () {


}

module.exports = advertisement;