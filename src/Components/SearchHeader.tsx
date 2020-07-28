/** Imports */
import React from "react";

import { SearchBox } from "./SearchBox";
import { History } from "history";
import Header from "./Header";

import "../Styles/components.scss";

function SearchHeader(props: { history: History }) {
  return (
    <>
      <Header></Header>
      <SearchBox history={props.history}></SearchBox>
    </>
  );
}

export default SearchHeader;
