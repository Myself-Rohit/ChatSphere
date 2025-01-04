import React, { createContext, useContext, useState, ReactNode } from "react";

type User = {
	_id: string;
	fullname: string;
	username: string;
	gender: string;
	profilePic: string;
};

type AuthContextType = {
	authUser: User | null;
	setAuthUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined
);

export const useAuthContext = (): AuthContextType => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error(
			"useAuthContext must be used within an AuthContextProvider"
		);
	}
	return context;
};

type AuthContextProviderProps = {
	children: ReactNode;
};

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
	children,
}) => {
	const [authUser, setAuthUser] = useState<User | null>(
		JSON.parse(localStorage.getItem("currentUser") || "null") as User | null
	);

	return (
		<AuthContext.Provider value={{ authUser, setAuthUser }}>
			{children}
		</AuthContext.Provider>
	);
};
