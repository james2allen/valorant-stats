/** Imports */
import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  function convertAppName(appName: string) {
    return appName.toUpperCase();
  }
  return (
    <div className='col-md-12 header-container'>
      <Link to='/'>
        <h1 className='header-text'>{convertAppName("Valorant Stats")}</h1>
      </Link>
    </div>
  );
}

export default Header;
