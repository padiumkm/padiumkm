import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sliceProfile from "./slice/sliceProfile";
import sliceSearch from "./slice/sliceSearch";
import sliceSidebar from "./slice/sliceSidebar";

const reducer = combineReducers({
  ProfileReducer: sliceProfile,
  SearchReducer: sliceSearch,
  SidebarReducer: sliceSidebar,
});

export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
