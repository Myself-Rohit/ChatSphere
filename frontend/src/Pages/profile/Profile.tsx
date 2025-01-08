import { FormEvent, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import useUpdateProfile from "../../hooks/useUpdateProfile";
import { Link } from "react-router";

function Profile() {
	const { authUser } = useAuthContext();
	const [formData, setFormData] = useState({
		id: authUser?._id,
		username: authUser?.username,
		fullname: authUser?.fullname,
		password: "",
	});
	const { loading, updateProfile } = useUpdateProfile();
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		updateProfile(formData);
	};
	return (
		<div className="flex flex-col items-center justify-center min-w-80 sm:min-w-96 mx-auto text-white">
			<div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
				<h1 className="text-3xl font-semibold  text-gray-300 flex justify-between items-center">
					<Link to="/" className=" w-10">
						<img src="https://img.icons8.com/?size=48&id=19175&format=png" />
					</Link>
					<div>
						Update <span className="text-blue-500"> Profile</span>
					</div>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className="label p-2">
							<span className="text-base label-text text-white ">
								Full Name
							</span>
						</label>
						<input
							value={formData?.fullname}
							onChange={(e) =>
								setFormData({ ...formData, fullname: e.target.value })
							}
							id="fullname"
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
							value={formData?.username}
							onChange={(e) =>
								setFormData({ ...formData, username: e.target.value })
							}
							id="username"
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
							value={formData?.password}
							onChange={(e) =>
								setFormData({ ...formData, password: e.target.value })
							}
							id="password"
							type="password"
							placeholder="Enter Password"
							className="w-full input input-bordered h-10 bg-black input-primary"
						/>
					</div>

					<div>
						<button
							type="submit"
							className="btn btn-block btn-sm btn-outline mt-2 btn-primary"
						>
							{loading ? (
								<span className="loading loading-spinner text-secondary"></span>
							) : (
								"Update"
							)}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Profile;
