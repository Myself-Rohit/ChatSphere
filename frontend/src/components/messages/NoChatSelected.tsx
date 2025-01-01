import { BiChat } from "react-icons/bi";

function NoChatSelected() {
	return (
		<div className="p-10 flex flex-col items-center justify-center h-full">
			<h1 className="text-lg">Welcome 👋 JOHN ❄️</h1>
			<p className="">Select a chat to start messaging</p>
			<span className="text-5xl">
				<BiChat />
			</span>
		</div>
	);
}

export default NoChatSelected;
