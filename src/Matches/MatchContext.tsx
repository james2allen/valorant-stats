import React, { createContext, useMemo, useState, useEffect } from "react";
import { IMatchList, IMatchData } from "./Match.interface";
import { getMatchData } from "./MatchApi";

interface IMatchContext {
  matchList: IMatchList;
  setMatchList: Function;
  matchData: IMatchData[];
  setMatchData: Function;
}

interface IMatchListContextProps {
  children: JSX.Element;
}

export const MatchContext = createContext({} as IMatchContext);

export const MatchContextProvider = ({ children }: IMatchListContextProps) => {
  const [matchList, setMatchList] = useState({} as IMatchList);
  const [matchData, setMatchData] = useState<IMatchData[]>([]);

  useEffect(() => {
    if (!matchList.history) return;
    Promise.all(
      matchList.history.map((match) => getMatchData(match.matchId))
    ).then((matchListData) => {
      setMatchData(matchListData);
    });
  }, [matchList]);

  const value: IMatchContext = useMemo(() => {
    return {
      matchList,
      setMatchList,
      matchData,
      setMatchData,
    };
  }, [matchList, matchData]);

  return (
    <MatchContext.Provider value={value}>{children}</MatchContext.Provider>
  );
};
