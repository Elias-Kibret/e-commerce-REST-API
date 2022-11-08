const router = require("express").Router();
const userModel = require("../Model/user");
const authController = require("../Controllers/auth");
//Register
router.post("/register", authController);
module.exports = router;
