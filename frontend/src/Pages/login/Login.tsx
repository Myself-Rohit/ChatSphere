import { Link } from "react-router";
import useLogin from "../../hooks/useLogin";
import { FormEvent, FormEventHandler, useState } from "react";

function Login() {
	const { loading, login } = useLogin();
	const [formData, setFormData] = useState({ username: "", password: "" });
	const handleSubmit: FormEventHandler<HTMLFormElement> = (
		e: FormEvent
	): void => {
		e.preventDefault();
		login(formData);
	};
	return (
		<div className="flex flex-col items-center justify-center sm:min-w-96 mx-auto">
			<div className="w-full p-6 bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 shadow-md ">
				<h1 className="text-3xl text-gray-300 font-semibold text-center">
					Login
					<span className="text-blue-500">ChatSphere</span>
				</h1>
				<form onSubmit={handleSubmit} className="text-white">
					<div className="text-white">
						<label className="label p-2">
							<span className="text-base label-text text-white">Username</span>
						</label>
						<input
							onChange={(e) =>
								setFormData({ ...formData, username: e.target.value })
							}
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
							onChange={(e) =>
								setFormData({ ...formData, password: e.target.value })
							}
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
						{loading ? (
							<span className="loading loading-spinner text-secondary"></span>
						) : (
							"Login"
						)}
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
