import { io, Socket } from "socket.io-client";
import {
	createContext,
	useContext,
	useEffect,
	useState,
	ReactNode,
} from "react";
import { useAuthContext } from "./AuthContext";

interface SocketContextType {
	socket: Socket | null;
	onlineUsers: string[];
}

const SocketContext = createContext<SocketContextType | null>(null);

export const useSocketContext = (): SocketContextType => {
	const context = useContext(SocketContext);
	if (!context) {
		throw new Error(
			"useSocketContext must be used within a SocketContextProvider"
		);
	}
	return context;
};

interface SocketContextProviderProps {
	children: ReactNode;
}

export const SocketContextProvider: React.FC<SocketContextProviderProps> = ({
	children,
}) => {
	const [socket, setSocket] = useState<Socket | null>(null);
	const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
	const { authUser } = useAuthContext();

	useEffect(() => {
		if (authUser) {
			const newSocket = io("https://chatsphere-ow2i.onrender.com", {
				query: { userId: authUser._id },
			});
			setSocket(newSocket);

			newSocket.on("getOnlineUsers", (users: string[]) => {
				setOnlineUsers(users);
			});

			return () => {
				newSocket.close();
				setSocket(null);
			};
		} else if (socket) {
			socket.close();
			setSocket(null);
		}
	}, [authUser]);

	return (
		<SocketContext.Provider value={{ socket, onlineUsers }}>
			{children}
		</SocketContext.Provider>
	);
};
