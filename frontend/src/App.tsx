import { Navigate, Route, Routes } from "react-router";
import Login from "./Pages/login/Login";
import SignUp from "./Pages/signup/signUp";
import Home from "./Pages/home/Home";
import { ToastContainer } from "react-toastify";
import { useAuthContext } from "./context/AuthContext";

function App() {
	const { authUser } = useAuthContext();
	return (
		<div className="p-4 min-h-screen flex text-white">
			<Routes>
				<Route path="/" element={authUser ? <Home /> : <Login />} />
				<Route
					path="/signup"
					element={authUser ? <Navigate to="/" /> : <SignUp />}
				/>
				<Route
					path="/login"
					element={authUser ? <Navigate to="/" /> : <Login />}
				/>
			</Routes>
			<ToastContainer />
		</div>
	);
}

export default App;
