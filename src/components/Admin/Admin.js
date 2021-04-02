import React, { useState } from 'react';
import AddProduct from './AddProduct';
import "./Admin.css";
import ManageProducts from './ManageProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const Admin = () => {
    const [manage, setManage] = useState({
        name: "manageProducts"
    })
    const handleManage = e => {
        const newManage = {name: e.target.name};
        setManage(newManage);
    }
    return (
        <div className="container">
            <div className="row adminHeight">
                <div className="col-md-3">
                    <div className="p-3 bg-dark text-white h-100">
                        <h4>Fastest Shop</h4>
                        <ul className="ulDecoration">
                            <li>
                                <button onClick={handleManage} name="manageProducts" className="btn text-white"><span className="mr-2"><FontAwesomeIcon icon={faThLarge} /></span>Manage Products</button>
                            </li>
                            <li>
                                <button onClick={handleManage} name="addProducts" className="btn text-white"><span className="mr-2"><FontAwesomeIcon icon={faPlus} /></span>Add Product</button>
                            </li>
                            <li>
                                <button className="btn text-white"><span className="mr-2"><FontAwesomeIcon icon={faPen} /></span>Edit Product</button>
                            </li>
                        </ul>
                    </div>
                </div>
                {
                    manage.name === "manageProducts" ? <ManageProducts /> :<AddProduct />
                }
                
            </div>
        </div>
    );
};

export default Admin;