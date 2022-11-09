const router = require("express").Router();
const {
	verfityTokenAndAuthorization,
	verfiyToken,
} = require("../Middleware/verfiyToken");
const { updateUser } = require("../Controllers/user");
router.put("/:id", verfityTokenAndAuthorization, updateUser);
module.exports = router;
