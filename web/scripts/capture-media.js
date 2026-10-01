/* eslint-disable @typescript-eslint/no-require-imports */
// Records README media from a running site.
// Usage: node scripts/capture-media.js http://localhost:3000 ../docs/media
// Needs playwright-core and a Chromium (set CHROME_PATH). ffmpeg is used afterwards for mp4/gif.
const { chromium } = require("playwright-core");
const fs = require("fs");
const path = require("path");

const [url = "http://localhost:3000", outDir = "../docs/media"] = process.argv.slice(2);
const exe = process.env.CHROME_PATH;

(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch({ executablePath: exe, headless: true });

  // 1) logo intro (top-left corner) — short clip
  {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 720 }, recordVideo: { dir: outDir, size: { width: 1280, height: 720 } } });
    const page = await ctx.newPage();
    await page.goto(url, { waitUntil: "networkidle" });
    await page.waitForTimeout(3200);
    const v = page.video();
    await ctx.close();
    fs.renameSync(await v.path(), path.join(outDir, "raw-logo.webm"));
  }

  // 2) full scroll-through
  {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 720 }, recordVideo: { dir: outDir, size: { width: 1280, height: 720 } } });
    const page = await ctx.newPage();
    await page.goto(url, { waitUntil: "networkidle" });
    await page.waitForTimeout(2600);
    await page.mouse.move(820, 380);
    const total = await page.evaluate(() => document.documentElement.scrollHeight - innerHeight);
    let y = 0;
    while (y < total) {
      await page.mouse.wheel(0, 90);
      y += 90;
      await page.waitForTimeout(150);
      if (y % 1800 < 90) await page.mouse.move(600 + Math.random() * 500, 250 + Math.random() * 300); // pointer parallax
    }
    await page.waitForTimeout(2500);
    const v = page.video();
    await ctx.close();
    fs.renameSync(await v.path(), path.join(outDir, "raw-scroll.webm"));
  }

  // 3) screenshots — aimed at section positions so no frame lands mid-transition
  const shots = async (w, h, prefix, targets) => {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    await page.goto(url, { waitUntil: "networkidle" });
    await page.waitForTimeout(3200);
    for (const [name, sel, f] of targets) {
      const y = await page.evaluate(([sel, f]) => {
        const el = document.querySelector(sel);
        if (!el) return document.documentElement.scrollHeight;
        const top = el.getBoundingClientRect().top + scrollY;
        return top + f * Math.max(0, el.offsetHeight - innerHeight);
      }, [sel, f]);
      await page.evaluate((y) => window.scrollTo(0, y), Math.round(y));
      await page.waitForTimeout(2200);
      await page.screenshot({ path: path.join(outDir, `${prefix}-${name}.png`) });
    }
    await page.close();
  };
  const sec = (label) => `section[aria-labelledby="${label}"]`;
  const all = [
    ["01-hero", "#top", 0], ["02-bottle-story", "#top", 0.97], ["03-journey", "#origin", 0.45], ["04-origin", "#farms", 0.15],
    ["05-breeds", sec("br-title"), 0], ["06-trace", "#trace", 0.55], ["07-quality", sec("q-title"), 0], ["08-master-26", "#milk", 0.0],
    ["09-root-14", "#milk", 0.333], ["10-base-3", "#milk", 0.666], ["11-essential", "#milk", 1], ["12-heritage", sec("h-title"), 0],
    ["13-technology", "#technology", 0], ["14-ghee", sec("gh-title"), 0], ["15-trace-your-milk", sec("ty-title"), 0], ["16-final", "#reserve", 0],
  ];
  await shots(1440, 900, "desktop", all);
  await shots(390, 844, "mobile", [["01-hero", "#top", 0], ["02-journey", "#origin", 0.3], ["03-milk", "#milk", 0.333], ["04-final", "#reserve", 0]]);
  await browser.close();
  console.log("done");
})().catch((e) => { console.error(e); process.exit(1); });
