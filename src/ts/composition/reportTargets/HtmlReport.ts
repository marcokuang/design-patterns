import { OutputTarget } from "../Summary";
import fs from "fs";
export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
    <div>
      <h2>${report}</h2>
    </div>
    `;

    fs.writeFileSync("htmlReport.html", html);
  }
}
