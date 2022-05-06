import { configureStore } from '@reduxjs/toolkit';
import reducer from './index';

export const store = configureStore(reducer);