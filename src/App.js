import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import ShopCategory from "./ShopCategory";
import Productdetails from "./Productdetails";
import Checkout from "./Checkout";
import Cart from "./Cart";
import Confirmation from "./Confirmation";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import Login from "./Login";
import Tracking from "./Tracking";
import Contect from "./Contect";
import Register from "./Register";
import Admin from "./Admin";
import AdminLogin from "./AdminLogin";
import AdminEdite from "./AdminEdite";
import Viewcard from "./Viewcard";
import Addtocart from "./Addtocart";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="/shopcategory" element={<ShopCategory/>}></Route>
          <Route path="/productdetails" element={<Productdetails/>}></Route>
          <Route path="/Checkout" element={<Checkout/>}></Route>
          <Route path="/Cart" element={<Cart/>}></Route>
          <Route path="/Confirmation" element={<Confirmation/>}></Route>
          <Route path="/Blog" element={<Blog/>}></Route>
          <Route path="/BlogDetails" element={<BlogDetails/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Tracking" element={<Tracking/>}></Route>
          <Route path="/Contect" element={<Contect/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path="/adminlogin" element={<AdminLogin/>}></Route>
          <Route path="/adminedit" element={<AdminEdite/>}></Route>
          <Route path="/viewcard/:view" element={<Viewcard></Viewcard>}></Route>
          <Route path="/addtocart" element={<Addtocart></Addtocart>}></Route>
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
