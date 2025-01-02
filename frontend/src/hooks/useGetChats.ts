import { useEffect, useState } from "react";
import { toast } from "react-toastify";
type ChatType = {
	_id: string;
	fullname: string;
	username: string;
	gender: string;
	profilePic: string;
};

const useGetChats = () => {
	const [loading, setLoading] = useState(false);
	const [chats, setChats] = useState<ChatType[]>([]);

	useEffect(() => {
		const getChats = async () => {
			try {
				setLoading(true);
				const res = await fetch("/api/users/getusers", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				});
				const data = await res.json();
				if (data.error) {
					throw new Error(data.error);
				}
				setChats(data);
			} catch (error: Error | any) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};
		getChats();
	}, []);
	return { loading, chats, setChats };
};
export default useGetChats;
