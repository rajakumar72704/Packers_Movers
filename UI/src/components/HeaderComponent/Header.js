import "./Header.css";
import { useState, useEffect, useRef, use } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header  () {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showConsignment, setShowConsignment] = useState(false);
  const [ NavContent , setNavContent ] = useState();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [scrolled, setScrolled] = useState(false);

  const [role, setRole] = useState(null);
  const [token, setToken] = useState(null);

  // SIGN IN DROPDOWN
  const [openAuth, setOpenAuth] = useState(false);
  const authRef = useRef(null);
  const navigate = useNavigate();

  /* ================== EFFECTS ================== */

  // scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // theme persistence
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // auth data auto update
useEffect(() => {
  const interval = setInterval(() => {
    setRole(localStorage.getItem("role"));
    setToken(localStorage.getItem("token"));
  }, 300); // check every 300ms

  return () => clearInterval(interval);
}, []);


  // close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (authRef.current && !authRef.current.contains(e.target)) {
        setOpenAuth(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ================== LOGOUT ================== */
  const logout = () => {
  const confirmLogout = window.confirm(
    "Are you sure you want to logout?"
  );

  if (confirmLogout) {
    navigate("/logout"); // <-- uses your existing Logout component
  }
};


 {/* NAV LINKS */}
useEffect(()=>{
  
    setInterval(()=>{
      {/* ================= ADMIN NAV ================= */}
      
    if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="admin")
    {
      setNavContent(<>
            <nav className={`nav ${menuOpen ? "open" : ""}`}>
    <Link to="/admin">Admin Home</Link>
    <Link to="/manageusers">Manage Users</Link>
    <Link to="/epadmin">Edit Profile</Link>
    <Link to="/cpadmin">Change Password</Link>
     {/* 🔽 data DROPDOWN */}
    <div className="nav-dropdown">
      <span className="nav-link dropdown-title">Manage Data ▾</span>

      <div className="dropdown-menu">
        <Link to="/admin/contacts">Manage Contacts</Link>
        <Link to="/admin-consignments">Manage Consignments</Link>
      </div>  
    </div>
    

    {/* 🔽 CATEGORY DROPDOWN */}
    <div className="nav-dropdown">
      <span className="nav-link dropdown-title">Category ▾</span>

      <div className="dropdown-menu">
        <Link to="/addcategory">Add Category</Link>
        <Link to="/addsubcategory">Add Subcategory</Link>
        <Link to="/showcategory">Show Category</Link>
        <Link to="/showsubcategory">Show Sub Category</Link>
      </div>  
    </div>

     </nav>

       </>); 
             
             {/* ================= USER NAV ================= */}
       } else if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="user")
        {
      setNavContent(<>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
         <Link to="/user">User Home</Link>
         <Link to="/viewcategory">Services</Link>
         <Link to="/epuser">Edit Profile</Link>
         <Link to="/cpuser">Change Password</Link>
    
     {/* 🔽 CONSIGNMENT DROPDOWN */}
    <div className="nav-dropdown">
      <span className="nav-link dropdown-title">
        Consignment ▾
      </span>

      <div className="dropdown-menu">
        <Link to="/add-consignment">Add Consignment</Link>
        <Link to="/my-consignments">My Consignments</Link>
        <Link to="/track-consignment">Track Consignment</Link>
      </div>
    </div>

    <Link to="/charity">Booking Amount</Link>
    

     </nav>
      </>);
    }else
      {
      setNavContent(<>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
      
          {/* ================= GUEST NAV ================= */}

            
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/service">Services</Link>
              <Link to="/reviews">Reviews</Link>
              <Link to="/contact">Contact</Link>

     </nav>
      </>);
    }
    
    
    },1);
   
},[]);


  return (
    
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">

      
        {/* LOGO */}
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="Logo"/>
        </div>
 
        <>{ NavContent }</>

        {/* ACTIONS */}
        <div className="actions">

          {/* THEME */}
          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* AUTH BUTTON */}
          {token ? (
            <button className="signin-btn logout" onClick={logout}>
              🚪 Logout
            </button>
          ) : (
            <div className="auth-wrapper" ref={authRef}>
              <button
                className="signin-btn"
                onClick={() => setOpenAuth(!openAuth)}
              >
                🔐 Sign In
              </button>

              {openAuth && (
                <div className="auth-dropdown">
                  <button onClick={() => navigate("/login")}>Login</button>
                  <button onClick={() => navigate("/register")}>Register</button>
                </div>
              )}
            </div>
          )}

          {/* HAMBURGER */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
