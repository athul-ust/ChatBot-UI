// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import Header from './components/Header';
// import ChatList from './components/ChatList';
// import TypingArea from './components/TypingArea';
// import './App.css';
// import { predefinedResponses } from './data';

// function App() {
//   const [chats, setChats] = useState([]);
//   const [theme, setTheme] = useState(localStorage.getItem("themeColor") || "dark_mode");
//   const chatListRef = useRef(null);

//   useEffect(() => {
//     document.body.classList.toggle("light_mode", theme === "light_mode");
//   }, [theme]);

//   useEffect(() => {
//     // Auto scroll the chat list when new messages are added
//     if (chatListRef.current) {
//       chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
//     }
//   }, [chats]);

//   const addMessage = (message, sender) => {
//     setChats(prev => [...prev, { message, sender }]);
//   };

//   const handleUserMessage = async (message) => {
//     addMessage(message, "outgoing");

//     try {
//       const response = await axios.post('http://127.0.0.1:5000/api/message', {
//         message
//       });
//       addMessage(response.data.response, "incoming");
//     } catch (error) {
//       addMessage("Error: Could not connect to the server.", "incoming");
//     }
//   };

//   return (
//     <>
//       {chats.length === 0 && <Header handleSuggestionClick={handleUserMessage} />}
//       <ChatList chats={chats} />
//       <TypingArea
//         onSendMessage={handleUserMessage}
//         toggleTheme={() => {
//           const newTheme = theme === "dark_mode" ? "light_mode" : "dark_mode";
//           setTheme(newTheme);
//           localStorage.setItem("themeColor", newTheme);
//         }}
//         clearChats={() => setChats([])}
//         currentTheme={theme}
//       />
//     </>
//   );
// }

// export default App;


///////////////////////////////



import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ChatList from './components/ChatList';
import TypingArea from './components/TypingArea';
import './App.css';
import { predefinedResponses } from './data';

function App() {
  const [chats, setChats] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem("themeColor") || "dark_mode");
  const chatListRef = useRef(null); // Keep the reference for scrolling

  useEffect(() => {
    document.body.classList.toggle("light_mode", theme === "light_mode");
  }, [theme]);

  useEffect(() => {
    // Auto scroll the chat list when new messages are added
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, [chats]);

  const addMessage = (message, sender) => {
    setChats(prev => [...prev, { message, sender }]);
  };

  const handleUserMessage = async (message) => {
    addMessage(message, "outgoing");

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/message', {
        message
      });
      addMessage(response.data.response, "incoming");
    } catch (error) {
      addMessage("Error: Could not connect to the server.", "incoming");
    }
  };

  return (
    <>
      {chats.length === 0 && <Header handleSuggestionClick={handleUserMessage} />}
      {/* Pass the chatListRef to ChatList */}
      <ChatList chats={chats} chatListRef={chatListRef} />
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
