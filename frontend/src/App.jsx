import React from "react";
import Login from "./Client/auth/Login";
import Register from "./Client/auth/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EcommerceHomepage from "./Client/pages/EcommerceHomepage";
import SingleProduct from "./Client/pages/SingleProduct";
import AllProducts from "./Client/pages/AllProducts";
import Cart from "./Client/pages/Cart";
import Blog from "./Client/pages/Blog";
import UserProfile from "./Client/pages/UserProfile";
import SocialProductFeed from "./Client/pages/SocialProductFeed";
import Layout from "./Client/components/Layout";
import Categories from "./Client/pages/Categories";
import Deals from "./Client/pages/Deals";
import Trending from "./Client/pages/Trending";
import Navbar from "./Client/components/Navbar";
import Footer from "./Client/components/Footer";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Layout />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<EcommerceHomepage />} />
          <Route path="/single" element={<SingleProduct />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/product-feed" element={<SocialProductFeed />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
