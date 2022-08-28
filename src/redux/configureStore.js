import { configureStore } from '@reduxjs/toolkit';
import reducers from './index';

const Store = configureStore({
    reducer: reducers
});
export default Store;
