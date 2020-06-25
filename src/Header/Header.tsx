/** Imports */
import React from "react";
import "./Header.scss";

/** Header application component */
function Header({ appName }: { appName: string }) {
  function convertAppName(appName: string) {
    let appHeader = appName
      .split(" ")
      .map((word) => word.toUpperCase())
      .join("_");
    return `_${appHeader}`;
  }
  return (
    <div className='col-md-12 header-container'>
      <h1 className='header-text'>{convertAppName(appName)}</h1>
    </div>
  );
}

export default Header;
