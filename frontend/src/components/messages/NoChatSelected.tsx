import { BiChat } from "react-icons/bi";
import { useAuthContext } from "../../context/AuthContext";

function NoChatSelected() {
	const { authUser } = useAuthContext();
	return (
		<div className="p-10 flex flex-col items-center justify-center h-full">
			<h1 className="text-lg">Welcome 👋 {authUser?.fullname} ❄️</h1>
			<p className="">Select a chat to start messaging</p>
			<span className="text-5xl">
				<BiChat />
			</span>
		</div>
	);
}

export default NoChatSelected;
