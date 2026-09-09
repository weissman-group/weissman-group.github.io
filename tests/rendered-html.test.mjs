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
  assert.match(html, /H\(X\)/);
  assert.match(html, /id="software"[^>]*>.*Software &amp; patents/is);
  assert.match(html, /id="courses"[^>]*>.*At the board/is);
  assert.match(html, /id="outreach"[^>]*>.*A wider circle of ideas/is);
  assert.match(html, /id="media"[^>]*>.*When theory enters culture/is);
  assert.match(html, /property="og:image"/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/i);
});

test("exports every public route", async () => {
  const routes = ["research", "people", "publications", "community"];
  for (const route of routes) {
    const html = await readRoute(route);
    assert.match(html, /Weissman Research Group/);
    assert.match(html, /<main[^>]*id="main-content"/i);
  }
});

test("includes GitHub Pages and metadata assets", async () => {
  await Promise.all([
    access(new URL(".nojekyll", clientRoot)),
    access(new URL("og.png", clientRoot)),
    access(new URL("robots.txt", clientRoot)),
  ]);
});
