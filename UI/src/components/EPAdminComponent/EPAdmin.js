import './EPAdmin.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { __userapiurl } from '../../API_URL';
import { useNavigate } from 'react-router-dom';

function EPAdmin() {

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const [ output , setOutput ] = useState();  
  const [ name , setName ] = useState();
  const [ email , setEmail ] = useState();
  const [ mobile , setMobile ] = useState();
  const [ address , setAddress ] = useState();
  const [ city , setCity ] = useState();
  const [ gender , setGender ] = useState();

   useEffect(()=>{
    axios.get(__userapiurl+"fetch",{
      params : {"email":localStorage.getItem("email")}
    }).then((result)=>{
      var users = result.data[0];
      setName(users.name);
      setEmail(users.email);
      setMobile(users.mobile);
      setAddress(users.address);
      setCity(users.city);
    }).catch((error)=>{
      console.log(error);
    });  
  }, []); 
  

  const updatedetails=()=>{
    axios.patch(__userapiurl+"update", {"condition_obj":{"email":email}, "content_obj":{"name":name,"mobile":mobile,"address":address,"city":city,"gender":gender}}
     ).then(()=>{
       setShowPopup(true);
      navigate("/epadmin");
     });
};


return (
<>   

   {showPopup && (
      <div className="popup-overlay">
        <div className="popup-box">
          <h3>Success!</h3>
          <p>Your profile has been updated successfully.</p>

          <button 
            onClick={() => {
              setShowPopup(false);
              navigate("/epadmin");
            }} 
            className="close-btn"
          >
            OK
          </button>
        </div>
      </div>
    )}

<div id="tooplate_content">
<div class="content_box content_box_last">
<h2>Edit Profile Here!!!</h2>
<font color="blue" >{ output }</font>
  <form>
      <label>Name:</label>
      <input type="text" onChange={e=>setName(e.target.value)} value={name} />
      <br/><br/>
      <label>Email:</label>
      <input type="email" onChange={e=>setEmail(e.target.value)} value={email}  disabled/>
      <br/><br/>
      <label>Mobile:</label>
      <input type="text" onChange={e=>setMobile(e.target.value)} value={mobile} />
      <br/><br/>
      <label>Address:</label>
      <textarea onChange={e=>setAddress(e.target.value)} value={address}></textarea>
      <br/><br/>
      <label>City:</label>
      <select onChange={e=>setCity(e.target.value)} value={city}>
      <option>Select City</option>
      <option>Indore</option>
      <option>Bhopal</option>
      <option>Ujjain</option>  
      </select>
      <br/><br/>
      <label>Gender:</label>
      Male <input type="radio" name='gender' onChange={e=>setGender(e.target.value)} value="male" />
      &nbsp;&nbsp;
      Female <input type="radio" name='gender' onChange={e=>setGender(e.target.value)} value="female" />
      &nbsp;&nbsp;
      Other <input type="radio" name='gender' onChange={e=>setGender(e.target.value)} value="other" />
      <br/><br/>
      <button type="button" onClick={updatedetails} >Update Details</button>
  </form>    
    

</div>
</div>
</>
  );
}

export default EPAdmin;



