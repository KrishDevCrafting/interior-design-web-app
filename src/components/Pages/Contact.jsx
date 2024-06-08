
// src/components/ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css'; // Create a CSS file for styles

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send an email
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Contact Us</h1>
      </div>
      <div className="row">
        <h4 style={{ textAlign: 'center' }}>Contact-Form</h4>
      </div>
      <form className="row input-container" onSubmit={handleSubmit}>
        <div className="col-xs-12">
          <div className="styled-input wide">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Name</label>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="styled-input">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="styled-input" style={{ float: 'right' }}>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <label>Phone Number</label>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="styled-input wide">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <label>Message</label>
          </div>
        </div>
        <div className="col-xs-12">
          <button type="submit" className="btn-lrg submit-btn">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;



