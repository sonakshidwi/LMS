import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Books from "./Components/Pages/Books";
import AddBook from "./Components/Pages/AddBook";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/add" element={<AddBook />} />
      </Routes>
    </Router>
  );
}

export default App;
