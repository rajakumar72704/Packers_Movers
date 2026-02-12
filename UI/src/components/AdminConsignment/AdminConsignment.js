import { useEffect, useState } from "react";
import axios from "axios";
import "./AdminConsignments.css";

function AdminConsignments() {
  const [consignments, setConsignments] = useState([]);

  const fetchConsignments = () => {
    axios.get("http://localhost:3001/consignment/fetch")
      .then(res => setConsignments(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchConsignments();
  }, []);

  const updateStatus = (id, status) => {
    if (!status) return;

    axios.patch(`http://localhost:3001/consignment/update-status/${id}`, {
      status
    }).then(() => {
      fetchConsignments();
    });
  };

  return (
    <div className="admin-consignment-page">
      <h2>Manage Consignments</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>#</th>
            <th>User ID</th>
            <th>Item</th>
            <th>Pickup</th>
            <th>Drop</th>
            <th>Weight (kg)</th>
            <th>Status</th>
            <th>Update Status</th>
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
                <td className="userid">{c.userId}</td>
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
                  <select
                    defaultValue=""
                    onChange={(e) =>
                      updateStatus(c._id, e.target.value)
                    }
                  >
                    <option value="">Change</option>
                    <option value="Booked">Booked</option>
                    <option value="Agent Visit Scheduled">Agent Visit Scheduled</option>
                    <option value="Agent Visited">Agent Visited</option>
                    <option value="Approved">Approved</option>
                    <option value="Packed">Packed</option>
                    <option value="Picked Up">Picked Up</option>
                    <option value="In Transit">In Transit</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminConsignments;
