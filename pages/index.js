import { getAllBooks } from "../services/book";
import BookList from "../components/BookList/BookList";
import { Inner } from "../styles/global";
import { useState } from "react";
import CartContext from "../context/CartContext";

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `;

export default function Home({ allBooks }) {
  const [cartCost, setCartCost] = useState(0);
  const contextCartCost = { cartCost, setCartCost };
  console.log("cartCost", cartCost);
  return (
    <CartContext.Provider value={contextCartCost}>
      <Inner>
        <h1>Henri Potier</h1>
        <BookList
          allBooks={allBooks}
          cartCost={cartCost}
          setCartCost={setCartCost}
        />
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
