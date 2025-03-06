import React from 'react';
import { SlPlus } from "react-icons/sl";


const Header = ({ handleSuggestionClick }) => {
    const suggestions = [
        "Can you help me understand the latest advancements in artificial intelligence",
        "What are the best tips to improve my public speaking skills?",
        "Can you help me find the latest news on web development?",
        "Write JavaScript code to sum all elements in an array."
    ];

    return (
        <header className="header">
            <h1 className="title">Hello, there</h1>
            <h3 className="title">I'm ASK IT</h3>
            <p className="subtitle">How can I help you today?</p>
            <ul className="suggestion-list">
                {suggestions.map((text, index) => (
                    <li className="suggestion" key={index} onClick={() => handleSuggestionClick(text)}>
                        <h4 className="text">{text}</h4>
                        <SlPlus className="icon" />
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default Header;
