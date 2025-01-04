import Chat from "./Chat";
import useChats from "../../hooks/useGetChats.ts";
import { CgSpinner } from "react-icons/cg";
import "../../App.css";

const Chats = () => {
	const { loading, chats } = useChats();

	return (
		<div className="py-2 flex flex-col overflow-auto scrollbar">
			{chats.map((chat, idx) => (
				<Chat key={chat._id} chat={chat} lastIdx={chats.length == idx} />
			))}

			{loading ? <CgSpinner /> : null}
		</div>
	);
};
export default Chats;
