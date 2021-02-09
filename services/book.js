import Axios from "axios";

const getAllBooks = async () => {
  const { data: books } = await Axios.get(
    `https://henri-potier.techx.fr/books`
  );
  return books;
};

export { getAllBooks };
