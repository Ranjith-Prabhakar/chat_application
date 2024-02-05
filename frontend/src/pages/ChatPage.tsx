import React, { useEffect } from "react";
import axios from 'axios'


const ChatPage = () => {
 
  const fetchChat = async () => {
    const response = await axios.get(`http://localhost:8000/api/chats`);
    console.log(response);
  };
  useEffect(()=>{fetchChat()},[])
  return <div>ChatPage</div>;
};

export default ChatPage;
