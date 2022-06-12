import React from 'react';
import Book from './Book';

const BookList = (props) => {
  return (
    <React.Fragment>
      <ul>
        {props.books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
    </React.Fragment>
  );
};
export default BookList;
