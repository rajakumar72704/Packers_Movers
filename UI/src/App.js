import './App.css';

import { Route , Routes } from 'react-router-dom';

import Header from './components/HeaderComponent/Header';
import Home from './components/HomeComponent/Home';
// import ServiceDetails from "./pages/ServiceDetails";
import Footer from './components/FooterComponent/Footer';
import About from './components/AboutComponent/About';
import Contact from './components/ContactComponent/Contact';
import Service from './components/ServiceComponent/Service';
import Reviews from './components/ReviewComponent/Review';
import Register from './components/RegisterComponent/Register';
import Login from './components/LoginComponent/Login';
import AdminHome from './components/AdminHomeComponent/AdminHome';
import UserHome from './components/UserHomeComponent/UserHome';
import Logout from './components/LogoutComponent/Logout';
import Manageusers from './components/ManageusersComponent/Manageusers';
import Verifyuser from './components/VerifyuserComponent/Verifyuser';
import EPAdmin from './components/EPAdminComponent/EPAdmin';
import CPAdmin from './components/CPAdminComponent/CPAdmin';
import EPUser from './components/EPUserComponent/EPUser';
import CPUser from './components/CPUserComponent/CPUser';
import Addcategory from './components/AddcategoryComponent/Addcategory';
import Addsubcategory from './components/AddsubcategoryComponent/Addsubcategory';
import ShowCategory from './components/ShowCategoryComponent/ShowCategory';
import EditCategory from './components/EditCategoryComponent/EditCategory';
import ShowSubCategory from './components/ShowSubcategoryComponenet/ShowSubcategory';
import EditSubCategory from './components/EditSubCategoryComponent/EditSubCategory';
import ViewCategory from './components/ViewCategoryComponent/ViewCategory';
import ViewSubCategory from './components/ViewSubCategoryComponent/ViewSubCategory';
import AddConsignment from './components/ConsignmentComponent/AddConsignment';
import MyConsignments from './components/ConsignmentComponent/MYConsignmentList';
import TrackConsignment from './components/ConsignmentComponent/TrackConsignment';
import Charity from './components/CharityComponent/Charity';
import Payment from './components/PaymentComponent/Payment';
import Success from './components/SuccessComponent/Success';
import Cancel from './components/CancelComponent/Cancel';
import AiChat from './components/AiChatComponent/AiChat';
import AdminConsignments from './components/AdminConsignment/AdminConsignment';
import ManageContacts from './components/ManageContactsComponent/ManageContacts';
import ProtectedRoute from './components/ProtectedRouteComponent/ProtectedRoute';


function App() {
  return (
<>    

  <Header />
  <AiChat />


  {/* <Nav /> */}

  <Routes>

  {/* ================= PUBLIC ROUTES ================= */}
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/service" element={<Service />} />
  <Route path="/reviews" element={<Reviews />} />
  <Route path="/register" element={<Register />} />
  <Route path="/vemail/:email" element={<Verifyuser />} />
  <Route path="/login" element={<Login />} />
  <Route path="/logout" element={<Logout />} />
  <Route path="/searchsc/:cnm" element={<ViewSubCategory />} />
  <Route path="/success" element={<Success />} />
  <Route path="/cancel" element={<Cancel />} />

  {/* ================= ADMIN ROUTES ================= */}
  <Route path="/admin" element={<ProtectedRoute roleRequired="admin"><AdminHome /></ProtectedRoute>} />
  <Route path="/manageusers" element={<ProtectedRoute roleRequired="admin"><Manageusers /></ProtectedRoute>} />
  <Route path="/epadmin" element={<ProtectedRoute roleRequired="admin"><EPAdmin /></ProtectedRoute>} />
  <Route path="/cpadmin" element={<ProtectedRoute roleRequired="admin"><CPAdmin /></ProtectedRoute>} />
  <Route path="/addcategory" element={<ProtectedRoute roleRequired="admin"><Addcategory /></ProtectedRoute>} />
  <Route path="/addsubcategory" element={<ProtectedRoute roleRequired="admin"><Addsubcategory /></ProtectedRoute>} />
  <Route path="/showcategory" element={<ProtectedRoute roleRequired="admin"><ShowCategory /></ProtectedRoute>} />
  <Route path="/edit-category/:id" element={<ProtectedRoute roleRequired="admin"><EditCategory /></ProtectedRoute>} />
  <Route path="/showsubcategory" element={<ProtectedRoute roleRequired="admin"><ShowSubCategory /></ProtectedRoute>} />
  <Route path="/edit-subcategory/:id" element={<ProtectedRoute roleRequired="admin"><EditSubCategory /></ProtectedRoute>} />
  <Route path="/admin-consignments" element={<ProtectedRoute roleRequired="admin"><AdminConsignments /></ProtectedRoute>} />
  <Route path="/admin/contacts" element={<ProtectedRoute roleRequired="admin"><ManageContacts /></ProtectedRoute>} />

  {/* ================= USER ROUTES ================= */}
  <Route path="/user" element={<ProtectedRoute roleRequired="user"><UserHome /></ProtectedRoute>} />
  <Route path="/epuser" element={<ProtectedRoute roleRequired="user"><EPUser /></ProtectedRoute>} />
  <Route path="/cpuser" element={<ProtectedRoute roleRequired="user"><CPUser /></ProtectedRoute>} />
  <Route path="/viewcategory" element={<ProtectedRoute roleRequired="user"><ViewCategory /></ProtectedRoute>} />
  <Route path="/add-consignment" element={<ProtectedRoute roleRequired="user"><AddConsignment /></ProtectedRoute>} />
  <Route path="/my-consignments" element={<ProtectedRoute roleRequired="user"><MyConsignments /></ProtectedRoute>} />
  <Route path="/track-consignment" element={<ProtectedRoute roleRequired="user"><TrackConsignment /></ProtectedRoute>} />
  <Route path="/charity" element={<ProtectedRoute roleRequired="user"><Charity /></ProtectedRoute>} />
  <Route path="/payment/:uid/:amt" element={<ProtectedRoute roleRequired="user"><Payment /></ProtectedRoute>} />

</Routes>


  <Footer />    

</>
  );
}

export default App;
