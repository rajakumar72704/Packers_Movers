import "./ShowSubcategory.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { __subcategoryapiurl } from "../../API_URL";
import { useNavigate } from "react-router-dom";

function ShowSubCategory() {

  const [subcats, setSubcats] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(__subcategoryapiurl + "fetch")
      .then(res => setSubcats(res.data));
  }, []);

  const deleteSubCategory = (id) => {
    if (window.confirm("Delete this subcategory?")) {
      axios.delete(__subcategoryapiurl + "delete/" + id)
        .then(() => {
          setSubcats(subcats.filter(sc => sc._id !== id));
        });
    }
  };

  return (
    <div className="admin-content">
      <h2>Manage Subcategories</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Subcategory Name</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {subcats.map((sc, index) => (
            <tr key={sc._id}>
              <td>{index + 1}</td>
              <td>{sc.subcatnm}</td>
              <td>
                <button
                  onClick={() => navigate("/edit-subcategory/" + sc._id)}
                >
                  ✏️ Edit
                </button>

                <button
                  onClick={() => deleteSubCategory(sc._id)}
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

export default ShowSubCategory;
