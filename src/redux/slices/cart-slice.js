import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  wishlist: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      );

      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    addToWishlist: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      const item = state.wishlist.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.wishlist.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    removeItemWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.cart = [];
    },
    resetwishlist: (state) => {
      state.wishlist = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeItem,
  resetCart,
  addToWishlist,
  removeItemWishlist,
  resetwishlist,
} = cartSlice.actions;

export default cartSlice.reducer;
