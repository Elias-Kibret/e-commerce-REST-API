const router = require("express").Router();
const { getOrders, getSingleOrder, getStats } = require("../Controllers/order");
const { verfityTokenAndAdmin } = require("../Middleware/verfiyToken");

router.get("/", verfityTokenAndAdmin, getOrders);
router.get("/:userId", verfityTokenAndAdmin, getSingleOrder);
router.get("/income", verfityTokenAndAdmin, getStats);
module.exports = router;
