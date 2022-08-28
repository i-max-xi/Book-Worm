import React, { Fragment, useState } from 'react';
import BookList from './BookList';
import InputBook from './InputBook';
import '../Styles/books.css'

const Books = () => {
      return (
        <div className='fullPage'>
            <BookList />
            <InputBook />
        </div>
      );
    }


export default Books;
