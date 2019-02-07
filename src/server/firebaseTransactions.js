const firebase = require('firebase');
const bigchainDB = require('./bigchandbTransactionExample');

const bigchainDBTransaction= bigchainDB.Transactions.BigchainDBTransaction;

// var config = {
// 	apiKey: "AIzaSyAeNSO4Kh9cr4Gwhx0b9Vpsfv8Cwuh3YAs",
// 	authDomain: "ecroom-6c0c6.firebaseapp.com",
// 	databaseURL: "https://ecroom-6c0c6.firebaseio.com",
// 	projectId: "ecroom-6c0c6",
// 	storageBucket: "",
// 	messagingSenderId: "358978607943"
// };
var config = {
    apiKey: "AIzaSyCKfSefhgtukqGPZAslH3-GYovrXNTVtYY",
    authDomain: "udgt-7790b.firebaseapp.com",
    databaseURL: "https://udgt-7790b.firebaseio.com",
    projectId: "udgt-7790b",
    storageBucket: "udgt-7790b.appspot.com",
    messagingSenderId: "386121684282"
  };

const userid = 1;
let _Firebase = {
	firebaseAuth: function () {
		return firebase.initializeApp(config);
	},
	createNewUser: function (params) {

		let _firebase = firebase.initializeApp(config);
		let ref = _firebase.database().ref();
		let db = _firebase.database();
		var userData = {
			email: params.email,
			password: params.password,
			userid: userid,
			username: params.username
		};

		var usersRef = ref.child('users');
		var usersAssetRef= ref.child('assets');
		var dataFromFirebase = null;

		if (usersRef !== null) {

			var transaction= bigchainDBTransaction.creatingTransaction();
			var userData = {
				email: params.email,
				password: params.password,
				username: params.username
			};

			var assets = {
				privateKey: transaction.privateKey,
				publicKey: transaction.publicKey,
				email: params.email,
				username: params.username
			};
			usersRef.once("value").then(function (snapshot) {
				if (!snapshot.exists()) {

					usersRef.push(userData, function (error) {
						if (error == null)
							console.log("Data Written");
						else
							console.log("Data writing failed");
					});

					usersAssetRef.push(assets, function (error) {
						if (error == null)
							console.log("Asset Created");
						else
							console.log("Asset Creation failed");
					});
				}

				else {
					usersRef.limitToLast(4).on("child_added", function (snapshot) {
						if (snapshot.key == "userid") {
							userData.userid = snapshot.val();
						}
						usersRef.push(userData, function (error) {
							if (error == null)
								console.log("Data Written");
							else
								console.log("Data writing failed");
						});
						usersAssetRef.push(assets, function (error) {
							if (error == null)
								console.log("Asset Created");
							else
								console.log("Asset Creation failed");
						});
					}, function (errorObject) {
						console.log('Failed: ' + errorObject.code);
					});
				}
			});
		}
	}
}


module.exports.firebase = { _Firebase };
