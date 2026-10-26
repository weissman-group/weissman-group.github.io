import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { landingCopy, refineCKLandingPage, refineCKLandingStyles } from '../tools/ck-landing-page.mjs';
import { refineCKPages } from '../tools/ck-reader-refinements.mjs';

test('landing refinement retains the shell and navigation and installs the approved copy once', () => {
  const shell = '<head></head><body><header>Navigation</header><main class="ck-home-main"><p class="ck-eyebrow">Information theory · Courtade–Kumar</p><h1>Old title</h1></main></body>';
  const next = refineCKLandingPage(shell);
  assert.match(next, /<header>Navigation<\/header>/);
  assert.doesNotMatch(next, /Information theory · Courtade–Kumar|ck-eyebrow|<br>tell/);
  for (const value of Object.values(landingCopy)) assert.ok(next.includes(value), value);
  assert.equal(refineCKLandingPage(next), next);
  assert.equal(next.split('class="ck-reading-option"').length - 1, 2);
  for (const href of ['blog.html', './#ck', 'ai-disclosure.html', 'lean-writeup.html', 'prompting.html']) assert.ok(next.includes('href="' + href + '"'), href);
});

test('black paragraph style is landing-scoped and remains stable on repeated packaging', () => {
  const css = refineCKLandingStyles('.existing{color:red}');
  assert.match(css, /\.ck-home \.ck-home-deck\{color:#000;margin-bottom:14px\}/);
  assert.match(css, /\.ck-home-context\{[^}]*color:#5b5853/);
  assert.equal(refineCKLandingStyles(css), css);
});

test('shared navigation does not obscure mobile anchors or force source hashes beyond the guide', () => {
  const css = refineCKLandingStyles('');
  assert.match(css, /\.ck-writeup article code\{overflow-wrap:anywhere\}/);
  assert.match(css, /scroll-margin-top:175px/);
  assert.match(css, /scroll-padding-top:200px/);
  assert.match(css, /scroll-padding-top:240px/);
  assert.match(css, /scroll-margin-top:215px/);
});

test('all six current reading pages are stable under the complete publication refinements', async () => {
  const names = ['index.html', 'home.html', 'blog.html', 'lean-writeup.html', 'prompting.html', 'ai-disclosure.html'];
  const pages = Object.fromEntries(await Promise.all(names.map(async name => [name, await readFile(new URL('../public/ck/' + name, import.meta.url), 'utf8')])));
  assert.deepEqual(refineCKPages(pages), pages);
});
