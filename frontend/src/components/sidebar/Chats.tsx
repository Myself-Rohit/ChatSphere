import Chat from "./Chat";
import useChats from "../../hooks/useGetChats";
import { CgSpinner } from "react-icons/cg";

const Chats = () => {
	const { loading, chats } = useChats();

	return (
		<div className="py-2 flex flex-col overflow-auto">
			{chats.map((chat, idx) => (
				<Chat chat={chat} lastIdx={chats.length == idx} />
			))}

			{loading ? <CgSpinner /> : null}
		</div>
	);
};
export default Chats;
