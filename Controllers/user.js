const userModel = require("../Model/user");
const bcrypt = require("bcrypt");
const { use } = require("../Routes/user");
const router = require("../Routes/user");
const { verfityTokenAndAdmin } = require("../Middleware/verfiyToken");
const user = require("../Model/user");
const updateUser = async (req, res) => {
	const { password } = req.body;
	const id = req.params.id;

	try {
		const user = await userModel.findById(id);

		if (user) {
			const passwordValidity = await bcrypt.compare(password, user.password);

			console.log(passwordValidity);
			if (passwordValidity) {
				const updatedUser = await userModel.findByIdAndUpdate(
					id,
					{ $set: req.body },
					{ new: true }
				);
				res.status(200).json(updatedUser);
			} else {
				res.status(200).json("incorrect password");
			}
		} else {
			res.status(403).json("Access Forbidden");
		}
	} catch (error) {
		res.status(500).json(error);
	}
};
// delete
const deleteUser = async (req, res) => {
	try {
		await userModel.findByIdAndDelete(req.params.id);
		res.status(200).json("Delete successfully");
	} catch (error) {
		res.status(500).json(error);
	}
};
//GET USER

const getUser = async (req, res) => {
	try {
		const user = userModel.findById(req.params.id);
		const { password, ...others } = user._doc;
		res.status(200).json(...others);
	} catch (error) {
		res.status(500).json(error);
	}
};
//GET ALL USER
const getAllUser = async (req, res) => {
	const query = req.query.new;
	try {
		const users = query
			? await userModel.find().sory({ _id: -1 }).limit(1)
			: await userModel.find();
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json(err);
	}
};

// GET USER STATS
const getStats = async (req, res) => {
	const date = new Date();
	const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
	try {
		const data = await user.aggregate([
			{ $match: { createAT: { $gte: lastYear } } },
			{
				$project: {
					month: { $month },
				},
			},
			{
				$group: {
					_id: "$month",
					total: { $sum: 1 },
				},
			},
		]);
	} catch (err) {
		res.status(500).json(err);
	}
};

module.exports = {
	updateUser,
	deleteUser,
	getUser,
	getAllUser,
	getStats,
};
