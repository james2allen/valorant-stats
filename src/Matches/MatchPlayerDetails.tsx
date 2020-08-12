/** Imports */
import React, { useEffect, useContext, useState } from "react";
import "./MatchList.scss";
import { MatchContext } from "./MatchContext";
import { IMatchPlayer } from "./Match.interface";
import { AccountContext } from "../account/AccountContext";

interface MatchPlayerDetailsProps {
  matchPlayer: IMatchPlayer;
  won: boolean;
}

/** Body component */
function MatchPlayerDetail({ matchPlayer, won }: MatchPlayerDetailsProps) {
  const { account } = useContext(AccountContext);

  return (
    <div className={`match-player-detail match-player-${won ? "win" : "lose"}`}>
      <div>{matchPlayer.gameName}</div>
      <div>
        K/D/A: {matchPlayer.stats.kills}/{matchPlayer.stats.deaths}/
        {matchPlayer.stats.assists}
      </div>
    </div>
  );
}

export default MatchPlayerDetail;
