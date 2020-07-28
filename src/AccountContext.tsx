import React, {
  createContext,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from "react";

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

enum Shard {
  "AP",
  "BR",
  "EU",
  "KR",
  "LATAM",
  "NA",
}

export const AccountContext = createContext({} as IAccountContext);

export const AccountContextProvider = ({ children }: IAccountContextProps) => {
  const [account, setAccount] = useState({} as IAccount);
  const [puuid, setPuuid] = useState("");
  const [activeShard, setActiveShard] = useState(Shard.NA);
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

  //   const addTodo = useCallback((id: string) => {}, [todos]);

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
