import React, { useContext } from "react";
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import "./App.css"
import CheckoutPage from "./pages/CheckOut";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/Cart";
import MainOutlet from "./pages/MainOutlet";
import OrderConfirmation from "./pages/Confirmation";
import UserContext from "./useContext/UserContext";
import Admin from "./pages/Admin";
import AdminHome from "./pages/admin/AdminHome";
import AdminFoodItems from "./pages/admin/foodItems/AdminFoodItems";
import AdminFoodCategories from "./pages/admin/foodCategories/AdminFoodCategories";
import AdminAddCategory from "./pages/admin/foodCategories/AdminAddCategory";
import { ToastContainer } from "react-toastify";
import AdminUpdateCategory from "./pages/admin/foodCategories/AdminUpdateCategory";
import AdminAddFoodItem from "./pages/admin/foodItems/AdminAddFoodItem";
import AdminUpdateFoodItem from "./pages/admin/foodItems/AdminUpdateFoodItem";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ErrorPage from "./pages/ErrorPage";
import OrderPage from "./pages/OrderPage";
import OurMenu from "./pages/OurMenu";
import ScrollToTop from "./pages/ScrollToTop";
import Gallery from "./pages/Gallery";
import AdminGallery from "./pages/admin/gallery/AdminGallery";
import AdminAddGallery from "./pages/admin/gallery/AdminAddGallery";
import AdminUpdateGallery from "./pages/admin/gallery/AdminUpdateGallery";
import AdminOrder from "./pages/admin/Orders/AdminOrder";
import OurStoryCharity from "./pages/OurStory";
import Charity from "./pages/Charity";
import WhereToFindUs from "./pages/WhereToFindUs";
import AllergenInfo from "./pages/AllergenInfo";
import AdminViewOrder from "./pages/admin/Orders/AdminViewOrder";
const App = () => {
   const {user}=useContext(UserContext);
  return (
    <>
     <Router>
          <ScrollToTop/>
      <Routes>
        <Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>} />
           <Route path="/" element={<Home/>} />
           <Route path="/home" element={<Home/>} />
           {/* second web */}
           <Route path="/" element={<MainOutlet/>}>
           <Route path="product/:id" element={<Product/>} />
           <Route path="product-details/:id" element={<ProductDetails/>} />
           <Route path="cart" element={<CartPage/>} />
           <Route path="checkout" element={<CheckoutPage/>} />
           <Route path="confirm-order" element={<OrderConfirmation/>} />
           <Route path="our-menu" element={<OurMenu/>} />
           <Route path="gallery" element={<Gallery/>} />
           <Route path="charity" element={<Charity/>}/>
           <Route path="where-to-find-us" element={<WhereToFindUs/>} />
           <Route path="allergen-info" element={<AllergenInfo/>} />
           <Route path="our-story" element={<OurStoryCharity/>} />
              {/* <Route path="/order" element={<OrderPage/>} /> */}
           </Route>
           {/* admin routes here */}
           {
            user && user.role==='admin' ?(
              <Route path="/admin" element={<Admin />}>
              <Route index element={<AdminHome />} />
              <Route path="categories" element={<AdminFoodCategories />} />
              <Route path="addCategory" element={<AdminAddCategory/>} />
              <Route path="updateCategory/:id" element={<AdminUpdateCategory/>} />
              <Route path="foodItems" element={<AdminFoodItems />} />
              <Route path="addFoodItem" element={<AdminAddFoodItem />} />
              <Route path="updateFoodItem/:id" element={<AdminUpdateFoodItem />} />
              <Route path="gallery" element={<AdminGallery/>} />
              <Route path="add-gallery-image" element={<AdminAddGallery/>} />
              <Route path="update-gallery-image/:id" element={<AdminUpdateGallery/>} />
                <Route path="orders" element={<AdminOrder/>}/>
              <Route path="view-order/:id" element={<AdminViewOrder/>} />
              </Route>
            ):
          <Route path='*' element={<ErrorPage/>}/>
           }
        </Route>
      </Routes>
     </Router>
        <ToastContainer />
    </>
  );
};

export default App;
