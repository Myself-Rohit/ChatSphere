import { useAuthContext } from "../../context/AuthContext";
import useChats from "../../zustand/useChats.ts";
import moment from "moment";
type MessageProp =
	| {
			senderId: string;
			receiverId: string;
			message: string;
	  }
	| any;
const Message = ({ message }: MessageProp) => {
	const { authUser } = useAuthContext();
	const { selectedChat } = useChats();
	const isSenderMsg = authUser?._id === message?.senderId;
	const styleChat = isSenderMsg ? "chat-end" : "chat-start";
	const profilePic = isSenderMsg
		? authUser?.profilePic
		: selectedChat?.profilePic;
	const styleBg = isSenderMsg ? "bg-blue-500" : "";
	return (
		<div className={`chat ${styleChat}`}>
			<div className="chat-image avatar">
				<div className="w-7 sm:w-10 rounded-full">
					<img alt="Tailwind CSS chat bubble component" src={profilePic} />
				</div>
			</div>
			<div
				className={`chat-bubble ${styleBg} p-2 text-sm sm:text-base md:text-lg`}
			>
				{message.message}
			</div>
			<time className="text-xs opacity-50">
				{moment(message.createdAt).format("h:mm A")}
			</time>
		</div>
	);
};

export default Message;
