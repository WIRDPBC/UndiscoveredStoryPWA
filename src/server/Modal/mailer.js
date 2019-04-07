let nodemailer = require('nodemailer');
let mailerSettings = require('./mailersettings')
function mailer() {
}
mailer.prototype.sendEmail = function ( to, subject,text) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: mailerSettings.auth.user,
            pass: mailerSettings.auth.pass,
            port: mailerSettings.auth.port,
            authentication: mailerSettings.auth.authentication
        }
    });

    var mailOptions = {
        from: mailerSettings.mailOptions.from,
        to: to,
        subject: subject,
        text: text
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log(`Email sent: ${info.response}`)
        }
    })
}

module.exports = mailer;