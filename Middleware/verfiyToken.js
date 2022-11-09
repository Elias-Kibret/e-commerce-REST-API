const jwt = require("jsonwebtoken");

const verfiyToken = (req, res, next) => {
	const authHeader = req.header.token;
	if (authHeader) {
		jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
			if (err) {
				res.status(403).json("Token is not valid");
			} else {
				req.user = user;
				next();
			}
		});
	} else {
		res.status(401).jons;
	}
};

module.exports = verfiyToken;
