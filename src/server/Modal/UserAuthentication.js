const config = require('../config').config;
const _firebase = require('firebase');
if (!_firebase.apps.length)
    _firebase.initializeApp(config)
let bcrypt = require('bcryptjs');
let secretKey = require('../secretKey');
let walletAPIurl = require('../walletAPI/walletAPIurl');
const axios = require('axios');
let jwt = require('jsonwebtoken');
let utilities = require('../Modal/utilities')


function UserAuthentication() {
    // this.Email = Email || null;
    // this.Authenticate = Authenticate;
    // this.AuthenticationToken='';
    // console.log('inside UserAuthentication');
}


UserAuthentication.prototype.checkAuthToken = function (req, res) {
    jwt.verify(req.cookies.auth, secretKey, function (err, decode) {
        if (err) {
            res.send({ Verified: false })
        } else {
            let dt = _firebase.firestore();
            let _utilities = new utilities();
            let jwtVerify = jwt.verify(req.cookies.auth, secretKey)
            let email = jwtVerify.id;
            _utilities.getDocumentIDbyEmail(email).then((resolved) => {
                if (resolved.documentID == undefined) {
                    res.send({
                        Message: 'Unregistered user'
                    })
                } else {
                    _utilities.getEmailAndPasswordByDocumentID(resolved.documentID)
                        .then((result) => {
                            // let fetchedEmail = result.documentID.email;
                            // let fetchedPassword = result.documentID.password;
                            let docID = resolved.documentID;

                            /**
                             * updating data and letting user to get in
                            */
                            // let authToken = this.getAuthenticationToken();
                            // res.cookie("auth", authToken)

                            // dt.collection('users').doc(docID).update(this.userLoginData);
                            dt.collection('users').doc(docID).get().then((doc) => {
                                res.send({
                                    authenticationToken: req.cookies.auth,
                                    lastLogin: _firebase.firestore.Timestamp.now(),
                                    firstName: doc.data().firstName,
                                    lastName: doc.data().lastName,
                                    paypalEmail: doc.data().paypalEmail,
                                    email: doc.data().email,
                                    ReferralLink: doc.data().ReferralLink,
                                    incorrectAnswers: doc.data().incorrectAnswers,
                                    totalAnswered: doc.data().totalAnswered,
                                    correctAnswers: doc.data().correctAnswers,
                                    totalQuestionsAnsweredLastLogin: doc.data().totalQuestionsAnsweredLastLogin,
                                    invitedBy: doc.data().invitedBy,
                                    inviteeCode: doc.data().inviteeCode,
                                    walletData: '',
                                    termsPolicy: true,
                                    eligiblityCertified: true,
                                    allowedToPlay: true
                                })
                            })

                        })
                }
            })

        }
    })
}

// UserAuthentication.prototype.getEmail = function () {
//     return this.Email;
// }
// UserAuthentication.prototype.setUserAuthenticationData = function (querySnapshot) {
//     let data = querySnapshot.docs.map(function (item) {
//         return item.id;
//     });
//     this.AuthenticationToken = data;
// }

// UserAuthentication.prototype.getAuthenticationToken = function () {
//     // expires in 24 hours
//     // this.AuthenticationToken = jwt.sign({ id: this.getEmail() }, secretKey, { expiresIn: 86400 });
//     // return this.AuthenticationToken;

//     let db = _firebase.firestore();
//     db.collection('users').limit(1).where(`email`, `==`, this.getEmail()).get().then(querySnapshot => {
//         this.setUserAuthenticationData(querySnapshot);
//     });
// }

// UserAuthentication.prototype.getAuthToken = function(){
//     console.log(this.AuthenticationToken);
//     return this.AuthenticationToken;
// }


module.exports = UserAuthentication;