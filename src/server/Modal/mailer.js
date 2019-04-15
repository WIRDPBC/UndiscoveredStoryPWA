let nodemailer = require('nodemailer');
let mailerSettings = require('./mailersettings')
let utilities = require('../Modal/utilities')
let collectionName = require('../Modal/collectionName')
const _firebase = require('firebase');
if (!_firebase.apps.length)
    _firebase.initializeApp(config)
const randomCount = 10
const continuation = 10
function mailer() {
}
mailer.prototype.sendEmail = function (to, res) {

    let _utilities = new utilities();

    //Unique id for the user to reset password
    let shortID = _utilities.generateShortID()

    var transporter = nodemailer.createTransport({
        service: mailerSettings.service,
        auth: {
            user: mailerSettings.auth.user,
            pass: mailerSettings.auth.pass,
            port: mailerSettings.auth.port,
            authentication: mailerSettings.auth.authentication
        }
    });

    let link = `www.undiscoveredstory.com?email=${to}&id=${shortID}`
    let html = `<html>
                    Please click on the given link to reset your password
                    <a >${link}</a>
                    <h4>
                        Please do not reply to this email.
                        This is a computer generated email
                    </h4>
                </html>`
    var mailOptions = {
        from: mailerSettings.mailOptions.from,
        to: to,
        subject: mailerSettings.mailOptions.subject,
        text: mailerSettings.mailOptions.text,
        html: html
    }


    _utilities.getDocumentIDbyEmail(to).then(documentID => {
        let docID = documentID.documentID;
        let db = _firebase.firestore();
        db.collection(collectionName.users).doc(docID).update({
            shortID: shortID
        })

        /**
         * Once the db is updated with shortid then
         * send the email
         */
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.send({ Message: info.response, error: error })
            }
            else {
                console.log(`Email sent: ${info.response}`)
                res.send({ Message: info.response, error: null })
            }
        })

        // console.log(`${link}`)

    })

}

module.exports = mailer;