import React, { createContext, useMemo, useState, useEffect } from "react";
import { IMatchList, IMatchData } from "./Match.interface";

interface IMatchContext {
  matchList: IMatchList;
  setMatchList: Function;
}

interface IMatchListContextProps {
  children: JSX.Element;
}

export const MatchContext = createContext({} as IMatchContext);

export const MatchContextProvider = ({ children }: IMatchListContextProps) => {
  const [matchList, setMatchList] = useState({} as IMatchList);
  const [matchData, setMatchData] = useState({} as IMatchData);

  useEffect(() => {
    // get match list
  }, [matchList]);

  useEffect(() => {
    // get match list
  }, [matchData]);

  const value: IMatchContext = useMemo(() => {
    return {
      matchList,
      setMatchList,
      matchData,
      setMatchData,
    };
  }, [matchList]);

  return (
    <MatchContext.Provider value={value}>{children}</MatchContext.Provider>
  );
};
