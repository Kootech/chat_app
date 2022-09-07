import { useState, useEffect } from "react";

import ChatBody from "../components/ChatBody";
import ChatFooter from "../components/ChatFooter";
import ChatHeader from "../components/ChatHeader";
import { socket } from "../services/socket";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("response", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  return (
    <>
      <div>
        <ChatHeader socket={socket} />
        <ChatBody socket={socket} messages={messages} />
        <ChatFooter socket={socket} />
      </div>
    </>
  );
};

export default ChatPage;
