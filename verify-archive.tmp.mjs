import { chromium } from "@playwright/test";

const BASE = "http://localhost:4322";
const browser = await chromium.launch();
const page = await browser.newPage();
const errors = [];
page.on("console", (msg) => {
	if (msg.type() === "error") errors.push(msg.text());
});
page.on("pageerror", (err) => errors.push(String(err)));

await page.goto(`${BASE}/archive/`, { waitUntil: "domcontentloaded" });
await page.waitForTimeout(2500);

const segments = await page.$$eval(
	".m3-segmented__segment span:not(.m3-segmented__check)",
	(nodes) => nodes.map((n) => n.textContent?.trim()),
);
console.log("group options:", JSON.stringify(segments));
console.log("groups rendered:", await page.$$eval(".m3-blog-archive__group-title", (n) => n.length));

// ?tag= 定向筛选视图应不受影响
await page.goto(`${BASE}/archive/?tag=片尾曲`, { waitUntil: "domcontentloaded" });
await page.waitForTimeout(2000);
console.log("crumb on ?tag view:", await page.locator(".archive-panel__crumb").count());
console.log("items in ?tag view:", await page.locator(".m3-blog-archive__item").count());

console.log("console errors:", errors.length ? errors : "none");
await browser.close();
