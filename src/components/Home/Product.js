import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Product = (props) => {
    const {_id, productName, productWeight, productPrice, imageURL} = props.pd;
  return (
    <div className="col-md-4 mb-5">
      <div className="p-4 shadow rounded">
        <Card>
          <Card.Img variant="top" src={imageURL} />
          <Card.Body>
            <Card.Title className="py-3"><span>{productName}</span> - <span>{productWeight}</span></Card.Title>
            <div className="row">
              <div className="col-6">
                <h4>{productPrice} TK</h4>
              </div>
              <div className="col-6">
                <Link to={`/checkout/${_id}`}><Button variant="primary">Buy Now</Button></Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Product;
