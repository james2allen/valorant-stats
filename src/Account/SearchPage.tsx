/** Imports */
import React from "react";
import { SearchBox } from "../components/SearchBox";
import ValorantBg from "../images/valorant.png";
import "./SearchPage.scss";
import Header from "../components/Header";
import { RouteComponentProps, withRouter } from "react-router-dom";

/** Body component */
function SearchPage(props: RouteComponentProps) {
  return (
    <>
      <div className='col-md-12 header-container'>
        <Header></Header>
      </div>
      <div className='body-container'>
        <div className='container'>
          <SearchBox></SearchBox>
        </div>
        <img
          src={ValorantBg}
          alt-text='Valorant Splash'
          className='search-page-background'
        />
      </div>
    </>
  );
}

export default withRouter(SearchPage);
