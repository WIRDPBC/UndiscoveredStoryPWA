const express = require('express');
const UserRouter = express.Router();
let CreateUser = require('../Modal/UserModal');
let UserAuthentication = require('../Modal/UserAuthentication');
let updateUserInformation = require('../Modal/updateUserInformation');
let questions = require('../Modal/questions');
let utilities = require('../Modal/utilities');
let authToken = require('../Modal/authToken');
/**
 *This file is used for routing to the required method
 */

UserRouter
    .route('/create')
    .post(function (req, res) {
        let email = req.body.Email;
        let password = req.body.Password;
        let eligiblityCertified = req.body.eligiblityCertified;
        let termsPolicy = req.body.termsPolicy;
        if (CreateUser) {
            let obj = new CreateUser(email, password, eligiblityCertified, termsPolicy);
            obj.signup(res);
        }
    });


UserRouter
    .route('/login')
    .post(function (req, res) {
        let email = req.body.Email;
        let password = req.body.Password;

        if (CreateUser) {
            let obj = new CreateUser(email, password);
            obj.login(res);
        }
    });


UserRouter
    .route('/authenticate')
    .post(function (req, res) {
        let email = req.body.Email;
        // let authenticationToken = req.body.AuthenticationToken;
        let authenticate = req.body.Authenticate;
        UserAuthentication = new UserAuthentication(email, authenticate);
        UserAuthentication.getAuthenticationToken();
        setTimeout(function () { }, 3000);
        res.send({ token: UserAuthentication.getAuthToken() });
    });

/**
    * Usage:
    * {
    * firstName: '',
    * lastName: '',
    * email: '',
    * paypalEmail:'',
    * authenticationToken: ''
    * }
    */
UserRouter.route('/updateUserData').post(function (req, res) {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let paypalEmail = req.body.paypalEmail;
    let obj = new updateUserInformation(firstName, lastName, email, paypalEmail);
    obj.update(res);
});

/**
 * Usage:
 * {
 * firstName:
 * lastName:
 * email:
 * paypalEmail:
 * }
 *
 * Response:
 * {message: 'Information Updated'}
 */
UserRouter.route('/updateUserData').post(function (req, res) {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let paypalEmail = req.body.paypalEmail;
    let obj = new updateUserInformation(firstName, lastName, email, paypalEmail);
    obj.update(res);
});

/**
 * Usage:
 *  {
 *  }
 *
 * Response:
 *  {
        description: "",
        options: {
            option1: "",
            option2: "",
            option3: "",
            option4: ""
        },
        correctAnswer: 2,
        explanation: ""
    }
 */
UserRouter.route('/viewQuestions').post(function (req, res) {
    let obj = new questions();
    obj.loadPredefinedQuestions(res);
});

/**
 * Usage:
 * {
 * }
 * Response:
 * {TotalRegisteredUsers: totalRegisteredUsers}
 */
UserRouter.route('/getTotalNumberofRegisteredUsers').post(function (req, res) {
    let obj = new utilities();
    obj.getTotalNumberOfRegisteredUsers(res);
});



/**
 * Usage:
 * {
 *  authenticationToken: ""
 * }
 * Response:
 * {Message: `authentication token against ${authenticationToken} has been destroyed`}
 */
UserRouter.route('/destroyAuthenticationTokenByAuthenticationToken').post(function (req, res) {
    let authenticationToken = req.body.authenticationToken;
    let obj = new utilities();
    obj.destroyAuthenticationTokenByAuthenticationToken(authenticationToken, res);
});


/**
 * Usage:
 * {
 *  authenticationToken: ""
 * }
 * Response:
 * {Message: `authentication token against ${email} has been destroyed`}
 */
UserRouter.route('/destroyAuthenticationTokenByEmail').post(function (req, res) {
    let email = req.body.email;
    let obj = new utilities();
    obj.destroyAuthenticationTokenByEmail(res, email);
});





/**
 * Usage:
 * {
 *  authenticationToken: ""
 * }
 * Response:
 * {referralLink: ''}
 */
UserRouter.route('/getReferralLink').post(function (req, res) {
    let authenticationToken = req.body.authenticationToken;
    let obj = new utilities();
    obj.getReferralLinkByAuthenticationToken( authenticationToken, res);
});

/**
 * Usage:
 * {
 *  authenticationToken: ''
 * }
 */

UserRouter.route('/answer').post(function (req, res) {
    let authenticationToken = req.body.authenticationToken;
    let obj = new CreateUser();
    obj.updateAnswerUsingAuthToken(res, authenticationToken);
});



/**
 * Usage:
 * {
 *  email: ""
 * }
 * Response:
 * {documentID: 'Z9909KrAMtCVDxLckCHO'}
 */
UserRouter.route('/getDocumentID').post(function (req, res) {
    let email = req.body.email;
    let obj = new utilities();
    obj.getDocumentID(res, email);
});


/*
Usage:
{
}
as body

Response:
{
    users: ['eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImF5bWFuLmFmemFsQGdtYWlsLmNvbSIsImlhdCI6MTU1MDU4Njc4NiwiZXhwIjoxNTUwNjczMTg2fQ.rUwzE_-14wvfTbLizGkZo4Jl_njJBKZAkZYeTw5s3gs']
}
 */
UserRouter.route('/getAllRegisteredUsersAuthToken').post(function (req, res) {
    let obj = new utilities();
    obj.getAllRegisteredUsersAuthToken(res);
});


/*
Usage:
{
    "authenticationToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImF5bWFuLmFmemFsQGdtYWlsLmNvbSIsImlhdCI6MTU1MDU4Njc4NiwiZXhwIjoxNTUwNjczMTg2fQ.rUwzE_-14wvfTbLizGkZo4Jl_njJBKZAkZYeTw5s3gs"
}
as body

Response:
{
    "error": "jwt expired",
    "expiredAt": "2019-02-20T14:33:06.000Z"
}
 */

UserRouter.route('/checkAuthTokenValidity').post(function (req, res) {
    let authenticationToken = req.body.authenticationToken;
    let obj = new authToken();
    obj.checkValidity(res,authenticationToken);
});



UserRouter.route('/getAllRegisteredUsersEmailAddress').post(function (req, res) {
    let obj = new utilities();
    obj.getAllRegisteredUsersEmailAddress(res);
});

UserRouter.route('/deleteUserByDocumentID').post(function(req, res){
    let obj = new utilities();
    obj.deleteUserByDocumentID(req,res);
});

module.exports = UserRouter;