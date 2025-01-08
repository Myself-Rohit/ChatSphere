import { FormEvent, useState } from "react";
import useChats from "../../zustand/useChats.ts";
import useGetChats from "../../hooks/useGetChats.ts";
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/AuthContext.tsx";
import { Link } from "react-router";

type ChatType = {
	_id: string;
	fullname: string;
	username: string;
	gender: string;
	profilePic: string;
};

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { chats } = useGetChats();
	const { setSelectedChat } = useChats();
	const { authUser } = useAuthContext();
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!search) {
			return;
		}
		const searchChats = chats.find((chat: ChatType) => {
			return chat?.fullname.toLowerCase().includes(search?.toLowerCase());
		});

		if (searchChats) {
			setSelectedChat(searchChats);
			setSearch("");
		} else {
			toast.error("No user found");
		}
	};
	return (
		<form onSubmit={handleSubmit} className="flex items-center gap-2 w-full">
			<input
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				type="text"
				placeholder="Search…"
				className="input input-bordered rounded-full bg-black w-full"
			/>
			<Link
				to="/profile"
				className={`avatar hidden sm:inline-flex cursor-pointer`}
			>
				<div className="w-10 sm:w-12 rounded-full" title="profile">
					<img src={authUser?.profilePic} alt="user avatar" />
				</div>
			</Link>
		</form>
	);
};
export default SearchInput;
