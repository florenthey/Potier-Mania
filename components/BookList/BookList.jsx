import React from "react";
import Book from "../book/Book";
import styled from "styled-components";

const Volume = styled(Book)`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  align-items: center;
  text-align: center;
  margin: 50px;

  img {
    width: 100%;
    max-width: 342px;
    max-height: 500px;
  }
`;

const BookList = ({ filteredBook, className }) => {
  return (
    <ul data-testid="list-volume" className={className}>
      {filteredBook.map((book) => (
        <Volume key={book.isbn} book={book} />
      ))}
    </ul>
  );
};

export default styled(BookList)``;
