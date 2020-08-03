/** Imports */
import React from "react";
import { Link } from "react-router-dom";

import "../styles/components.scss";

function Header() {
  function convertAppName(appName: string) {
    return appName.toUpperCase();
  }
  return (
    <Link to='/'>
      <h1 className='header-text'>{convertAppName("Valorant Stats")}</h1>
    </Link>
  );
}

export default Header;
