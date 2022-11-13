import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sliceProfile from "./slice/sliceProfile";

const reducer = combineReducers({
  ProfileReducer: sliceProfile,
});

export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
