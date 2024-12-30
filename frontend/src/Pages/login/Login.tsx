import React from "react";
import { Link } from "react-router";

function Login() {
	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="w-full p-6 bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 shadow-md ">
				<h1 className="text-3xl text-gray-300 font-semibold text-center">
					Login
					<span className="text-blue-500">ChatSphere</span>
				</h1>
				<form className="text-white">
					<div className="text-white">
						<label className="label p-2">
							<span className="text-base label-text text-white">Username</span>
						</label>
						<input
							type="text"
							placeholder="Enter username"
							className="w-full input input-bordered input-primary h-10 bg-black "
						/>
					</div>
					<div className="text-white">
						<label className="label p-2">
							<span className="text-base label-text text-white">Password</span>
						</label>
						<input
							type="text"
							placeholder="Enter password"
							className="w-full input input-bordered input-primary h-10 bg-black "
						/>
					</div>
					<Link
						to="/signup"
						className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block"
					>
						Don't have an account?
					</Link>

					<button className="btn btn-block btn-sm mt-2 btn-primary">
						Login
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
