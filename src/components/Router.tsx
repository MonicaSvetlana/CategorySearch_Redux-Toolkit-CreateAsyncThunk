import React from "react";
import { useRoutes } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Categories } from "../pages/Categories";
import { Products } from "../pages/Products";
import { ProductInfo } from "../pages/ProductInfo";
import { Search } from "../pages/Search";

export const Router = React.memo(() => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Categories />,
        },
        {
          path: "products/:categoryName",
          element: <Products />,
        },
        {
          path: "productInfo/:productId",
          element: <ProductInfo />,
        },
        {
          path: "search/:productName",
          element: <Search />,
        },
      ],
    },
  ]);
  return routes;
});
