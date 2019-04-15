const _firebase = require('firebase');
const config = require('.././config').config;
if (!_firebase.apps.length)
    _firebase.initializeApp(config)
function image() {

}
image.prototype.uploadImage = function (image) {
    var metaData = {
        contentType: 'image/jpeg'
    }
    var storageRef = firebase.storage().ref();
// storageRef.child('../../../images/img.jpg').put();

}

module.exports = image;