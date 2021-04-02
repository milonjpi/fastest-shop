import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TableBody = (props) => {
    const {_id, productName, productWeight, productPrice} = props.pd;
    const handleDelete = (e, id) => {
        fetch(`https://infinite-crag-55476.herokuapp.com/deleteProduct/${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if(data){
            e.target.parentNode.parentNode.parentNode.parentNode.style.display = "none";
          }
        })
    }
    return (
        <tr>
          <td>{productName}</td>
          <td className="text-center">{productWeight}</td>
          <td className="text-center">{productPrice} TK</td>
          <td className="text-center">
            <span type="button" className="custom-edit"><FontAwesomeIcon icon={faEdit} /></span><span className="custom-delete" type="button"><FontAwesomeIcon onClick={(e) => handleDelete(e, _id)} icon={faTrash} /></span>
          </td>
        </tr>
    );
  };

export default TableBody;