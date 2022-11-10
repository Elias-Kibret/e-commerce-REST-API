const orderCart = require("../Model/order");
const router = require("../Routes/user");

const getOrders = async (req, res) => {
	try {
		const allOrders = await orderCart.find();
		res.status(200).json(allOrders);
	} catch (error) {
		res.status(500).json(error);
	}
};

const getSingleOrder = async (req, res) => {
	try {
		const singleOrder = await orderCart.findById({ userId: req.params.userId });
		res.status(200).json(singleOrder);
	} catch (error) {
		res.status(500).json(error);
	}
};

const updateOrder = async (req, res) => {
	try {
		const updated = await orderCart.findOneAndUpdate(
			{
				userId: req.params.userId,
			},
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

//GET MONTHLY INCOME

const getStats = async (req, res) => {
	const date = new Date();
	const lastmonth = new Date(date.setMonth(date.getMonth() - 1));
	const previousMonth = new Date(new Date().setMonth(lastMonth() - 1));
	try {
		const income = await orderCart.aggregate([
			{ $match: { createdAt: { $gte: previousMonth } } },
			{
				$project: {
					month: { $month: "$createdAt" },
					sales: "$amount",
				},
				$group: {
					_id: "$month",
					total: { $sum: "$sales" },
				},
			},
		]);
		res.status(200).json(income);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	getOrders,
	getSingleOrder,
	getStats,
};
