import { createSlice } from "@reduxjs/toolkit";
import { IProductCard } from "../../components/productCard/IProductCard";

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
  searchResult: {
    products: IProductCard[];
    pagination: {
      page: number;
      total: number;
      limit: number;
    };
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
  searchResult: {
    products: [],
    pagination: {
      page: 1,
      total: 0,
      limit: 0,
    },
  },
};

export const sliceSearch = createSlice({
  name: "SearchReducer",
  initialState,
  reducers: {
    searchProduct: (state) => {
      state.isLoadingProduct = true;
      state.isSuccessProduct = false;
      state.isErrorProduct = false;
      state.errorMessageProduct = "";
    },
    searchProductSuccess: (state, action) => {
      state.isLoadingProduct = false;
      state.isSuccessProduct = true;
      state.isErrorProduct = false;
      state.errorMessageProduct = "";
      state.searchResult = action.payload;
    },
    searchProductError: (state, action) => {
      state.isLoadingProduct = false;
      state.isSuccessProduct = false;
      state.isErrorProduct = true;
      state.errorMessageProduct = action.payload;
    },
  },
});

export const { searchProductSuccess } = sliceSearch.actions;
export default sliceSearch.reducer;
