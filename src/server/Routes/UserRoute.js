const express = require('express');
const UserRouter = express.Router();
let CreateUser = require('../Modal/UserModal');
let UserAuthentication = require('../Modal/UserAuthentication');
let updateUserInformation = require('../Modal/updateUserInformation');
let questions = require('../Modal/questions');
let utilities = require('../Modal/utilities');
let authToken = require('../Modal/authToken');
let advertisement = require('../Modal/advertisement');
let mailer = require('../Modal/mailer')
let updatePassword = require('../Modal/updatePassword')
let stats = require('../Modal/stats')
let finalScore = require('../Modal/finalScore')
let leaderboard = require('../Modal/leaderboard')
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

        let firstName = req.body.firstName;
        let lastName = req.body.lastName;

        if (CreateUser) {
            let obj = new CreateUser(
                email, password,
                eligiblityCertified, termsPolicy,
                firstName, lastName);
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
        // let email = req.body.Email;
        // let authenticate = req.body.Authenticate;
        // UserAuthentication = new UserAuthentication(email, authenticate);
        // UserAuthentication.getAuthenticationToken();
        // setTimeout(function () { }, 3000);
        // res.send({ token: UserAuthentication.getAuthToken() });

        let _userAuthentication = new UserAuthentication();
        _userAuthentication.checkAuthToken(req, res);

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
    obj.getReferralLinkByAuthenticationToken(authenticationToken, res);
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
    obj.checkValidity(res, authenticationToken);
});

UserRouter.route('/getAllRegisteredUsersEmailAddress').post(function (req, res) {
    let obj = new utilities();
    obj.getAllRegisteredUsersEmailAddress(res);
});

UserRouter.route('/deleteUserByDocumentID').post(function (req, res) {
    let obj = new utilities();
    obj.deleteUserByDocumentID(req, res);
});


/// Advertisement  ////
UserRouter.route('/loadAdvertismentDescription').post(function (req, res) {
    let _advertisement = new advertisement();
    _advertisement.loadAdvertismentDescription(res)
});



/**
 * Usage: {
 * email: "ayman.afzal@msn.com",
 * advertisementType: 1,
 * comment: "comment"
 * }
 * Response:
 * {Message: messages.Advertisement.DESCRIPTION_ADDED}
 */
UserRouter.route('/addCommentAdvertisement').post(function (req, res) {
    let _advertisement = new advertisement();
    let email = req.body.email;
    let advertisementType = req.body.advertisementType;
    let comment = req.body.comment;
    _advertisement.addComment(comment, email, advertisementType, res);
});

/**
 * Usage: {
 * advertisementType: 1,
 * }
 * Response:
 * {data: }
 */
UserRouter.route('/getAllComments').post(function (req, res) {
    let _advertisement = new advertisement();
    let advertisementType = req.body.advertisementType;
    _advertisement.getAllComments(advertisementType, res);
});


/**
 * Usage:
 * {
 *  email: '',
 *  correctAnswer: true,
 *  unanswered: false
 * }
 */
UserRouter.route('/answer').post(function (req, res) {
    let _questions = new questions();
    let email = req.body.email;
    let correctAnswer = req.body.correctAnswer;
    let unanswered = req.body.unanswered;
    _questions.answer(email, correctAnswer, unanswered, res);
});



/**
 * Usage:
 * {
 *  email: '',
 *  year: 2019,
 *  month: 8
 * }
 */
UserRouter.route('/stats').post(function (req, res) {
    let _stats = new stats();
    let email = req.body.email;
    let year = req.body.year;
    let month = req.body.month;
    _stats.getStats(email, year, month, res);
});



/**
 * Usage:
 * {
 *  email: '',
 *	date: "3-11-2019"
 * }
 */
UserRouter.route('/finalScore').post(function (req, res) {
    let _finalScore = new finalScore();
    let email = req.body.email;
    let date = req.body.date;
    _finalScore.getScore(email, date, res);
});



/**
 * Usage:
 * {
 *  email: ''
 * }
 */
UserRouter.route('/leaderboard').post(function (req, res) {
    let _leaderboard = new leaderboard();
    let email = req.body.email;
    _leaderboard.getLeaderboard(email, res);
});



/**
 * usage:
 * {
 * "to": "email@email.com"
 * }
 * Send email API
 * @requires receiver's Email address
 */
UserRouter.route('/sendEmail').post(function (req, res) {
    let to = req.body.to;
    let _mailer = new mailer();
    _mailer.sendEmail(to, res);
});


/**
 * usage:
 * {
 * "email": "email@email.com",
 * "password": "enteredpassword",
 * "id" : "ab-quyret"
 * }
 * Response:
{
    Message: 'Password Updated'
}
 * Send email API
 * @requires receiver's Email address
 */
UserRouter.route('/updatePassword').post(function (req, res) {
    let email = req.body.email;
    let password = req.body.password;
    let id = req.body.id;
    let _updatePassword = new updatePassword();

    _updatePassword.updatePassword(email, password, id, res);
});





UserRouter.route('/walletAddress').post(function (req, res) {
    // let email = req.body.email;
    let email = "an@msn.com"
    let _utilities = new utilities()
    _utilities.getWalletAddressByEmail(email)
});

module.exports = UserRouter;