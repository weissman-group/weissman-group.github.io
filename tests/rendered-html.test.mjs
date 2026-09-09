import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const clientRoot = new URL("../dist/client/", import.meta.url);

async function readRoute(route = "") {
  const filename = route ? `${route}.html` : "index.html";
  return readFile(new URL(filename, clientRoot), "utf8");
}

test("exports the finished homepage", async () => {
  const html = await readRoute();

  assert.match(html, /<title>Weissman Research Group · Stanford University<\/title>/i);
  assert.match(html, /The science of/);
  assert.match(html, /Weissman Research Group/);
  assert.match(html, /Explore our research/);
  assert.match(html, /Information/);
  assert.match(html, /Intelligence/);
  assert.match(html, /Inference/);
  assert.match(html, /Toggle light and dark mode/);
  assert.match(html, /href="\/news"/);
  assert.doesNotMatch(
    html,
    /WRG \/ I|Three connected modes|Four questions about information|Recent papers|Theory is a team sport/i,
  );
  assert.match(html, /property="og:image"/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/i);
});

test("exports every public route", async () => {
  const routes = [
    "research",
    "people",
    "publications",
    "news",
    "software",
    "courses",
    "outreach",
    "media",
    "community",
  ];
  for (const route of routes) {
    const html = await readRoute(route);
    assert.match(html, /Weissman Research Group/);
    assert.match(html, /<main[^>]*id="main-content"/i);
    assert.doesNotMatch(html, /hero-registration|37\.4275|122\.1697|WRG001|WHG001/i);
  }
});

test("renders the reconciled people directory", async () => {
  const html = await readRoute("people");

  for (const name of [
    "Aayush Rajesh",
    "Abhiram Gorle",
    "Connor Ding",
    "Jiwon Jeong",
    "Matthew Ho",
    "Naomi Sagan",
    "Yasmine Omri",
    "Amit Yadav",
    "Taesup Moon",
    "Thierry Tambe",
  ]) {
    assert.match(html, new RegExp(name));
  }

  assert.match(html, /Jaeseok Byun/);
  assert.match(html, /class="member-year"> \(<!-- -->2025<!-- -->\)/);
  assert.match(html, /Pumiao Yan/);
  assert.match(html, /Sagnik Bhattacharya/);
  assert.match(html, /Divija Hasteer/);
  assert.doesNotMatch(html, /Atindra Jha|MS students|Undergraduate researchers/i);
  assert.match(html, /<img[^>]+alt="Tsachy Weissman"/i);
});

test("includes GitHub Pages and metadata assets", async () => {
  await Promise.all([
    access(new URL(".nojekyll", clientRoot)),
    access(new URL("og.png", clientRoot)),
    access(new URL("robots.txt", clientRoot)),
  ]);
});
