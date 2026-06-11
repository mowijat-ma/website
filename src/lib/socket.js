import { io } from 'socket.io-client';

// Connect to your Express backend URL
const BACKEND_URL = 'http://localhost:8001';

export const socket = io(BACKEND_URL, {
  autoConnect: false, // Don't connect until we explicitly ask
});