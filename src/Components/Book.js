import React from 'react';

const Book = ({book}) => {
  return (
    <React.Fragment>
      <h1>{book.title}</h1>
      <h3>{book.author}</h3>
    </React.Fragment>
  );
};

export default Book;
