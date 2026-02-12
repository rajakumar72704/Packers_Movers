import "./ManageContacts.css";
import { useEffect, useState } from "react";
import axios from "axios";

function ManageContacts() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = () => {
    axios
      .get("http://localhost:5000/api/contact/fetch")
      .then(res => setMessages(res.data));
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const markContacted = (id) => {
    axios.patch("http://localhost:5000/api/contact/update-status", {
      id,
      status: "contacted"
    }).then(() => fetchMessages());
  };

  return (
    <div className="admin-page">
      <h2>Contact Messages</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Message</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {messages.map(msg => (
            <tr key={msg._id}>
              <td>{msg.name}</td>
              <td>{msg.phone}</td>
              <td>{msg.email}</td>
              <td>{msg.message}</td>
              <td>
                <span className={msg.status === "new" ? "badge-new" : "badge-done"}>
                  {msg.status}
                </span>
              </td>
              <td>
                <a href={`tel:${msg.phone}`} className="btn-call">Call</a>
                <a href={`mailto:${msg.email}`} className="btn-mail">Mail</a>
                {msg.status === "new" && (
                  <button
                    className="btn-done"
                    onClick={() => markContacted(msg._id)}
                  >
                    Mark Done
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageContacts;
