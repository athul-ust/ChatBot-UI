import React from 'react';
import '../App.css';

const Message = ({ content, type }) => {
    return (
        <div className={`message ${type}`}>
            <div className="message-content">
                <img className="avatar" src={type === 'outgoing' ? '/images/user.jpg' : '/images/gemini.svg'} alt="Avatar" />
                <p className="text">{content}</p>
            </div>
        </div>
    );
};

export default Message;
