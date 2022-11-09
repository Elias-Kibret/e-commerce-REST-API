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

const verfityTokenAndAuthorization = (req, res, next) => {
	verfiyToken(req, res, () => {
		if (req.user.id === req.params.id || req.user.isAdmin) {
			next();
		} else {
			res.status(403).json("You are not allowed to update");
		}
	});
};
module.exports = { verfiyToken, verfityTokenAndAuthorization };
