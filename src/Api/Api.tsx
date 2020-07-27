export const getPuuid = (
  riotId: string
): Promise<{ gameName: string; tagLine: string; puuid: string }> => {
  const [gameName, tagLine] = riotId.split("#");

  return fetch(
    `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${stringifyGameName(
      gameName
    )}/${tagLine}?api_key=${process.env.REACT_APP_RIOT_API_KEY}`
  ).then((result) => result.json());
};

const stringifyGameName = (gameName: string) => {
  return gameName.split(" ").join("%20");
};
