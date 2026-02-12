import './Addsubcategory.css';
import { useEffect, useState } from 'react';
import axois from 'axios';
import { useNavigate } from 'react-router-dom';
import { __categoryapiurl, __subcategoryapiurl } from '../../API_URL';

function Addsubcategory() {

    const navigate = useNavigate();
    const [output, setOutput] = useState();
    const [catnm, setcatnm]= useState("");
    const [subcatnm, setsubcatnm]= useState("");
    const [File, setFile] = useState(null);
    const [cDetails, setCDetails]= useState([]);


    useEffect(()=>{
        axois.get(__categoryapiurl+"fetch").then((response)=>{
            setCDetails(response.data);
        }).catch((error)=>{
            console.log(error);
        });
    }, []);

    const handleChange=(event)=>{
      setFile(event.target.files[0]);
    }
    
    const handleSubmit=(event)=>{
      event.preventDefault();
      if(!catnm || !subcatnm || !File)
      {
        setOutput("All fields are required....");
        return;
      }
        const formdata = new FormData();
        formdata.append('catnm',catnm);
        formdata.append('subcatnm',subcatnm);
        formdata.append('caticon',File);
        axois.post(__subcategoryapiurl + "save",formdata,{
        headers: {
          'Content-Type':'multipart/form-data'
        }
      }).then((response)=>{
        setOutput("Sub Category added successfully....");
        setcatnm("");
        setsubcatnm("");
        setFile(null);
      }).catch((error)=>{
       setOutput("Sub Category not added successfully....");
});
};
    
  return (
<>   


<div id="tooplate_content">
<div class="content_box content_box_last">

<h2>Add Sub Category Here!!!</h2>
<font color="blue" >{ output }</font>
  <form>
  <label>Category Name</label>
  <select onChange={e=>setcatnm(e.target.value)} value={catnm}>
    <option>Select Category</option>
    {
      cDetails.map((row)=>(
        <option key={row._id} value={row.catnm}>{row.catnm}</option>        
      ))
    }
  </select>  
  <br/><br/>
  <label>SubCategory Name:</label>
  <input type="text" onChange={e=>setsubcatnm(e.target.value)} value={subcatnm} required/>
  <br/><br/>
  <label>Category Icon:</label>
  <input type="file" onChange={handleChange}  required/>
  <br/><br/>
  <button type="button" onClick={handleSubmit} >Add SubCategory</button>
</form>

</div>
</div>

</>
  );
}

export default Addsubcategory;



