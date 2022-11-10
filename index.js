const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const userRoute = require("./Routes/user");
const authRoute = require("./Routes/auth");
const productRoute = require("./Routes/product");
const cartRouter = require("./Routes/cart");
dotenv.config();

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI, () => {
	console.log("Connected to DB");
});
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRouter);
app.listen(PORT, () => {
	console.log(`Server is running on post ${PORT}`);
});
