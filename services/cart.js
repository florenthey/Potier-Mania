import Axios from "axios";

const getAllBooks = async () => {
  const { data: books } = await Axios.get(
    `${process.env.NEXT_PUBLIC_XEBIA_API}/books`
  );
  return books;
};

const getOffers = async (isbn) => {
  const { data: offers } = await Axios.get(
    `${process.env.NEXT_PUBLIC_XEBIA_API}/books/${isbn}/commercialOffers`
  );
  return offers;
};

export { getAllBooks, getOffers };
