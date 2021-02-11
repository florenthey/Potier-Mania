import React, { useEffect, useState } from "react";

export default function Cart({ cart }) {
  const [filteredCart, setFilteredCart] = useState([]);

  console.log("cart", cart);

  useEffect(() => {
    const booksParser = () => {
      const occurencesBooks = cart.map((item) => {
        let count = 0;
        for (let i = 0; i < cart.length; i++) {
          if (item.isbn === cart[i].isbn) {
            count++;
          }
        }
        return { count, item };
      });

      const uniquesBooks = () => {
        const bookWithoutDuplicate = [];
        occurencesBooks.forEach((item) => {
          if (
            !bookWithoutDuplicate.find(
              (book) => book.item.isbn === item.item.isbn
            )
          ) {
            bookWithoutDuplicate.push(item);
          }
        });
        return bookWithoutDuplicate;
      };
      setFilteredCart(uniquesBooks);
    };

    booksParser();
  }, [cart]);

  console.log("filteredCart", filteredCart);

  return (
    <div>
      {cart.map((book) => {
        return (
          <>
            <p>{book.title}</p>
            <p>{book.price}</p>
            <p>X {}</p>
          </>
        );
      })}
    </div>
  );
}
