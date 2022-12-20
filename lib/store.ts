import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sliceCategory from "./slice/sliceCategory";
import sliceModal from "./slice/sliceModal";
import sliceProfile from "./slice/sliceProfile";
import sliceSearch from "./slice/sliceSearch";
import sliceSidebar from "./slice/sliceSidebar";

const reducer = combineReducers({
  ProfileReducer: sliceProfile,
  SearchReducer: sliceSearch,
  SidebarReducer: sliceSidebar,
  ModalReducer: sliceModal,
  CategoryReducer: sliceCategory,
});

export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
