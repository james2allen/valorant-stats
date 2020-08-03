import { IMatchList, IMatchData } from "./Match.interface";
import matchList from "../data/matches";
import matchData from "../data/match";
import { Shard } from "../account/AccountContext";

export const getMatchList = (
  puuid: string,
  shard: Shard
): Promise<IMatchList> => {
  return Promise.resolve(matchList);
};

export const getMatchData = (matchId: string): Promise<IMatchData> => {
  return Promise.resolve(matchData);
};
