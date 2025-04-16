import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h2>📚 Library Manager</h2>
      <div className="nav-links">
        <Link to="/">Show Books</Link>
        <Link to="/add">Add Book</Link>
      </div>
    </nav>
  );
};

export default NavBar;
