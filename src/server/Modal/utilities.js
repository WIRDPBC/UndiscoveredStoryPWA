const config = require('.././config').config;
const _firebase = require('firebase');
if (!_firebase.apps.length)
    _firebase.initializeApp(config)
function utilities() {

}

utilities.prototype.getDocumentIDbyEmail = function (email) {
    let db = _firebase.firestore();
    let documentID = db.collection('users').where("email", "==", email).get().then(function (querySnapshot) {
        var id;
        querySnapshot.forEach(function (doc) {
            id = doc.id;
        });
        return id;
    }).then(function (data) {
        return { documentID: data };
    }).catch(function (error) {
        console.log(error);
    });
    return documentID;
}



utilities.prototype.getEmailAndPasswordByDocumentID = function (docID) {
    let db = _firebase.firestore();
    let documentID = db.collection('users').doc(docID).get().then(function (querySnapshot) {
        var id = {
            email: '',
            password: ''
        }
        querySnapshot.forEach(function (doc) {
            id.email = doc.data().email;
            id.password = doc.data().password;
        });
        return id;
    }).then(function (data) {
        return { documentID: data };
    }).catch(function (error) {
        console.log(error);
    });
    return documentID;
}

utilities.prototype.getAllRegisteredUsers = function () {
    let db = _firebase.firestore();
    let documentID = db.collection('users').get().then(function (querySnapshot) {
        var array = [];
        querySnapshot.forEach(function (doc) {
            array.push(doc.data().AuthenticationToken);
        });
        return array;
    }).then(function (data) {
        return { users: data };
    }).catch(function (error) {
        console.log(error);
    });
    return documentID;
}

utilities.prototype.destroyAuthenticationTokenByEmail = function (email) {
    this.getDocumentIDbyEmail(email).then((resolved) => {
        let dt = _firebase.firestore();
        dt.collection('users').doc(resolved.documentID).update({ AuthenticationToken: '' })
            .then(() => {
                console.log(`authentication token against ${email} has been destroyed`);
            })
    })
}





module.exports = utilities;