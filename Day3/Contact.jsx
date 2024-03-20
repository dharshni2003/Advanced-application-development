import React from 'react';
import './Contact.css';
import Header from './Header';

function Contact() {
  return (
    <div>
    <Header/>
    <div className="imagecontact"></div>
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="event-date">Event Date</label>
          <input type="date" id="event-date" name="event-date" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your message..."
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
    </div>
  );
}

export default Contact;
