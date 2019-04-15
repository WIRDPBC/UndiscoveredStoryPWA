const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 8083
const UserRoute = require('./Routes/UserRoute');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
})
app.use(cookieParser());
app.use('/udgtapi/user', UserRoute);

app.listen(PORT, () => {
	console.log(`Server is running on PORT: ${PORT}`);
})