import './Register.css';
import { useState } from 'react';
import axios from 'axios';

function Register() {

  const [output, setOutput] = useState("");  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const userDetails = {
      name, email, password, mobile, address, city, gender
    };

    const apiurl = "http://localhost:3001/user/save";

    axios.post(apiurl, userDetails)
      .then(() => {
        setOutput("✅ User registered successfully");
        setLoading(false);

        setName("");
        setEmail("");
        setPassword("");
        setMobile("");
        setAddress("");
        setCity("");
        setGender("");
      })
      .catch(() => {
        setOutput("❌ User registration failed");
        setLoading(false);
      });
  };

  return (
    <div className="register-page">

      <div className="register-card">
        <h2>Create Account</h2>
        <p>Register to get started</p>

        {output && <div className="msg">{output}</div>}

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={e => setMobile(e.target.value)}
            required
          />

          <textarea
            placeholder="Address"
            value={address}
            onChange={e => setAddress(e.target.value)}
            rows="3"
            required
          />

          <select value={city} onChange={e => setCity(e.target.value)} required>
            <option value="">Select City</option>
            <option>Indore</option>
            <option>Bhopal</option>
            <option>Ujjain</option>
          </select>

          <div className="gender-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={e => setGender(e.target.value)}
              /> Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={e => setGender(e.target.value)}
              /> Female
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={gender === "other"}
                onChange={e => setGender(e.target.value)}
              /> Other
            </label>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>

        </form>
      </div>

    </div>
  );
}

export default Register;
