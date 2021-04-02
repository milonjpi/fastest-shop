import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const onSubmit = (data, e) => {
    const productData = {
      productName: data.productName,
      productWeight: data.productWeight,
      productPrice: data.productPrice,
      imageURL: imageURL,
    };
    console.log(productData);
    axios
      .post("https://infinite-crag-55476.herokuapp.com/addProduct", productData)
      .then((res) => {
        res && alert("Product Saved Successfully");
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleImageUpload = (e) => {
    setLoading(true);
    const imageData = new FormData();
    imageData.set("key", "196b049326c3d73fcf7197dfd7229953");
    imageData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((res) => {
        setImageURL(res.data.data.display_url);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="col-md-9 overflow-hidden">
      <h5 className="pt-3">Add Product</h5>
      <div className="bg-light h-100 p-4">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-6">
              <Form.Group controlId="addProductName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  name="productName"
                  type="text"
                  placeholder="Enter product name..."
                  ref={register}
                />
              </Form.Group>

              <Form.Group controlId="addProductPrice">
                <Form.Label>Add Price</Form.Label>
                <Form.Control
                  name="productPrice"
                  type="number"
                  placeholder="Add price..."
                  ref={register}
                />
              </Form.Group>
            </div>
            <div className="col-6">
              <Form.Group controlId="addProductWeight">
                <Form.Label>Weight</Form.Label>
                <Form.Control
                  name="productWeight"
                  type="text"
                  placeholder="Enter weight..."
                  ref={register}
                />
              </Form.Group>

              <Form.Group>
                <Form.File
                  id="addProductPhoto"
                  label="Add Photo"
                  onChange={handleImageUpload}
                />
              </Form.Group>
            </div>
            <div className="col">
              <Button variant="primary" type="submit">
                Save Product
              </Button>
              {
               
               loading && <span className="loading"><Spinner animation="border" variant="primary" /></span> 
              
              }
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddProduct;
