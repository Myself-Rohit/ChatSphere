import { Route, Routes } from "react-router";
import Login from "./Pages/login/Login";
import SignUp from "./Pages/signup/signUp";
import Home from "./Pages/home/Home";

function App() {
	return (
		<div className="p-4 min-h-screen flex justify-center items-center text-white">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
