import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Axios = axios.create({
  baseURL: "https://dummyjson.com/products/",
});

export const getCategoryData = createAsyncThunk("category/get", async () => {
  const { data } = await Axios.get("/categories");
  return data;
});

export const getProductData = createAsyncThunk(
  "/product/get",
  async (name: string) => {
    const { data } = await Axios.get(`/category/${name}`);
    return data.products;
  }
);

export const getProductByName = createAsyncThunk(
  "/product/search",
  async (name: string) => {
    const { data } = await Axios.get(`/search?q=${name}`);
    return data.products;
  }
);

export const getProductInfoData = createAsyncThunk(
  "/prod/get",
  async (id: number) => {
    const { data } = await Axios.get(`/${id}`);
    return data;
  }
);
