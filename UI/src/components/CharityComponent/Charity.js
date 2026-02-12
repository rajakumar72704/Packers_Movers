import './Charity.css';
import axios from 'axios';
import { __paymentapiurl } from '../../API_URL';

function Charity() {

  // 🔒 KEEP THIS LOGIC EXACTLY SAME
  const MakeCharity = async () => {
    const response = await axios.post(__paymentapiurl, { "amount": 1000 });
    window.open(response.data.url); // ✅ Stripe redirect (WORKING)
  };

  return (
    <>
      <div className="charity-page">

        {/* HERO */}
        <div className="charity-hero">
          <h1>Booking Amount</h1>
          <p>
            Complete the required payment to confirm your service booking.
            Remaining payment will be collected after delivery.
          </p>
        </div>

        {/* CONTENT */}
        <div className="charity-container">

          {/* INFO */}
          <div className="charity-info">
            <h2>Why this payment?</h2>
            <ul>
              <li>✔ Confirms your booking</li>
              <li>✔ Reserves service slot</li>
              <li>✔ Helps schedule resources</li>
              <li>✔ Balance payable after delivery</li>
            </ul>
          </div>

          {/* PAYMENT CARD */}
          <div className="charity-card">
            <h3>Payment Summary</h3>

            <div className="row">
              <span>Service</span>
              <span>Packers & Movers</span>
            </div>

            <div className="row">
              <span>Charity Amount</span>
              <span>₹1,000</span>
            </div>

            <div className="row total">
              <span>Total Payable</span>
              <span>₹1,000</span>
            </div>

            {/* 🔥 SAME FUNCTION, NEW BUTTON */}
            <button className="pay-btn" onClick={MakeCharity}>
              Pay Booking Amount
            </button>

            <p className="secure-text">
              🔒 Secure Stripe Payment
            </p>
          </div>

        </div>

      </div>
    </>
  );
}

export default Charity;
