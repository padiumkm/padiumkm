import { createSlice } from "@reduxjs/toolkit";

type SearchState = {
  isLoadingProduct: boolean;
  isLoadingProductLoadMore: boolean;
  isSuccessProduct: boolean;
  isErrorProduct: boolean;
  errorMessageProduct: string;
  isLoadingSearchSuggestions: boolean;
  isSuccessSearchSuggestions: boolean;
  isErrorSearchSuggestions: boolean;
  searchSuggestion: {
    products: {
      _id: string;
      name: string;
      slug: string;
    }[];
    store: {
      _id: string;
      name: string;
    }[];
  };
};

const initialState: SearchState = {
  isLoadingProduct: false,
  isLoadingProductLoadMore: false,
  isSuccessProduct: false,
  isErrorProduct: false,
  errorMessageProduct: "",
  isLoadingSearchSuggestions: false,
  isSuccessSearchSuggestions: false,
  isErrorSearchSuggestions: false,
  searchSuggestion: {
    products: [],
    store: [],
  },
};

export const sliceSearch = createSlice({
  name: "SearchReducer",
  initialState,
  reducers: {},
});

export default sliceSearch.reducer;
