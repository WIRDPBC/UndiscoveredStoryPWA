let walletAPI = require('../walletAPI/walletAPIurl')
let utilities = require('./utilities')
const collectionName = require('./collectionName')
const axios = require('axios');
function tokens() {

}

tokens.prototype.transferTokens = function (email, publicKey, amount) {
    let url = walletAPI.buildTransaction
    const metaData = {
        "emailId": email,
        "publicKey": publicKey,
        "amount": amount
    }
    axios.post(url, metaData)
        .then(data => {
            let _utilities = new utilities()
            _utilities.addRecord(collectionName.transactions, data).then((documentReference) => {
                return documentReference
            }).catch(() => {
                return "Token Transfer failed"
            })
        })
        .catch(error => {
            console.error(error)
        })
}


module.exports = tokens