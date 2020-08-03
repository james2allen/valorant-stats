/** Imports */
import React from "react";
import { SearchBox } from "../Components/SearchBox";
import ValorantBg from "../Images/valorant.png";
import "./SearchPage.scss";
import Header from "../Components/Header";
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
          <SearchBox history={props.history}></SearchBox>
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
