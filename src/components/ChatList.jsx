import React from 'react';
import userIcon from '../assets/user.svg';
import reactIcon from '../assets/react.svg';

const ChatList = ({ chats, chatListRef }) => {
    return (
        <div ref={chatListRef} className="chat-list"> {/* Add the ref to the div */}
            {chats.map((chat, index) => (
                <div key={index} className={`message ${chat.sender}`}>
                    <div className="message-content">
                        <img className="avatar" src={chat.sender === 'outgoing' ? userIcon : reactIcon} alt={`${chat.sender} avatar`} />
                        <p className="text">{chat.message}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChatList;
