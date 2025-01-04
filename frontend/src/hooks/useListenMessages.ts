import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useChats from "../zustand/useChats.ts";

type Message = {
	_id: string;
	message: string;
	receiverId: string;
	senderId: string;
};

const useListenMessages = (): void => {
	const { socket } = useSocketContext();
	const { messages, setMessages } = useChats();

	useEffect(() => {
		socket?.on("newMessage", (newMessage: Message) => {
			setMessages([...messages, newMessage]);
		});
		return () => {
			socket?.off("newMessage");
		};
	}, [socket, messages, setMessages]);
};
export default useListenMessages;
