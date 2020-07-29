import React, { createContext, useMemo, useState, useEffect } from "react";

/** Enums */
export enum Shard {
  "ap",
  "br",
  "eu",
  "kr",
  "latam",
  "na",
}

/** Interfaces */
export interface IAccountContext {
  account: {};
  setAccount: Function;
  puuid: string;
  setPuuid: Function;
  shard: Shard;
  setShard: Function;
}

export interface IAccountPuuid {
  puuid: string;
  gameName: string;
  tagLine: string;
}

export interface IAccountShard {
  puuid: string;
  activeShard: Shard;
  game: "val";
}

interface IAccountContextProps {
  children: JSX.Element;
}

export const AccountContext = createContext({} as IAccountContext);

export const AccountContextProvider = ({ children }: IAccountContextProps) => {
  const [account, setAccount] = useState({});
  const [puuid, setPuuid] = useState("");
  const [shard, setShard] = useState(Shard.na);

  useEffect(() => {
    // get account
  }, [account]);

  useEffect(() => {
    //get puuid
  }, [puuid]);

  useEffect(() => {
    // get shard
  }, [shard]);

  const value: IAccountContext = useMemo(() => {
    return {
      account,
      setAccount,
      puuid,
      setPuuid,
      shard,
      setShard,
    };
  }, [account, puuid, shard]);
  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
};
