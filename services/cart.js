import Axios from "axios";

const getAllBooks = async () => {
  const { data: books } = await Axios.get(
    `https://henri-potier.techx.fr/books`
  );
  return books;
};

const getOffers = async (isbn) => {
  const { data: offers } = await Axios.get(
    `https://henri-potier.techx.fr/books/${isbn}/commercialOffers`
  );
  return offers;
};

export { getAllBooks, getOffers };
