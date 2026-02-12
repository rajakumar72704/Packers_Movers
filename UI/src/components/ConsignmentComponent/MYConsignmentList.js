import { useEffect, useState } from "react";
import axios from "axios";
import "./MyConsignments.css";

function MyConsignments() {
  const [consignments, setConsignments] = useState([]);
  const userId = localStorage.getItem("userid");

  useEffect(() => {
    axios.get("http://localhost:3001/consignment/fetch", {
      params: { userId }
    })
    .then(res => setConsignments(res.data))
    .catch(err => console.error(err));
  }, [userId]);

  return (
    <div className="my-consignment-page">
      <h2>My Consignments</h2>

      <table className="user-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Consignment ID</th>
            <th>Item</th>
            <th>Pickup</th>
            <th>Drop</th>
            <th>Weight (kg)</th>
            <th>Status</th>
            <th>Last Update</th>
          </tr>
        </thead>

        <tbody>
          {consignments.length === 0 ? (
            <tr>
              <td colSpan="8" className="no-data">
                No consignments found
              </td>
            </tr>
          ) : (
            consignments.map((c, index) => (
              <tr key={c._id}>
                <td>{index + 1}</td>
                <td className="cid">{c._id}</td>
                <td>{c.itemName}</td>
                <td>{c.pickupAddress}</td>
                <td>{c.dropAddress}</td>
                <td>{c.weight}</td>
                <td>
                  <span className={`status ${c.status.replace(/\s/g, "")}`}>
                    {c.status}
                  </span>
                </td>
                <td>
                  {c.statusUpdatedAt
                    ? new Date(c.statusUpdatedAt).toLocaleString()
                    : "—"}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default MyConsignments;
