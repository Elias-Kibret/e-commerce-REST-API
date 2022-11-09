const router = require("express").Router();
const verfityToken = require("../Middleware/verfiyToken");
const { updateUser } = require("../Controllers/user");
router.put("/:id", verfityToken, updateUser);
module.exports = router;
