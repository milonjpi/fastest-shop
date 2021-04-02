import React, { useEffect, useState } from "react";
import Product from "./Product";
import Spinner from 'react-bootstrap/Spinner';
import "./Home.css";
import Search from "./Search";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect( ()=> {
    fetch("https://infinite-crag-55476.herokuapp.com/products")
    .then(res => res.json())
    .then(data => {
      setProducts(data);
      setLoading(true)
    })
  }, [])
  return (
    <div className="container">
      <Search />
      <div className="row">
        {
           loading? products.map(pd => <Product key={pd._id} pd={pd}></Product>) : <div className="m-auto"><Spinner animation="border" variant="primary" /></div>
        }
      </div>
    </div>
  );
};

export default Home;
