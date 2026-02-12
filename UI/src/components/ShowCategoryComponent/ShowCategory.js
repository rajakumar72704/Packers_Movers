import "./ShowCategory.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { __categoryapiurl } from "../../API_URL";
import { useNavigate } from "react-router-dom";

function ShowCategory() {

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(__categoryapiurl + "fetch")
      .then(res => setCategories(res.data));
  }, []);

  const deleteCategory = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      axios.delete(__categoryapiurl + "delete/" + id)
        .then(() => {
          setCategories(categories.filter(cat => cat._id !== id));
        });
    }
  };

  return (
    <div className="admin-content">
      <h2>Manage Categories</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Category Name</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((cat, index) => (
            <tr key={cat._id}>
              <td>{index + 1}</td>

             

              <td>{cat.catnm}</td>


              <td>
                <button
                  className="btn edit"
                  onClick={() => navigate("/edit-category/" + cat._id)}
                >
                  ✏️ Edit
                </button>

                <button
                  className="btn delete"
                  onClick={() => deleteCategory(cat._id)}
                >
                  🗑️ Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowCategory;
