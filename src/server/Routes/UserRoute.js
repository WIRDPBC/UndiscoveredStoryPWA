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
/**
 *This file is used for routing to the required method
 */
// UserRouter.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
//   });


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
            obj.signup(res, req);
        }
    });


UserRouter
    .route('/login')
    .post(function (req, res) {

        let email = req.body.Email;
        let password = req.body.Password;

        if (CreateUser) {
            let obj = new CreateUser(email, password);
            obj.login(res, req);
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
    console.log("User validity", req, res)
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
    let pachasPajamas = `An internationally-acclaimed educational storybook`
    pachasPajamas += `that uses Augmented Reality (AR).`
    pachasPajamas += `Featuring Yasin "Mod Def" Bey, Cheech Marin, Talib Kweli, Genevieve Goings, `
    pachasPajamas += `Lester Chambers`;

    let ToolsForGrassrootsActivists = `For almost 40 years, Patagonia has supported grassroots `
    ToolsForGrassrootsActivists += ` activists working to find solutions to the environmental crisis. `
    ToolsForGrassrootsActivists += `Tools for Grassroots Activists. Edited by Nora Gallagher. `

    _advertisement.loadAdvertismentDescription("advertisement", 0);
    _advertisement.loadAdvertismentDescription("advertisement", 1);
});


UserRouter.route('/addCommentAdvertisement').post(function (req, res) {
    let _advertisement = new advertisement();
    let authenticationToken = req.body.authenticationToken;
    let advertisementType = req.body.advertisementType;
    let comment = req.body.comment;
    _advertisement.addComment(authenticationToken, advertisementType, comment, res);
});




/**
 * Usage:
 * {
 *  authenticationToken: '',
 *  correctAnswer: true
 * }
 */


UserRouter.route('/answer').post(function (req, res) {
    let _questions = new questions();
    let authenticationToken = req.body.authenticationToken;
    let correctAnswer = req.body.correctAnswer;
    _questions.answer(authenticationToken, correctAnswer, res);
});



UserRouter.route('/sendEmail').post(function (req, res) {
    let to = req.body.to;
    let subject = req.body.subject;
    let text = req.body.text;
    let _mailer = new mailer();
    _mailer.sendEmail(to, subject, text);
});




module.exports = UserRouter;