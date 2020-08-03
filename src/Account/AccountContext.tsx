import { getShard, getAccountByPuuid } from "./AccountApi";
import React, { useState, createContext, useMemo, useEffect } from "react";

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
  account: IAccountPuuid;
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
  const [account, setAccount] = useState({} as IAccountPuuid);
  const [puuid, setPuuid] = useState("");
  const [shard, setShard] = useState(Shard.na);

  // On update puuid, get account data if missing & get shard for user if missing
  useEffect(() => {
    if (!puuid) return;

    if (!account.gameName || !account.tagLine) {
      getAccountByPuuid(puuid).then((response: IAccountPuuid) => {
        setAccount(response);
      });
    }
    getShard(puuid).then((response: IAccountShard) => {
      setShard(response.activeShard);
    });
  }, [puuid]);

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
