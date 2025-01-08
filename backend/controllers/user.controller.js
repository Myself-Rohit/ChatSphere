import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
export const getUser = async (req, res) => {
	const allUsers = await User.find({ _id: { $ne: res.user._id } }).select(
		"-password"
	);
	if (!allUsers) {
		res.status(500).json({ error: "No users found" });
	}
	res.status(200).json(allUsers);
	try {
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};

export const updateProfile = async (req, res, next) => {
	try {
		const { fullname, username, password } = req.body;
		if (!fullname || !username || !password) {
			return res.status(400).json({ error: "All fields required" });
		}
		if (res.user._id != req.params.userId) {
			return next(errorHandler(403, "You are not allowed to update this user"));
		}
		const salt = await bcryptjs.genSalt(10);
		const hashedPassword = await bcryptjs.hash(password, salt);

		const updateUser = await User.findByIdAndUpdate(
			req.params.userId,
			{
				$set: {
					fullname,
					username,
					password: hashedPassword,
				},
			},
			{ new: true }
		);

		const { password: pass, ...rest } = updateUser._doc;

		return res.status(201).json(rest);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};
