const router = require("express").Router();
const {
	createProduct,
	updateProduct,
	getProduct,
	getAllProduct,
} = require("../Controllers/product");
const {
	verfityTokenAndAdmin,
	verfityTokenAndAuthorization,
} = require("../Middleware/verfiyToken");

router.post("/", verfityTokenAndAdmin, createProduct);
router.put("/:id", verfityTokenAndAdmin, updateProduct);
router.get("/:id", verfityTokenAndAuthorization, getProduct);
router.get("/", getAllProduct);
module.exports = router;
