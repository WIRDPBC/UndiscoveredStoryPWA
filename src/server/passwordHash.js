const bcrypt = require('bcryptjs');
const saltRounds = 10;


let encryption = {
	encryptPassword: function (password) {
		bcrypt.genSalt(saltRounds, function (err, salt) { bcrypt.hash(password, salt); });

	},
	comparePassword: function (password) {
		var hashedPassword = this.encryptPassword(password);
		bcrypt.compare(password, hashedPassword, function (error, result) {
			if (result)
				return true;
			else
				return false;
		});
	}
}

module.exports = { encryption };
