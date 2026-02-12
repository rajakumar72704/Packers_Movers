import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-box">
          <h3>MoveEasy</h3>
          <p>
            Trusted Packers & Movers providing safe, reliable, and affordable
            relocation services across India.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-box">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service">Services</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-box">
          <h4>Our Services</h4>
          <ul>
            <li>Home Shifting</li>
            <li>Office Relocation</li>
            <li>Vehicle Transport</li>
            <li>Storage & Warehousing</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-box">
          <h4>Contact Us</h4>
          <p>📞 +91 98765 43210</p>
          <p>📧 support@moveeasy.com</p>
          <p>📍 Indore, India</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} MoveEasy. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
