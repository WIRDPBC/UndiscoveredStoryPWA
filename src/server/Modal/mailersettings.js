module.exports = {
    service: 'gmail',
    auth: {
        user: 'udgstory@wirdwrld.com',
        pass: '!amstillstruggling',
        port: 587,
        authentication: 'plain'
    },
    mailOptions: {
        from: 'udgstory@wirdwrld.com',
        subject: 'Password reset WirdWrld',
        text: 'Please click on the link given below to reset your password'
    }
}