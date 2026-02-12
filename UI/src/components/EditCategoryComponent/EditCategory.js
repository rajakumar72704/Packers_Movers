import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { __categoryapiurl } from "../../API_URL";

function EditCategory() {

  const { id } = useParams();      // ← category id from URL
  const navigate = useNavigate();

  const [catnm, setCatnm] = useState("");
  const [loading, setLoading] = useState(true);

  // 🔹 FETCH CATEGORY DETAILS FIRST
  useEffect(() => {
    axios.get(__categoryapiurl + "fetch/" + id)
      .then(res => {
        setCatnm(res.data.category.catnm);
        setLoading(false);
      })
      .catch(() => {
        alert("Category not found");
        navigate("/viewcategory");
      });
  }, [id, navigate]);

  // 🔹 UPDATE CATEGORY
  const updateCategory = (e) => {
    e.preventDefault();

    axios.patch(__categoryapiurl + "update/" + id, { catnm })
      .then(() => {
        alert("Category updated successfully");
        navigate("/showcategory");
      });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="admin-content">
      <h2>Edit Category</h2>

      <form onSubmit={updateCategory}>
        <label>Category Name</label>

        <input
          type="text"
          value={catnm}            // ← existing value shown
          onChange={e => setCatnm(e.target.value)}
          required
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditCategory;
