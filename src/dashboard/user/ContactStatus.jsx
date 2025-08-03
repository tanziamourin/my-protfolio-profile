import { useEffect, useState } from "react";

const ContactStatus = () => {
  const email = localStorage.getItem("email"); // ইউজারের ইমেইল স্টোর করা থাকতে হবে
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/contacts/user/${email}`)
      .then(res => res.json())
      .then(data => setMessages(data));
  }, [email]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Contact Messages</h2>
      {messages.length === 0 ? (
        <p>No messages found</p>
      ) : (
        <ul className="space-y-4">
          {messages.map(msg => (
            <li key={msg._id} className="p-4 border rounded-md">
              <p><strong>Message:</strong> {msg.message}</p>
              <p><strong>Status:</strong> {msg.status}</p>
              <p><small>{new Date(msg.createdAt).toLocaleString()}</small></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactStatus;
