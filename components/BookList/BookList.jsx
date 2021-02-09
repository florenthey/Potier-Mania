import React from "react";
import Book from "../Book/Book";
import { List } from "./BookList.style";

export default function BookList({ allBooks }) {
  return (
    <List>
      {allBooks.map((book) => (
        <Book book={book} />
      ))}
    </List>
  );
}
