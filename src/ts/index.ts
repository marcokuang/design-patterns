import { MatchReader, MatchReader as Reader } from "./composition/MatchReader";
import { CsvFileReader } from "./composition/CsvFileReader";
import { Summary } from "./composition/Summary";
import { WinAnalysis } from "./composition/analyzers/WinAnalysis";
import { ConsoleReport } from "./composition/reportTargets/ConsoleReport";
import { HtmlReport } from "./composition/reportTargets/HtmlReport";
// kick off a csv file reader
let reader = new CsvFileReader("football.csv");
// init a match reader to process the raw data provided by the file reader
let matchReader = new MatchReader(reader);
// Match reader initializing the loading process.
matchReader.load();
// create a summary report
let mySummary = new Summary(new WinAnalysis("Man United"), new HtmlReport());
mySummary.buildAndPrintReport(matchReader.matches);
// console.log(matchReader.matches);

// class Dict<MyType> {
//   constructor(private myData: MyType) {}
//   get data(): MyType {
//     return this.myData;
//   }
//   set data(data: MyType) {
//     this.myData = data;
//   }
// }

// const numberDict = new Dict<number>(456);
// numberDict.data = 123;
// const stringDict = new Dict<string>("123");
// stringDict.data = "Hellowwww";

// console.log("NumberDict: ", numberDict.data, stringDict.data);
