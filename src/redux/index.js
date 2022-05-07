import { combineReducers } from 'redux';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const reducer = combineReducers({
  book: bookReducer,
  category: categoryReducer,
});

export default reducer;
