import React, {useEffect} from 'react';
// import Book from './Book';
import '../Styles/books.css';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveBook, selectAllBooks } from '../redux/books/bookSlice';
import { getBooks } from '../redux/books/bookSlice';

const BookList = () => {
  const myBooks = useSelector(selectAllBooks);
  const dispatch = useDispatch();

  const onSaveDelete = (e) => {    
   dispatch(RemoveBook({
    id: e.target.parentElement.id
   }))
  }

const Posts = () => {
  useEffect( () => {
    dispatch(getBooks())
  }, [dispatch])
}

  const RenderedBooks = myBooks.map( book => (
    <div key = {book.id} id={book.id} className='booklists'>
      <div className='bookinfo'>
        <h1 className='title'>{book.title}</h1> 
        <h3 className='author'>{book.author}</h3>
        <button type='button'>Comments</button>
        <button type='button' onClick={onSaveDelete}>Remove</button>
        <button type='button'>Edit</button>
      </div>
      <div className='radial'>
        <h1>radial</h1>
      </div>
      <div className='chapter'>
        <h3>CURRENT CHAPTER</h3>
        <span>Chapter</span>
        <button>UPDATE PROGRESS</button>
      </div>
    </div>
    )
  )


  
  return (
    <React.Fragment>
      {RenderedBooks}
    </React.Fragment>
  );
};
export default BookList;
