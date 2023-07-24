import React from "react";
import './App.css';
import Home from "./pages/Home";
import Food from "./pages/Food";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import YourOrder from "./pages/YourOrder";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/food" element={<Food/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/your-order" element={<YourOrder/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
