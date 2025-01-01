import useChats from "../../zustand/useChats";

type ChatProps = {
	key?: string;
	chat: { _id: string; username: string; fullname: string; profilePic: string };
	lastIdx: boolean;
};

const Chat = (props: ChatProps) => {
	const { chat, lastIdx } = props;

	const { selectedChat, setSelectedChat } = useChats();
	const isSelected = selectedChat?._id === chat._id;
	return (
		<>
			{
				<div
					onClick={() => setSelectedChat(chat)}
					className={`${
						isSelected && "bg-sky-500"
					} flex gap-2 items-center rounded p-2 py-1 cursor-pointer `}
				>
					<div className="avatar online">
						<div className="w-12 rounded-full">
							<img src={chat.profilePic} alt="user avatar" />
						</div>
					</div>

					<div className="flex flex-col flex-1">
						<div className="flex gap-3 justify-between">
							<p className="font-bold text-gray-200">{chat.fullname}</p>
							<span className="text-xl">🎃</span>
						</div>
					</div>
				</div>
			}

			{!lastIdx && <div className="divider my-0 py-0 h-1" />}
		</>
	);
};
export default Chat;
