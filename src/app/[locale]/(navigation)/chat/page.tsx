'use client';

import { useEffect, useState } from 'react';
import { socket } from '@/lib/socket'; // Adjust path based on your project structure

export default function ChatPage() {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState<(string | { text: string; timestamp: string })[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // 1. Manually connect when the component mounts
    socket.connect();

    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onReceiveMessage(data: any) {
      setChatLog((prev) => [...prev, data]);
    }

    // 2. Set up event listeners
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('receive_message', onReceiveMessage);

    // 3. Clean up listeners and disconnect on unmount
    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('receive_message', onReceiveMessage);
      socket.disconnect();
    };
  }, []);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const messageData = { text: message, timestamp: new Date().toLocaleTimeString() };
      
      // Emit event to Express backend
      socket.emit('send_message', messageData);
      
      // Optimistically add it to our own chat log
      setChatLog((prev) => [...prev, `You: ${message}`]);
      setMessage('');
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '500px' }} dir="ltr">
      <h1>Next.js Client + Express Backend</h1>
      <p>Status: {isConnected ? '🟢 Connected' : '🔴 Disconnected'}</p>

      <form onSubmit={sendMessage} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          style={{ padding: '0.5rem', width: '70%', marginRight: '0.5rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Send</button>
      </form>

      <div style={{ border: '1px solid #ccc', padding: '1rem', height: '300px', overflowY: 'auto' }}>
        <h3>Messages:</h3>
        <ul>
          {chatLog.map((msg, index) => (
            <li key={index}>
              {typeof msg === 'string' ? msg : `${msg.timestamp}: ${msg.text}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}