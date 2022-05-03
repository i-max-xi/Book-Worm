import React from "react";

const Book = (props) => {
    return (
        <React.Fragment>
        <h1>{props.book.title}</h1>
        <h3>{props.book.author}</h3>
        </React.Fragment>
     );
}

export default Book;