import { getAllBooks, getOffers } from "../services/cart";
import BookList from "../components/BookList/BookList";
import { Inner } from "../styles/global";
import { useEffect, useState } from "react";
import CartContext from "../context/CartContext";

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `;

export default function Home({ allBooks }) {
  const [cart, setCart] = useState([]);
  const contextCart = { cart, setCart };
  // retrieves all the isbn and transforms them into a string
  const isbnGroup = cart.map((item) => item.isbn).toString();

  useEffect(() => {
    if (isbnGroup !== "") getOffers(isbnGroup);
  }, [cart]);

  return (
    <CartContext.Provider value={contextCart}>
      <Inner>
        <h1>Henri Potier</h1>
        <BookList allBooks={allBooks} />
      </Inner>
    </CartContext.Provider>
  );
}

export async function getStaticProps() {
  const allBooks = await getAllBooks();
  return {
    props: {
      allBooks,
    },
    revalidate: 86400,
  };
}
