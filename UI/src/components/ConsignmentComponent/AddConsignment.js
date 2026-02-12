import { useState } from "react";
import axios from "axios";
import "./Consignment.css";

function AddConsignment() {

  const [data, setData] = useState({
    itemName: "",
    quantity: "",
    weight: "",
    pickupAddress: "",
    dropAddress: "",
    description: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  /* ================== HANDLE INPUT ================== */
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error
  };

  /* ================== VALIDATION ================== */
  const validate = () => {
    let err = {};

    if (!data.itemName.trim()) {
      err.itemName = "Item name is required";
    }

    if (!data.quantity || data.quantity <= 0) {
      err.quantity = "Quantity must be greater than 0";
    }

    if (!data.weight || data.weight <= 0) {
      err.weight = "Weight must be greater than 0";
    }

    if (!data.pickupAddress.trim()) {
      err.pickupAddress = "Pickup address is required";
    }

    if (!data.dropAddress.trim()) {
      err.dropAddress = "Drop address is required";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  /* ================== SUBMIT ================== */
  const submitConsignment = async () => {
    if (!validate()) return;

    try {
      setLoading(true);
      await axios.post("http://localhost:3001/consignment/add", {
        ...data,
        userId: localStorage.getItem("userid")
      });

      alert("Consignment Added Successfully");

      // reset form
      setData({
        itemName: "",
        quantity: "",
        weight: "",
        pickupAddress: "",
        dropAddress: "",
        description: ""
      });

    } catch (err) {
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="consignment-box">
      <h2>Add Consignment</h2>

      <input
        name="itemName"
        placeholder="Item Name"
        value={data.itemName}
        onChange={handleChange}
      />
      {errors.itemName && <p className="error">{errors.itemName}</p>}

      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={data.quantity}
        onChange={handleChange}
      />
      {errors.quantity && <p className="error">{errors.quantity}</p>}

      <input
        type="number"
        name="weight"
        placeholder="Weight (kg)"
        value={data.weight}
        onChange={handleChange}
      />
      {errors.weight && <p className="error">{errors.weight}</p>}

      <textarea
        name="pickupAddress"
        placeholder="Pickup Address"
        value={data.pickupAddress}
        onChange={handleChange}
      />
      {errors.pickupAddress && <p className="error">{errors.pickupAddress}</p>}

      <textarea
        name="dropAddress"
        placeholder="Drop Address"
        value={data.dropAddress}
        onChange={handleChange}
      />
      {errors.dropAddress && <p className="error">{errors.dropAddress}</p>}

      <textarea
        name="description"
        placeholder="Item Description (optional)"
        value={data.description}
        onChange={handleChange}
      />

      <button onClick={submitConsignment} disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
}

export default AddConsignment;
