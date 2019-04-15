const config = require('../config').config;
const _firebase = require('firebase');
const utilities = require('./utilities');
const collectionName = require('./collectionName');
if (!_firebase.apps.length)
    _firebase.initializeApp(config)

function leaderboard() {
}


leaderboard.prototype.getLeaderboard = function (email, res) {
    let db = _firebase.firestore();
    let _utilities = new utilities();

    _utilities.getDocumentIDbyEmailWithCollectionName(email, collectionName.earnedDonatedTokens)
        .then((resolved) => {
            var docID = resolved.documentID
            console.log(docID)

            db.collection(collectionName.earnedDonatedTokens)
                .where("email", "==", email)
                .get().then((querySnapshot) => {
                    let data = [];
                    querySnapshot.forEach((iterator) => {
                        let substrDate = iterator.data().date.split('-')
                        let day = substrDate[0]
                        let _month = substrDate[1]
                        let _year = substrDate[2]

                        let metaData = {
                            date: iterator.data().date,
                            donated: iterator.data().donated,
                            earned: iterator.data().earned,
                            email: iterator.data().email
                        }
                        data.push(metaData)
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
                    let retunedArray = []
                    for (var i = 0; i <= 10; i++) {
                        if (final[i] !== undefined)
                            retunedArray.push(final[i].email)
                    }
                    console.log(retunedArray)
                })
        })

}
module.exports = leaderboard;