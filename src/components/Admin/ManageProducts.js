import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import TableBody from "./TableBody";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect( ()=> {
    fetch("https://infinite-crag-55476.herokuapp.com/products")
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])
  return (
    <div className="col-md-9 overflow-hidden">
      <h5>Manage Products</h5>
      <div className="bg-light h-100 p-4">
        <div className="p-3 bg-white rounded shadow">
          <Table hover>
            <thead>
              <tr>
                <th>Product Name</th>
                <th className="text-center">Weight</th>
                <th className="text-center">Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
            {
              Object.keys(products).length !== 0 ? products.map(pd => <TableBody key={pd._id} pd={pd}></TableBody>) : <tr><td className="text-center" colSpan="4">No Data Found</td></tr>      
            }
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
