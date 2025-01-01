import { useState } from "react";
import { toast } from "react-toastify";
import useChats from "../zustand/useChats";

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const { selectedChat, messages, setMessages } = useChats();

	const sendMessage = async (message: string) => {
		try {
			setLoading(true);
			const res = await fetch(`/api/messages/send/${selectedChat?._id}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ message }),
			});
			const data = await res.json();

			if (data.error) {
				throw new Error(data.error);
			}
			setMessages([...messages, data]);
		} catch (error: Error | any) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, sendMessage };
};
export default useSendMessage;
