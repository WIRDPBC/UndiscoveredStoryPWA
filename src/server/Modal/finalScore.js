const config = require('../config').config;
const _firebase = require('firebase');
const utilities = require('./utilities');
const collectionName = require('./collectionName');
if (!_firebase.apps.length)
    _firebase.initializeApp(config)

function finalScore() {
}


finalScore.prototype.getScore = function (email, date, res) {
    let db = _firebase.firestore();
    let _utilities = new utilities();
    console.log(date)
    console.log(email)
    _utilities.getDocumentIDbyEmailWithCollectionName(email, collectionName.earnedDonatedTokens)
        .then((resolved) => {
            var docID = resolved.documentID
            console.log(docID)

            db.collection(collectionName.earnedDonatedTokens)
                .where("date", "", date)
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
                    console.log(data)
                })
        })

}
module.exports = finalScore;