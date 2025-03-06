import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ChatList from './components/ChatList';
import TypingArea from './components/TypingArea';
import './App.css';
import { predefinedResponses } from './data';

function App() {
  const [chats, setChats] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem("themeColor") || "dark_mode");

  useEffect(() => {
    document.body.classList.toggle("light_mode", theme === "light_mode");
  }, [theme]);

  const addMessage = (message, sender) => {
    setChats(prev => [...prev, { message, sender }]);
  };

  const handleUserMessage = (message) => {
    addMessage(message, "outgoing");

    setTimeout(() => {
      const response = predefinedResponses[message.toLowerCase()] || "I don't have a response for that yet.";
      addMessage(response, "incoming");
    }, 1000);
  };

  return (
    <>
      {chats.length === 0 && <Header handleSuggestionClick={handleUserMessage} />}
      <ChatList chats={chats} />
      <TypingArea
        onSendMessage={handleUserMessage}
        toggleTheme={() => {
          const newTheme = theme === "dark_mode" ? "light_mode" : "dark_mode";
          setTheme(newTheme);
          localStorage.setItem("themeColor", newTheme);
        }}
        clearChats={() => setChats([])}
        currentTheme={theme}
      />

    </>
  );
}

export default App;
