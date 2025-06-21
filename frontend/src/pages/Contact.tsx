import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="mx-auto max-w-lg px-4 space-y-6">
      <h1 className="mt-8 text-3xl font-bold">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white/60 p-3 backdrop-blur-xs focus:outline-primary"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white/60 p-3 backdrop-blur-xs focus:outline-primary"
        />
        <textarea
          rows={5}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white/60 p-3 backdrop-blur-xs focus:outline-primary"
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-primary py-3 text-white hover:opacity-90"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;