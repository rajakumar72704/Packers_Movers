import { useState } from "react";
import axios from "axios";
import "./TrackConsignment.css";

const STATUS_FLOW = [
  "Booked",
  "Agent Visit Scheduled",
  "Agent Visited",
  "Approved",
  "Packed",
  "Picked Up",
  "In Transit",
  "Delivered"
];

function TrackConsignment() {
  const [consignmentId, setConsignmentId] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const track = () => {
    if (!consignmentId) return;

    axios
      .get(`http://localhost:3001/consignment/track/${consignmentId}`)
      .then(res => {
        setData(res.data.data);
        setError("");
      })
      .catch(() => {
        setData(null);
        setError("Consignment not found");
      });
  };

  const currentIndex = data
    ? STATUS_FLOW.indexOf(data.status)
    : -1;

  return (
    <div className="track-page">
      <h2>Track Consignment</h2>

      <div className="track-input">
        <input
          placeholder="Enter Consignment ID"
          value={consignmentId}
          onChange={(e) => setConsignmentId(e.target.value)}
        />
        <button onClick={track}>Track</button>
      </div>

      {error && <p className="error">{error}</p>}

      {data && (
        <>
          {/* DETAILS */}
          <div className="track-details">
            <p><b>Item:</b> {data.itemName}</p>
            <p><b>Pickup:</b> {data.pickupAddress}</p>
            <p><b>Drop:</b> {data.dropAddress}</p>
            <p><b>Current Status:</b> {data.status}</p>
          </div>

          {/* PROGRESS TRACKER */}
          <div className="tracker">
  {STATUS_FLOW.map((status, index) => {
    const isActive = index <= currentIndex;
    const isCompletedLine = index <= currentIndex;

    return (
      <div key={status} className="tracker-step">

        {index !== 0 && (
          <div className={`line ${isCompletedLine ? "active" : ""}`}></div>
        )}

        <div className={`circle ${isActive ? "active" : ""}`}></div>

        <p className={isActive ? "active-text" : ""}>
          {status}
        </p>

      </div>
    );
  })}
</div>

        </>
      )}
    </div>
  );
}

export default TrackConsignment;
