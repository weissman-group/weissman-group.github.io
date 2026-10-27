// Reuse the author's existing outline. No mathematical content or anchors change.
export const blogNavigationStyles = `
html:has(body.ck-reading-nav){scroll-padding-top:var(--ck-reading-offset,140px)}
.ck-reading-nav #contents{background:var(--paper,#fff);z-index:30;overscroll-behavior:contain}
.ck-reading-nav .ck-toc-toggle{display:none}
.ck-reading-nav .toc-main>li>a{border-left:2px solid transparent;padding-left:10px}
.ck-reading-nav .toc-main>li.ck-toc-active>a{border-left-color:#000;color:#000;font-weight:600}
.ck-reading-nav .toc-main>li.ck-toc-active .toc-number{font-weight:600}
.ck-reading-nav #contents a:focus-visible{outline:2px solid #000;outline-offset:-2px}
@media screen and (min-width:1200px){
  .ck-reading-nav #main-content{display:grid;grid-template-columns:220px minmax(0,860px);column-gap:48px;width:calc(100% - 64px);max-width:1128px;margin-inline:auto;align-items:start}
  .ck-reading-nav #publication-header{grid-column:2;grid-row:1;width:100%;margin-inline:0}
  .ck-reading-nav #article-view,.ck-reading-nav #article-view>.article-main{display:contents}
  .ck-reading-nav #contents{grid-column:1;grid-row:2;position:sticky;top:var(--ck-reading-top,120px);max-height:calc(100dvh - var(--ck-reading-top,120px) - 24px);overflow-y:auto;scrollbar-width:thin;margin:48px 0 0;padding-bottom:8px}
  .ck-reading-nav #contents>h2{padding-bottom:14px}
  .ck-reading-nav .toc-nav .toc-main{display:flex;flex-direction:column;gap:0}
  .ck-reading-nav .toc-main>li>a{font-size:12px;line-height:18px;text-transform:none;min-height:0;padding-block:12px;gap:8px}
  .ck-reading-nav .toc-number{font-size:13px;line-height:18px;width:20px}
  .ck-reading-nav .toc-details>summary{font-size:11px;gap:10px}
  .ck-reading-nav .toc-section-label{font-size:11px;line-height:16px;text-transform:none}
  .ck-reading-nav .toc-subitems a{font-size:11px;line-height:16px;gap:6px}
  .ck-reading-nav #essay{grid-column:2;grid-row:2;padding-top:48px}
  .ck-reading-nav .draft-endnote{grid-column:2;grid-row:3}
}
@media screen and (max-width:1199px){
  .ck-reading-nav #contents{position:sticky;top:var(--ck-reading-top,100px);margin-bottom:32px;border-top:1px solid var(--faint-rule);border-bottom:1px solid var(--faint-rule)}
  .ck-reading-nav #contents>h2{display:none}
  .ck-reading-nav .ck-toc-toggle{display:flex;align-items:center;gap:12px;width:100%;min-height:48px;border:0;padding:10px 0;background:var(--paper,#fff);text-align:left;font:400 13px/20px var(--sans)}
  .ck-reading-nav .ck-toc-label{flex:none;font-weight:550}
  .ck-reading-nav .ck-toc-current{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#555}
  .ck-reading-nav .ck-toc-icon{margin-left:auto;flex:none;font-size:20px}
  .ck-reading-nav #contents:not([data-expanded="true"])>.toc-nav{display:none}
  .ck-reading-nav #contents>.toc-nav{max-height:calc(100dvh - var(--ck-reading-top,100px) - 64px);overflow-y:auto;overscroll-behavior:contain;padding-bottom:8px}
}
@media print{
  .ck-reading-nav #contents{display:none!important}
  .ck-reading-nav #main-content,.ck-reading-nav #article-view,.ck-reading-nav #article-view>.article-main{display:block;width:auto;max-width:none}
  .ck-reading-nav #essay{padding-top:0}
}
`;

