import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useChats from "../zustand/useChats";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { selectedChat, messages, setMessages } = useChats();
	useEffect(() => {
		const getMessage = async () => {
			setLoading(true);
			try {
				const res = await fetch(`/api/messages/${selectedChat?._id}`);
				const data = await res.json();
				console.log(data);
				if (data.error) {
					throw new Error(data.error);
				}
				setMessages(data);
			} catch (error: Error | any) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};
		if (selectedChat?._id) {
			getMessage();
		}
	}, [selectedChat?._id]);

	return { loading, messages };
};

export default useGetMessages;
