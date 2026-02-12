import "./EditSubCategory.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { __subcategoryapiurl } from "../../API_URL";

function EditSubCategory() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [subcatnm, setSubcatnm] = useState("");
  const [loading, setLoading] = useState(true);

  // 🔹 FETCH EXISTING DETAILS
  useEffect(() => {
    axios.get(__subcategoryapiurl + "fetch/" + id)
      .then(res => {
        setSubcatnm(res.data.subcat.subcatnm);
        setLoading(false);
      })
      .catch(() => {
        alert("Subcategory not found");
        navigate("/view-subcategory");
      });
  }, [id, navigate]);

  const updateSubCategory = (e) => {
    e.preventDefault();

    axios.patch(__subcategoryapiurl + "update/" + id, { subcatnm })
      .then(() => {
        alert("Subcategory updated");
        navigate("/view-subcategory");
      });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="admin-content">
      <h2>Edit Subcategory</h2>

      <form onSubmit={updateSubCategory}>
        <input
          type="text"
          value={subcatnm}
          onChange={e => setSubcatnm(e.target.value)}
          required
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditSubCategory;
