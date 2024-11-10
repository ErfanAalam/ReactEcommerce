import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { context } from "../App";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Nightlight } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Header = () => {
  const { cartItem } = useContext(context);

  let name = localStorage.getItem("name");

  function handleSignout() {
    localStorage.removeItem("name");
  }

  const [darkmode, setDarkMode] = useState(true);

  return (
    <div>
      <div className="upper">
        <div className="auth">
          {!name ? (
            <>
              <a href="/signin">Sign in/Guest</a>
              <a href="/signup">Create Account</a>
            </>
          ) : (
            <>
              <a href="">Hello, {name}</a>
              <a href="" onClick={handleSignout}>
                Sign out
              </a>
            </>
          )}
        </div>
      </div>
      <header>
        <h1>ClothHub</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <div className="headerright">
          <span onClick={() => setDarkMode(!darkmode)}>
            {darkmode ? <Nightlight /> : <LightModeIcon />}
          </span>
          <a href="/cart">
            {" "}
            <ShoppingCartIcon /> {cartItem.length}{" "}
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
