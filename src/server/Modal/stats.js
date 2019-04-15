const config = require('../config').config;
const _firebase = require('firebase');
const utilities = require('./utilities');
const collectionName = require('./collectionName');
if (!_firebase.apps.length)
    _firebase.initializeApp(config)

function stats() {
}


stats.prototype.getStats = function (email, year, month, res) {
    let db = _firebase.firestore();
    let _utilities = new utilities();

    _utilities.getDocumentIDbyEmailWithCollectionName(email, collectionName.earnedDonatedTokens).then((resolved) => {
        var docID = resolved.documentID
        db.collection(collectionName.earnedDonatedTokens)
            .where("email", "==", email)
            .get().then((querySnapshot) => {
                let data = [];

                querySnapshot.forEach((iterator) => {
                    let substrDate = iterator.data().date.split('-')
                    let day = substrDate[0]
                    let _month = substrDate[1]
                    let _year = substrDate[2]
                    if (month == _month && year == _year) {
                        let metaData = {
                            date: iterator.data().date,
                            donated: iterator.data().donated,
                            earned: iterator.data().earned,
                            email: iterator.data().email
                        }
                        data.push(metaData)
                    }
                })
                let final = []
                for (var i = 0; i < data.length; i++) {
                    let current
                    let next
                    current = data[i].date.split('-')[0]
                    if (i + 1 != data.length) {
                        next = data[i + 1].date.split('-')[0]
                    }
                    if (current == next) {
                        // console.log(current)
                        // console.log(next)
                        data[i].donated = data[i].donated + data[i + 1].donated
                        data[i].earned = data[i].earned + data[i + 1].earned
                        final.push(data[i])
                    }
                }
                res.send({ data: final})
            })
    })

}
module.exports = stats;