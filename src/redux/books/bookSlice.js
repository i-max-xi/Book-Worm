import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";


const BookAPI = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/1hn4AZy4NAU15YhEKT2D/books';

export const getBooks = createAsyncThunk (
  'books/getBooks',
  async () => {
    return fetch(BookAPI).then((res) => res.json())
  }
)
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
  ],
  status: null
}

const bookSlice = createSlice({
  name: "books",
  initialState,

  // reducers: {
  //   AddBook: {
  //     reducer(state, action){
  //       state.books.push(action.payload)
  //   },
  //     prepare(title, author){
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           title,
  //           author,
  //         }
  //       }
  //     }
  // },

  //   RemoveBook: (state, action) => {
  //      state.books = state.books.filter((item)=> item.id != action.payload.id);
  //   },
  // },
  
  ExtraReducers: {
    [getBooks.pending]: (state, action) => {
      state.book.status = 'loading';
    },
    [getBooks.fulfilled]: (state, action) => {
      state.book.books = action.payload;
      state.status = 'success';
      console.log(action.payload)
    },
    [getBooks.rejected]: () => {
      state.status = 'failed'
    }
  },
});


export const { AddBook, RemoveBook } = bookSlice.actions;

export const selectAllBooks = (state) => state.book.books;

export default bookSlice.reducer;
