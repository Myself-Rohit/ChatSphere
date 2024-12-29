import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import generateToken from "../utils/generateToken.js";
//  "fullname":"user name2",
//     "username":"user2name",
//     "password":"user2pass",
//     "confirmPassword":"user2pass",
//     "gender":"male"
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
		res.status(400).json({ error: "Internal server error" });
	}
};
