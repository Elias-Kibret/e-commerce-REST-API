const orderCart = require("../Model/order");

const getOrders = async (req, res) => {
	try {
		const allOrders = await orderCart.find();
		res.status(200).json(allOrders);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	getOrders,
};
