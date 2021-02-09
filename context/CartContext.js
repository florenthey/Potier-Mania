import { createContext } from "react";

export default createContext({
  cart: [],
  setCart: (price) => {},
});
