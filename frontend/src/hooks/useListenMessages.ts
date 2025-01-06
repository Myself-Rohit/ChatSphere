import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useChats from "../zustand/useChats.ts";
import notification from "../assets/notification.mp3";

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
			const sound = new Audio(notification);
			sound.play();
		});
		return () => {
			socket?.off("newMessage");
		};
	}, [socket, messages, setMessages]);
};
export default useListenMessages;
