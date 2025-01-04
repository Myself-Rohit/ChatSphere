import Chats from "./Chats";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className="border-r border-slate-500 p-4 flex flex-col text-sm sm:text-base w-2/5 ">
			<SearchInput />
			<div className="divider px-3"></div>
			<Chats />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;
