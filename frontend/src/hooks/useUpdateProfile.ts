import { useState } from "react";
import { toast } from "react-toastify";

type UserProp = {
	id: string | undefined;
	username: string | undefined;
	fullname: string | undefined;
	password: string;
};
const useUpdateProfile = () => {
	const [loading, setLoading] = useState(false);
	const updateProfile = async ({ ...formData }: UserProp) => {
		try {
			setLoading(true);
			const res = await fetch(`api/users/update/${formData.id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			toast.success("Profile updated successfully");
		} catch (error: Error | any) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};
	return { loading, updateProfile };
};

export default useUpdateProfile;
