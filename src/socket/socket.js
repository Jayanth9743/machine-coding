import { io } from "socket.io-client";

export const socket = io("http://localhost:5000", {
  autoConnect: true,   // default
  reconnection: true,  // default
  reconnectionAttempts: Infinity,
  reconnectionDelay: 1000,
});