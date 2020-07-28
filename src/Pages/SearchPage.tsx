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
      <Header></Header>
      <div className='body-container'>
        <div className='container'>
          <SearchBox history={props.history}></SearchBox>
        </div>
        <img src={ValorantBg} className='image' />
      </div>
    </>
  );
}

export default withRouter(SearchPage);
