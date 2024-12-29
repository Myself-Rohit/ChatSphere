import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
export const sendMessage = async (req, res) => {
	try {
		const senderId = res.user._id;
		const receiverId = req.params.id;
		const { message } = req.body;

		let conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		});

		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, receiverId],
			});
		}
		const newMessage = new Message({
			senderId,
			receiverId,
			message,
		});
		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}

		await Promise.all([conversation.save(), newMessage.save()]);
		res.status(201).json(newMessage);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};

export const getMessage = async (req, res) => {
	try {
		const senderId = res.user._id;
		const receiverId = req.params.id;

		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		}).populate("messages");

		if (!conversation) {
			res.status(400).json({ error: "No conversation found" });
		}
		res.status(200).json(conversation.messages);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};
