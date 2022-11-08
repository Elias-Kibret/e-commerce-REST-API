const router = require("express").Router();
const userModel = require("../Model/user");
const { registerUser } = require("../Controllers/auth");
//Register
router.post("/register", registerUser);
module.exports = router;
