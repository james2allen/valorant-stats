/** Imports */
import React, { useEffect, useContext, useState } from "react";
import "./MatchList.scss";
import { AccountContext } from "../account/AccountContext";
import { MatchContext } from "./MatchContext";
import { Collapse, CardBody, Card } from "reactstrap";
import { IMatchData, GameMaps } from "./Match.interface";
import MatchPlayerDetails from "./MatchPlayerDetails";

interface MatchListItemProps {
  match: IMatchData;
}

function MatchListItem({ match }: MatchListItemProps) {
  const { matchInfo, players, teams } = match;
  const { account } = useContext(AccountContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMatchList = () => setIsOpen(!isOpen);

  useEffect(() => {
    console.log(match);
  });

  const getGameMapDisplay = (match: IMatchData) => {
    return (
      <img
        className='game-map'
        src={GameMaps.get(match.matchInfo.mapId)?.map}></img>
    );
  };

  return (
    <>
      <div className='mt-3 mb-1'>
        <div className='matchlist-item__container' onClick={toggleMatchList}>
          <div
            className={`row-decoration-${
              match.teams[0].won ? "win" : "lose"
            }`}></div>

          <div
            className={`matchlist-item match-player-${
              match.teams[0].won ? "win" : "lose"
            }`}>
            {match.teams[0].roundsWon} - {match.teams[1].roundsWon}
            {getGameMapDisplay(match)}
          </div>
        </div>
      </div>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <div className='row'>
              <div className='col-md-6'>
                <MatchPlayerDetails
                  matchPlayer={{
                    ...match.players[0],
                    gameName: `${account.gameName}#${account.tagLine}`,
                  }}
                  won={match.teams[0].won}></MatchPlayerDetails>
                <MatchPlayerDetails
                  matchPlayer={match.players[1]}
                  won={match.teams[0].won}></MatchPlayerDetails>
                <MatchPlayerDetails
                  matchPlayer={match.players[2]}
                  won={match.teams[0].won}></MatchPlayerDetails>
                <MatchPlayerDetails
                  matchPlayer={match.players[3]}
                  won={match.teams[0].won}></MatchPlayerDetails>
                <MatchPlayerDetails
                  matchPlayer={match.players[4]}
                  won={match.teams[0].won}></MatchPlayerDetails>
              </div>
              <div className='col-md-6'>
                <MatchPlayerDetails
                  matchPlayer={match.players[5]}
                  won={match.teams[1].won}></MatchPlayerDetails>
                <MatchPlayerDetails
                  matchPlayer={match.players[6]}
                  won={match.teams[1].won}></MatchPlayerDetails>
                <MatchPlayerDetails
                  matchPlayer={match.players[7]}
                  won={match.teams[1].won}></MatchPlayerDetails>
                <MatchPlayerDetails
                  matchPlayer={match.players[8]}
                  won={match.teams[1].won}></MatchPlayerDetails>
                <MatchPlayerDetails
                  matchPlayer={match.players[9]}
                  won={match.teams[1].won}></MatchPlayerDetails>
              </div>
            </div>
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
}

export default MatchListItem;
