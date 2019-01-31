const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8082;

const BigchainDB = require('./bigchandbTransactionExample');

const BigchainDBTransactions = BigchainDB.Transactions.BigchainDBTransaction;
const FirebaseTransactions = require('./firebaseTransactions');
const Firebase_CreateNewUser = FirebaseTransactions.firebase._Firebase;


//BigchainDB Transaction
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/udg/signup/:email/:password/:username', (req, res) => {
	//console.log('GET');

	// var returnedData = BigchainDBTransactions.creatingTransaction();
	// res.send({ express: returnedData });

	Firebase_CreateNewUser.createNewUser(req.params);


//https://mydomain.dm/fruit/{"name":"My fruit name", "color":"The color of the fruit"}
   //  client side response
    // { name: My fruit name, , color:The color of the fruit}
	return;


});

app.post('/udg/', (req, res) => {
	console.log(req.body);
	console.log('POST');

	res.send(
		'I received your POST request. This is what you sent me: ${req.body.post}',
	);
});

app.listen(port, () => console.log('Listening on port ' + port));
