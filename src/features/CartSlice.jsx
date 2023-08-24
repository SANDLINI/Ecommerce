import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  totalPrice: 0,
};

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.cartItems.push(tempProduct);
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },

    decreaseCartQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      } else if (state.cartItems[itemIndex].quantity === 1) {
        const filterItem = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = filterItem;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },

    removeItem(state, action) {
      const filterItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = filterItem;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    cartTotal(state) {
      let total = 0;
      state.cartItems.forEach(
        (items) => (total += items.price * items.quantity)
      );
      state.totalPrice = total;
    },
  },
});

export const { addToCart, decreaseCartQuantity, removeItem, cartTotal } =
  CartSlice.actions;
export default CartSlice.reducer;
