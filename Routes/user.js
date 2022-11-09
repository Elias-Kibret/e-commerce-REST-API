const router = require("express").Router();
const {
	verfityTokenAndAuthorization,
	verfiyToken,
	verfityTokenAndAdmin,
} = require("../Middleware/verfiyToken");
const {
	updateUser,
	deleteUser,
	getUser,
	getAllUser,
	getStats,
} = require("../Controllers/user");
router.put("/:id", verfityTokenAndAuthorization, updateUser);
router.delete("/:id", verfityTokenAndAuthorization, deleteUser);
router.get("/:id", verfityTokenAndAuthorization);
router.get("/", verfityTokenAndAdmin, getAllUser);
router.get("/stats", verfityTokenAndAdmin, getStats);
module.exports = router;
