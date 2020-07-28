/** Imports */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "../Components/Footer";
import SearchPage from "../Pages/SearchPage";
import MatchList from "../Pages/MatchList";

import "./App.scss";

/** Main application component */
function App() {
  let appName = "Valorant Stats";

  return (
    <>
      <Router forceRefresh={true}>
        <Switch>
          <Route exact path='/' component={SearchPage}></Route>
          <Route path='/account/:id' component={MatchList}></Route>
        </Switch>
      </Router>
      <Footer appName={appName}></Footer>
    </>
  );
}

export default App;