// Self-contained because the public publication embeds this as an inline script.
export function installBlogNavigation() {
  const contents = document.getElementById('contents');
  const nav = contents?.querySelector('.toc-nav');
  const header = document.querySelector('.site-header');
  if (!contents || !nav || contents.dataset.readingNavigation) return;
  const links = [...nav.querySelectorAll('.toc-main a[data-section]')];
  const entries = links.map(link => ({
    link,
    section: document.getElementById(link.dataset.section),
    label: link.querySelector('span:last-child')?.textContent.trim() || link.textContent.trim(),
  })).filter(entry => entry.section);
  if (!entries.length) return;
  contents.dataset.readingNavigation = 'true';
  nav.id ||= 'ck-reading-outline';
  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'ck-toc-toggle';
  toggle.setAttribute('aria-controls', nav.id);
  toggle.setAttribute('aria-expanded', 'false');
  const label = document.createElement('span');
  label.className = 'ck-toc-label';
  label.textContent = 'Contents';
  const current = document.createElement('span');
  current.className = 'ck-toc-current';
  current.textContent = 'Overview';
  const icon = document.createElement('span');
  icon.className = 'ck-toc-icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.textContent = '+';
  toggle.append(label, current, icon);
  contents.insertBefore(toggle, nav);
  document.body.classList.add('ck-reading-nav');
  const desktop = matchMedia('(min-width:1200px)');
  let queued = false;
  let active;
  let offset = 140;
  function expand(open) {
    contents.dataset.expanded = String(open);
    toggle.setAttribute('aria-expanded', String(open));
    icon.textContent = open ? '−' : '+';
  }
  function layout() {
    const height = Math.ceil(header?.getBoundingClientRect().height || 0);
    const top = height + (desktop.matches ? 24 : 0);
    offset = height + (desktop.matches ? 32 : toggle.getBoundingClientRect().height + 20);
    document.documentElement.style.setProperty('--ck-reading-top', top + 'px');
    document.documentElement.style.setProperty('--ck-reading-offset', offset + 'px');
    schedule();
  }
  function update() {
    queued = false;
    let next;
    for (const entry of entries) {
      if (entry.section.getBoundingClientRect().top <= offset + 24) next = entry;
      else break;
    }
    if (scrollY + innerHeight >= document.documentElement.scrollHeight - 4) next = entries.at(-1);
    for (const entry of entries) {
      const selected = entry === next;
      entry.link.parentElement.classList.toggle('ck-toc-active', selected);
      if (selected) entry.link.setAttribute('aria-current', 'location');
      else entry.link.removeAttribute('aria-current');
    }
    current.textContent = next ? next.link.querySelector('.toc-number').textContent + ' ' + next.label : 'Overview';
    if (next && next !== active && desktop.matches && !contents.contains(document.activeElement)) {
      const item = next.link.getBoundingClientRect();
      const rail = contents.getBoundingClientRect();
      if (item.bottom > rail.bottom - 12) contents.scrollTop += item.bottom - rail.bottom + 12;
      else if (item.top < rail.top + 12) contents.scrollTop += item.top - rail.top - 12;
    }
    active = next;
  }
  function schedule() {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  }
  toggle.addEventListener('click', () => expand(contents.dataset.expanded !== 'true'));
  nav.addEventListener('click', event => {
    if (!desktop.matches && event.target.closest('a[href^="#"]')) expand(false);
  });
  contents.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !desktop.matches && contents.dataset.expanded === 'true') {
      expand(false); toggle.focus();
    }
  });
  desktop.addEventListener('change', () => { expand(false); layout(); });
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', layout);
  addEventListener('hashchange', schedule);
  document.addEventListener('toggle', schedule, true);
  document.addEventListener('load', schedule, true);
  if (typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(layout);
    if (header) observer.observe(header);
    const essay = document.getElementById('essay');
    if (essay) observer.observe(essay);
  }
  document.fonts?.ready.then(layout);
  layout();
}

export function refineCKBlogNavigation(page) {
  if (!page.includes('id="contents"') || !page.includes('class="toc-nav"')) return page;
  page = page.replace(/<style data-ck-reading-nav>[\s\S]*?<\/style>\s*/g, '')
    .replace(/<script data-ck-reading-nav>[\s\S]*?<\/script>\s*/g, '')
    .replace("const links = [...document.querySelectorAll('.toc-nav a[data-section]')];",
      'const links = []; // The shared reading navigation owns the active state.');
  const style = '<style data-ck-reading-nav>' + blogNavigationStyles + '</style>\n';
  const script = '<script data-ck-reading-nav>(' + installBlogNavigation.toString() + ')();</script>\n';
  return page.replace('</head>', style + '</head>').replace('</body>', script + '</body>');
}
