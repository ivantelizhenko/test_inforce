import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./productsSlice";

const store = configureStore({
  reducer: {
    products: ProductReducer,
  },
});

export default store;
