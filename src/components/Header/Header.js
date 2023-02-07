import logo from "../../assets/logo.svg";
import shop_cart from "../../assets/shop_cart.svg";
import "./Header.css";
import { IconButton } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart";
import {Link} from "react-router-dom";

function Header() {
  const [total, setTotal] = useState(0);
  const { state } = useContext(CartContext);

  useEffect(() => {
    setTotal(state.cart.length);
  }, [state]);

  return (
    <div className="header">
      <div className="logo-title">
        <Link to={"/"}>
          <h1 className="title">TechTravel</h1>
        </Link>
        <img src={logo} className="logo" alt={"logo"}></img>
      </div>
      <div className="cart">
        <div className="cart-items">
          <p className="total-item-label">{total}</p>
        </div>
        <Link to={"/cart"}>
          <IconButton aria-label="delete">
            <img src={shop_cart} width={40} alt={"shopping-cart"}></img>
          </IconButton>
        </Link>
      </div>
    </div>
  );
}

export default Header;
