import "./Review.css";
import { useNavigate } from "react-router-dom";

function Reviews() {
  const navigate = useNavigate();
  return (
    <div className="reviews-page">

      {/* HERO */}
      <section className="reviews-hero">
        <h1>Customer Reviews</h1>
        <p>What our customers say about our services</p>
      </section>

      {/* REVIEWS GRID */}
      <section className="reviews-section">
        <div className="reviews-grid">

          <div className="review-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
            <h3>Rahul Sharma</h3>
            <p className="stars">⭐⭐⭐⭐⭐</p>
            <p>
              Excellent service! The team was professional and handled my
              belongings with care.
            </p>
          </div>

          <div className="review-card">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
            <h3>Neha Verma</h3>
            <p className="stars">⭐⭐⭐⭐⭐</p>
            <p>
              Safe packing and on-time delivery. Very smooth relocation
              experience.
            </p>
          </div>

          <div className="review-card">
            <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="" />
            <h3>Amit Patel</h3>
            <p className="stars">⭐⭐⭐⭐⭐</p>
            <p>
              Reliable and affordable service. I would definitely recommend
              them.
            </p>
          </div>

          <div className="review-card">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="" />
            <h3>Pooja Singh</h3>
            <p className="stars">⭐⭐⭐⭐⭐</p>
            <p>
              Stress-free shifting experience. Very polite and trained staff.
            </p>
          </div>

        </div>
      </section>

      {/* TRUST SUMMARY */}
      <section className="review-summary">
        <h2>Rated 4.9★ by 5,000+ customers</h2>
        <p>Trusted across 100+ cities in India</p>
      </section>

      {/* CTA */}
      <section className="review-cta">
        <h2>Want a stress-free move?</h2>
        <button onClick={() => navigate("/login")}>Book Our Services</button>
      </section>

    </div>
  );
}

export default Reviews;
