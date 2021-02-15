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
  Card,
  TextContainer,
} from "./Book.style";
import { H3 } from "../../styles/global";
import Button from "@material-ui/core/Button";
import { yellow } from "@material-ui/core/colors";

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
    <Card className={className} key={isbn}>
      <Image>
        <img src={cover} />
        <Isbn>ISBN: {isbn}</Isbn>
      </Image>
      <Text>
        <H3>{title}</H3>
        <TextContainer>
          <Synopsis>{synopsis[0]}</Synopsis>
          <Price>
            Prix: <Span>{price} €</Span>
          </Price>
        </TextContainer>
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
    </Card>
  );
};

export default styled(Book)``;
