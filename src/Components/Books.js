import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllBooks } from '../redux/books/bookSlice';
import Book from './Book';
import BookList from './BookList';
import InputBook from './InputBook';

const Books = () => {

  
    // const [books, setBooks] = useState({
    //     books: [
    //       {
    //         id: 1,
    //         title: "The Hunger Games",
    //         author: "Author1",
    //       },
    //       {
    //         id: 2,
    //         title: "Dune",
    //         author: "Author2",
    //       },
    //     ],
    //   })

    //   const AddBooks = () => {
    //     setBooks({
    //       books: [
    //         ...books, {
    //           id: 3,
    //           title: "Dhh",
    //           author: "Author3",
    //         }
    //       ]
    //     })
    //   }

      const myBooks = useSelector(selectAllBooks);
      return (
        <Fragment>
        {/* <BookList books={this.state.books} /> */}
        <BookList books={myBooks} />
        <InputBook />
        </Fragment>
      );
    }


export default Books;
