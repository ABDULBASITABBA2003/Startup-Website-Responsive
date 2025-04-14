import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  // Import the Navbar
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    // pages to render to the browser
    <Router>
      <Navbar />  {/* Navbar appears on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
