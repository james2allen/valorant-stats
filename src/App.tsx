/** Imports */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "./Components/Footer";
import SearchPage from "./Account/SearchPage";
import MatchList from "./Matches/MatchList";

import "./App.scss";
import { AccountContextProvider } from "./Account/AccountContext";

/** Main application component */
function App() {
  let appName = "Valorant Stats";

  return (
    <>
      <Router>
        <AccountContextProvider>
          <Route exact path='/' component={SearchPage}></Route>
        </AccountContextProvider>
        <AccountContextProvider>
          <Route path='/account/:id' component={MatchList}></Route>
        </AccountContextProvider>
      </Router>
      <Footer appName={appName}></Footer>
    </>
  );
}

export default App;
