import "./UserHome.css";
import { useNavigate } from "react-router-dom";

function UserHome() {
  const name = localStorage.getItem("name") || "User";
  const navigate = useNavigate();

  return (
    <div className="user-home">

      {/* HEADER */}
      <div className="user-top">
        <div>
          <h1>Hello, {name} 👋</h1>
          <p>Welcome to your dashboard</p>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="user-section">
        <h2>Quick Actions</h2>

        <div className="user-action-grid">
          <div className="user-card" onClick={() => navigate("/viewcategory")}>
            📂 View Categories
          </div>

          <div className="user-card">
            📦 My Bookings
          </div>

          <div className="user-card">
            ❤️ Booking amount
          </div>

          <div className="user-card" onClick={() => navigate("/epuser")}>
            👤 Edit Profile
          </div>
        </div>
      </div>

      {/* STATUS */}
      <div className="user-section">
        <h2>Current Status</h2>

        <div className="status-box">
          <p><strong>Booking Status:</strong> No active bookings</p>
          <p><strong>Last Activity:</strong> Profile updated</p>
        </div>
      </div>

      {/* HELP */}
      <div className="user-section">
        <h2>Need Help?</h2>

        <div className="help-box">
          <p>📞 Customer Support: +91 98765 43210</p>
          <p>📧 Email: support@moveeasy.com</p>
          <p>🕒 Available 24×7</p>
        </div>
      </div>

    </div>
  );
}

export default UserHome;
