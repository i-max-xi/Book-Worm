import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  books: [
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
  ]}

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    
    AddBook: {
      reducer(state, action){
        state.books.push(action.payload)
    },
      prepare(title, author){
        return {
          payload: {
            id: nanoid(),
            title,
            author,
          }
        }
      }

  },
    RemoveBook: (state, action) => {
       state.books = state.books.filter((item)=> item.id != action.payload.id);
    },
  },
});


export const { AddBook, RemoveBook } = bookSlice.actions;

export const selectAllBooks = (state) => state.book.books;

export default bookSlice.reducer;
