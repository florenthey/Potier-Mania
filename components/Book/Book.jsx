import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import styled from "styled-components";
import {
  Image,
  Text,
  Isbn,
  Synopsis,
  Price,
  Span,
  ButtonContainer,
} from "./Book.style";
import { H2 } from "../../styles/global";
import Button from "@material-ui/core/Button";

const Book = ({ book, className }) => {
  const { isbn, cover, title, synopsis, price } = book;
  const { setCart } = useContext(CartContext);

  const addToCart = () => {
    setCart((prevState) => [
      ...prevState,
      { isbn: isbn, price: price, title: title },
    ]);
  };

  return (
    <li className={className} key={isbn}>
      <Image>
        <img src={cover} />
        <Isbn>ISBN: {isbn}</Isbn>
      </Image>
      <Text>
        <H2>{title}</H2>
        <Synopsis>{synopsis[0]}</Synopsis>
        <Price>
          Prix: <Span>{price} €</Span>
        </Price>
        <ButtonContainer>
          <Button
            type="button"
            onClick={addToCart}
            variant="contained"
            size="large"
          >
            Acheter
          </Button>
        </ButtonContainer>
      </Text>
    </li>
  );
};

export default styled(Book)``;
