/** Imports */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Footer from "./components/Footer";
import SearchPage from "./account/SearchPage";
import MatchList from "./matches/MatchList";

import "./App.scss";
import { AccountContextProvider } from "./account/AccountContext";
import { MatchContextProvider } from "./matches/MatchContext";

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
