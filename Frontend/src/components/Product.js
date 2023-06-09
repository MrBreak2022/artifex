import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Watermark } from "antd";

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/products/${product._id}`}>
        <Watermark content={"くたばれ、クソ野郎"} gap={[20, 20]}>
          <Card.Img 
        height={'300px'}
        width={'20rem'}
        style={{ objectFit: 'cover', maxHeight: '300px', maxWidth: '100%' }} src={product.image} />
        </Watermark>
      </Link>
      <Card.Body>
          <Card.Title>
          <strong style={{ fontSize: '20px', color: '#333' }}>{product.name}</strong>
          </Card.Title>
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
