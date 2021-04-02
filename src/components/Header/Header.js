import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import './Header.css';
import { UserContext } from "../../App";

const Header = () => {
  const [loggedInUser, ] = useContext(UserContext);
  return (
    <div className="container mb-3">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Fastest Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto navCustom">
            <Link to="/home">Home</Link> 
            <Link to="/orders">Orders</Link> 
            <Link to="/admin">Admin</Link>
            <Link to="/deals" onClick={e => e.preventDefault()}>Deals</Link>       
            {
              loggedInUser.isLoggedIn ? <Link to="/loginUser" onClick={e => e.preventDefault()} className="text-danger">{loggedInUser.displayName}</Link> : <Link className="btn btn-success text-white px-4" to="/login">Login</Link>
            }          
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
