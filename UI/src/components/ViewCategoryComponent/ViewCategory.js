import './ViewCategory.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { __categoryapiurl } from '../../API_URL';
import { Link } from 'react-router-dom';

function ViewCategory() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    axios.get(__categoryapiurl + "fetch")
      .then((response) => {
        setCategoryList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div >
        <div >

          {/* Page Heading */}
          <div className="category-header">
            <h2>Our Services</h2>
            <p>Select a service to continue</p>
          </div>

          {/* Category Grid */}
          <div className="category-grid">
            {
              categoryList.map((row) => (
                <Link to={`/searchsc/${row.catnm}`} className="category-card" key={row._id}>
                  <img
                    src={`assets/uploads/caticons/${row.caticonnm}`}
                    alt={row.catnm}
                  />
                  <h4>{row.catnm}</h4>
                </Link>
              ))
            }
          </div>

        </div>
      </div>
    </>
  );
}

export default ViewCategory;
