/** Imports */
import React from "react";
import { SearchBox } from "../SearchBox/SearchBox";
import ValorantBg from "../Images/valorant.jpg";
import "./Body.scss";

/** Body component */
function Body() {
  return (
    <div className='body-container'>
      <div className='container'>
        <SearchBox></SearchBox>
      </div>
      <img
        src={ValorantBg}
        style={{ width: "100%", height: "auto", opacity: 0.7 }}
      />
    </div>
  );
}

export default Body;
