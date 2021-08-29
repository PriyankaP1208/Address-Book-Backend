const jwt = require("jsonwebtoken");

class Helper {
	generateAccessToken(data){
		return jwt.sign(data, process.env.TOKEN_SECRET);
	}

	verifyToken(req, res, next) {
		let token = req.get("token");
		if(token)
		{
			jwt.verify(token, process.env.TOKEN_SECRET, (error) => {
				if(error){
					return res.status(400).send({
						success: false,
						message:"Invalid token!"
					});
				}
				else {
					next();
				}
			});
		}else {
			return res.status(401).send({
				success: false,
				message:"Unauthorized token",
			});
		}
	}
}

module.exports = new Helper();