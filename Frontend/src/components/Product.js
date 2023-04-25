import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Watermark } from "antd";

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/products/${product._id}`}>
        <Watermark content={"くたばれ、クソ野郎"} gap={[20, 20]}>
          <Card.Img height={'300px'} width={'20rem'} src={product.image} />
        </Watermark>
      </Link>
      <Card.Body>
        <Link to={`products/${product._id}`}>
          <Card.Title>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">

        </Card.Text>
        <Card.Text >
          $ {product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}



export default Product;
