import { Link } from "react-router";
import GenderCheckbox from "./GenderCheckbox";
import { FC, useState } from "react";
import useSignup from "../../hooks/useSignup.ts";

const SignUp: FC = () => {
	const [formData, setFormData] = useState({
		fullname: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
		e: React.FormEvent<HTMLFormElement>
	): void => {
		e.preventDefault();
		signup(formData);
	};

	const handleCheckbox = (gender: string): void => {
		setFormData({ ...formData, gender });
	};
	return (
		<div className="flex flex-col items-center justify-center sm:min-w-96 sm:mx-auto text-white">
			<div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
				<h1 className="text-3xl font-semibold text-center text-gray-300">
					Sign Up <span className="text-blue-500"> ChatSphere</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className="label p-2">
							<span className="text-base label-text text-white ">
								Full Name
							</span>
						</label>
						<input
							onChange={(e) => handleChange(e)}
							name="fullname"
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
							onChange={(e) => handleChange(e)}
							name="username"
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
							onChange={(e) => handleChange(e)}
							name="password"
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
							onChange={(e) => handleChange(e)}
							name="confirmPassword"
							type="password"
							placeholder="Confirm Password"
							className="w-full input input-bordered h-10 bg-black input-primary"
						/>
					</div>

					<GenderCheckbox
						onCheckboxClick={handleCheckbox}
						selectedGender={formData.gender}
					/>

					<Link
						to="/login"
						className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
					>
						Already have an account?
					</Link>

					<div>
						<button
							type="submit"
							className="btn btn-block btn-sm mt-2 btn-primary"
						>
							{loading ? (
								<span className="loading loading-spinner text-secondary"></span>
							) : (
								"Sign Up"
							)}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;
