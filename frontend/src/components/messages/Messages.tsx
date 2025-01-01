import useGetMessages from "../../hooks/useGetMessages";
// import Message from "./Message";

const Messages = () => {
	const { messages } = useGetMessages();
	console.log(messages);
	return (
		<div className="px-4 flex-1 overflow-auto">
			{/* {messages.map(() => (
				<Message />
			))} */}
		</div>
	);
};
export default Messages;
