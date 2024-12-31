import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";

type formDataProps = {
	fullname: string;
	username: string;
	password: string;
	confirmPassword: string;
	gender: string;
};

const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();
	const signup = async (props: formDataProps) => {
		try {
			setLoading(true);
			const res = await fetch("http://localhost:7000/api/auth/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(props),
			});
			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			toast.success("Signup Successfull!");
			localStorage.setItem("currentUser", JSON.stringify(data));
			setAuthUser(data);
		} catch (error: Error | any) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};
	return { loading, signup };
};

export default useSignup;
