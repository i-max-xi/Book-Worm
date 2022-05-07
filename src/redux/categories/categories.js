import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  reducers: {
    CHECKSTATUS: (state) => (state),
  },
});

export const { CHECKSTATUS } = categoriesSlice.actions;
export default categoriesSlice.reducer;
