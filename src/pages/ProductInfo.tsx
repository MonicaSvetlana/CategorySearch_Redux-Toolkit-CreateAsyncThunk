import React, { useEffect } from "react";
import { getProductInfoData } from "../features/categoryApi";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

export const ProductInfo = React.memo(() => {
  const { productInfo } = useAppSelector((state) => state.categorySlice);
  const { productId } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductInfoData(Number(productId)));
  }, []);

  return (
    <div className="d-flex flex-column align-items-center">
      <Carousel
        className="w-50"
        style={{ height: "300px", backgroundColor: "black" }}
      >
        {productInfo.images?.map((image, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                src={image}
                alt="First slide"
                style={{ width: "100%", height: "300px", objectFit: "contain" }}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Card className="my-2 w-50">
        <Card.Body>
          <Card.Text>
            <strong>Title: </strong>
            {productInfo.title}
          </Card.Text>
          <Card.Text>
            <strong>Description: </strong>
            {productInfo.description}
          </Card.Text>
          <Card.Text>
            <strong>Price: </strong>
            {productInfo.price}
          </Card.Text>
          <Card.Text>
            <strong>Rating: </strong>
            {productInfo.rating}
          </Card.Text>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </Card.Body>
      </Card>
    </div>
  );
});
