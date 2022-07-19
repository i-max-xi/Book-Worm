import React, { Fragment, useState } from "react";
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { AddBook } from "../redux/books/bookSlice";

const InputBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  // const [categories, setCategory] = useState([
  //   "Category1",
  //   "Category2",
  //   "Category3",
  // ]);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  // const onCategoryChange = (e) => {
  //   setCategory(e.target.value);
  // };

  //Dispatch add action
  const onSaveAdd = (e) => {
    e.preventDefault();
    if (title && author){
      dispatch(
        AddBook(title, author)
      )

      setTitle('');
      setAuthor('');
    }
  }


  return (
    <Fragment>
      <form>
        <label htmlFor="Add-new-book">ADD A NEW BOOK</label>
        <input
        placeholder="Enter title..."
        type="text"
        value={title}
        onChange={onTitleChange}
        />
        <input
        placeholder="Enter author..."
        type="text"
        value={author}
        onChange={onAuthorChange}
        />

        {/* <select
        placeholder="Category"
        onChange={(e) => onCategoryChange(e)}
        >
          {categories.map((category, key) => (
            <option value={{ key }}>{category}</option>
          ))
          }
        </select> */}
        <button
        type="submit"
        onClick={onSaveAdd}
        >ADD BOOK</button>
      </form>
    </Fragment>
  );
};

export default InputBook;
