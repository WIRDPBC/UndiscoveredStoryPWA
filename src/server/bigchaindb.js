const driver = require('bigchaindb-driver');
var bip39 = require('bip39');

const firebase = rqeuire('firebase');

import docID from './utility/docName';

// To get the connectionString
// Use it as a function like getConnectionString()
import getConnectionString from './dbConfig';
//import Transaction from './transaction';

var StellarSdk = require('stellar-sdk');
const stellarTestNetwork = 'https://horizon-testnet.stellar.org';
const API_PATH = getConnectionString();
const firebaseDocID = docID();

const DB_URL = "https://ecroom-6c0c6.firebaseio.com";

function firebaseAuth() {
	var config = {
		apiKey: "AIzaSyAeNSO4Kh9cr4Gwhx0b9Vpsfv8Cwuh3YAs",
		authDomain: "ecroom-6c0c6.firebaseapp.com",
		databaseURL: "https://ecroom-6c0c6.firebaseio.com",
		projectId: "ecroom-6c0c6",
		storageBucket: "",
		messagingSenderId: "358978607943"
	};
	return firebase.initializeApp(config);
}


function createNewUser(firebase) {

	let _firebase = firebase.initializeApp(config);
	let db = _firebase.database().ref();

	var data = {
		email: 'ayman.afzal@msn.com',
		password: 'abcd',
		userid: 1,
		username: 'ayman.afzal'
	};
	console.log(db);
	console.log('user doc id: ' + firebaseDocID.users);

	//    var setDoc = db.collection('users').doc(firebaseDocID.users).set(data);

}

/**
 * @param {Ed25519Keypair} newuser
 */
let BigchainDBTransaction = {
	creatingTransaction: function (newuser) {
		const tx = driver.makeCreateTransaction(
			{ city: 'Berlin, DE', temperature: 22, datetime: new Date().toString() },
			{ what: 'My first BigchainDB transaction' },
			[driver.makeOutput(
				driver.makeEd25519Condition(newuser.publicKey))
			],
			newuser.publicKey
		);

		const txSigned = driver.signTransaction(tx, newuser.privateKey);
		const conn = new Connection(API_PATH);
		conn.postTransactionCommit(txSigned)
			.then(retrievedTx =>
				console.log('Transaction', retrievedTx.id, 'successfully posted.')
			)
		return newuser;
	}

}


var isFirebaseAuthenticated = firebaseAuth();
if (isFirebaseAuthenticated !== null) {
	createNewUser(isFirebaseAuthenticated);
}
module.exports = { BigchainDBTransaction };
