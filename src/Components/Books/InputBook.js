import React from "react";

const InputBook = () => {
  return (
    <React.Fragment>
      <form>
        <label>ADD A NEW BOOK</label>
        <br></br>
        <input type="text" placeholder="Book Title" />
        <select placeholder="Category">
          <option>Category</option>
          <option>Author1</option>
          <option>Author2</option>
          <option>Author3</option>
        </select>
        <button>ADD BOOK</button>
      </form>
    </React.Fragment>
  );
};

export default InputBook;
