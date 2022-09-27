import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/Index";
import LoginPage from "./components/login/LoginPage";
import AdminPage from "./components/admin/AdminPage";
import PostPage from "./components/admin/posts/PostPage";
import AddPost from "./components/admin/posts/AddPost";
import EditPost from "./components/admin/posts/EditPost";
import NavBar from "./components/layout/NavBar";
import AccommodationPage from "./components/accommodation/AccommodationPage";
import ContactPage from "./components/contact/ContactPage";
import { AuthProvider } from "./context/AuthContext";
import AccommodationDetail from "./components/accommodation/AccommodationDetail";
import HotelsInquiry from "./components/admin/HotelsInquiry";
import ContactInquiry from "./components/admin/ContactInquiry";
import InquiryConfirmation from "./components/accommodation/InquiryConfirmation";
import ProductPage from "./components/admin/products/ProductPage";
import AddProduct from "./components/admin/products/AddProduct";
import EditProduct from "./components/admin/products/EditProduct";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/accommodation" element={<AccommodationPage />} />
          <Route path="/accommodation/detail/:id" element={<AccommodationDetail />} />
          <Route path="/accommodation/inquiryConfirmation" element={<InquiryConfirmation/>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/posts" element={<PostPage />} />
          <Route path="/admin/products" element={<ProductPage/>} />
          <Route path="/admin/hotelsInquiry" element={<HotelsInquiry/>} />
          <Route path="/admin/contactInquiry" element={<ContactInquiry/>} />
          <Route path="/admin/posts/add" element={<AddPost />} />
          <Route path="/admin/products/add" element={<AddProduct/>} />
          <Route path="/admin/posts/edit/:id" element={<EditPost />} />
          <Route path="/admin/products/edit/:id" element={<EditProduct/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
