/** Imports */
import React from "react";

import { SearchBox } from "./SearchBox";
import { History } from "history";
import Header from "./Header";

import "../styles/components.scss";

function SearchHeader() {
  return (
    <>
      <Header></Header>
      <SearchBox></SearchBox>
    </>
  );
}

export default SearchHeader;
