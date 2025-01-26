import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "Card Advisor",
  initialMessages: [
    createChatBotMessage("Hi there! I'm here to assist with your financial queries. Ask me about credit cards, stocks, and more!")
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#5a9",
      borderRadius: "12px",
    },
    chatButton: {
      backgroundColor: "#5a9",
      borderRadius: "50%",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
  },
  widgets: [],
};

export default config;
