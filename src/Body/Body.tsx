/** Imports */
import React from "react";
import { SearchBox } from "../SearchBox/SearchBox";
import ValorantBg from "../Images/valorant.png";
import "./Body.scss";

/** Body component */
function Body() {
  return (
    <div className='body-container'>
      <div className='container'>
        <SearchBox></SearchBox>
      </div>
      <img src={ValorantBg} className='image' />
    </div>
  );
}

export default Body;
