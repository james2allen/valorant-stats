export const getAccount = (riotId: string): Promise<any> => {
  const [id, tag] = riotId.split("#");

  return fetch(
    `https://api.github.com/search/users?query=${riotId}`
  ).then((resp) => resp.json());
};
