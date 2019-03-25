const express = require('express');
const session = require('express-session')
var parseurl = require('parseurl')
const bodyParser = require('body-parser');
let config = require('./config');
const router = express.Router();


const FirebaseTransactions = require('./firebaseTransactions');
const Firebase_CreateNewUser = FirebaseTransactions.firebase._Firebase;

// Testing Login Method Separately
const login = require('./firebaseTransactions').login;
const bcrypt = require('bcryptjs');
// Testing Login Method ends here


const app = express();
const PORT = process.env.PORT || 8083;

const UserRoute =require('./Routes/UserRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/user',UserRoute);






// app.post('/udg/', (req, res) => {
// 	Firebase_CreateNewUser.testSession(req, res)
// 	return;
// });






app.post('/udg/', (req, res) => {
	console.log(req.body);
	console.log('POST');
	res.send('I received your POST request. This is what you sent me: ${req.body.post}');
});





app.listen(PORT, ()=>{
	console.log(`Server is running on PORT: ${PORT}`);
})




