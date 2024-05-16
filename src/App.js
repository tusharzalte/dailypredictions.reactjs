import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// Import other components
import { Dashboard, Navbar, Landing, Models, ErrorPage } from "./screens";
import { Footer, ScrollToTop } from "./components";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <ToastContainer
        style={{
          fontSize: "1rem",
          fontWeight: "500",
        }}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/models" element={<Models />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
