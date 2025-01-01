import { BiLogOut } from "react-icons/bi";
import useLogut from "../../hooks/useLogout";

const LogoutButton = () => {
	const { logout } = useLogut();
	const handleLogout = () => {
		logout();
	};
	return (
		<button
			onClick={handleLogout}
			className="mt-auto cursor-pointer text-white text-4xl max-w-min"
		>
			<BiLogOut />
		</button>
	);
};
export default LogoutButton;
