const express = require('express');
const session = require('express-session')
var parseurl = require('parseurl')
const bodyParser = require('body-parser');
let config = require('./config');
let middleware = require('./middleware');

const FirebaseTransactions = require('./firebaseTransactions');
const Firebase_CreateNewUser = FirebaseTransactions.firebase._Firebase;

// Testing Login Method Separately
const login = require('./firebaseTransactions').login;
const bcrypt = require('bcryptjs');
// Testing Login Method ends here


const app = express();
const PORT = process.env.PORT || 8082;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



//JWT Starts Here

class HandlerGenerator  {
	login(req, res) {
		let username = req.body.username;
		let password = req.body.password;


		// Fetch username and password
		let mockedUsername = 'admin';
		let mockedPassword = 'password';

		if (username && password) {
			if (username === mockedUsername && password === mockedPassword) {
				let token = jwt.sign({ username: username },
					config.secret,
					{
						expiresIn: '24h'
					});

				res.json({
					success: true,
					message: 'Authentication Successful!',
					token: token
				});
			}
			else {
				res.send(403).json({
					success: false,
					message: 'Incorrect username or password'
				});
			}
		}
		else {
			res.send(400).json({
				success: false,
				message: 'Authentication failed! Please check the request'
			});
		}
	}

	index(req, res) {
		res.json({
			success: true,
			message: 'Index page'
		});
	}
}


// Starting point of the server
function main() {
	let app = express(); // Export app for other routes to use
	let handlers = new HandlerGenerator ();
	const port = process.env.PORT || 8000;
	app.use(bodyParser.urlencoded({ // Middleware
		extended: true
	}));
	app.use(bodyParser.json());
	// Routes & Handlers
	app.post('/login', handlers.login);
	app.get('/', middleware.checkToken, handlers.index);
	app.listen(port, () => console.log(`Server is listening on port: ${port}`));
}

//main();

//JWT Ends here





app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true
}))



app.use(function (req, res, next) {
	if (!req.session.views) {
		req.session.views = {}
	}

	// get the url pathname
	var pathname = parseurl(req).pathname

	// count the views
	req.session.views[pathname] = (req.session.views[pathname] || 0) + 1

	next()
})


app.use(bodyParser.urlencoded({ extended: true }));





app.get('/udg/', (req, res) => {

	Firebase_CreateNewUser.testSession(req, res)

	return;
});


app.get('/udg/updatePassword/:email/:password', (req, res) => {

	Firebase_CreateNewUser.updatePassword(req.params, req)
	//res.send(req.session.passwordUpdated)
	// console.log(`udpated values: ${req.session.passwordUpdated.password}`);

	return;
});


app.get('/udg/signup/:email/:password/', (req, res) => {

	Firebase_CreateNewUser.createNewUser(req.params);
	return;

	//Usage Example:

	//console.log('GET');
	// var returnedData = BigchainDBTransactions.creatingTransaction();
	// res.send({ express: returnedData });
	//https://mydomain.dm/fruit/{"name":"My fruit name", "color":"The color of the fruit"}
	//  client side response
	// { name: My fruit name, , color:The color of the fruit}


});

app.get('/udg/signupGoogle/:email/:password/:username', (req, res) => {

	Firebase_CreateNewUser.SignupGoogle(req.params);
	return;
});


app.get('/udg/login/:email/:password', (req, res) => {
	req.session.userData = req.params;
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
	res.send('I received your POST request. This is what you sent me: ${req.body.post}');
});





// var server = http.createServer(app);
// server.listen(port, function () {
// 	console.log('Web server listening on port ' + port)
// });




