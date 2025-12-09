import React, { useEffect } from "react";
import { socket } from "../socket/socket";

const WebSocketPage = () => {


  useEffect(() => {
    socket.on("connect", () => {
      console.log("socket connected");
    });
    return () => {
      socket.off("connect");
    };
  }, []);

  const sendMessage = () => {
    socket.emit("message", "hi from client");
  };

  useEffect(() => {
    socket.on("recive_message", (data) => {
      alert("message from server:", data);
    });
  }, [socket]);

  return (
    <div>
      <h2>this is websocket page</h2>
      <button onClick={sendMessage}>send hi</button>
    </div>
  );
};

export default WebSocketPage;
