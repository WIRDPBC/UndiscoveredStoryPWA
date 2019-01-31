const firebase = require('firebase');


var config = {
	apiKey: "AIzaSyAeNSO4Kh9cr4Gwhx0b9Vpsfv8Cwuh3YAs",
	authDomain: "ecroom-6c0c6.firebaseapp.com",
	databaseURL: "https://ecroom-6c0c6.firebaseio.com",
	projectId: "ecroom-6c0c6",
	storageBucket: "",
	messagingSenderId: "358978607943"
};

// For storing last max userid


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

			var data = {
				email: params.email,
				password: params.password,
				userid: 1,
				username: params.username
			};

			usersRef.once("value").then(function (snapshot) {
				if (!snapshot.exists()) {
					usersRef.set(data, function (error) {
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
						usersRef.set(data, function (error) {
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


		// usersRef.on("child_removed", function(snapshot){
		// 	console.log(snapshot.val());
		// });

		// usersRef.on("child_changed", function(snapshot){
		// 	console.log(snapshot.val());
		// });

		// usersRef.on("child_moved", function(snapshot){
		// 	console.log(snapshot.val());
		// });



	}
}


module.exports.firebase = { _Firebase };
