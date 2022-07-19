import React, { Fragment, useState } from 'react';
import BookList from './BookList';
import InputBook from './InputBook';

const Books = () => {
      return (
        <Fragment>
            {/* <BookList books={this.state.books} /> */}
            <BookList />
            <InputBook />
        </Fragment>
      );
    }


export default Books;
