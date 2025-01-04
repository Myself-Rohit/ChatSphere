import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages.ts";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages.ts";

const Messages = () => {
	const { loading, messages } = useGetMessages();
	useListenMessages();
	const latestMessage = useRef<HTMLDivElement>(null);
	useEffect(() => {
		setTimeout(() => {
			latestMessage.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);
	return (
		<div className="px-4 pt-20 h-[85vh] overflow-auto scrollbar">
			{!loading &&
				messages &&
				messages.map((message: any) => (
					<div key={message._id} ref={latestMessage}>
						<Message message={message} />
					</div>
				))}
			{!loading && messages?.length == 0 && (
				<p>Send a message to start the conversation</p>
			)}
		</div>
	);
};
export default Messages;
