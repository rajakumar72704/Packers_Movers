import './Addcategory.css';
import { useState } from 'react';
import axois from 'axios';
import { useNavigate } from 'react-router-dom';
import { __categoryapiurl } from '../../API_URL';

function Addcategory() {

    const navigate = useNavigate();
    const [output, setOutput] = useState();
    const [catnm, setcatnm]= useState("");
    const [File, setFile] = useState(null);

    const handleChange=(event)=>{
      setFile(event.target.files[0]);
    }
    
    const handleSubmit=(event)=>{
      event.preventDefault();
      if(!catnm || !File)
      {
        setOutput("All fields are required....");
        return;
      }
      const formdata = new FormData();
      formdata.append('catnm',catnm);
      formdata.append('caticon',File);
      axois.post(__categoryapiurl + "save",formdata,{
        headers: {
          'Content-Type':'multipart/form-data'
        }
      }).then((response)=>{
        setOutput("Category added successfully....");
        setcatnm("");
        setFile(null);
        navigate('/addcategory');
      }).catch((error)=>{
       setOutput("Category not added successfully....");
});
};
    
  return (
<>   

<div id="tooplate_content">
<div class="content_box content_box_last">
    <h2>Add Category Here.....</h2>
    <font color="blue" >{ output }</font>

  <form>
   <label>Category Name:</label>
   <input type="text" onChange={e=>setcatnm(e.target.value)} value={catnm} required/>
   <br/><br/>
   <label>Category Icon:</label>
   <input type="file" onChange={handleChange}  required/>
   <br/><br/>
   <button type="button" onClick={handleSubmit} >Add Category</button>
  </form>
</div>
</div>

</>
  );
}

export default Addcategory;



