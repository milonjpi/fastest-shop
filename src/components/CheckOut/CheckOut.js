import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./CheckOut.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";

const CheckOut = () => {
  const [loggedInUser, ] = useContext(UserContext);
  const { id } = useParams();
  const [checkOutProduct, setCheckOutProduct] = useState({});
  const history = useHistory();
  useEffect(() => {
    fetch(`https://infinite-crag-55476.herokuapp.com/checkOut/${id}`)
      .then((res) => res.json())
      .then((data) => setCheckOutProduct(data[0]));
  }, [id]);
  const { productName, productPrice } = checkOutProduct;

  const handleCheckout = () => {
    const orderData = {
        ...loggedInUser,
        products: checkOutProduct,
        orderTime: new Date()
    }
    axios.post('https://infinite-crag-55476.herokuapp.com/addOrder', orderData)
    .then(res => {
      res && history.push("/orders");
    })
    .catch(err => {
      console.log(err);
    });
  };

  return (
    <div className="container mt-5">
      <h1>Checkout</h1>
      <div className="mt-3 p-4 shadow rounded">
        <Table>
          <thead>
            <tr>
              <th>Description</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{productName}</td>
              <td className="text-center">1</td>
              <td className="text-center">{productPrice} TK</td>
            </tr>
            <tr className="priceBorder">
              <td className="font-weight-bold text-right" colSpan="2">
                Total =
              </td>
              <td className="text-center">{productPrice} TK</td>
            </tr>
          </tbody>
        </Table>
        <div className="text-right">
            <Button onClick={handleCheckout}>Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
