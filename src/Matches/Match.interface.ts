import faker from "faker";
import { IAccountPuuid } from "../account/AccountContext";

/** Enums */
export enum Team {
  "Red",
  "Blue",
}

export enum GameMap {
  Split = "/Game/Maps/Bonsai/Bonsai",
  Ascent = "/Game/Maps/Bonsai/Ascent",
  Bind = "/Game/Maps/Bonsai/Duality",
  Haven = "/Game/Maps/Bonsai/Triad",
}

export enum GameMode {
  Normal = "/Game/GameModes/Bomb/BombGameMode.BombGameMode_C",
}

export const GameMaps = new Map<GameMap, string>([
  [GameMap.Split, "Split"],
  [GameMap.Ascent, "Ascent"],
  [GameMap.Bind, "Bind"],
  [GameMap.Haven, "Haven"],
]);

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
export class IMatchData {
  matchInfo: IMatchInfo;
  players: IMatchPlayer[];
  teams: IMatchTeam[];

  // TODO: revisit this section when tackling round result parsing
  roundResults: any[];

  constructor(puuid?: string) {
    const roundsPlayed = randInt(13, 25);
    const playtimeMillis = randInt(600000, 1800000);
    this.matchInfo = new IMatchInfo(playtimeMillis);
    this.players = [
      new IMatchPlayer(roundsPlayed, playtimeMillis, Team.Red, puuid),
      new IMatchPlayer(roundsPlayed, playtimeMillis, Team.Red),
      new IMatchPlayer(roundsPlayed, playtimeMillis, Team.Red),
      new IMatchPlayer(roundsPlayed, playtimeMillis, Team.Red),
      new IMatchPlayer(roundsPlayed, playtimeMillis, Team.Red),
      new IMatchPlayer(roundsPlayed, playtimeMillis, Team.Blue),
      new IMatchPlayer(roundsPlayed, playtimeMillis, Team.Blue),
      new IMatchPlayer(roundsPlayed, playtimeMillis, Team.Blue),
      new IMatchPlayer(roundsPlayed, playtimeMillis, Team.Blue),
      new IMatchPlayer(roundsPlayed, playtimeMillis, Team.Blue),
    ];

    const winningTeam = faker.random.boolean();

    this.teams = [
      new IMatchTeam(
        roundsPlayed,
        winningTeam ? 13 : roundsPlayed - 13,
        Team.Red
      ),
      new IMatchTeam(
        roundsPlayed,
        winningTeam ? roundsPlayed - 13 : 13,
        Team.Red
      ),
    ];

    this.roundResults = [];
  }
}

/** Match info relating to the elapsed time and the map played */
export class IMatchInfo {
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

  constructor(playTimeMillis: number) {
    this.matchId = faker.random.uuid();
    this.mapId = [GameMap.Split, GameMap.Haven, GameMap.Bind, GameMap.Ascent][
      randInt(0, 3)
    ];

    this.gameLengthMillis = playTimeMillis;
    this.gameStartMillis = faker.date.past(2020).getMilliseconds();
    this.provisioningFlowId = "Matchmaking";
    this.isCompleted = true;
    this.customGameName = "";
    this.queueId = "unrated";
    this.gameMode = GameMode.Normal;
    this.isRanked = faker.random.boolean();
    this.seasonId = faker.random.uuid();
  }
}

const randInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

/** How many times the player casted abilities throughout the duration of the match */
export interface ITotalAbilityCasts {
  grenadeCasts: number;
  ability1Casts: number;
  ability2Casts: number;
  ultimateCasts: number;
}

/** The individual player stats for the match */
export class IMatchPlayerStats {
  score: number;
  roundsPlayed: number;
  kills: number;
  deaths: number;
  assists: number;
  playtimeMillis: number;
  abilityCasts: ITotalAbilityCasts;
  constructor(roundsPlayed: number, playtimeMillis: number) {
    this.score = randInt(2000, 7000);
    this.roundsPlayed = roundsPlayed;
    this.kills = randInt(roundsPlayed / 2, 30);
    this.deaths = randInt(4, roundsPlayed);
    this.assists = randInt(0, 15);
    this.playtimeMillis = playtimeMillis;
    this.abilityCasts = {
      grenadeCasts: randInt(roundsPlayed - 5, roundsPlayed + 5),
      ability1Casts: randInt(roundsPlayed - 5, roundsPlayed + 5),
      ability2Casts: randInt(roundsPlayed - 5, roundsPlayed + 5),
      ultimateCasts: randInt(1, 5),
    };
  }
}

/** Each player that is involved in the match */
export class IMatchPlayer {
  gameName?: string;
  puuid: string;
  teamId: Team;
  partyId: string;
  characterId: string;
  stats: IMatchPlayerStats;
  competitiveTier: number;
  playerCard: string;
  playerTitle: string;
  constructor(
    roundsPlayed: number,
    playtimeMillis: number,
    team: Team,
    puuid?: string
  ) {
    this.puuid = puuid ? puuid : faker.random.uuid();
    this.teamId = team;
    this.partyId = faker.random.uuid();
    this.characterId = faker.random.uuid();
    this.stats = new IMatchPlayerStats(roundsPlayed, playtimeMillis);
    this.competitiveTier = randInt(0, 9);
    this.playerCard = faker.random.uuid();
    this.playerTitle = faker.random.uuid();
    this.gameName = faker.internet.userName();
  }
}

/** The teams of the match & how many rounds they won */
export class IMatchTeam {
  teamId: Team;
  won: boolean;
  roundsPlayed: number;
  roundsWon: number;
  constructor(roundsPlayed: number, roundsWon: number, teamId: Team) {
    this.roundsPlayed = roundsPlayed;
    this.teamId = teamId;
    this.won = roundsWon === 13;
    this.roundsWon = roundsWon;
  }
}
