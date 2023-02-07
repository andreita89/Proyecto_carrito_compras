import "./Cart.css";
import image from "../../assets/image.png";
import delete_icon from "../../assets/delete_icon.svg";
import { IconButton, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart";
function Cart() {
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);
  const { state } = useContext(CartContext);

  const calculateTotal = (items) => {
    const total = items.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.quantity * currentValue.price,
      0
    );
    setTotal(total);
  };

  const deleteItem = (id) => {
    const itemsTemp = items.filter((item) => item.id != id);
    calculateTotal(itemsTemp);
    setItems(itemsTemp);
  };

  const handleQuantity = (e, id) => {
    const value = items.map((listItem) => {
      if (id == listItem.id) listItem.quantity = e.target.value;
      return listItem;
    });

    calculateTotal(value);
    setItems(value);
  };
  useEffect(() => {
    setItems(state.cart);
    calculateTotal(state.cart);
  }, [state]);

  return (
    <div className="card">
      <div className="grid-container">
        <div></div>
        <p className="table-title">PRODUCTO</p>
        <p className="table-title table-quantity">CANTIDAD</p>
        <p className="table-title table-price">PRECIO</p>

        <div></div>

        {items.map((item, i) => (
          <>
            <div className="image-container">
              <img
                src={image}
                width={120}
                className="item-image"
                alt={"item"}
              />
            </div>
            <div>
              <p>{item.label}</p>
              <p>$ {item.price}</p>
            </div>
            <div className="table-quantity">
              <TextField
                id="outlined-number"
                label="Cantidad"
                type="number"
                value={item.quantity}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => handleQuantity(e, item.id)}
              />
            </div>
            <div className="table-price">
              $ {(item.price * item.quantity).toFixed(2)}
            </div>
            <div className="table-delete">
              <IconButton
                aria-label="delete"
                onClick={() => deleteItem(item.id)}
              >
                <img src={delete_icon} alt={"delete_icon"} />
              </IconButton>
            </div>
            <div className="grid-line ">
              <hr />
            </div>
          </>
        ))}

        <div></div>
        <div></div>
        <p className="table-title table-price">TOTAL</p>
        <p className="total-label table-price">$ {total.toFixed(2)}</p>
        <div></div>
      </div>
    </div>
  );
}

export default Cart;
