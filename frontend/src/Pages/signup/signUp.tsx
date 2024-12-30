import { Link } from "react-router";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto text-white">
			<div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
				<h1 className="text-3xl font-semibold text-center text-gray-300">
					Sign Up <span className="text-blue-500"> ChatSphere</span>
				</h1>

				<form>
					<div>
						<label className="label p-2">
							<span className="text-base label-text text-white ">
								Full Name
							</span>
						</label>
						<input
							type="text"
							placeholder="Enter Full Name"
							className="w-full input input-bordered h-10 bg-black input-primary"
						/>
					</div>

					<div>
						<label className="label p-2 ">
							<span className="text-base label-text text-white">Username</span>
						</label>
						<input
							type="text"
							placeholder="Enter username"
							className="w-full input input-bordered h-10 bg-black input-primary"
						/>
					</div>

					<div>
						<label className="label">
							<span className="text-base label-text text-white">Password</span>
						</label>
						<input
							type="password"
							placeholder="Enter Password"
							className="w-full input input-bordered h-10 bg-black input-primary"
						/>
					</div>

					<div>
						<label className="label">
							<span className="text-base label-text text-white">
								Confirm Password
							</span>
						</label>
						<input
							type="password"
							placeholder="Confirm Password"
							className="w-full input input-bordered h-10 bg-black input-primary"
						/>
					</div>

					<GenderCheckbox />

					<Link
						to="/login"
						className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
					>
						Already have an account?
					</Link>

					<div>
						<button className="btn btn-block btn-sm mt-2 btn-primary">
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;
