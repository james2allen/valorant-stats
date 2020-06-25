/** Imports */
import React from "react";
import "./App.scss";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Body from "./Body/Body";

/** Main application component */
function App() {
  let appName = "Valorant Stats";

  return (
    <>
      <Header appName={appName}></Header>
      <Body></Body>
      <Footer appName={appName}></Footer>
    </>
  );
}

export default App;
