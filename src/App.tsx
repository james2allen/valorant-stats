/** Imports */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Footer from "./Components/Footer";
import SearchPage from "./Account/SearchPage";
import MatchList from "./Matches/MatchList";

import "./App.scss";
import { AccountContextProvider } from "./Account/AccountContext";
import { MatchContextProvider } from "./Matches/MatchContext";

/** Main application component */
function App() {
  let appName = "Valorant Stats";

  return (
    <>
      <AccountContextProvider>
        <Router>
          <Route exact path='/' component={SearchPage}></Route>
          <MatchContextProvider>
            <Route path='/account/:id' component={MatchList}></Route>
          </MatchContextProvider>
        </Router>
      </AccountContextProvider>
      <Footer appName={appName}></Footer>
    </>
  );
}

export default App;
