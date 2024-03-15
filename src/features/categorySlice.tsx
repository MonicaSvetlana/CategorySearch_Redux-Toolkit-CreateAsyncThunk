import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../types";
import {
  getCategoryData,
  getProductByName,
  getProductData,
  getProductInfoData,
} from "./categoryApi";

interface CategorySlice {
  categories: string[];
  products: IProduct[];
  productInfo: IProduct;
  searchItems: IProduct[];
}
const initialState: CategorySlice = {
  categories: [],
  products: [],
  productInfo: {} as IProduct,
  searchItems: [],
};

const categorySlice = createSlice({
  name: "product",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getCategoryData.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(getProductData.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getProductByName.fulfilled, (state, action) => {
      state.searchItems = action.payload;
    });
    builder.addCase(getProductInfoData.fulfilled, (state, action) => {
      state.productInfo = action.payload;
    });
  },
});

export default categorySlice.reducer;
