import { IAccountShard, IAccountPuuid } from "./AccountContext";

export const getPuuid = (riotId: string): Promise<IAccountPuuid> => {
  const [gameName, tagLine] = riotId.split("#");

  return fetch(
    `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${stringifyGameName(
      gameName
    )}/${tagLine}?api_key=${process.env.REACT_APP_RIOT_API_KEY}`
  ).then((result) => result.json());
};

export const getAccountByPuuid = (puuid: string) => {
  return fetch(
    `https://americas.api.riotgames.com/riot/account/v1/accounts/by-puuid/${puuid}/?api_key=${process.env.REACT_APP_RIOT_API_KEY}`
  ).then((result) => result.json());
};

export const getShard = (puuid: string): Promise<IAccountShard> => {
  return fetch(
    `https://americas.api.riotgames.com/riot/account/v1/active-shards/by-game/val/by-puuid/${puuid}?api_key=${process.env.REACT_APP_RIOT_API_KEY}`
  ).then((result) => result.json());
};

const stringifyGameName = (gameName: string) => {
  return gameName.split(" ").join("%20");
};
