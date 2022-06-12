import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  items: [
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

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {

    AddBook: (state, action) => {
      const newBook = action.payload;
      const existingBook = state.items.find(
        (book) => book.title === newBook.title
      );
      if (!existingBook) {
        state.items.push({
          id: uuidv4(),
          title: newBook.title,
          category: newBook.category,
        });
      } else {
        return state;
      }
      return state;
    },

    RemoveBook: (state, action) => {
      const id = action.payload;
      state.items = [...state.items.filter((item) => item.id !== id)];
      return state;
    },
  },
});

export const { AddBook, RemoveBook } = bookSlice.actions;
export default bookSlice.reducer;
