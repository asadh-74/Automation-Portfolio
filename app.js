const githubIcon = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7m12 5v-3.8a3.3 3.3 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.9a5.4 5.4 0 0 0-1.5-3.8c.2-.4.7-1.9-.2-3.7 0 0-1.2-.4-4 1.5a13.5 13.5 0 0 0-7.2 0c-2.8-1.9-4-1.5-4-1.5-.9 1.8-.4 3.3-.2 3.7A5.4 5.4 0 0 0 1.7 8c0 5.4 3.2 6.6 6.2 6.9A3.3 3.3 0 0 0 7 17.5v3.8" transform="translate(1 1) scale(.9)"/></svg>';

const projects = window.PORTFOLIO_PROJECTS;

function visualFor(kind) {
  const caption = '<span class="visual-caption">SYSTEM SKETCH</span><span class="visual-corner">↗</span>';
  const visuals = {
    career:'<div class="career-preview"><span>CAREER ATLAS</span><h4>Your next role, in focus.</h4><div><i></i> Company opportunities <b>↗</b></div><div><i></i> CV-grounded matching <b>✳</b></div><div><i></i> Applications in review <b>✓</b></div></div>',
    watch:'<div class="watch-face"><span>XII</span><i></i><b></b><em>AETERNA</em></div>',
    canopy:'<div class="model-bars"><span>MODEL COMPARISON</span><div style="--bar:84%"><i></i></div><div style="--bar:68%"><i></i></div><div style="--bar:73%"><i></i></div><small>FEATURES → TRAIN → EVALUATE</small></div>',
    support:'<div class="workflow"><div class="flow-node"><b>↳</b><span>INCOMING</span></div><div class="flow-node main-node"><b>✳</b><span>AI AGENT</span></div><div class="flow-node"><b>✓</b><span>RESOLVE</span></div></div><span class="flow-label">RETRIEVE · REASON · ROUTE</span>',
    rag:'<div class="rag-preview"><div class="rag-title"><span>KNOWLEDGE / QUERY</span><span>✳</span></div><div class="rag-query">What do the documents tell us?</div><div class="rag-line"></div><div class="rag-line"></div><div class="rag-line short"></div><span class="rag-source">↗ Grounded in your sources</span></div>',
    bids:'<div class="bid-rows"><div class="bid-row"><i></i><span></span><b>NEW BID</b></div><div class="bid-row"><i></i><span></span><b>UPDATED</b></div><div class="bid-row"><i></i><span></span><b>SYNCED</b></div></div>',
    vision:'<div class="vision-scene"><div class="detection"><span>object / A</span></div><div class="detection second"><span>object / B</span></div></div>',
    crew:'<div class="crew"><div class="crew-agent">⌕</div><div class="crew-agent">✳</div><div class="crew-agent">≡</div></div>',
    board:'<div class="board"><div class="board-col"><i></i><div class="board-card"></div><div class="board-card"></div></div><div class="board-col"><i></i><div class="board-card"></div></div><div class="board-col"><i></i><div class="board-card"></div><div class="board-card"></div></div></div>',
    semantic:'<div class="workflow"><div class="flow-node"><b>↳</b><span>ENCODE</span></div><div class="flow-node main-node"><b>⌁</b><span>CHANNEL</span></div><div class="flow-node"><b>↗</b><span>DECODE</span></div></div><span class="flow-label">MEANING · CODING · RECOVERY</span>',
    battery:'<div class="research-visual"><span>EV / BATTERY INTELLIGENCE</span><div class="battery-outline"><i></i><i></i><i></i></div><p>SENSE → ESTIMATE → MONITOR</p></div>',
    energy:'<div class="research-visual"><span>CONNECTED / ENERGY METER</span><div class="meter-wave">⌁</div><p>MEASURE → TRANSMIT → VISUALIZE</p></div>',
    fleet:'<div class="radar-visual"><i></i><i></i></div>',
    rf:'<svg class="signal-art" viewBox="0 0 260 120"><path class="gridline" d="M0 30H260M0 60H260M0 90H260M40 0V120M100 0V120M160 0V120M220 0V120"/><path class="wave" d="M0 76L18 74 25 66 30 81 35 58 39 91 44 36 48 104 52 17 56 105 60 37 66 85 72 63 78 78 90 74 108 75 120 67 128 83 136 52 142 90 148 29 154 97 160 49 166 84 172 66 180 74 202 76 210 61 216 88 222 42 228 99 234 63 240 79 250 74 260 75"/><text x="6" y="15">SIGNAL → FEATURES → CLASS</text></svg>'
  };
  return caption + visuals[kind];
}

