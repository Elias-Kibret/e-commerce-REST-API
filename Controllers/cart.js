const cartModel = require("../Model/cart");
const { findByIdAndDelete } = require("../Model/product");
const router = require("../Routes/user");

//create cart

const createCart = async (req, res) => {
	try {
		const newCart = await new cartModel(req.body).save();
		res.status(200).json(newCart);
	} catch (error) {
		res.status(500).json(error);
	}
};

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
