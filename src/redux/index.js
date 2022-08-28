import { combineReducers } from 'redux';
import bookReducer from './books/bookSlice';
import categoryReducer from './categories/categoriesSlice';

const reducers = combineReducers({
  book: bookReducer,
  // category: categoryReducer,
});

export default reducers;
