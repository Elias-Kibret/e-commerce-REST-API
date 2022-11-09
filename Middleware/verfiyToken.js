const jwt = require("jsonwebtoken");

// VERFIY MIDDLEWARE JWT

const verfiyToken = (req, res, next) => {
	const authHeader = req.headers.token;
	if (authHeader) {
		const token = authHeader.split(" ")[1];
		jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
			if (err) {
				res.status(403).json("Token is not valid");
			} else {
				req.user = user;
				next();
			}
		});
	} else {
		res.status(401).json("Auth failed");
	}
};

// Elias Kibret

const verfityTokenAndAuthorization = (req, res, next) => {
	verfiyToken(req, res, () => {
		if (req.user.id === req.params.id || req.user.isAdmin) {
			next();
		} else {
			res.status(403).json("You are not allowed to update");
		}
	});
};
const verfityTokenAndAdmin = (req, res, next) => {
	verfiyToken(req, res, () => {
		if (req.user.isAdmin) {
			next();
		} else {
			res.status(403).json("You are not allowed to update");
		}
	});
};

module.exports = {
	verfiyToken,
	verfityTokenAndAuthorization,
	verfityTokenAndAdmin,
};
