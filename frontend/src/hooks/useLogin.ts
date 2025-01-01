import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();
	const login = async (formData: { username: string; password: string }) => {
		try {
			setLoading(true);
			const res = await fetch("/api/auth/signin", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.setItem("currentUser", JSON.stringify(data));
			setAuthUser(data);
			toast.success(`Wellcome back ${data.username}`);
		} catch (error: Error | any) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};
	return { loading, login };
};
export default useLogin;
