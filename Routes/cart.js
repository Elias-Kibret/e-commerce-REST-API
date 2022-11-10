const router = require("express").Router();
const {
	deleteCart,
	createCart,
	updateCart,
	getCart,
	getAllCart,
} = require("../Controllers/cart");
const { verfityTokenAndAuthorization } = require("../Middleware/verfiyToken");
router.delete("/:id", verfityTokenAndAuthorization, deleteCart);
router.post("/", verfityTokenAndAuthorization, createCart);
router.put("/:id", verfityTokenAndAuthorization, updateCart);
router.get("/:id", verfityTokenAndAuthorization, getCart);
router.get("/", verfityTokenAndAuthorization, getAllCart);
module.exports = router;
