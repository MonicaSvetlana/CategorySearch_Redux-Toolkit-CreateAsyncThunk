import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getProductByName } from "../features/categoryApi";

export const Search: React.FC = React.memo(() => {
  const { productName } = useParams();
  const dispatch = useAppDispatch();
  const { searchItems } = useAppSelector((state) => state.categorySlice);
  console.log(searchItems);

  console.log(productName);
  useEffect(() => {
    dispatch(getProductByName(String(productName)));
  }, []);

  return (
    <>
      <ul>
        {searchItems.map((product, i) => {
          return <li key={i}>{product.title}</li>;
        })}
      </ul>
    </>
  );
});
