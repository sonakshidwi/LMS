import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditBook() {
  const [book, setBook] = useState({
    bookName: "",
    authorName: "",
    availability: "Available",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch book data when component mounts
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:3003/books/${id}`);
        setBook(res.data);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };
    fetchBook();
  }, [id]);

  // Update state when form input changes
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  // Submit updated book data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3003/books/${id}`, book, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/");
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Book Name:</label>
        <input
          name="bookName"
          value={book.bookName}
          onChange={handleChange}
        />

        <label>Author Name:</label>
        <input
          name="authorName"
          value={book.authorName}
          onChange={handleChange}
        />

        <label>Availability:</label>
        <select
          name="availability"
          value={book.availability}
          onChange={handleChange}
        >
          <option>Available</option>
          <option>Unavailable</option>
        </select>

        <div className="form-buttons">
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}

export default EditBook;
