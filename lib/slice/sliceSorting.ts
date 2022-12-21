import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "",
};

export const sliceSorting = createSlice({
  name: "SortingReducer",
  initialState,
  reducers: {
    addSorting: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { addSorting } = sliceSorting.actions;
export default sliceSorting.reducer;
