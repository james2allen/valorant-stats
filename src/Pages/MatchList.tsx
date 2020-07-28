/** Imports */
import React from "react";
import ValorantBg from "../Images/valorant.png";
import "./MatchList.scss";
import SearchHeader from "../Components/SearchHeader";
import { RouteComponentProps, withRouter } from "react-router-dom";

/** Body component */
function MatchList(props: RouteComponentProps) {
  return (
    <>
      <div className='col-md-12 header-container'>
        <SearchHeader history={props.history}></SearchHeader>
      </div>
      <div className='body-container'>
        <div className='container'></div>
        <img src={ValorantBg} className='match-list-background' />
      </div>
    </>
  );
}

export default withRouter(MatchList);
