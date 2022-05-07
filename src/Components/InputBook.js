import React, { Fragment } from 'react';

const InputBook = () => (
  <Fragment>
    <form >
      <label htmlFor="Add-new-book">ADD A NEW BOOK</label>
      <br />
      <input type="text" placeholder="Book Title" />
      <select placeholder="Category">
        <option>Category</option>
        <option>Author1</option>
        <option>Author2</option>
        <option>Author3</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  </Fragment>
);

export default InputBook;
