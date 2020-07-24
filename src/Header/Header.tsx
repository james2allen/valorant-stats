/** Imports */
import React from "react";
import "./Header.scss";

interface HeaderItemProps {
  appName: string;
}

function Header({ appName }: HeaderItemProps) {
  function convertAppName(appName: string) {
    return appName.toUpperCase();
  }
  return (
    <div className='col-md-12 header-container'>
      <h1 className='header-text'>{convertAppName(appName)}</h1>
    </div>
  );
}

export default Header;
