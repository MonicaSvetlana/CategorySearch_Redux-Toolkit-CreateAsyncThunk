import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { getCategoryData } from "../features/categoryApi";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Link, useNavigate } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

export const Categories = React.memo(() => {
  const { categories } = useAppSelector((state) => state.categorySlice);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategoryData());
  }, []);

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
        <Form.Control
          placeholder="Search by Product Title"
          aria-label="Search by Product Title"
          aria-describedby="basic-addon1"
          onKeyDown={(e: any) => {
            if (e.key == "Enter") {
              navigate("/search/" + e.target.value);
            }
          }}
        />
      </InputGroup>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Categories</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, i) => (
            <tr key={i}>
              <td>
                <Link to={"/products/" + category}>{category}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
});
