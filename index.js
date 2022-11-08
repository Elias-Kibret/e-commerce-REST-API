const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI);
app.listen(PORT, () => {
	console.log(`Server is running on post ${PORT}`);
});
