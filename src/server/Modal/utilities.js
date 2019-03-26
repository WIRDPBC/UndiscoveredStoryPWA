const config = require('.././config').config;
const uuidv1 = require('uuid/v1');
const _firebase = require('firebase');
if (!_firebase.apps.length)
    _firebase.initializeApp(config)
/**
 * A general object to contain all the useful methods to be used frequently by the developer
 * and few of them can be used as an API
 * ex:
 * destroyAuthenticationTokenByAuthenticationToken
 * getTotalNumberOfRegisteredUsers
 * destroyAuthenticationTokenByEmail
 */
function utilities() {

}


/**
 * Returns the document ID based on the email provided
 * @returns {documentID:data} which contains the documentID of the user
 * @requires email
 */
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

/**
 * Will return documentID based on authenticationToken provided.
 * If the Authentication Token exists in any document
 * it will return the documentID
 * @argument authenticationToken
 * @returns documentID
 */
utilities.prototype.getDocumentIDbyAuthenticationToken = function (authenticationToken) {
    let db = _firebase.firestore();
    let documentID = db.collection('users').where("authenticationToken", "==", authenticationToken).get().then(function (querySnapshot) {
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


/**
 * Will return referralLink based on authenticationToken provided.
 * If the Authentication Token exists in any document
 * it will return the referralLink
 * @argument authenticationToken
 * @argument res
 * @returns referralLink
 */
utilities.prototype.getReferralLinkByAuthenticationToken = function (authenticationToken, res) {
    let db = _firebase.firestore();
    let documentID = db.collection('users').where("authenticationToken", "==", authenticationToken).get().then(function (querySnapshot) {
        var id;
        querySnapshot.forEach(function (doc) {
            id = doc.data().ReferralLink;
        });
        return id;
    }).then(function (data) {
        res.send({ referralLink: data })
    }).catch(function (error) {
        console.log(error);
    });
    return documentID;
}

/**
 * Returns email and password of user based on the document ID
 * @returns {documentID:data} which contains the email and password based on the documentID of the user
 * @requires docID
 */
utilities.prototype.getEmailAndPasswordByDocumentID = function (docID) {
    let db = _firebase.firestore();
    let documentID = db.collection('users').doc(docID).get().then(function (querySnapshot) {
        var id = {
            email: querySnapshot.data().email,
            password: querySnapshot.data().password
        }
        return id;
    }).then(function (data) {
        return { documentID: data };
    }).catch(function (error) {
        console.log(error);
    });
    return documentID;
}

/**
 * Returns an array with all information of all registered users
 * @returns userdata
 */
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


/**
 * Destroys the Authentication Token based on the email provided
 * @requires response object
 * @requires email
 * @returns {Message:`authentication token against ${email} has been destroyed`}
 */
utilities.prototype.destroyAuthenticationTokenByEmail = function (res, email) {
    this.getDocumentIDbyEmail(email).then((resolved) => {
        let dt = _firebase.firestore();
        dt.collection('users').doc(resolved.documentID).update({ authenticationToken: '' })
            .then(() => {
                res.send({ Message: `authentication token against ${email} has been destroyed` });
            })
    })
}


/**
 * Returns the total number of registered users in 'users' document
 * @requires response object to return the result directly from the method
 * @returns {TotalRegisteredUsers: 1}
 */
utilities.prototype.getTotalNumberOfRegisteredUsers = function (res) {
    let dt = _firebase.firestore();
    dt.collection('users').get().then((querySnapshot) => {
        let totalRegisteredUsers = 0;
        querySnapshot.forEach(() => {
            totalRegisteredUsers = totalRegisteredUsers + 1;
        })
        res.send({
            TotalRegisteredUsers: totalRegisteredUsers
        })
    })
}
/**
 * Destroys an Authentication token based on the
 * authentication token provided
 * @requires authenticationToken
 * @requires response
 * @returns Message
 */
utilities.prototype.destroyAuthenticationTokenByAuthenticationToken =
    function (authenticationToken, res) {
        this.getDocumentIDbyAuthenticationToken
            .then((resolved) => {
                let dt = _firebase.firestore();
                dt
                    .collection('users')
                    .doc(resolved.documentID)
                    .update({ authenticationToken: '' })
                    .then(() => {
                        res.send({ Message: `authentication token against ${authenticationToken} has been destroyed` })
                    })
            })
    }
/**
 * Returns UUID for User unique identification
 * which can be used in user's referral link
 * @returns string
 */
utilities.prototype.generateUUIDv1 = function () {
    // generate Invitee Code using UUID
    return JSON.stringify(uuidv1());
}



/**
 * Fetches the documentID for a specific email address
 * @requires response object
 * @readonly email
 * @returns documentID in response
 */
utilities.prototype.getDocumentID = function (res, email) {
    this.getDocumentIDbyEmail(email).then((resolved) => {
        let dt = _firebase.firestore();
        res.send(JSON.stringify(resolved.documentID))
    })
}

/**
 * gets an entire list of available auth Token against users
 */
utilities.prototype.getAllRegisteredUsersAuthToken = function (res){
    this.getAllRegisteredUsers().then((users)=>{
        res.send({users});
    })
}
module.exports = utilities;