const grid = document.getElementById('project-grid');
grid.innerHTML = projects.map((p, i) => `<article class="project-card${p.featured ? ' featured' : ''}" data-project="${p.id}" style="animation-delay:${Math.min(i * 35, 175)}ms"><div class="project-visual" aria-hidden="true">${visualFor(p.visual)}</div><div class="project-body"><div class="project-type">${p.type}</div><h3>${p.title}</h3><p class="project-description">${p.description}</p><div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div><div class="project-links"><button class="detail-button" data-detail="${p.id}" aria-label="View ${p.title} project details">Explore project <span aria-hidden="true">↗</span></button>${p.repo ? `<a class="repo-link" href="https://github.com/asadh-74/${p.repo}" target="_blank" rel="noopener noreferrer" aria-label="${p.title} on GitHub">${githubIcon} GitHub</a>` : '<span class="source-unavailable">PROJECT OVERVIEW</span>'}</div></div></article>`).join('');

const filters = [...document.querySelectorAll('.filter')];
const search = document.getElementById('project-search');
const showMore = document.getElementById('show-more');
const resetFilters = document.getElementById('reset-filters');
const params = new URLSearchParams(location.search);
let selectedFilter = filters.some(b => b.dataset.filter === params.get('area')) ? params.get('area') : 'all';
let expanded = false;
search.value = (params.get('q') || '').slice(0,100);
document.getElementById('total-projects').textContent = projects.length;
function applyFilters(updateURL = true) {
  const query = search.value.trim().toLowerCase();
  const matching = projects.filter(p => (selectedFilter === 'all' || p.areas.includes(selectedFilter)) && [p.title,p.description,...p.tags,p.type].join(' ').toLowerCase().includes(query));
  const visible = selectedFilter === 'all' && !query && !expanded ? matching.slice(0,8) : matching;
  grid.classList.toggle('filtered', selectedFilter !== 'all' || !!query);
  filters.forEach(button => {const active=button.dataset.filter===selectedFilter;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
  projects.forEach(p => {grid.querySelector('[data-project="'+p.id+'"]').hidden = !visible.includes(p);});
  document.getElementById('project-count').textContent = visible.length === matching.length ? matching.length+' projects' : visible.length+' selected / '+matching.length+' projects';
  document.getElementById('empty-state').hidden = matching.length > 0;
  showMore.hidden = visible.length === matching.length;
  showMore.innerHTML = 'Explore all '+projects.length+' projects <span aria-hidden="true">↓</span>';
  resetFilters.hidden = selectedFilter === 'all' && !query;
  if(updateURL) {const url=new URL(location.href);selectedFilter==='all'?url.searchParams.delete('area'):url.searchParams.set('area',selectedFilter);query?url.searchParams.set('q',search.value.trim()):url.searchParams.delete('q');history.replaceState(null,'',url);}
}
filters.forEach(button=>button.addEventListener('click',()=>{selectedFilter=button.dataset.filter;expanded=false;applyFilters();}));
search.addEventListener('input',()=>{expanded=false;applyFilters();});
showMore.addEventListener('click',()=>{expanded=true;applyFilters();grid.querySelectorAll('.project-card')[8]?.querySelector('button')?.focus({preventScroll:true});});
function resetProjects(){selectedFilter='all';search.value='';expanded=false;applyFilters();filters[0].focus({preventScroll:true});}
resetFilters.addEventListener('click',resetProjects);
document.getElementById('empty-reset').addEventListener('click',resetProjects);
applyFilters(false);

const dialog = document.getElementById('project-dialog');
let lastDetailButton = null;
document.querySelectorAll('[data-detail]').forEach(button => button.addEventListener('click', () => {
  const p = projects.find(item => item.id === button.dataset.detail);
  lastDetailButton = button;
  document.getElementById('dialog-content').innerHTML = `<div class="dialog-type">${p.type}</div><h2 id="dialog-title">${p.title}</h2><h3>The problem</h3><p>${p.challenge}</p><h3>What I built</h3><ul>${p.built.map(item => `<li>${item}</li>`).join('')}</ul><div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>${p.repo ? `<a class="button primary" href="https://github.com/asadh-74/${p.repo}" target="_blank" rel="noopener noreferrer">Explore the repository <span aria-hidden="true">↗</span></a>` : '<a class="button primary" href="mailto:asadh1521@gmail.com?subject=Let%27s%20talk%20about%20your%20engineering%20work">Talk about this project <span aria-hidden="true">↗</span></a>'}<p class="dialog-note">${p.note}</p>`;
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('dialog-open');
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  lastDetailButton?.focus({preventScroll:true});
});

const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('navigation');
function closeMenu() {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  nav.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && nav.classList.contains('open')) {closeMenu();toggle.focus();}
});
document.addEventListener('click', e => {if (!e.target.closest('.header')) closeMenu();});
window.matchMedia('(min-width:641px)').addEventListener('change', closeMenu);

const sectionIds = ['home','projects','about','contact'];
let scrollPending = false;
function markActiveSection() {
  let current = 'home';
  for (const id of sectionIds) if (document.getElementById(id).getBoundingClientRect().top <= 170) current = id;
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5) current = 'contact';
  nav.querySelectorAll('a').forEach(a => {
    const active = a.hash === '#'+current;
    a.classList.toggle('active', active);
    if(active) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current');
  });
  scrollPending = false;
}
window.addEventListener('scroll', () => {
  if (!scrollPending) {scrollPending = true;requestAnimationFrame(markActiveSection);}
}, {passive:true});
markActiveSection();

