import { getAllBooks, getOffers } from "../services/cart";
import BookList from "../components/bookList/BookList";
import { Inner } from "../styles/global";
import { useEffect, useState } from "react";
import CartContext from "../context/CartContext";
import SearchContext from "../context/SearchContext";
import { useQuery } from "react-query";
import SearchBar from "../components/searchBar/SearchBar";
import Cart from "../components/cart/Cart";

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `;

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
        <Inner>
          <SearchBar userValue={userValue} />
          <BookList allBooks={allBooks} filteredBook={filteredBook} />
          <Cart cart={cart} offers={offers} />
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
