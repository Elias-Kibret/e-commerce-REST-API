const router = require("express").Router();
const userModel = require("../Model/user");
const { registerUser, login } = require("../Controllers/auth");
//Register
router.post("/register", registerUser);
router.post("/login", login);
module.exports = router;
