import React from 'react';
import Book from './Book';

const BookList = ({book}) => {
  
  return (
  <Fragment>
    <Book book={book} />
    <button type='button'>Comments</button>
    <button type='button'>Remove</button>
    <button type='button'>Edit</button>
  </Fragment>
);
  }
export default BookList;
