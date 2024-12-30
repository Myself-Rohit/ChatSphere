import User from "../models/user.model.js";
export const getUser = async (req, res) => {
	const allUsers = await User.find({}).select("-password");
	if (!allUsers) {
		res.status(500).json({ error: "No users found" });
	}
	res.status(200).json(allUsers);
	try {
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};
