import React, { useState } from 'react';
import { BsSun, BsMoon, BsTrash, BsSendFill } from 'react-icons/bs';

const TypingArea = ({ onSendMessage, toggleTheme, clearChats, currentTheme }) => {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage("");
        }
    };

    return (
        <div className="typing-area">
            <form className="typing-form" onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <input
                        type="text"
                        placeholder="Feel free to ask your question here    "
                        className="typing-input"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button type="submit" className="icon1">
                        <BsSendFill size={25} />
                    </button>
                </div>
                <div className="action-buttons">
                    <span onClick={toggleTheme} className="icon">
                        {currentTheme === "light_mode" ? <BsMoon size={24} /> : <BsSun size={24} />}
                    </span>
                    <span onClick={clearChats} className="icon">
                        <BsTrash size={24} />
                    </span>
                </div>
            </form>
            <p className="disclaimer-text">Bot may display inaccurate info, so double-check its responses.</p>
        </div>
    );
};

export default TypingArea;
