import './Login.css';
import { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; 
import ReCAPTCHA from "react-google-recaptcha"; 
import { __userapiurl } from '../../API_URL';

function Login() {
  const navigate = useNavigate();
  const captchaRef = useRef(null);

  const [output, setOutput] = useState("");  
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);



  const handleSubmit = (e) => {
    e.preventDefault();

     // 🔐 CAPTCHA CHECK
    if (!captchaToken) {
      setOutput("❌ Please verify reCAPTCHA");
      return;
    }

    const userDetails = { email, password, captchaToken};

    axios.post(__userapiurl + "login", userDetails)
      .then((response) => {
        const users = response.data.users;

        localStorage.setItem("token", response.data.token);

        localStorage.setItem("userid", users._id);   // 🔥 REQUIRED FOR CONSIGNMENT
        
        localStorage.setItem("name", users.name);
        localStorage.setItem("email", users.email);
        localStorage.setItem("mobile", users.mobile);
        localStorage.setItem("address", users.address);
        localStorage.setItem("city", users.city);
        localStorage.setItem("gender", users.gender);
        localStorage.setItem("role", users.role);
        localStorage.setItem("info", users.info);

        users.role === "admin"? navigate("/admin") : navigate("/user");
      })
      .catch(() => {
        setOutput("❌ Invalid user or please verify your account");
        setEmail("");
        setPassword("");
        setCaptchaToken(null);
        captchaRef.current.reset(); // 🔄 reset captcha

      });
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h2>Welcome Back</h2>
        <p>Please login to continue</p>

        {output && <div className="error-msg">{output}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
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
           {/* ✅ reCAPTCHA */}
          <ReCAPTCHA
            ref={captchaRef}
            sitekey="6Lf0xTYsAAAAAC4w0O-rgq4Df5VLg7hD6_FtueEH"
            onChange={(token) => setCaptchaToken(token)}
          />

          <button type="submit">Login</button>
        </form>

        <p className="register-link">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>

      </div>

    </div>
  );
}

export default Login;
