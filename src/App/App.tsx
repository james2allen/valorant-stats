/** Imports */
import React from "react";
import "./App.scss";
import Footer from "../Components/Footer";
import SearchPage from "../Pages/SearchPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MatchList from "../Pages/MatchList";

/** Main application component */
function App() {
  let appName = "Valorant Stats";

  return (
    <>
      <Router forceRefresh={true}>
        <Switch>
          <Route exact path='/' component={SearchPage}></Route>
        </Switch>
      </Router>
      <Footer appName={appName}></Footer>
    </>
  );
}

export default App;
