import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Safe & Reliable Packers and Movers</h1>
          <p>
            Professional home and office relocation services with complete care
            and safety.
          </p>
          <button className="primary-btn" onClick={() => navigate("/service")}>Explore Services</button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about section">
        <div className="container">
          <div className="text">
            <h2>About Us</h2>
            <p>
              We are a trusted packers and movers company providing secure,
              affordable, and reliable relocation services across India. Our
              trained professionals ensure smooth and stress-free moving.
            </p>
          </div>
          <img src="/assets/images/Furniture Items.png" alt="Furniture Items"/>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services section light">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="card">🏠 Home Shifting</div>
          <div className="card">🏢 Office Relocation</div>
          <div className="card">🚗 Vehicle Transport</div>
          <div className="card">📦 Storage & Warehousing</div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why section">
        <h2>Why Choose Us</h2>
        <ul className="why-list">
          <li>✔ Verified & trained professionals</li>
          <li>✔ Safe & secure packing</li>
          <li>✔ On-time delivery</li>
          <li>✔ Affordable pricing</li>
        </ul>
      </section>

      {/* REVIEWS */}
      <section className="reviews section light">
        <h2>Happy Customers</h2>
        <div className="review-grid">
          <div className="review-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
            <p>⭐⭐⭐⭐⭐</p>
            <p>Excellent service and professional staff.</p>
            <h4>Rahul Sharma</h4>
          </div>

          <div className="review-card">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
            <p>⭐⭐⭐⭐⭐</p>
            <p>Very safe and timely delivery. Highly recommended.</p>
            <h4>Neha Verma</h4>
          </div>

          <div className="review-card">
            <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="" />
            <p>⭐⭐⭐⭐⭐</p>
            <p>Smooth shifting experience without stress.</p>
            <h4>Amit Patel</h4>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="contact section">
        <h2>Ready to Move?</h2>
        <p>Contact us today for a hassle-free relocation experience.</p>
        <button className="primary-btn" onClick={() => navigate("/contact")}>Contact Us</button>
      </section>

    </div>
  );
};

export default Home;
