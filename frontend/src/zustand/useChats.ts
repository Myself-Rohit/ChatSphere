import { create } from "zustand";

type Chat = {
	_id: string;
	username: string;
	fullname: string;
	profilePic: string;
} | null;
type Message =
	| {
			senderId: string;
			receiverId: string;
			message: string;
	  }
	| any;

type Store = {
	selectedChat: Chat | null;
	setSelectedChat: (selectedChat: Chat) => void;
	messages: Message | null;
	setMessages: (message: Message) => void;
};

const useChats = create<Store>((set) => ({
	selectedChat: null,
	setSelectedChat: (selectedChat) => set({ selectedChat }),
	messages: null,
	setMessages: (messages) => set({ messages }),
}));
export default useChats;
