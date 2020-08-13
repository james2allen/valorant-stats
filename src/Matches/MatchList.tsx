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
import { getMatchList, getMatchData } from "./MatchApi";
import MatchListItem from "./MatchListItem";

/** Body component */
function MatchList() {
  const location = useLocation();
  const history = useHistory();
  const { puuid, setPuuid, shard, account } = useContext(AccountContext);
  const { setMatchList, matchList, matchData, setMatchData } = useContext(
    MatchContext
  );
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

  // Move this back into match context when actually connected to riot API
  // Fetches match list in better detail
  useEffect(() => {
    if (!matchList.history) return;
    Promise.all(
      matchList.history.map((match) => getMatchData(match.matchId, puuid))
    ).then((matchListData) => {
      setMatchData(matchListData);
    });
  }, [matchList]);

  // Generates the match list based on the pulled match data
  useEffect(() => {
    setViews(
      <>
        {matchData.map((match) => (
          <MatchListItem
            key={`match-key-${match.matchInfo.matchId}`}
            match={match}></MatchListItem>
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
        <div className='container'>
          <div className='row p-0'>
            <div className='col-md-4'>
              <div className='row'>
                <h1>
                  {account.gameName
                    ? `${account.gameName}#${account.tagLine}`
                    : "NOT_FOUND"}
                </h1>
              </div>
              <div className='row'>
                <img src={PlayerCard} className='player-card'></img>
              </div>
            </div>
            <div className='col-md-8'>
              <h1 className='ml-4'>Recent Matches</h1>
              {views}
            </div>
          </div>
        </div>
        <img src={ValorantBg} className='match-list-background' />
      </div>
    </>
  );
}

export default withRouter(MatchList);
