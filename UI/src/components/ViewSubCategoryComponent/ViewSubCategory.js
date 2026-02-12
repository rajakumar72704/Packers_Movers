import './ViewSubCategory.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { __subcategoryapiurl } from '../../API_URL';
import { useParams } from 'react-router-dom';

function ViewSubCategory() {
  const params = useParams();
  const [subcategoryList, setSubCategoryList] = useState([]);

  useEffect(() => {
    axios.get(__subcategoryapiurl + "fetch", {
      params: { "catnm": params.cnm }
    })
      .then((response) => {
        setSubCategoryList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.cnm]);

  return (
    <>
      <div>
        <div>

          {/* Heading */}
          <div className="subcategory-header">
            <h2>{params.cnm}</h2>
            <p>Select a service to continue</p>
          </div>

          {/* Horizontal Subcategory Strip */}
          <div className="subcategory-strip">
            {
              subcategoryList.map((row) => (
                <div className="subcategory-item" key={row._id}>
                  <img src={`/assets/uploads/subcaticons/${row.subcaticonnm}`} alt={row.subcatnm}/> 
                  <span>{row.subcatnm}</span>
                </div>
              ))
            }
          </div>

        </div>
      </div>
    </>
  );
}

export default ViewSubCategory;
