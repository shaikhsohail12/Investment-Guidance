import React, { useState } from 'react';
const { GoogleGenerativeAI } = require('@google/generative-ai'); // Make sure you have this package installed

const Chatbot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Clear previous messages and add user message to the chat
        setMessages([{ sender: 'user', text: input }]);

        // Generate response from Google Generative AI
        try {
            const apiKey = ''; // Replace with your actual API key
            const genAi = new GoogleGenerativeAI(apiKey);
            const model = genAi.getGenerativeModel({
                model: 'gemini-1.5-pro',
            });

            const response = await model.generateContent(input);
            const aiMessage = response.response.text();

            // Add AI response to the chat
            setMessages((prevMessages) => [
                { sender: 'user', text: input }, // keep user message
                { sender: 'ai', text: aiMessage },
            ]);
        } catch (error) {
            console.error('Error generating content:', error);
            setMessages((prevMessages) => [
                { sender: 'user', text: input }, // keep user message
                { sender: 'ai', text: 'Sorry, something went wrong!' },
            ]);
        }

        // Clear input field
        setInput('');
    };

    return (
        <div className="chatbot">
            <div className="chat-window">
                {messages.map((message, index) => (
                    <div key={index} className={message.sender === 'user' ? 'user' : 'ai'}>
                        {message.text}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSendMessage}>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type your message here..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chatbot;
