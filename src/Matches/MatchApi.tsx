import { IMatchList, IMatchData } from "./Match.interface";
import matchList from "../data/matches";
import matchData from "../data/match";
import { Shard } from "../account/AccountContext";
import { cloneDeep } from "lodash";

export const getMatchList = (
  puuid: string,
  shard: Shard
): Promise<IMatchList> => {
  return Promise.resolve(matchList);
};

export const getMatchData = (
  matchId: string,
  puuid: string
): Promise<IMatchData> => {
  return Promise.resolve(new IMatchData(puuid));
};
