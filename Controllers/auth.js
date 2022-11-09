const userModel = require("../Model/user");
const jwt = require("jsonwebtoken");
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

		res.status(200).json();
	} catch (error) {
		res.status(500).json(error);
	}
};

const login = async (req, res) => {
	const { username, password } = req.body;
	console.log(username, password);
	try {
		const user = await userModel.findOne({ username: username });

		if (user) {
			const passwordValidity = await bcrypt.compare(password, user.password);
			// passwordValidity
			// 	 res.status(200).json("logged in succesfully")
			//  	: res.status(403).json("access deined");
			if (passwordValidity) {
				const { password, createdAt, updatedAt, ...other } = user._doc;

				const accessToken = jwt.sign(
					{
						id: user._id,
						isAdmin: user.isAdmin,
					},
					process.env.JWT_SECRET_KEY,
					{ expiresIn: "3d" }
				);
				res.status(200).json({ ...other, accessToken });
			} else {
				res.status(403).status("Access denied");
			}
		} else {
			res.status(404).json("User not found");
		}
	} catch (error) {
		res.status(200).json(error);
	}
};

module.exports = {
	registerUser,
	login,
};
