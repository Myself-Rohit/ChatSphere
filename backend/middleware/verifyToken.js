import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const verifyToken = async (req, res, next) => {
	try {
		const token = req.cookies.access_token;
		if (!token) {
			return res
				.status(400)
				.json({ error: "Unauthorized - No Token Provided" });
		}
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		if (!decoded) {
			return res.status(401).json({ error: "Unauthorized - Invalid Token" });
		}
		const user = await User.findById(decoded.id).select("-password");

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}
		res.user = user;
		next();
	} catch (error) {
		return res.status(500).json({ error: "Internal server error" });
	}
};

export default verifyToken;
