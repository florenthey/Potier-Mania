import { getAllBooks, getOffers } from "../services/cart";
import BookList from "../components/bookList/BookList";
import { Inner } from "../styles/global";
import { useEffect, useState } from "react";
import CartContext from "../context/CartContext";
import SearchContext from "../context/SearchContext";
import { useQuery } from "react-query";
import SearchBar from "../components/searchBar/SearchBar";
import Cart from "../components/cart/Cart";
import styled from "styled-components";
import { Container } from "./index.style";
import { H1 } from "../styles/global";
import Head from "next/head";

const SearchBook = styled(SearchBar)`
  width: 100%;
  background: #f2f1f9;
  border: 0.5px solid black;
  border-radius: 5px;
  padding: 0.8rem;
  font-size: 1rem;
`;

const Books = styled(BookList)`
  margin-bottom: 0;
  padding: 0;
`;

const BooksCart = styled(Cart)`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: flex-start;
  text-align: start;
  background: #d1d0d6;
  width: 100%;
`;

export default function Home({ allBooks }) {
  const [cart, setCart] = useState([]);
  const [userValue, setUserValue] = useState("");
  const [filteredBook, setFilteredBook] = useState(allBooks);

  const contextCart = { cart, setCart };
  const contextSearch = { userValue, setUserValue };

  // retrieves all the isbn available in cart and transforms them into a string
  const isbnGroup = cart.map((item) => item.isbn).toString();

  // console.log("cart", cart);

  const { data: offers, error } = useQuery(
    [isbnGroup],
    () => {
      if (isbnGroup !== "") return getOffers(isbnGroup);
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  // console.log("allBooks", allBooks);

  useEffect(() => {
    const updateUserInput = () => {
      const filtered = allBooks.filter((book) => {
        return (
          book.title.toLowerCase().includes(userValue.toLowerCase()) ||
          book.isbn.toLowerCase().includes(userValue.toLowerCase()) ||
          book.price
            .toString()
            .toLowerCase()
            .includes(userValue.toLowerCase()) ||
          book.synopsis.find((resum) =>
            resum.toLowerCase().includes(userValue.toLowerCase())
          )
        );
      });
      setFilteredBook(filtered);
    };
    updateUserInput();
  }, [allBooks, userValue]);

  console.log("filteredBook", filteredBook);
  // console.log("offers", offers);
  return (
    <CartContext.Provider value={contextCart}>
      <SearchContext.Provider value={contextSearch}>
        <Head>
          <title>Potier-Mania</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <Inner>
          <Container>
            <H1>Potier-Mania</H1>
            <SearchBook userValue={userValue} />
            <Books allBooks={allBooks} filteredBook={filteredBook} />
            {!!cart.length && <BooksCart cart={cart} offers={offers} />}
          </Container>
        </Inner>
      </SearchContext.Provider>
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
