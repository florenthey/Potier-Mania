import React, { useEffect, useState } from "react";
import { minus, percentage, slice } from "../../utils/offers";

export default function Cart({ cart, offers }) {
  const [filteredCart, setFilteredCart] = useState([]);
  const [cartSum, setCartSum] = useState(0);
  const [afterOffer, setAfterOffer] = useState(0);

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

  useEffect(() => {
    const bookByOccurence = filteredCart.map(
      (book) => book.count * book.item.price
    );

    if (bookByOccurence.length) {
      const sum = bookByOccurence.reduce(
        (prevBook, nextBook) => prevBook + nextBook
      );
      setCartSum(sum);
    }
  }, [filteredCart]);

  useEffect(() => {
    const parseByOffer = () => {
      const byPercentage = percentage(cartSum, offers?.offers[0]?.value) || 0;
      const byMinus = minus(cartSum, offers?.offers[1]?.value) || 0;
      const bySlice =
        slice(
          cartSum,
          offers?.offers[2]?.sliceValue,
          offers?.offers[2]?.value
        ) || 0;
      setAfterOffer(Math.min(byPercentage, byMinus, bySlice));
    };
    parseByOffer();
  }, [cartSum, offers]);

  return (
    <div>
      {filteredCart.map((book) => {
        return (
          <>
            <p>
              {book.item.title} x {book.count}
            </p>
            <p>{book.item.price * book.count} €</p>
          </>
        );
      })}
      <p>
        Total: {cartSum} {afterOffer} €
      </p>
    </div>
  );
}
