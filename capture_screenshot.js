const puppeteer = require("puppeteer");
const path = require("path");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set viewport to roughly desktop size
  await page.setViewport({ width: 1440, height: 1080 });

  // Construct absolute file URL
  const filePath = path.join(__dirname, "index.html");
  const fileUrl = "file://" + filePath.replace(/\\/g, "/");

  console.log(`Navigating to: ${fileUrl}`);
  await page.goto(fileUrl, { waitUntil: "networkidle0" });

  // Take full page screenshot
  // Saving to assets folder
  const screenshotPath = path.join(__dirname, "assets", "website-preview.png");
  await page.screenshot({ path: screenshotPath, fullPage: true });

  console.log(`Screenshot saved to: ${screenshotPath}`);

  await browser.close();
})();
