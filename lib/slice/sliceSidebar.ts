import { createSlice } from "@reduxjs/toolkit";

type SidebarState = {
  isOpen: boolean;
};

const initialState: SidebarState = {
  isOpen: false,
};

export const sliceSidebar = createSlice({
  name: "SidebarReducer",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSidebar } = sliceSidebar.actions;
export default sliceSidebar.reducer;
