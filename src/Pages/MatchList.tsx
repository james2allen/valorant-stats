/** Imports */
import React from "react";
import ValorantBg from "../Images/valorant.png";
import "./SearchPage.scss";
import SearchHeader from "../Components/SearchHeader";
import { RouteComponentProps, withRouter } from "react-router-dom";

/** Body component */
function MatchList(props: RouteComponentProps) {
  return (
    <>
      <SearchHeader history={props.history}></SearchHeader>
      <div className='body-container'>
        <div className='container'></div>
        <img src={ValorantBg} className='image' />
      </div>
    </>
  );
}

export default withRouter(MatchList);
