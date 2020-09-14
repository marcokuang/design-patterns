import { CsvFileReader } from "./CsvFileReader";

enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

// define a tuple for the match data
type MatchData = [Date, string, string, number, number, MatchResult, string];

//util function
function dateStringToDate(str: string): Date {
  const subs = str.split("/");
  return new Date(parseInt(subs[2]), parseInt(subs[1]) - 1, parseInt(subs[0]));
}

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }

  analyzeMUWins = (): string => {
    const MU = "Man United";
    let wins = 0;
    for (let match of this.data) {
      if (match[1] === MU && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (match[2] === MU && match[5] === MatchResult.AwayWin) {
        wins++;
      }
    }
    return `Man United has ${wins} wins`;
  };
}
