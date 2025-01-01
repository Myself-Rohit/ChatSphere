import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";

const Messages = () => {
	const { loading, messages } = useGetMessages();
	const latestMessage = useRef<HTMLDivElement>(null);
	useEffect(() => {
		setTimeout(() => {
			latestMessage.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);
	return (
		<div className="px-4 flex-1 overflow-auto">
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
