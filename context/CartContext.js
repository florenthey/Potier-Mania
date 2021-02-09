import { createContext } from "react";

export default createContext({
  cartCost: 0,
  setCartCost: (price) => {},
});
