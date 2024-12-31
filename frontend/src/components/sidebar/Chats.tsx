import Chat from "./Chat";
import useLogout from "../../hooks/useLogout.ts";

const Chats = () => {
	const { logout } = useLogout();
	const handleLogout = () => {
		logout();
	};

	return (
		<div className="py-2 flex flex-col overflow-auto">
			<Chat />
			<Chat />
			<Chat />
			<div onClick={handleLogout}>logout</div>
		</div>
	);
};
export default Chats;
