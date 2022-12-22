import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sliceCart from "./slice/sliceCart";
import sliceCategory from "./slice/sliceCategory";
import sliceModal from "./slice/sliceModal";
import sliceProfile from "./slice/sliceProfile";
import sliceSearch from "./slice/sliceSearch";
import sliceSidebar from "./slice/sliceSidebar";
import sliceSorting from "./slice/sliceSorting";

const reducer = combineReducers({
  ProfileReducer: sliceProfile,
  SearchReducer: sliceSearch,
  SidebarReducer: sliceSidebar,
  ModalReducer: sliceModal,
  CategoryReducer: sliceCategory,
  SortingReducer: sliceSorting,
  CartReducer: sliceCart,
});

export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
