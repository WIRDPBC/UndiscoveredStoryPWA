const firebase = require('firebase')
const bigchainDB = require('./bigchandbTransactionExample')
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')

//#region Firebase Config
const config = require('./config').config;
//#endregion



//Token Creation
const jwt = require('jsonwebtoken');
const secretKey = require('./secretKey');

const saltRounds = 10;
const bigchainDBTransaction = bigchainDB.Transactions.BigchainDBTransaction;



let _Firebase = {
	firebaseAuth: function () {
		return firebase.initializeApp(config);
	},


	testSession: function (req, res) {
		req.session.testSessionValues = 'My Test Session Values'

	},

	updatePassword: function (params, req) {
		firebase.initializeApp(config);
		let db = firebase.firestore();

		db.collection("users").where(`email`, `==`, params.email).get().then((querySnapshot) => {

			//let lastLogin= firebase.firestore.Timestamp.fromMillis(doc.data().lastLogin.seconds).toDate();
			let result = querySnapshot.docs.values().next()
			let documentId = result.value.id;
			var salt = bcrypt.genSaltSync(saltRounds);
			var passwordHash = bcrypt.hashSync(params.password, salt);
			db.collection("users").doc(documentId).update({ password: passwordHash })

			req.session.passwordUpdated= {
				email: params.email,
				password: passwordHash,
				authToken: 'GeneratedAuthtoken',
				errorOccured: 'Error'
			}

		})
	},

	login: function (params) {
		firebase.initializeApp(config);
		let db = firebase.firestore();

		db.collection("users").where(`email`, `==`, params.email).get().then((querySnapshot) => {
			let result = querySnapshot.docs.values().next();
			let documentId = result.value.id;
			var token = jwt.sign({ id: params.email }, secretKey.secretKey, { expiresIn: 86400 }); // expires in 24 hours
			db.collection("users").doc(documentId).update({ lastLogin: firebase.firestore.Timestamp.now(), authenticationToken: token })
		});
		//return db.collection("users").where(`email`, `==`, params.email).get();

		db.collection("users").where(`email`, `==`, params.email).get().then((querySnapshot) => {

			querySnapshot.docs.forEach((doc) => {
				req.session.loginData = {
					authenticationToken: doc.data().authenticationToken,
					email: doc.data().email,
					lastLogin: doc.data().lastLogin
				}
				// console.log(`authenticationToken: ${doc.data().authenticationToken}`);
				// console.log(`email: ${doc.data().email}`);
				// console.log(`lastLogin: ${doc.data().lastLogin}`);
				console.log(`loginData: ${req.session.loginData}`);
			})
		});
		console.log(`loginData: ${sess.data}`);


	},

	createNewUser: function (params) {
		let newUserDocId = null;
		firebase.initializeApp(config);
		let db = firebase.firestore();

		var salt = bcrypt.genSaltSync(saltRounds);
		var passwordHash = bcrypt.hashSync(params.password, salt);
		//Bigchain DB
		//Once stellar is configured then remove it
		var transaction = bigchainDBTransaction.creatingTransaction();
		var token = jwt.sign({ id: params.email }, secretKey.secretKey, { expiresIn: 86400 }); // expires in 24 hours
		var userData = {
			email: params.email,
			password: passwordHash,
			signupDateTime: firebase.firestore.Timestamp.now(),
			authenticationToken: token,
			lastLogin: firebase.firestore.Timestamp.now()
		};

		var assets = {
			privateKey: transaction.privateKey,
			publicKey: transaction.publicKey,
			email: params.email

		};
		db.collection("users").add(userData).then((docID) => {
			//console.log(`Record Added with Doc ID: ${docID.id}`);
			newUserDocId = docID.id;
		});
		if (newUserDocId !== null)
			return db.collection("users").doc(newUserDocId).get();
		else
			return "Error occured while fetching info for newly created user";
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
