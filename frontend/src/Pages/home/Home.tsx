import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className="flex w-full h-[95vh] text-sm rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 container">
			<Sidebar />
			<div className="h-full w-full">
				<MessageContainer />
			</div>
		</div>
	);
};
export default Home;
