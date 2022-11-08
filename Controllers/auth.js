const userModel = require("../Model/user");
const bcrypt = require("bcrypt");
const registerUser = async (req, res) => {
	const { username, email, password } = req.body;
	try {
		const salt = await bcrypt.genSalt(10);
		req.body.password = await bcrypt.hash(password, salt);
		const newUser = await userModel({
			username: username,
			password: req.body.password,
			email: email,
		}).save();

		res.status(200).json(newUser);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	registerUser,
};
