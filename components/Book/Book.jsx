import React from "react";
import { Item } from "./Book.style";

export default function Book({ book, cartCost, setCartCost }) {
  const { isbn, cover, title, synopsis, price } = book;

  const getPrice = () => {
    //Ref
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
