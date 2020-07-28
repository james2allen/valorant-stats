/** Imports */
import React from "react";
import "./SearchHeader.scss";
import { SearchBox } from "./SearchBox";
import { History } from "history";

function SearchHeader(props: { history: History }) {
  function convertAppName(appName: string) {
    return appName.toUpperCase();
  }
  return (
    <div className='col-md-12 header-container'>
      <h1 className='header-text'>{convertAppName("Valorant Stats")}</h1>
      <SearchBox history={props.history}></SearchBox>
    </div>
  );
}

export default SearchHeader;
