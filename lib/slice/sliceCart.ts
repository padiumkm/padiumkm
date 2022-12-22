import { createSlice } from "@reduxjs/toolkit";
import { IProductCard } from "../../components/productCard/IProductCard";

interface ICart {
  id: number;
  product: {
    item: IProductCard;
    quantity: number;
    notes: string;
  };
}

const initialState: { cart: ICart[] } = {
  cart: [
    {
      id: 0,
      product: {
        item: {
          id: "0",
          name: "",
          price: 0,
          image: [""],
          avail: 0,
          location: "",
          rating: 0,
          review: 0,
          sold: 0,
        },
        quantity: 0,
        notes: "",
      },
    },
  ],
};

export const sliceCart = createSlice({
  name: "CartReducer",
  initialState,
  reducers: {
    saveCart: (state, action) => {
      state.cart.push(action.payload);
      if (state.cart[0].product.item.name === "") {
        state.cart.splice(0, 1);
      }
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      action.payload.map((id: number) => {
        const index = state.cart.findIndex((item: ICart) => item.id === id);
        state.cart.splice(index, 1);
      });
      if (state.cart.length === 0) {
        state.cart = initialState.cart;
      }
    },
    increaseQuantity: (state, action) => {
      const hit = state.cart.find((item: ICart) => item.id === action.payload);
      if (hit) {
        hit.product.quantity += 1;
      }
    },
    decreseQuantity: (state, action) => {
      const hit = state.cart.find((item: ICart) => item.id === action.payload);
      if (hit) {
        hit.product.quantity -= 1;
      }
    },
    updateQuantity: (state, action) => {
      const hit = state.cart.find(
        (item: ICart) => item.id === action.payload.id
      );
      if (hit) {
        hit.product.quantity = action.payload.quantity;
      } else {
        state.cart.push(action.payload);
        state.cart.splice(0, 1);
      }
    },
    addNotes: (state, action) => {
      const hit = state.cart.find(
        (item: ICart) => item.id === action.payload.id
      );
      if (hit) {
        hit.product.notes = action.payload.notes;
      }
    },
  },
});

export const {
  saveCart,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreseQuantity,
  updateQuantity,
  addNotes,
} = sliceCart.actions;
export default sliceCart.reducer;
