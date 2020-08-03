/** Enums */
export enum Team {
  "Red",
  "Blue",
}

export enum GameMap {
  Split = "/Game/Maps/Bonsai/Bonsai",
}

export enum GameMode {
  Normal = "/Game/GameModes/Bomb/BombGameMode.BombGameMode_C",
}

export const GameMaps = new Map<GameMap, string>([[GameMap.Split, "Split"]]);

/** Interfaces */

/** Small representation of a match to be used in displaying the recent matches a player has played */
export interface IMatch {
  matchId: string;
  gameStartTime: number;
  teamId: Team;
}

/** List of recent matches that a player has played in */
export interface IMatchList {
  puuid: string;
  history: IMatch[];
}

/** Specific match data with more detail such as match winners & losers and the players and their stats */
export interface IMatchData {
  matchInfo: IMatchInfo;
  players: IMatchPlayer[];
  teams: IMatchTeam[];

  // TODO: revisit this section when tackling round result parsing
  roundResults: any[];
}

/** Match info relating to the elapsed time and the map played */
export interface IMatchInfo {
  matchId: string;
  mapId: GameMap;
  gameLengthMillis: number;
  gameStartMillis: number;
  provisioningFlowId: string;
  isCompleted: boolean;
  customGameName: string;
  queueId: string;
  gameMode: GameMode;
  isRanked: boolean;
  seasonId: string;
}

/** How many times the player casted abilities throughout the duration of the match */
export interface ITotalAbilityCasts {
  grenadeCasts: number;
  ability1Casts: number;
  ability2Casts: number;
  ultimateCasts: number;
}

/** The individual player stats for the match */
export interface IMatchPlayerStats {
  score: number;
  roundsPlayed: number;
  kills: number;
  deaths: number;
  assists: number;
  playtimeMillis: number;
  abilityCasts: ITotalAbilityCasts;
}

/** Each player that is involved in the match */
export interface IMatchPlayer {
  puuid: string;
  teamId: Team;
  partyId: string;
  characterId: string;
  stats: IMatchPlayerStats;
  competitiveTier: number;
  playerCard: string;
  playerTitle: string;
}

/** The teams of the match & how many rounds they won */
export interface IMatchTeam {
  teamId: Team;
  won: boolean;
  roundsPlayed: number;
  roundsWon: number;
}
