import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const fetchats = async () => {
    try {
      const data = await axios.get("/api/chat");
      setChats(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchats();
  }, []);

  return (
    <div>
      {chats?.map((chat, index) => (
        <div key={chat.id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
