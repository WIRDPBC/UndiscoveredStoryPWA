let jwt = require('jsonwebtoken');
let secretKey = require('../secretKey');
function authToken() {

}

authToken.prototype.checkValidity = function (res, authenticationToken) {
    try {

        res.send({ data: jwt.verify(authenticationToken, secretKey) });
    } catch (error) {
        res.send({
            error: error.message,
            expiredAt: error.expiredAt
        })
    }
}

module.exports = authToken;