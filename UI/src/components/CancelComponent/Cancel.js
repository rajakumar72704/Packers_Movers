import './Cancel.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Cancel() {
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ CLEAR TEMP PAYMENT DATA (if any)
    localStorage.removeItem("pending_payment");
    localStorage.removeItem("payment_amount");

    // ✅ AUTO REDIRECT AFTER 10 SECONDS
    const timer = setTimeout(() => {
      navigate("/charity");
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="cancel-page">

      <div className="cancel-card">

        <div className="cancel-icon">❌</div>

        <h2>Payment Failed</h2>

        <p>
          Your payment was cancelled or could not be completed.
          Please try again to confirm your booking.
        </p>

        <div className="cancel-actions">
          <button
            className="retry-btn"
            onClick={() => navigate("/charity")}
          >
            Try Again
          </button>

          <button
            className="home-btn"
            onClick={() => navigate("/user")}
          >
            Go to Dashboard
          </button>
        </div>

        <p className="note">
          You will be redirected automatically in 10 seconds.
        </p>

      </div>

    </div>
  );
}

export default Cancel;
