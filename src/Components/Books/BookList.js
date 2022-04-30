import React from "react";
import Book from "./Book";

const BookList = (props) => {
  return (
    <React.Fragment>
      <Book book = {props.book}/>
      <button>Comments</button>
      <button>Remove</button>
      <button>Edit</button>
    </React.Fragment>
  );
};

export default BookList;
