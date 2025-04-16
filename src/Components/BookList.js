import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BookList() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const fetchBooks = async () => {
    try {
      const res = await axios.get('http://localhost:3003/books');
      setBooks(res.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:3003/books/${id}`);
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const toggleAvailability = async (book) => {
    const updatedBook = {
      ...book,
      availability: book.availability === 'Available' ? 'Unavailable' : 'Available',
    };

    try {
      await axios.put(`http://localhost:3003/books/${book.id}`, updatedBook);
      fetchBooks();
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="booklist-container">
      <h2>All Books</h2>
      <table>
        <thead>
          <tr>
            <th>Book</th>
            <th>Author</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.bookName || book.title || book.name}</td>
              <td>{book.authorName || book.author || book.a_name}</td>
              <td>{book.availability}</td>
              <td>
                <button onClick={() => toggleAvailability(book)}>Toggle</button>
                <button onClick={() => deleteBook(book.id)}>Delete</button>
                <button onClick={() => navigate(`/edit/${book.id}`)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;

