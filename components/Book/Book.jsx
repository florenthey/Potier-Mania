import React, { useContext } from "react";
import { Item } from "./Book.style";
import CartContext from "../../context/CartContext";

export default function Book({ book }) {
  const { isbn, cover, title, synopsis, price } = book;
  const { cartCost, setCartCost } = useContext(CartContext);

  const getPrice = () => {
    // Ref
    // {isbn, price, title}
    setCartCost(cartCost + price);
    console.log(price);
  };
  return (
    <Item key={isbn}>
      <img src={cover} />
      <h2>{title}</h2>
      <p>{synopsis[0]}</p>
      <p>{price}</p>
      <button type="button" onClick={getPrice}>
        Acheter
      </button>
    </Item>
  );
}
