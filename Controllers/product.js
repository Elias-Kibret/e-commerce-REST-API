const product = require("../Model/product");
const productModel = require("../Model/product");
const router = require("../Routes/user");

const createProduct = async (req, res) => {
	try {
		const newProduct = await new product(req.body).save();
		console.log("hello");
		res.status(200).json(newProduct);
	} catch (error) {
		res.status(500).json(error);
	}
};

const updateProduct = async (req, res) => {
	try {
		const updatedProduct = await productModel.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{
				new: true,
			}
		);
	} catch (error) {
		res.status(500).json(error);
	}
};
// GET PRODUCT
const getProduct = async (req, res) => {
	try {
		const product = await productModel.findById(req.params.id);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json(error);
	}
};

const getAllProduct = async (req, res) => {
	const qNew = req.query.new;
	const qcategories = req.query.category;
	console.log("hello");
	try {
		let products;
		if (qNew) {
			products = await productModel.find().sort({ createdAt: -1 }).limit(5);
		} else if (qcategories) {
			products = await productModel.find({
				categories: {
					$in: [qcategories],
				},
			});
		} else {
			products = await productModel.find();
		}
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	createProduct,
	updateProduct,
	getProduct,
	getAllProduct,
};
