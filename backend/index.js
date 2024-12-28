import dotenv from "dotenv";
import express from "express";
import authRoute from "./routes/auth.route.js";
import connectMongoDB from "./db/connectMongoDB.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 7001;
app.use("api/auth", authRoute);
app.listen(PORT, () => {
	connectMongoDB();
	console.log(`Server started! at port: ${PORT}`);
});
