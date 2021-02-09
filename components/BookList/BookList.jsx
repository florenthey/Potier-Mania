import React from "react";
import Book from "../Book/Book";
import { List } from "./BookList.style";

export default function BookList({ allBooks, cartCost, setCartCost }) {
  return (
    <List>
      {allBooks.map((book) => (
        <Book book={book} cartCost={cartCost} setCartCost={setCartCost} />
      ))}
    </List>
  );
}
