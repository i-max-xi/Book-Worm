import React, {useEffect} from 'react';
// import Book from './Book';
import '../Styles/books.css';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveBook, selectAllBooks } from '../redux/books/bookSlice';
import { getBooks } from '../redux/books/bookSlice';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const BookList = () => {
  const myBooks = useSelector(selectAllBooks);
  const dispatch = useDispatch();

  const onSaveDelete = (delid) => {    
    console.log(delid);
   dispatch(RemoveBook({
    id: delid
   }))
  }

  useEffect( () => {
    dispatch(getBooks())
  }, [])


  const RenderedBooks = myBooks.map( book => (
    <div key = {book.id} id={book.id} className='booklists'>
      <div className='bookinfo'>
        <h5 className='category'>{book.category}</h5> 
        <h1 className='title'>{book.title}</h1> 
        <h3 className='author'>{book.author}</h3>
        <div className='group-buttons'>
          <button type='button'>&#128172;</button>
          <button type='button' onClick={() => onSaveDelete(book.id)}>🗑</button>
          <button type='button'>&#128393;</button>
        </div>
      </div>

      <div className='radial'>
        <div className='radial-actual'>
          <div style={{ width: 85, height: 85 }}>
            <CircularProgressbar value={book.percentage ? book.percentage : 1} text={book.percentage ? `${book.percentage}%` : '1%'}/>
          </div>
          <span className='completed'>Completed</span>
        </div>
      </div>


      <div className='chapter'>
        <h3>CURRENT CHAPTER</h3>
        <span>Chapter {book.chapter ? book.chapter : 1}</span>
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
