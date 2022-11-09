const userModel = require("../Model/user");
const bcrypt = require("bcrypt");
const updateUser = async (req, res) => {
	const { password } = req.body.password;
	const id = req.params;
	try {
		const user = await userModel.findById(id);
		if (user) {
			const passwordValidity = await bcrypt.compare(password, user.password);
			await user.updateOne(req.body);
			res.status(200).json("Update success");
		} else {
			res.status(403).json("Access Forbidden");
		}
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	updateUser,
};
