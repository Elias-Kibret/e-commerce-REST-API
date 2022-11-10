const cartModel = require("../Model/cart");
const { findByIdAndDelete } = require("../Model/product");
const router = require("../Routes/user");

const deleteCart = async (req, res) => {
	try {
		await findByIdAndDelete(req.params.id);
		res.status(200).json("success");
	} catch (error) {
		res.status(500).json(error);
	}
};

//Get user cart

const getUserCart = async (req, res) => {
	try {
		const cart = await cartModel.findOne({ userId });
	} catch (error) {}
};

module.exports = {
	deleteCart,
};
