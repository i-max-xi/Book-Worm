import React, { Fragment, useState } from "react";

const InputBook = () => {
  const [title, setTitle] = useState("Enter book title");
  const [categories, setCategory] = useState([
    "Category1",
    "Category2",
    "Category3",
  ]);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const onCategoryChange = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);

  };

  return (
    <Fragment>
      <form>
        <label htmlFor="Add-new-book">ADD A NEW BOOK</label>
        <br/>

        <input type="text" value={title} onChange={onTitleChange}/>

        <select placeholder="Category" onChange={(e) => onCategoryChange(e)}>
          {categories.map((category, key) => (
            <option value={{ key }}>{category}</option>
          ))}
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </Fragment>
  );
};

export default InputBook;
