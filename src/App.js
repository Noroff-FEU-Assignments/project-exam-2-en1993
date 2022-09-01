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

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/accommodation" element={<AccommodationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/posts" element={<PostPage />} />
          <Route path="/admin/posts/add" element={<AddPost />} />
          <Route path="/admin/posts/edit/:id" element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
