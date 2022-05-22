import React from 'react';
import { bookList } from '../DataContext';
import { useContext } from 'react';

function BookList() {

  const {listOfBooks, setListOfBooks} = useContext(bookList);

  return (
    <div>
      <table id='students'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {listOfBooks.data.map((book) => {
            return (
              <tr>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.year}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;