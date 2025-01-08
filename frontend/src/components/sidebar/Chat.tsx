import { useSocketContext } from "../../context/SocketContext";
import useChats from "../../zustand/useChats.ts";

type ChatProps = {
	chat: { _id: string; username: string; fullname: string; profilePic: string };
	lastIdx: boolean;
};

const Chat = (props: ChatProps) => {
	const { chat, lastIdx } = props;
	const { selectedChat, setSelectedChat } = useChats();
	const isSelected = selectedChat?._id === chat._id;
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(chat._id);
	return (
		<>
			{
				<div
					onClick={() => setSelectedChat(chat)}
					className={`flex gap-2 items-center rounded p-2 py-1 cursor-pointer border-y border-[rgba(40,56,81,0.09)] ${
						isSelected ? "bg-sky-500" : " hover:border-sky-500"
					} `}
				>
					<div className={`avatar ${isOnline ? "online" : ""}`}>
						<div className="w-10 sm:w-12 rounded-full">
							<img src={chat.profilePic} alt="user avatar" />
						</div>
					</div>

					<div className="flex flex-col flex-1">
						<div className="flex gap-3 justify-between">
							<p className="font-bold text-gray-200">{chat.fullname}</p>
							<span className="text-xl hidden sm:block">💬</span>
						</div>
					</div>
				</div>
			}

			{!lastIdx && <div className="divider my-0 py-0 h-1" />}
		</>
	);
};
export default Chat;
