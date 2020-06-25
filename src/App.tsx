/** Imports */
import React from "react";
import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

/** Main application component */
function App() {
  let appName = "Valorant Stats";

  return (
    <>
      <Header appName={appName}></Header>
      <div></div>
      <Footer appName={appName}></Footer>
    </>
  );
}

export default App;
