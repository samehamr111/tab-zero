import { chromium } from "playwright";
import path from "node:path";
import { pathToFileURL } from "node:url";

const dir = process.argv[2];
const files = process.argv.slice(3);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1080, height: 1080 }, deviceScaleFactor: 1 });

for (const f of files) {
  const filePath = path.resolve(dir, f + ".html");
  await page.goto(pathToFileURL(filePath).href);
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.resolve(dir, f + ".png") });
  console.log("rendered", f);
}

await browser.close();
