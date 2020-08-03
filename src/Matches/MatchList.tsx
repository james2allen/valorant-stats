/** Imports */
import React, { useEffect, useContext, useState } from "react";
import {
  RouteComponentProps,
  withRouter,
  useHistory,
  useLocation,
} from "react-router-dom";
import ValorantBg from "../images/valorant.png";
import "./MatchList.scss";
import SearchHeader from "../components/SearchHeader";
import { AccountContext } from "../account/AccountContext";
import { MatchContext } from "./MatchContext";
import { getMatchList } from "./MatchApi";
import MatchListItem from "./MatchListItem";

/** Body component */
function MatchList() {
  const location = useLocation();
  const history = useHistory();
  const { puuid, setPuuid, shard } = useContext(AccountContext);
  const { setMatchList, matchList, matchData } = useContext(MatchContext);
  const [views, setViews] = useState<JSX.Element>(<></>);

  //On first load pull puuid from location if missing
  useEffect(() => {
    if (!puuid) {
      const id = location.pathname.slice(9);
      setPuuid(id);
    }
  }, []);

  // Get the expanded list of match related stuff
  useEffect(() => {
    getMatchList(puuid, shard).then((matchList) => {
      setMatchList(matchList);
    });
  }, [shard]);

  useEffect(() => {
    setViews(
      <>
        {matchData.map((match) => (
          <MatchListItem match={match}></MatchListItem>
        ))}
      </>
    );
  }, [matchData]);

  return (
    <>
      <div className='col-md-12 header-container'>
        <SearchHeader></SearchHeader>
      </div>
      <div className='body-container'>
        <div className='container'>{views}</div>
        <img src={ValorantBg} className='match-list-background' />
      </div>
    </>
  );
}

export default withRouter(MatchList);
