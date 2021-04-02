import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { UserContext } from "../../App";
import NewOrder from "./NewOrder";
import "./Orders.css";

const Orders = () => {
  const [loggedInUser, ] = useContext(UserContext);
  const {email} = loggedInUser;
  const [orders, setOrders] = useState([]);
  useEffect( () => {
    fetch('https://infinite-crag-55476.herokuapp.com/orders?email='+email)
    .then(res => res.json())
    .then(data => setOrders(data))
  },[email])
  return (
    <div className="container">
      <div className="m-md-5">
        <h1>All Orders</h1>
        <div className="mt-3 p-4 shadow rounded">
          <Table>
            <thead>
              <tr>
                <th colSpan="2">Description</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Price</th>
                <th className="text-center">Order Date</th>
              </tr>
            </thead>
            <tbody>
                {
                 Object.keys(orders).length !== 0? orders.map(ord => <NewOrder ord={ord}></NewOrder>): <tr>
                   <td colSpan="5" className="text-center">No Orders Found</td>
                 </tr>
                }
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
