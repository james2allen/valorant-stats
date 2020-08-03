/** Imports */
import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import "./MatchList.scss";
import { AccountContext } from "../account/AccountContext";
import { MatchContext } from "./MatchContext";
import { IMatchList, IMatchData, GameMap, GameMaps } from "./Match.interface";

interface MatchListItemProps {
  match: IMatchData;
}

/** Body component */
function MatchListItem({ match }: MatchListItemProps) {
  const { matchInfo, players, teams } = match;
  const location = useLocation();
  const { account } = useContext(AccountContext);

  return (
    <>
      <div className='matchlist-item'>Map: {GameMaps.get(matchInfo.mapId)}</div>
    </>
  );
}

export default MatchListItem;
