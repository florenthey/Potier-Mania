import React from "react";
import Book from "../book/Book";
import { List } from "./BookList.style";

export default function BookList({ filteredBook }) {
  return (
    <List>
      {filteredBook.map((book) => (
        <Book key={book.isbn} book={book} />
      ))}
    </List>
  );
}
