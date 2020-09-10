import { CsvFileReader as Reader } from "./CsvFileReader";

console.log("Hello");

enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

const analyzeMUWins = (matches: string[][]): number => {
  const MU = "Man United";
  let wins = 0;
  for (let match of matches) {
    if (match[1] === MU && match[5] === MatchResult.HomeWin) {
      wins++;
    } else if (match[2] === MU && match[5] === MatchResult.AwayWin) {
      wins++;
    }
  }
  return wins;
};

let reader = new Reader("football.csv");
reader.read();
// console.log(reader.data);

console.log(analyzeMUWins(reader.data));

class Dict<MyType> {
  constructor(private myData: MyType) {}
  get data(): MyType {
    return this.myData;
  }
  set data(data: MyType) {
    this.myData = data;
  }
}
const numberDict = new Dict<number>(456);
numberDict.data = 123;
const stringDict = new Dict<string>("123");
stringDict.data = "Hellowwww";
console.log("NumberDict: ", numberDict.data, stringDict.data);
