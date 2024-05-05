import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// Import other components
import { Dashboard, Navbar, Landing, Models, ErrorPage } from "./screens";
import { Footer } from "./components";

function App() {
  return (
    <div className="App">
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
