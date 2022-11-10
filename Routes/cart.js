const router = require("express").Router();
const { deleteCart } = require("../Controllers/cart");
const { verfityTokenAndAuthorization } = require("../Middleware/verfiyToken");
router.delete("/:id", verfityTokenAndAuthorization, deleteCart);
module.exports = router;
