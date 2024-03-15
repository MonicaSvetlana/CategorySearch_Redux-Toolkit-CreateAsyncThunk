import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { getProductData } from "../features/categoryApi";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Link, useParams } from "react-router-dom";

export const Products = React.memo(() => {
  const { products } = useAppSelector((state) => state.categorySlice);
  const { categoryName } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductData(String(categoryName)));
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr key={i}>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>
                <Link
                  to={"/productInfo/" + product.id}
                  className="btn btn-primary"
                >
                  See more...
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
});
