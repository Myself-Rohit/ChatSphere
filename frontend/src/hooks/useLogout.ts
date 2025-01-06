import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const useLogut = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();
	const logout = async () => {
		try {
			setLoading(true);
			const res = await fetch("/api/auth/signout", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.removeItem("currentUser");
			setAuthUser(null);
			toast.success("Logged out successfully");
		} catch (error: Error | any) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};
	return { loading, logout };
};

export default useLogut;
