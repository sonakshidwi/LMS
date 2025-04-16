import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function ShowBook() {
  const [books, setBooks] = useState([]);

  async function fetchAllBooks() {
    const result = await axios.get('http://localhost:3003/books')
    console.log(result.data)
    setBooks(result.data)
  }

  useEffect(()=>{
    fetchAllBooks();
  },[]);

  return (
    <div className='container'>
      <table className='table table-dark'>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Avaibility</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map(obj=>{
              return (
                <tr>
                  <td>{obj.name}</td>
                  <td>{obj.a_name}</td>
                  <td>{obj.avaibility}</td>
                  <td>
                    <NavLink to={`/update/${obj.id}`}><button className='btn btn-warning'>Update</button></NavLink> &nbsp;
                    <NavLink to={`/delete/${obj.id}`}><button className='btn btn-danger'>Delete</button></NavLink>
                  </td>
                </tr>
              )
            }
            )
          }
        </tbody>
      </table>
    </div>
  )
}
