import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type User = {
  avatar: string;
  nik: string;
  position: string;
  name: string;
  email: string;
  phone_number: string;
  office_number: string;
  total_cart: number;
  total_notificaton: number;
  has_submit_nps: boolean;
}

type ProfileState = {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
  user: User;
}

const initialState: ProfileState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
  user: {
    avatar: "",
    nik: "",
    position: "",
    name: "",
    email: "",
    phone_number: "",
    office_number: "",
    total_cart: 0,
    total_notificaton: 0,
    has_submit_nps: false,
  },
};

export const sliceProfile = createSlice({
  name: "ProfileReducer",
  initialState,
  reducers: {
    saveProfile: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { saveProfile } = sliceProfile.actions;
export default sliceProfile.reducer;
