import "./Contact.css";
import { useState } from "react";
import axios from "axios";

function Contact() {
  const [showNumber, setShowNumber] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact/save", formData);
      alert("Message sent successfully. Our team will contact you soon.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’re here to help you with your relocation needs</p>
      </section>

      {/* CONTACT INFO */}
      <section className="contact-info">
        <div className="info-box">
          <h3>📞 Phone</h3>
          <p>+91 98765 43210</p>
        </div>

        <div className="info-box">
          <h3>📧 Email</h3>
          <p>support@moveeasy.com</p>
        </div>

        <div className="info-box">
          <h3>📍 Address</h3>
          <p>Indore, Madhya Pradesh, India</p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <h2>Need Immediate Assistance?</h2>
        <p>Call us now and get quick support from our team.</p>

        <button onClick={() => setShowNumber(true)}>Call Now</button>

        {showNumber && (
          <div className="call-popup">
            📞 <strong>+91 98765 43210</strong>
          </div>
        )}
      </section>

    </div>
  );
}

export default Contact;
