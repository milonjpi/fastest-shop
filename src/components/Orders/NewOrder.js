import React from "react";

const NewOrder = (props) => {
    console.log(props.ord)
    const { products, orderTime } = props.ord;
  return (
    <tr>
      <td className="thumbPhoto">
        <img
          className="w-100"
          src={products?.imageURL}
          alt={products?.productName}
        />
      </td>
      <td className="align-middle">{products?.productName}</td>
      <td className="align-middle text-center">1</td>
      <td className="align-middle text-center">{products?.productPrice} TK</td>
      <td className="align-middle text-center">{new Date(orderTime).toDateString()}</td>
    </tr>
  );
};

export default NewOrder;
