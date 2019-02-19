
// const Ed25519Keypair = require('./Ed25519Keypair');
// const Connection = require('./connection');
// const driver = require('./transaction');

const driver = require('bigchaindb-driver');
var bip39 = require('bip39');

// To get the connectionString
// Use it as a function like getConnectionString()

const API_PATH = 'https://test.bigchaindb.com/api/v1/';
let BigchainDBTransaction = {
	creatingTransaction: function () {
		//return "Hello World from Creating Transaction";
		const conn = new driver.Connection(API_PATH);
		var newuser = new driver.Ed25519Keypair();
		const tx = driver.Transaction.makeCreateTransaction(
			{ city: 'Berlin, DE', temperature: 22,
			datetime: new Date().toString() },
			{ what: 'My first BigchainDB transaction' },

			[driver.Transaction.makeOutput(
				driver.Transaction.makeEd25519Condition(newuser.publicKey))
			],
			newuser.publicKey
		)
		const txSigned = driver.Transaction.signTransaction(tx, newuser.privateKey)
		//const conn = new driver.Connection(API_PATH)

		// conn.postTransactionCommit(txSigned)
		// 	.then(retrievedTx => console.log('Transaction', retrievedTx.id, 'successfully posted.'));

		conn.postTransactionCommit(txSigned)
			.then(console.log("Transaction has been made successfully"));

		return newuser;
	}
}

module.exports.Transactions = { BigchainDBTransaction };
