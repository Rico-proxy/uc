import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaPen, FaListAlt } from 'react-icons/fa';

function    Message() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    option: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form text-black">
      <div className="form-group">
        <FaUser />
        <input
          type="text"
          name="name"
          placeholder="Your name*"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <FaPhone />
        <input
          type="tel"
          name="phone"
          placeholder="Your phone*"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <FaEnvelope />
        <input
          type="email"
          name="email"
          placeholder="Your email*"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <FaListAlt />
        <select
          name="option"
          value={formData.option}
          onChange={handleChange}
          required
        >
          <option value="">Choose your option*</option>
          <option value="feedback">Feedback</option>
          <option value="inquiry">Inquiry</option>
          <option value="support">Support</option>
        </select>
      </div>

      <div className="form-group">
        <FaPen />
        <textarea
          name="message"
          placeholder="Your Message*"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button type="submit" className="submit-btn">SEND MESSAGE</button>
    </form>
  );
}

export default Message;
