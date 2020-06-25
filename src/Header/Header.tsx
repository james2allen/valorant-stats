/** Imports */
import React from "react";
import "./Header.css";

/** Header application component */
function Header({ appName }: { appName: string }) {
  return <h1>{appName}</h1>;
}

export default Header;
