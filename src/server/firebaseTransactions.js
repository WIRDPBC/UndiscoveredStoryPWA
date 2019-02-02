const firebase = require('firebase');


var config = {
	apiKey: "AIzaSyAeNSO4Kh9cr4Gwhx0b9Vpsfv8Cwuh3YAs",
	authDomain: "ecroom-6c0c6.firebaseapp.com",
	databaseURL: "https://ecroom-6c0c6.firebaseio.com",
	projectId: "ecroom-6c0c6",
	storageBucket: "",
	messagingSenderId: "358978607943"
};
const userid = 1;

let _Firebase = {
	firebaseAuth: function () {
		return firebase.initializeApp(config);
	},
	createNewUser: function (params) {

		let _firebase = firebase.initializeApp(config);
		let ref = _firebase.database().ref();
		var usersRef = ref.child('users');
		var dataFromFirebase = null;
		if (usersRef !== null) {

			var userData = {
				email: params.email,
				password: params.password,
				userid: userid,
				username: params.username
			};



			usersRef.once("value").then(function (snapshot) {
				if (!snapshot.exists()) {
					usersRef.set(userData, function (error) {
						if (error) {
							console.log('writing failed!');
							return false;
						}
						else {
							console.log('data written');
							return true;
						}
					});
				}

				else {
					usersRef.limitToLast(4).on("child_added", function (snapshot) {
						if (snapshot.key == "userid") {
							dataFromFirebase = (snapshot.val() === 'undefined') ? 1 : snapshot.val();
						}
						usersRef.set(userData, function (error) {
							if (error) {
								console.log('writing failed!');
								return false;
							}
							else {
								console.log('data written');
								return true;
							}
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
