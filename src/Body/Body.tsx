/** Imports */
import React from "react";
import "./Body.scss";
import NameSearch from "../NameSearch/NameSearch";

/** Body component */
function Body() {
  return (
    <div className='body-container'>
      <div className='container'>
        <NameSearch></NameSearch>
      </div>
    </div>
  );
}

export default Body;
