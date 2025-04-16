import React, { useState } from "react";
import axios from "axios";
import "../../App.css";

const AddBook = () => {
  const [book, setBook] = useState({
    bookName: "",
    authorName: "",
    availability: "Available",
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/books", book);
    setBook({ bookName: "", authorName: "", availability: "Available" });
    alert("Book added!");
  };

  return (
    <div className="container">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Book Name:</label>
        <input type="text" name="bookName" value={book.bookName} onChange={handleChange} required />
        <label>Author Name:</label>
        <input type="text" name="authorName" value={book.authorName} onChange={handleChange} required />
        <label>Availability:</label>
        <select name="availability" value={book.availability} onChange={handleChange}>
          <option value="Available">Available</option>
          <option value="Unavailable">Unavailable</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
