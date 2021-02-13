import React, { useContext } from "react";
import SearchContext from "../../context/SearchContext";

const SearchBar = () => {
  const { userValue, setUserValue } = useContext(SearchContext);

  const BarStyling = {
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
  };

  const updateUserValue = (e) => {
    setUserValue(e.target.value);
  };

  return (
    <input
      style={BarStyling}
      key="bookSearch"
      value={userValue}
      placeholder={"Recherche d'un tome"}
      onChange={(e) => updateUserValue(e)}
    />
  );
};

export default SearchBar;
