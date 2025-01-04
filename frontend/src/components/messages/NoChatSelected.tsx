import { BiChat } from "react-icons/bi";
import { useAuthContext } from "../../context/AuthContext";

function NoChatSelected() {
	const { authUser } = useAuthContext();
	return (
		<div className="p-10 flex flex-col items-center justify-center absolute top-48 w-full">
			<h1 className="text-lg">Welcome 👋 {authUser?.fullname} ❄️</h1>
			<p className="">Select a chat to start messaging</p>
			<span className="text-5xl mx-auto">
				<BiChat />
			</span>
		</div>
	);
}

export default NoChatSelected;
