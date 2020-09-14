import { MatchResult, MatchData } from "./MatchData";

export interface DataReader {
  read(): void;
  data: string[][];
}

//util function
function dateStringToDate(str: string): Date {
  const subs = str.split("/");
  return new Date(parseInt(subs[2]), parseInt(subs[1]) - 1, parseInt(subs[0]));
}

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    //there is a has-a relationship between MatchReader and CsvFileReader
    // -=> Match reader "has" a csvFileReader
    // the load method delegates to csvFileReader's read method.
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
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
    );
  }
}
