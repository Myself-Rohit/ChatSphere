import { FormEvent, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useChats from "../../zustand/useChats";
import useGetChats from "../../hooks/useGetChats";
import { toast } from "react-toastify";

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
		<form onSubmit={handleSubmit} className="flex items-center gap-2">
			<input
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				type="text"
				placeholder="Search…"
				className="input input-bordered rounded-full bg-black"
			/>
			<button
				type="submit"
				className="btn btn-circle bg-sky-500 text-white text-2xl"
			>
				<IoSearchSharp />
			</button>
		</form>
	);
};
export default SearchInput;
