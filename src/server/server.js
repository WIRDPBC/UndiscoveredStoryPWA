// HOT Reload
var http = require('http');
var reload = require('reload');
// HOT Reload Ends


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8082;

const BigchainDB = require('./bigchandbTransactionExample');

const BigchainDBTransactions = BigchainDB.Transactions.BigchainDBTransaction;
const FirebaseTransactions = require('./firebaseTransactions');
const Firebase_CreateNewUser = FirebaseTransactions.firebase._Firebase;

// Testing Login Method Separately

const login = require('./firebaseTransactions').login;
const bcrypt = require('bcryptjs');

// Testing Login Method ends here


//BigchainDB Transaction
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/udg/', (req, res) => {
	//	Firebase_CreateNewUser.sendVerificationEmail("ayman.afzal@gmail.com","https://udgt-7790b.firebaseapp.com/__/auth/action?mode=<action>&oobCode=<code>");
	Firebase_CreateNewUser.updateEmailAddress();
	return;
});



app.get('/udg/signup/:email/:password/', (req, res) => {
	//console.log('GET');
	// var returnedData = BigchainDBTransactions.creatingTransaction();
	// res.send({ express: returnedData });
	Firebase_CreateNewUser.createNewUser(req.params);

	//https://mydomain.dm/fruit/{"name":"My fruit name", "color":"The color of the fruit"}
	//  client side response
	// { name: My fruit name, , color:The color of the fruit}
	return;
});

app.get('/udg/signupGoogle/:email/:password/:username', (req, res) => {

	Firebase_CreateNewUser.SignupGoogle(req.params);
	return;
});


app.get('/udg/login/:email/:password', (req, res) => {
	//console.log('GET');
	Firebase_CreateNewUser.login(req.params);

	// let dataFromLogin = login(req.params)
	// 	.then((querySnapshot) => {
	// 		querySnapshot.forEach((doc) => {
	// 			let isPassword = bcrypt.compareSync(req.params.password, doc.data().password);
	// 			let isEmail = (doc.data().email === req.params.email ? true : false);
	// 			if (isPassword && isEmail) {

	// 				return new Promise((resolve, reject) => {

	// 					resolve(doc.data());
	// 				});


	// 			}
	// 		})
	// 	});
	// dataFromLogin.then((resolved) => {
	// 	console.log('resolved: ');
	// 	console.log(resolved);
	// }, (rejected) => {
	// 	console.log('rejected: ');
	// 	console.log(rejected);
	// })



});



app.post('/udg/', (req, res) => {
	console.log(req.body);
	console.log('POST');

	res.send(
		'I received your POST request. This is what you sent me: ${req.body.post}',
	);
});




//app.listen(port, () => console.log('Listening on port ' + port));

var server = http.createServer(app);
reload(app);
server.listen(port, function () {
	console.log('Web server listening on port ' + port)
});

