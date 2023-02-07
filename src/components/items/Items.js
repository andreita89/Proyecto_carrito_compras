import shop_cart from "../../assets/shop_cart.svg";
import image from "../../assets/image.png";
import "./Items.css";
import { useContext } from "react";
import CartContext from "../../context/cart";

function Items() {
  const items = [
    { id: 0, label: "Viaje para Israel", price: 200.0, quantity: 0 },
    { id: 1, label: "Viaje para Israel", price: 200.0, quantity: 0 },
    { id: 2, label: "Viaje para Israel", price: 200.0, quantity: 0 },
    { id: 3, label: "Viaje para Israel", price: 200.0, quantity: 0 },
    { id: 4, label: "Viaje para Israel", price: 200.0, quantity: 0 },
    { id: 5, label: "Viaje para Israel", price: 200.0, quantity: 0 },
  ];
  const { state, setState } = useContext(CartContext);
  const handlerAddItem = (item) => {
    let cpyItems = [...state.cart];
    if (cpyItems.find((cartItem) => cartItem.id === item.id))
      cpyItems.map((cartItem) => {
        if (cartItem.id === item.id) cartItem.quantity += 1;
        return cartItem
      });
    else cpyItems.push({ ...item, quantity: 1 });
    console.log(cpyItems);

    setState({
      cart: cpyItems,
    });
  };

  return (
    <>
      {items.map((item) => (
        <div className="card-cart">
          <img src={image} alt={"Item"} />
          <p>{item.label}</p>
          <p>$ {item.price.toFixed(2)}</p>
          <button
            type="button"
            className="button"
            onClick={() => handlerAddItem(item)}
          >
            <div className="button-image">
              <img src={shop_cart} width={20} alt={"Shopping cart"} />
            </div>
            <p className="button-label">Agregar al carrito</p>
          </button>
        </div>
      ))}
    </>
  );
}

export default Items;
