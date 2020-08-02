/** Imports */
import React, { useEffect, useContext } from "react";
import {
  RouteComponentProps,
  withRouter,
  useHistory,
  useLocation,
} from "react-router-dom";
import ValorantBg from "../Images/valorant.png";
import "./MatchList.scss";
import SearchHeader from "../Components/SearchHeader";
import { AccountContext } from "../Account/AccountContext";
import { MatchContext } from "./MatchContext";
import { getMatchList } from "./MatchApi";

/** Body component */
function MatchList(props: RouteComponentProps) {
  const location = useLocation();
  const history = useHistory();
  const { puuid, setPuuid, shard } = useContext(AccountContext);
  const { setMatchList, matchList, matchData } = useContext(MatchContext);

  //On first load pull puuid from location if missing
  useEffect(() => {
    if (!puuid) {
      const id = location.pathname.slice(9);
      setPuuid(id);
    }
  }, []);

  useEffect(() => {
    getMatchList(puuid, shard).then((matchList) => {
      setMatchList(matchList);
    });
  }, [shard]);

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
