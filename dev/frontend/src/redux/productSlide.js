import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  productList: [],
  cartItem: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      state.productList = action.payload;
    },

    addCartItem: (state, action) => {
      const { _id, price } = action.payload;

      if (!_id || typeof price === "undefined") {
        return;
      }

      const check = state.cartItem.some((el) => el._id === _id);
      if (check) {
        toast("Cet article est déjà dans le panier");
      } else {
        toast("Article ajouté avec succès");
        const total = price;
        state.cartItem.push({ ...action.payload, qty: 1, total });
      }
    },

    deleteCartItem: (state, action) => {
      const itemId = action.payload;
      const index = state.cartItem.findIndex((el) => el._id === itemId);

      if (index !== -1) {
        state.cartItem.splice(index, 1);
        toast("Un article a été supprimé");
      }
    },

    increaseQty: (state, action) => {
      const itemId = action.payload;
      const index = state.cartItem.findIndex((el) => el._id === itemId);

      if (index !== -1) {
        const item = state.cartItem[index];
        item.qty += 1;
        item.total = item.price * item.qty;
      }
    },

    decreaseQty: (state, action) => {
      const itemId = action.payload;
      const index = state.cartItem.findIndex((el) => el._id === itemId);

      if (index !== -1) {
        const item = state.cartItem[index];
        if (item.qty > 1) {
          item.qty -= 1;
          item.total = item.price * item.qty;
        }
      }
    },
  },
});

export const {
  setDataProduct,
  addCartItem,
  deleteCartItem,
  increaseQty,
  decreaseQty,
} = productSlice.actions;

export default productSlice.reducer;
