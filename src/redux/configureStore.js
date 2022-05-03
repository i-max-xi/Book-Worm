import bookReducer from './books/books';
import categoryReducer from './categories/categories';
import { configureStore } from '@reduxjs/toolkit'



export const store = configureStore({
  reducer: {
    book: bookReducer,
    category: categoryReducer
  }
})