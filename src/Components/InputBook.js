import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { AddBook } from "../redux/books/bookSlice";
import "../Styles/input.css";

const InputBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [categories, setCategory] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  }

  //Dispatch add action
  const onSaveAdd = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(AddBook(title, author, categories));

      setTitle("");
      setAuthor("");
      setCategory("");
      
    }
  };

  return (
    <div className="inputField">
      <hr/>
      <form>
        <label htmlFor="Add-new-book">ADD A NEW BOOK</label>
        <div className="inputCollection">
        <input
          placeholder="Book title"
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

        <select
        value={categories}
        onChange={onChangeCategory}
        >
          <option value="" disabled={true}>Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
          {/* {categories.map((category, key) => (
            <option value={{ key }}>{category}</option>
          ))} */}
        </select>

        <button type="submit" onClick={onSaveAdd}>
          ADD BOOK
        </button>
        </div>
      </form>
    </div>
  );
};

export default InputBook;
