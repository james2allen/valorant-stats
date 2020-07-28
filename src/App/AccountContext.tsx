import React, { createContext, useMemo, useState, useEffect } from "react";
import { Shard } from "../Interfaces/Account.interface";

interface IAccountContext {
  account: IAccount;
  setAccount: Function;
  puuid: string;
  setPuuid: Function;
  activeShard: Shard;
  setActiveShard: Function;
}

export interface IAccount {
  gameName: string;
  tagLine: string;
  puuid?: string;
}

interface IAccountContextProps {
  children: JSX.Element;
}

export const AccountContext = createContext({} as IAccountContext);

export const AccountContextProvider = ({ children }: IAccountContextProps) => {
  const [account, setAccount] = useState({} as IAccount);
  const [puuid, setPuuid] = useState("");
  const [activeShard, setActiveShard] = useState(Shard.na);
  const [matchList, setMatchList] = useState();

  useEffect(() => {
    // get puuid
  }, [account]);

  useEffect(() => {
    //get active shard
  }, [puuid]);

  useEffect(() => {
    // get match data
  }, [activeShard]);

  const value: IAccountContext = useMemo(() => {
    return {
      account,
      setAccount,
      puuid,
      setPuuid,
      activeShard,
      setActiveShard,
    };
  }, [account, puuid, activeShard]);
  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
};
