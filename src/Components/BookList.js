import React from 'react';
import Book from './Book';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveBook, selectAllBooks } from '../redux/books/bookSlice';

const BookList = () => {
  const myBooks = useSelector(selectAllBooks);
  const dispatch = useDispatch();

  const onSaveDelete = (e) => {    
   dispatch(RemoveBook({
    id: e.target.parentElement.id
   }))
  }

  const RenderedBooks = myBooks.map( book => (
    <div key = {book.id} id={book.id}>
      <h1>{book.title}</h1> 
      <h3>{book.author}</h3>
      <button type='button'>Comments</button>
      <button type='button' onClick={onSaveDelete}>Remove</button>
      <button type='button'>Edit</button>
    </div>
    )
  )
  
  return (
    <React.Fragment>
        {/* {myBooks.map((book) => (
          <Book key={book.id} renderedBook={book} />
        ))} */}
      {RenderedBooks}
    </React.Fragment>
  );
};
export default BookList;
