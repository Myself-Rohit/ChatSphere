import useChats from "../../zustand/useChats.ts";
import Messages from "./Messages";
import MessageInput from "./MessagesInput";
import NoChatSelected from "./NoChatSelected";

const MessageContainer = () => {
	const { selectedChat } = useChats();
	return (
		<div className="md:min-w-[450px] flex flex-col relative ">
			{!selectedChat ? (
				<NoChatSelected />
			) : (
				<>
					<div className="bg-slate-500 p-4 mb-2 fixed z-10 w-full text-start">
						<span className="label-text">To:</span>{" "}
						<span className="text-gray-900 font-bold">
							{selectedChat?.fullname}
						</span>
					</div>

					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;
