import "./AdminHome.css";

function AdminHome() {
  const adminName = localStorage.getItem("name");

  return (
    <div className="admin-home">

      {/* HERO / WELCOME */}
      <section className="admin-hero">
        <h1>Welcome, {adminName || "Admin"} 👋</h1>
        <p>Manage your platform from one place</p>
      </section>

      {/* STATS */}
      <section className="admin-stats">
        <div className="stat-card">
          <h3>1,250</h3>
          <p>Total Users</p>
        </div>

        <div className="stat-card">
          <h3>320</h3>
          <p>Active Services</p>
        </div>

        <div className="stat-card">
          <h3>98</h3>
          <p>Pending Approvals</p>
        </div>

        <div className="stat-card">
          <h3>₹4.2L</h3>
          <p>Total Revenue</p>
        </div>
      </section>

      {/* ADMIN ACTIONS */}
      <section className="admin-actions">
        <h2>Quick Actions</h2>

        <div className="action-grid">
          <div className="action-card">👥 Manage Users</div>
          <div className="action-card" >📂 Manage Categories</div>
          <div className="action-card">🧾 View Payments</div>
          <div className="action-card">✅ Approve Items</div>
        </div>
      </section>

      {/* RECENT ACTIVITY */}
      <section className="admin-activity">
        <h2>Recent Activity</h2>

        <ul>
          <li>✔ New user registered</li>
          <li>✔ Category “Home Shifting” added</li>
          <li>✔ Payment received from user</li>
          <li>✔ Item approved by admin</li>
        </ul>
      </section>

    </div>
  );
}

export default AdminHome;