document.querySelector('.copy-email').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try { await navigator.clipboard.writeText('asadh1521@gmail.com');status.textContent='Copied!'; }
  catch { status.textContent='Select the email to copy it.'; }
  setTimeout(() => {status.textContent='';}, 3500);
});
document.getElementById('year').textContent = new Date().getFullYear();

// Deterministic, lightweight SVG sphere. No canvas, external assets, or runtime requests.
const globe = document.getElementById('globe');
const ns = 'http://www.w3.org/2000/svg';
function svgElement(tag, attrs) {const el=document.createElementNS(ns,tag);Object.entries(attrs).forEach(([key,value])=>el.setAttribute(key,value));return el;}
const rotation = -.42;
function projectPoint(lat,lon) {
  const x=164*Math.cos(lat)*Math.sin(lon),y=164*Math.sin(lat),z=164*Math.cos(lat)*Math.cos(lon);
  return {x:260+x*Math.cos(rotation)-y*Math.sin(rotation),y:240+x*Math.sin(rotation)+y*Math.cos(rotation),z};
}
for(let lat=-75;lat<=75;lat+=15) {
  const rad=lat*Math.PI/180;
  for(let lon=-180;lon<180;lon+=10) {
    const p=projectPoint(rad,lon*Math.PI/180),next=projectPoint(rad,(lon+10)*Math.PI/180);
    const opacity = .10+(p.z+164)/328*.45;
    globe.append(svgElement('line',{x1:p.x,y1:p.y,x2:next.x,y2:next.y,stroke:'#5bc2b7','stroke-opacity':opacity*.75,'stroke-width':'.55'}));
    if(lat<75) {const down=projectPoint((lat+15)*Math.PI/180,lon*Math.PI/180);globe.append(svgElement('line',{x1:p.x,y1:p.y,x2:down.x,y2:down.y,stroke:'#5bc2b7','stroke-opacity':opacity*.5,'stroke-width':'.55'}));}
    globe.append(svgElement('circle',{cx:p.x,cy:p.y,r:p.z>30?1.55:1,fill:'#8af1d9','fill-opacity':opacity+0.15}));
  }
}

const backgroundTabs=[...document.querySelectorAll('.background-tabs [role="tab"]')];
function activateTab(tab){backgroundTabs.forEach(t=>{const active=t===tab;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=!active;});}
backgroundTabs.forEach((tab,index)=>{tab.addEventListener('click',()=>activateTab(tab));tab.addEventListener('keydown',e=>{let next=index;if(e.key==='ArrowRight')next=(index+1)%backgroundTabs.length;else if(e.key==='ArrowLeft')next=(index+backgroundTabs.length-1)%backgroundTabs.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=backgroundTabs.length-1;else return;e.preventDefault();activateTab(backgroundTabs[next]);backgroundTabs[next].focus();});});

const resumeDownloads = window.PORTFOLIO_PROFILE?.resumeDownloads || [];
if (resumeDownloads.length) {
  const container = document.querySelector('.resume-links');
  container.replaceChildren();
  resumeDownloads.forEach(item => {
    const a=document.createElement('a'),meta=document.createElement('span');
    a.href=item.href;a.target='_blank';a.rel='noopener noreferrer';a.append(document.createTextNode(item.label));
    meta.textContent=item.meta+' ↗';a.append(meta);container.append(a);
  });
}
