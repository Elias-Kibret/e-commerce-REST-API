const mongoose = require("mongoose");
const { use } = require("../Routes/user");

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			min: 6,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const user = mongoose.model("User", userSchema);
module.exports = user;
