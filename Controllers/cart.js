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

const updateCart = async (req, res) => {
	try {
		const updatedCart = await cartModel.findByIdAndUpdate(
			req.body.params,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).json(updatedCart);
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

const getCart = async (req, res) => {
	try {
		const cart = await cartModel.findOne({ userId: req.params.userId });
		res.status(400).json(cart);
	} catch (error) {
		res.status(500).json(error);
	}
};
const getAllCart = async (req, res) => {
	try {
		const allCart = await cartModel.find();
		res.status(200).json(allCart);
	} catch (error) {
		res.status(500).json(error);
	}
};
module.exports = {
	deleteCart,
	createCart,
	updateCart,
	getCart,
	getAllCart,
};
