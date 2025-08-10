import React, { useState, useEffect } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [contacts, setContacts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    const newContact = { name, email, message };
    setContacts((prev) => [...prev, newContact]);

    setName('');
    setEmail('');
    setMessage('');
  };

  useEffect(() => {
    console.log('ContactForm component mounted');
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      console.log('New contact added:', contacts[contacts.length - 1]);
    }
  }, [contacts]);

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            rows="4"
            required
          />
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>

      <h3 className="submitted-title">📋 Submitted Contacts</h3>
      {contacts.length === 0 ? (
        <p className="no-contacts">No contacts yet.</p>
      ) : (
        <div className="contact-list">
          {contacts.map((contact, index) => (
            <div className="contact-card" key={index}>
              <strong>{contact.name}</strong><br />
              <span>{contact.email}</span>
              <p>{contact.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ContactForm;
