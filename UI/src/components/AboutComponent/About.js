import "./About.css";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className="about-page">

      {/* INTRO */}
      <section className="about-hero">
        <h1>About MoveEasy</h1>
        <p>
          India’s trusted packers and movers platform for safe, reliable,
          and affordable relocation services.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            MoveEasy is a professional packers and movers service provider
            helping individuals and businesses relocate seamlessly.
            From careful packing to on-time delivery, we ensure a stress-free
            moving experience.
          </p>

          <p>
            Our trained professionals, transparent pricing, and customer-first
            approach make us one of the most trusted relocation platforms in India.
          </p>
        </div>

        <div className="about-image">
         <img src="/assets/images/villa-movers-and-packers-in-dubai-sierramadregames.jpg" />

        </div>
      </section>

      {/* STATS */}
      <section className="about-stats">
        <div className="stat">
          <h3>10,000+</h3>
          <p>Moves Completed</p>
        </div>
        <div className="stat">
          <h3>5,000+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat">
          <h3>100+</h3>
          <p>Cities Covered</p>
        </div>
        <div className="stat">
          <h3>24×7</h3>
          <p>Customer Support</p>
        </div>
      </section>

      {/* WHY TRUST US */}
      <section className="about-values">
        <h2>Why Customers Trust Us</h2>

        <div className="value-grid">
          <div className="value-card">
            <h4>✔ Verified Professionals</h4>
            <p>All our movers are background-verified and trained.</p>
          </div>

          <div className="value-card">
            <h4>✔ Safe & Secure Packing</h4>
            <p>High-quality packing materials ensure zero damage.</p>
          </div>

          <div className="value-card">
            <h4>✔ Transparent Pricing</h4>
            <p>No hidden charges, pay only for what you need.</p>
          </div>

          <div className="value-card">
            <h4>✔ On-Time Delivery</h4>
            <p>Your belongings reach on schedule, every time.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Ready to Move with Confidence?</h2>
        <p>Experience hassle-free relocation with MoveEasy.</p>
        <button onClick={() => navigate("/service")}>Explore Our Services</button>
      </section>

    </div>
  );
}

export default About;
