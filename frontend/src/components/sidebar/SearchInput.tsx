import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
	return (
		<form className="flex items-center gap-2">
			<input
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
