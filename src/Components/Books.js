import React, { Fragment, useState } from 'react';
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
      return (
        <Fragment>
        <BookList books={this.state.books} />
        <InputBook />
        </Fragment>
      );
    }
    
}

export default Books;
