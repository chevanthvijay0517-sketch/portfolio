(() => {
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const ic = n => `<svg class="i"><use href="#i-${n}"/></svg>`;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Render ---------- */
$$('[data-soc]').forEach(el => el.innerHTML =
  `<a href="mailto:chevanthvijay0517@gmail.com" aria-label="Email">${ic('mail')}</a>
   <a href="https://wa.me/918838976868" target="_blank" rel="noopener" aria-label="WhatsApp">${ic('wa')}</a>
   <a href="https://www.instagram.com/varexia.studio/" target="_blank" rel="noopener" aria-label="Instagram, Varexia Studio">${ic('ig')}</a>`);
$('#yr').textContent = new Date().getFullYear();

const figma = '<svg viewBox="0 0 38 57" width="26"><path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/><path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19z"/><path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/><path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/></svg>';
const framer = '<svg viewBox="0 0 14 21" width="22"><path fill="#fff" d="M0 0h14v7H7zM0 7h7l7 7H7v7l-7-7z"/></svg>';
const SOFT = [
  ['Adobe After Effects', 'Motion graphics and visual effects', '#00005B', '<span style="color:#D291FF">Ae</span>'],
  ['Adobe Premiere Pro', 'Video editing and post-production', '#00005B', '<span style="color:#9999FF">Pr</span>'],
  ['CapCut', 'Short-form and social media videos', '#000', '<span style="color:#fff">Cc</span>'],
  ['Canva', 'Posters, graphics and promo designs', '#00C4CC', '<span style="color:#fff">Ca</span>'],
  ['Figma', 'UI/UX design and prototyping', '#fff', figma],
  ['Framer', 'Website design and digital experiences', '#000', framer]];
$('#soft').innerHTML = SOFT.map(s => `<div class="sf"><i style="background:${s[2]}">${s[3]}</i><b>${s[0]}</b><small>${s[1]}</small></div>`).join('');

const SV = [
  ['Poster & Graphic Design', 'Posters and social creatives with strong type and composition.', 'pink'],
  ['Video Editing', 'Reels and promos edited for pace, clarity and impact.', 'lime'],
  ['Product Advertisement Videos', 'Short ads that make the product the star.', 'yel'],
  ['Video Shooting & Production', 'Shooting and producing footage for your brand.', 'mint'],
  ['Social Media Management', 'Planning and posting content with a consistent look.', 'white'],
  ['Social Media Promotions', 'Promotional content built to reach local audiences.', 'pink'],
  ['Promotional & Informational Websites', 'Clear, fast websites for businesses and brands.', 'lime'],
  ['Branding & Creative Campaigns', 'Visual identity and campaigns that hold together.', 'yel']];
$('#svc').innerHTML = SV.map((s, i) => `<article class="p ${s[2]} rv"><span class="px">${String(i + 1).padStart(2, '0')}</span><h3>${s[0]}</h3><p>${s[1]}</p></article>`).join('');

const fl = $('#filters'), pj = $('#pj');
fl.innerHTML = ['All', ...DATA.categories].map((c, i) => `<button class="chip" aria-pressed="${!i}" data-c="${esc(c)}">${esc(c)}</button>`).join('');
function showPj(c) {
  const list = DATA.projects.filter(p => c === 'All' || p.cat === c);
  pj.innerHTML = list.length ? list.map(p => {
    const tag = p.link ? 'a' : 'div', at = p.link ? ` href="${esc(p.link)}"${p.link.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}` : '';
    return `<${tag}${at} class="p pjc"><span class="tag">${esc(p.cat)}</span><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>${p.link ? ic('arrow') : ''}</${tag}>`;
  }).join('') : '<p class="empty">No projects in this category yet.</p>';
}
fl.addEventListener('click', e => { const b = e.target.closest('.chip'); if (!b) return; $$('.chip', fl).forEach(x => x.setAttribute('aria-pressed', x === b)); showPj(b.dataset.c); });
showPj('All');

const pg = $('#pg'), P = Array.from({ length: 10 }, (_, i) => `assets/images/posters/poster-${String(i + 1).padStart(2, '0')}.jpg`);
pg.innerHTML = P.map((s, i) => `<button class="p ps rv" data-i="${i}" aria-label="Open poster ${i + 1}"><img src="${s}" alt="Poster ${i + 1}" loading="lazy" width="800" height="1000"><span class="ph px">poster-${String(i + 1).padStart(2, '0')}.jpg</span></button>`).join('');
$$('.ps img', pg).forEach(im => { const f = () => im.parentElement.classList.add('miss'); im.addEventListener('error', f); if (im.complete && !im.naturalWidth) f(); });
const lb = $('#lb'), li = $('#li'); let cur = 0;
const open = i => { cur = (i + P.length) % P.length; li.src = P[cur]; li.alt = 'Poster ' + (cur + 1); lb.hidden = false; $('#lx').focus(); document.body.style.overflow = 'hidden'; };
const close = () => { lb.hidden = true; document.body.style.overflow = ''; };
pg.addEventListener('click', e => { const b = e.target.closest('.ps'); if (b && !b.classList.contains('miss')) open(+b.dataset.i); });
$('#lx').onclick = close; $('#lp').onclick = () => open(cur - 1); $('#ln').onclick = () => open(cur + 1);
lb.addEventListener('click', e => { if (e.target === lb) close(); });
addEventListener('keydown', e => { if (lb.hidden) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowLeft') open(cur - 1); if (e.key === 'ArrowRight') open(cur + 1); });

$('#rl').innerHTML = DATA.videos.map(v => {
  const live = !!v.url, tag = live ? 'a' : 'div', at = live ? ` href="${esc(v.url)}" target="_blank" rel="noopener"` : '';
  return `<${tag}${at} class="p rc rv"><div class="th"><img src="${esc(v.thumb)}" alt="" loading="lazy" onerror="this.remove()"><span class="pl">${ic('play')}</span></div><div class="rb"><span class="tag">${esc(v.category)}</span><h3>${esc(v.title)}</h3><p>${esc(v.description)}</p><small>${live ? 'Watch on Instagram' : 'Empty slot. Add the URL in js/data.js'}</small></div></${tag}>`;
}).join('');

$('#cl').innerHTML = DATA.clients.map(c => `<article class="p lime rv">${c.logo ? `<img src="${esc(c.logo)}" alt="${esc(c.name)} logo" height="48">` : ''}<h3>${esc(c.name)}${c.place ? ', ' + esc(c.place) : ''}</h3><p>${esc(c.work)}</p></article>`).join('') +
  '<article class="p dash rv"><h3>Your business here</h3><p>Open to working with more local businesses and brands.</p><a class="btn sm" href="#contact">Start a project</a></article>';

const ST = [['Brief', 'You tell me what you sell, who it is for and where it will appear.'], ['Concept', 'I sketch the idea and the look before touching the final file.'], ['Create', 'I design or edit it, and share drafts for your feedback.'], ['Deliver', 'You get final files sized for every platform you need.']];
$('#steps').innerHTML = ST.map((s, i) => `<article class="p ${['pink', 'yel', 'mint', 'lime'][i]} rv"><span class="px">${i + 1}</span><h3>${s[0]}</h3><p>${s[1]}</p></article>`).join('');
const tm = $('#tm');
if (DATA.testimonials.length) tm.innerHTML = '<h3 class="rv">What clients say</h3>' + DATA.testimonials.map(t => `<blockquote class="p white rv"><p>${esc(t.quote)}</p><footer>${esc(t.name)}${t.role ? ', ' + esc(t.role) : ''}</footer></blockquote>`).join('');

/* ---------- Mobile menu ---------- */
const side = $('#side'), mb = $('#mb');
const setMenu = o => { side.classList.toggle('open', o); mb.setAttribute('aria-expanded', o); mb.innerHTML = ic(o ? 'x' : 'menu'); };
mb.onclick = () => setMenu(!side.classList.contains('open'));
$$('nav a, .logo', side).forEach(a => a.addEventListener('click', () => setMenu(false)));

/* ---------- Scroll: direction-aware reveals, active nav, progress ---------- */
function startScroll() {
  const rv = new IntersectionObserver(es => es.forEach(e => {
    const el = e.target;
    el.classList.toggle('up', e.boundingClientRect.top < 0);
    if (e.isIntersecting) { const i = [...el.parentElement.children].indexOf(el); el.style.transitionDelay = reduce ? '0s' : Math.min(i, 5) * 60 + 'ms'; el.classList.add('in'); }
    else { el.style.transitionDelay = '0s'; el.classList.remove('in'); }
  }), { threshold: .12, rootMargin: '0px 0px -6% 0px' });
  $$('.rv').forEach(el => rv.observe(el));
  const links = $$('nav a', side), map = {}; links.forEach(a => map[a.hash.slice(1)] = a);
  const so = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting && map[e.target.id]) { links.forEach(l => l.classList.remove('on')); map[e.target.id].classList.add('on'); } }), { rootMargin: '-40% 0px -55% 0px' });
  $$('main section').forEach(s => so.observe(s));
  const bar = $('#prog'); addEventListener('scroll', () => { bar.style.transform = `scaleX(${scrollY / (document.documentElement.scrollHeight - innerHeight || 1)})`; }, { passive: true });
}

/* ---------- Loader -> skeleton -> page ---------- */
$('.seg').innerHTML = '<i></i>'.repeat(14);
const segs = $$('.seg i'), msg = $('#msg'), pct = $('#pct'), loader = $('#loader'), skel = $('#skel');
const M = ['Starting up…', 'Loading creativity…', 'Mounting posters.drv', 'Syncing reels…', 'Rendering pixels…', 'Ready.'];
let n = 0;
const tick = setInterval(() => {
  n++; segs.slice(0, n).forEach(s => s.classList.add('on'));
  msg.textContent = M[Math.min(M.length - 1, Math.floor(n / segs.length * M.length))];
  pct.textContent = Math.round(n / segs.length * 100) + '%';
  if (n >= segs.length) { clearInterval(tick); setTimeout(toSkeleton, 350); }
}, reduce ? 40 : 230);
function toSkeleton() {
  skel.classList.add('show'); loader.classList.add('out');
  setTimeout(() => loader.remove(), 400);
  setTimeout(() => { skel.classList.add('out'); document.body.classList.add('ready'); startScroll(); setTimeout(() => skel.remove(), 500); }, reduce ? 100 : 1100);
}
})();
