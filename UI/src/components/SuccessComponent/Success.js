import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Success.css';

function Success() {

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/user");
    }, 7000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="success-page">

      <div className="success-box">

        <div className="success-header">
          <span className="success-dot"></span>
          <h2>Payment Successful</h2>
        </div>

        <p className="success-message">
          Your booking payment has been processed successfully.
          Your booking is now confirmed.
        </p>

        {/* Animated progress */}
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

        <div className="success-actions">
          <button onClick={() => navigate("/user")}>
            Go to Dashboard
          </button>

          <button className="secondary" onClick={() => navigate("/")}>
            Home
          </button>
        </div>

        <p className="redirect-text">
          Redirecting automatically…
        </p>

      </div>

    </div>
  );
}

export default Success;
