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
export interface IAccountPuuid {
  puuid: string;
  gameName: string;
  tagLine: string;
}

export interface IAccountShard {
  puuid: string;
  game: "val";
  activeShard: Shard;
}
