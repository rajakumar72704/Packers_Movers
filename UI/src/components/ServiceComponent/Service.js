import "./Service.css";
import { useNavigate } from "react-router-dom";

function Service() {
  const navigate = useNavigate();
  return (
    <div className="service-page">

      {/* HERO */}
      <section className="service-hero">
        <h1>Our Services</h1>
        <p>Professional relocation solutions for homes and businesses</p>
      </section>

      {/* SERVICE CARDS */}
      <section className="service-section">
        <div className="service-grid">

          <div className="service-card">
            <img
              src="/assets/images/house-shifting.jpg"
              alt="Home Shifting"
            />
            <h3>Home Shifting</h3>
            <p>Safe packing and hassle-free house relocation.</p>
          </div>

          <div className="service-card">
            <img
              src="/assets/images/office_relocation.webp"
              alt="Office Relocation"
            />
            <h3>Office Relocation</h3>
            <p>Professional office shifting with minimal downtime.</p>
          </div>

          <div className="service-card">
            <img src="/assets/images/vehicals_shifting.jpg"  alt="Vehicle Transport"/>
            <h3>Vehicle Transport</h3>
            <p>Secure car & bike transportation services.</p>
          </div>

          <div className="service-card">
            <img
              src="/assets/images/warehousing.jpg"
              alt="Storage"
            />
            <h3>Storage & Warehousing</h3>
            <p>Short & long-term secure storage solutions.</p>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">📞 Book Service</div>
          <div className="step">📦 Packing</div>
          <div className="step">🚚 Moving</div>
          <div className="step">✅ Delivery</div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="included">
        <h2>What’s Included</h2>
        <ul>
          <li>✔ High-quality packing material</li>
          <li>✔ Trained professionals</li>
          <li>✔ Insurance support</li>
          <li>✔ On-time delivery</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <h2>Need Help Moving?</h2>
        <p>Contact us today for a stress-free relocation.</p>
        <button onClick={() => navigate("/contact")}>Contact Us</button>
      </section>

    </div>
  );
}

export default Service;
