const router = require("express").Router();
const {
	verfityTokenAndAuthorization,
	verfiyToken,
	verfityTokenAndAdmin,
} = require("../Middleware/verfiyToken");
const { updateUser, deleteUser, getUser } = require("../Controllers/user");
router.put("/:id", verfityTokenAndAuthorization, updateUser);
router.delete("/:id", verfityTokenAndAuthorization, deleteUser);
router.get("/:id", verfityTokenAndAuthorization);
module.exports = router;
