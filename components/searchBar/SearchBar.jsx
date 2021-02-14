import React, { useContext } from "react";
import SearchContext from "../../context/SearchContext";
import styled from "styled-components";

const SearchBar = ({ className }) => {
  const { userValue, setUserValue } = useContext(SearchContext);

  const updateUserValue = (e) => {
    setUserValue(e.target.value);
  };

  return (
    <input
      className={className}
      key="bookSearch"
      value={userValue}
      placeholder={"Recherche d'un tome"}
      onChange={(e) => updateUserValue(e)}
    />
  );
};

export default styled(SearchBar)``;
