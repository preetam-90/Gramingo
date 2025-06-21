import { FC, useState } from 'react';

const ContactPage: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      {submitted ? (
        <div className="glass-card p-6 max-w-lg">
          <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
          <p>Your message has been sent. We will get back to you soon.</p>
        </div>
      ) : (
        <form className="glass-card p-6 max-w-lg flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-transparent border border-white/30 px-3 py-2 rounded-md backdrop-blur-sm"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-transparent border border-white/30 px-3 py-2 rounded-md backdrop-blur-sm"
          />
          <textarea
            rows={4}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="bg-transparent border border-white/30 px-3 py-2 rounded-md backdrop-blur-sm"
          />
          <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">
            Send
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactPage;