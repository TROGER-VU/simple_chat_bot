'use client';

import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../config";
import ActionProvider from "../ActionProvider";
import MessageParser from "../MessageParser";

const ChatComponent = () => {
  return (
    <div className="chatbot-page">
      <div className="chatbot-wrapper">
        <div className="chatbot-header">
          <h2>Card Advisor</h2>
          <p>Your personal financial assistant</p>
        </div>
        <div className="chatbot-container">
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
