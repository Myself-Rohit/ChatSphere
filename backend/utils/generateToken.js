import jwt from "jsonwebtoken";
const generateToken = (id, res) => {
	const token = jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: "30d",
	});
	res.cookie("access_token", token, {
		maxAge: 30 * 24 * 60 * 60 * 1000,
		httpOnly: true,
		sameSite: "strict",
		secure: process.env.NODE_ENV !== "development",
	});
};
export default generateToken;
