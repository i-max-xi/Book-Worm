import { createSlice } from "@reduxjs/toolkit";


const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    CHECKSTATUS: (state) => {
      return state;
    },
  },
});

export const { CHECKSTATUS } = categoriesSlice.actions;
export default categoriesSlice.reducer;
