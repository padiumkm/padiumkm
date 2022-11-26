import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  showProfile: boolean;
  showCategory: boolean;
  showAlert: boolean;
}

const initialState: ModalState = {
  showProfile: false,
  showCategory: false,
  showAlert: false,
};

export const sliceModal = createSlice({
  name: "ModalReducer",
  initialState,
  reducers: {
    showProfile: (state) => {
        state.showProfile = true;
    },
    hideProfile: (state) => {
        state.showProfile = false;
    },
    showCategory: (state) => {
        state.showCategory = true;
    },
    hideCategory: (state) => {
        state.showCategory = false;
    },
    showAlert: (state) => {
        state.showAlert = true;
    },
    hideAlert: (state) => {
        state.showAlert = false;
    }
  },
});

export const { showProfile, hideProfile, showCategory, hideCategory, showAlert, hideAlert } = sliceModal.actions;
export default sliceModal.reducer;
