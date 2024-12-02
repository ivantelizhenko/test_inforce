import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductsFromAPI } from "./services/getProductsFromAPI";
import { postProductToAPI } from "./services/postProductToAPI";
import { removeProductFromAPI } from "./services/removeProductFromApi";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async function () {
    const data = await getProductsFromAPI();
    return data;
  }
);

export const addProduct = createAsyncThunk(
  "products/postProducts",
  async function (newProduct) {
    const data = await postProductToAPI(newProduct);
    return data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/removeProducts",
  async function (id) {
    const data = await removeProductFromAPI(id);
    return data;
  }
);

const initialState = {
  status: "idle",
  products: [],
  currentProduct: "",
  error: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCurrentProduct(state, action) {
      // action.payload === product.id
      state.currentProduct = state.products.find(
        (prod) => prod.id === action.payload
      );
    },
    closeModal(state) {
      state.currentProduct = "";
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "idle";
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "error";
        state.error = "Something went wrong with getting products ";
      })
      .addCase(addProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "idle";
      })
      .addCase(addProduct.rejected, (state) => {
        state.status = "error";
        state.error = "Something went wrong with sending product ";
      })
      .addCase(deleteProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "idle";
      })
      .addCase(deleteProduct.rejected, (state) => {
        state.status = "error";
        state.error = "Something went wrong with deleting product ";
      }),
});

export const { removeProductState, setCurrentProduct, closeModal } =
  productsSlice.actions;

export default productsSlice.reducer;
