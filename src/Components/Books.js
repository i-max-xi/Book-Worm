import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import BookList from './BookList';
import InputBook from './InputBook';

class Books extends React.Component {

    state = {
      books: [
        {
          id: 1,
          title: "The Hunger Games",
          author: "Author1",
        },
        {
          id: 2,
          title: "Dune",
          author: "Author2",
        },
      ],
    };
  
    render(){
      // const myBooks = useSelector(state => state.books);
      return (
        <Fragment>
        <BookList books={this.state.books} />
        {/* <BookList books={myBooks} /> */}
        <InputBook />
        </Fragment>
      );
    }
    
}

export default Books;
