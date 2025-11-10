import React from "react";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EcommerceHomepage from "./pages/EcommerceHomepage";
import SingleProduct from "./pages/SingleProduct";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import Blog from "./pages/Blog";
import UserProfile from "./pages/UserProfile";
import SocialProductFeed from "./pages/SocialProductFeed";
import Layout from "./components/Layout";
import Categories from "./pages/Categories";
import Deals from "./pages/Deals";
import Trending from "./pages/Trending";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
