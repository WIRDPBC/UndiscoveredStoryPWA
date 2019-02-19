const firebase = require('firebase');

const bigchainDB = require('./bigchandbTransactionExample');
const bcrypt = require('bcryptjs');
const Firestore = require('@google-cloud/firestore');

//mailer
const nodemailer = require('nodemailer');


//Token Creation
const jwt = require('jsonwebtoken');
const secretKey = require('./secretKey');

const saltRounds = 10;

const bigchainDBTransaction = bigchainDB.Transactions.BigchainDBTransaction;

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
	updatePassword: function (params) {
		firebase.initializeApp(config);
		let db = firebase.firestore();



		db.collection("users").where(`email`, `==`, params.email).get().then((querySnapshot) => {

			//let lastLogin= firebase.firestore.Timestamp.fromMillis(doc.data().lastLogin.seconds).toDate();
			let result = querySnapshot.docs.values().next();
			let documentId = result.value.id;
			db.collection("users").doc(documentId).update({ password: params.password });

			// console.log(
			// 	`${doc.id} => 'Email: ' ${doc.data().email},'Username: ' ${doc.data().username},'Password: ' ${doc.data().password},
			// 	'LastLogin: '${date}`
			// );
		})
	},

	login: function (params) {
		firebase.initializeApp(config);
		let db = firebase.firestore();
		var _doc = null;
		db.collection("users").where(`email`, `==`, params.email).get().then((querySnapshot) => {
			// querySnapshot.forEach((doc) => {
			// 	let isPassword = bcrypt.compareSync(params.password, doc.data().password);
			// 	let isEmail = (doc.data().email === params.email ? true : false);
			// 	if (isPassword && isEmail) {
			// 		return doc;
			// 	}
			// })
			let result = querySnapshot.docs.values().next();
			let documentId = result.value.id;
			var token = jwt.sign({ id: 'aiman' }, secretKey.secretKey, {
				expiresIn: 86400 // expires in 24 hours
			});

			db.collection("users").doc(documentId).update({ lastLogin: firebase.firestore.Timestamp.now(),
				authenticationToken: token })

		})
	},


	//Original Code
	// let _firebase = firebase.initializeApp(config);
	// let ref = _firebase.database().ref();

	// var usersRef = ref.child('users');
	// var usersAssetRef = ref.child('assets');


	// usersRef.on("value", function (snapshot) {
	// 	snapshot.forEach(function (childSnapshot) {
	// 		var childKey = childSnapshot.key;
	// 		var childData = childSnapshot.val();

	// 		if (childData.email === params.email) {
	// 			console.log('params.email: ' + params.email);
	// 			console.log('data.email: ' + childData.email);
	// 			console.log('password: ' + bcrypt.compareSync(params.password, childData.password));

	// 			if (bcrypt.compareSync(params.password, childData.password)) {
	// 				console.log('params.email: ' + params.email);
	// 				console.log('data.email: ' + childData.email);
	// 				console.log('password: ' + bcrypt.compareSync(params.password, childData.password));
	// 				console.log('logged in');
	// 				return true;
	// 			}
	// 		}
	// 	});

	// }, function (errorObject) {
	// 	console.log("The read failed: " + errorObject.code);
	// });



	createNewUser: function (params) {

		firebase.initializeApp(config);
		let db = firebase.firestore();

		var salt = bcrypt.genSaltSync(saltRounds);
		var passwordHash = bcrypt.hashSync(params.password, salt);
		//Bigchain DB
		//Once stellar is configured then remove it
		var transaction = bigchainDBTransaction.creatingTransaction();

		var userData = {
			email: params.email,
			password: passwordHash
		};

		var assets = {
			privateKey: transaction.privateKey,
			publicKey: transaction.publicKey,
			email: params.email

		};
		db.collection("users").add(userData).then((docID) => {
			console.log(`Record Added with Doc ID: ${docID.id}`);

		});




		// Original Code
		// let _firebase = firebase.initializeApp(config);
		// let ref = _firebase.database().ref();

		// var usersRef = ref.child('users');
		// var usersAssetRef = ref.child('assets');

		// if (usersRef !== null) {
		// 	var transaction = bigchainDBTransaction.creatingTransaction();
		// 	var userData = {
		// 		email: params.email,
		// 		password: passwordHash,
		// 		username: params.username
		// 	};

		// 	var assets = {
		// 		privateKey: transaction.privateKey,
		// 		publicKey: transaction.publicKey,
		// 		email: params.email,
		// 		username: params.username
		// 	};
		// 	usersRef.once("value").then(function (snapshot) {
		// 		if (!snapshot.exists()) {
		// 			usersRef.push(userData, function (error) {
		// 				if (error == null)
		// 					console.log("Data Written");
		// 				else
		// 					console.log("Data writing failed");
		// 			});
		// 			usersAssetRef.push(assets, function (error) {
		// 				if (error == null)
		// 					console.log("Asset Created");
		// 				else
		// 					console.log("Asset Creation failed");
		// 			});
		// 		}

		// 		else {
		// 			usersRef.limitToLast(4).on("child_added", function (snapshot) {
		// 				if (snapshot.key == "userid") {
		// 					userData.userid = snapshot.val();
		// 				}
		// 				usersRef.push(userData, function (error) {
		// 					if (error == null)
		// 						console.log("Data Written");
		// 					else
		// 						console.log("Data writing failed");
		// 				});
		// 				usersAssetRef.push(assets, function (error) {
		// 					if (error == null)
		// 						console.log("Asset Created");
		// 					else
		// 						console.log("Asset Creation failed");
		// 				});
		// 			}, function (errorObject) {
		// 				console.log('Failed: ' + errorObject.code);
		// 			});
		// 		}
		// 	});
		// }
	},
	SignupGoogle: function (params) {

		firebase.initializeApp(config);
		var baseProvider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(baseProvider).then(function (result) {
			console.log(result);
			console.log("success... Google account linked");
		}).catch(function (err) {
			console.log(err);
			console.log('Failed to connect!!!');
		});

	},
	sendVerificationEmail: function (email, link) {

		// var smtpConfig = {
		// 	host: 'smtp.gmail.com',
		// 	port: 465,
		// 	secure: true, // use SSL
		// 	auth: {
		// 		user: 'udg@wirdwrld.com',
		// 		pass: '!amstillstruggling'
		// 	}
		// };
		// var smtpConfig = {
		// 	service: 'gmail',
		// 	auth: {
		// 		user: 'aiman@wirdwrld.com',
		// 		pass: '!amstillstruggling'
		// 	}
		// };


		let transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			secure: false,
			requireTLS: true,
			auth: {
				user: 'udg@wirdwrld.com',
				pass: '!amstillstruggling'
			}
		});

		let mailOptions = {
			from: 'udg@wirdwrld.com',
			to: 'ayman.afzal@gmail.com',
			subject: 'Test',
			text: 'Hello World!'
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error.message);
			}
			console.log('success');
		});
	}
}


module.exports.login = function login(params) {

	firebase.initializeApp(config);
	let db = firebase.firestore();
	var _doc = null;

	// db.collection("users").where(`email`, `==`, params.email).get().then((querySnapshot) => {
	// 	// querySnapshot.forEach((doc) => {
	// 	// 	let isPassword = bcrypt.compareSync(params.password, doc.data().password);
	// 	// 	let isEmail = (doc.data().email === params.email ? true : false);
	// 	// 	if (isPassword && isEmail) {
	// 	// 		return doc;
	// 	// 	}
	// 	// })
	// 	//let result = querySnapshot.docs.values().next();
	// 	//return result.value;
	// })

	var token = jwt.sign({ id: 'aiman' }, secretKey.secretKey, {
		expiresIn: 86400 // expires in 24 hours
	});



	console.log(token);
	return db.collection("users").where(`email`, `==`, params.email).get();

}


module.exports.firebase = { _Firebase };
