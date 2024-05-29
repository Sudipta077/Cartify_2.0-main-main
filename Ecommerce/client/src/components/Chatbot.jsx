import React, { useState } from "react";
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const predefinedResponses = {
    "What is the return policy?": "Our return policy allows returns within 30 days of purchase.",
    "How can I track my order?": "You can track your order using the tracking number provided in your confirmation email.",
    "What payment methods do you accept?": "We accept all UPI payment methods.",
    "Do you offer international shipping?": "Yes, we ship to most countries worldwide.",
    "What should I do if I receive a damaged item?": "Please contact our customer service within 48 hours of receiving the item.",
    "What are your customer service hours?": "Our customer service is available Monday to Friday, 9 AM to 6 PM."
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (input.trim()) {
      const newMessages = [...messages, { sender: "user", text: input }];
      setMessages(newMessages);

      let response = predefinedResponses[input.trim()];
      if (!response) {
        response = "For further assistance, please contact our customer care at support@cartify.com or call 9051-789-289.";
      }
      setMessages([...newMessages, { sender: "bot", text: response }]);
      setInput("");
    }
  };

  return (
    <>
      <div className="chatbot-button" onClick={handleToggle}>
        <span>💬</span>
      </div>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            Chat with us!
          </div>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`chatbot-message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
