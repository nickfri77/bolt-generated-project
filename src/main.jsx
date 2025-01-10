import React, { useState } from 'react';
    import ReactDOM from 'react-dom';

    const App = () => {
      const [messages, setMessages] = useState([]);
      const [newMessage, setNewMessage] = useState('');

      const handleSend = () => {
        if (newMessage.trim() !== '') {
          setMessages([...messages, newMessage]);
          setNewMessage('');
        }
      };

      return (
        <div className="container">
          <h1>Web Messaging Site</h1>
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className="message">{msg}</div>
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      );
    };

    ReactDOM.render(<App />, document.getElementById('root'));
