import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const res = await axios.get("http://localhost:3003/books")

    setBooks(res.data);
  };

  return (
    <div className="container">
      <h2>All Books</h2>
      <table>
        <thead>
          <tr>
            <th>Book</th>
            <th>Author</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.bookName}</td>
              <td>{book.authorName}</td>
              <td>{book.availability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
