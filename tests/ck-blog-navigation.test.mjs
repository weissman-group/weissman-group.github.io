import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { blogNavigationStyles, installBlogNavigation, refineCKBlogNavigation } from '../tools/ck-blog-navigation.mjs';

test('reading navigation reuses the original outline without cloning IDs or changing mathematics', () => {
  const original = '<head></head><body><section id="contents"><nav class="toc-nav"><a href="#section-3">Induction</a></nav></section><article>unchanged mathematical content</article></body>';
  const result = refineCKBlogNavigation(original);
  assert.equal((result.match(/id="contents"/g) || []).length, 1);
  assert.match(result, /href="#section-3">Induction/);
  assert.match(result, /<article>unchanged mathematical content<\/article>/);
  assert.equal((result.match(/<style data-ck-reading-nav>/g) || []).length, 1);
  assert.equal((result.match(/<script data-ck-reading-nav>/g) || []).length, 1);
  assert.equal(refineCKBlogNavigation(result), result);
  assert.equal(refineCKBlogNavigation('<head></head><body>No outline</body>'), '<head></head><body>No outline</body>');
});

test('the new scroll tracker is the sole owner of the outline active state', () => {
  const original = '<head></head><body><section id="contents"><nav class="toc-nav"></nav></section><script>const links = [...document.querySelectorAll(\'.toc-nav a[data-section]\')];</script></body>';
  const result = refineCKBlogNavigation(original);
  assert.match(result, /const links = \[\]; \/\/ The shared reading navigation owns the active state/);
  assert.doesNotMatch(result, /const links = \[\.\.\.document.querySelectorAll\('\.toc-nav a\[data-section\]'\)\]/);
  assert.doesNotThrow(() => new Function('return (' + installBlogNavigation.toString() + ')'));
});

test('desktop rail, compact disclosure, measured offsets and print fallback remain scoped to the blog', () => {
  assert.match(blogNavigationStyles, /min-width:1200px/);
  assert.match(blogNavigationStyles, /grid-template-columns:220px minmax\(0,860px\)/);
  assert.match(blogNavigationStyles, /position:sticky/);
  assert.match(blogNavigationStyles, /max-width:1199px/);
  assert.match(blogNavigationStyles, /\.ck-reading-nav #contents:not\(\[data-expanded="true"\]\)>\.toc-nav\{display:none\}/);
  assert.match(blogNavigationStyles, /@media print/);
  const script = installBlogNavigation.toString();
  assert.match(script, /getBoundingClientRect\(\)\.height/);
  assert.match(script, /ResizeObserver/);
  assert.match(script, /aria-current', 'location'/);
  assert.match(script, /aria-expanded/);
  assert.match(script, /event\.key === 'Escape'/);
  assert.doesNotMatch(script, /history\.|scrollIntoView|localStorage|fetch\(/);
});

test('published blog has all eight unchanged destinations and persists under republishing', async () => {
  const page = await readFile(new URL('../public/ck/blog.html', import.meta.url), 'utf8');
  for (const destination of ['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6', 'section-7', 'references']) {
    assert.ok(page.includes('data-section="' + destination + '"'));
    assert.ok(page.includes('id="' + destination + '"'));
  }
  assert.equal(refineCKBlogNavigation(page), page);
  assert.equal((page.match(/<script data-ck-reading-nav>/g) || []).length, 1);
});
