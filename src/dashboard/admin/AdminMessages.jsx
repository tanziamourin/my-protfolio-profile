import { useEffect, useState } from "react";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://my-protfolio-profile-server.vercel.app/api/messages")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch messages");
        return res.json();
      })
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-6 text-gray-800 dark:text-gray-200">Loading messages...</p>;

  if (error)
    return <p className="p-6 text-red-600 dark:text-red-400">Error: {error}</p>;

  if (!messages.length)
    return <p className="p-6 text-gray-600 dark:text-gray-300">No messages found.</p>;

  return (
    <div className="p-6 text-gray-800 dark:text-gray-200">
      <h2 className="text-2xl font-bold mb-4">📩 All Received Messages</h2>
      <div className="space-y-4">
        {messages.map((msg) => (
          <div
            key={msg._id}
            className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 shadow"
          >
            <p>
              <strong>Name:</strong> {msg.from_name}
            </p>
            <p>
              <strong>Email:</strong> {msg.from_email}
            </p>
            <p>
              <strong>Message:</strong> {msg.message}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {msg.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminMessages;
