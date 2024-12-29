import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const signup = async (req, res) => {
	try {
		const { fullname, username, password, confirmPassword, gender } = req.body;
		if (password !== confirmPassword) {
			res.status(400).json({ error: "password missmatch" });
		}

		const userExist = await User.findOne({ username });
		if (userExist) {
			res.status(400).json({ error: "Username already exits" });
		}

		const salt = await bcryptjs.genSalt(10);
		const hashedPassword = await bcryptjs.hash(password, salt);

		const malePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const femalePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

		const newUser = new User({
			fullname,
			username,
			password: hashedPassword,
			gender,
			profilePic: gender == "male" ? malePic : femalePic,
		});
		if (newUser) {
			generateToken(newUser._id, res);
			await newUser.save();
			res.status(201).json(newUser);
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};

export const signin = async (req, res) => {
	try {
		const { username, password } = req.body;
		if (!username || !password) {
			res.status(400).json({ error: "All fields required" });
		}
		const user = await User.findOne({ username });
		if (!user) {
			res.status(400).json({ error: "User not found" });
		}
		const validPassword = await bcryptjs.compare(
			password,
			user?.password || ""
		);
		if (!validPassword) {
			res.status(400).json({ error: "Invalid password" });
		} else {
			generateToken(user._id, res);
			const { password: pass, ...rest } = user._doc;
			res.status(200).json(rest);
		}
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};

export const signout = (req, res) => {
	try {
		res.cookie("access_token", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};
