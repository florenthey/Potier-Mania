import React, { useContext } from "react";
import { Item, Image } from "./Book.style";
import CartContext from "../../context/CartContext";

export default function Book({ book }) {
  const { isbn, cover, title, synopsis, price } = book;
  const { cart, setCart } = useContext(CartContext);

  const getPrice = () => {
    setCart((prevState) => [
      ...prevState,
      { isbn: isbn, price: price, title: title },
    ]);
    console.log(price);
  };

  return (
    <Item key={isbn}>
      <Image src={cover} />
      <h2>{title}</h2>
      <p>{synopsis[0]}</p>
      <p>{price} €</p>
      <button type="button" onClick={getPrice}>
        Acheter
      </button>
    </Item>
  );
}
