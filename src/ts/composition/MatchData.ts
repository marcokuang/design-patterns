export enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

// define a tuple for the match data
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
