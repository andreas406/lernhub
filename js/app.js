(() => {
  const grid = document.getElementById('module-grid');
  const moduleView = document.getElementById('module-view');
  const moduleFrame = document.getElementById('module-frame');
  const moduleTitle = document.getElementById('module-title');
  const backBtn = document.getElementById('back-btn');

  let modules = [];

  // Kategorien: Reihenfolge, Titel, Untertitel. „archiv“ ist eingeklappt.
  const categories = [
    { key: 'aktuelles', title: 'Aktuelles', subtitle: 'Tests und Themen der nächsten Wochen' },
    { key: 'lehrplan',  title: 'Lehrplan Klasse 7', subtitle: 'Gymnasium · Rahmenlehrplan Berlin-Brandenburg' },
    { key: 'fussball',  title: 'Fußball', subtitle: 'Deine Position, deine Situationen' },
    { key: 'archiv',    title: 'Archiv', subtitle: 'Ältere Module (Klasse 6 und früher)', collapsed: true }
  ];

  const COLLAPSE_KEY = 'lernhub.collapsed';
  function loadCollapsed() { try { return JSON.parse(localStorage.getItem(COLLAPSE_KEY) || 'null'); } catch (e) { return null; } }
  function saveCollapsed(obj) { try { localStorage.setItem(COLLAPSE_KEY, JSON.stringify(obj)); } catch (e) { /* ignore */ } }
  let collapsed = loadCollapsed();
  if (!collapsed) { collapsed = {}; categories.forEach(c => { if (c.collapsed) collapsed[c.key] = true; }); }

  async function init() {
    try {
      const res = await fetch('modules/registry.json', { cache: 'no-cache' });
      modules = await res.json();
      renderGrid();
      handleHash();
    } catch (e) {
      grid.innerHTML = `<div class="empty-state"><p>Keine Module gefunden.<br>Module stehen in <code>modules/registry.json</code>.</p></div>`;
    }
  }

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  function card(m) {
    return `<div class="module-card" data-id="${esc(m.id)}" role="button" tabindex="0">
        <div class="code">${esc(m.code || m.icon || '')}</div>
        <div class="card-text">
          <div class="name">${esc(m.name)}</div>
          <div class="desc">${esc(m.description || '')}</div>
        </div>
      </div>`;
  }

  function renderGrid() {
    if (modules.length === 0) {
      grid.innerHTML = `<div class="empty-state"><p>Noch keine Module vorhanden.</p></div>`;
      return;
    }
    let html = '';
    const known = new Set(categories.map(c => c.key));
    const sections = categories.map(c => ({ cat: c, list: modules.filter(m => m.category === c.key) }));
    const rest = modules.filter(m => !known.has(m.category));
    if (rest.length) sections.push({ cat: { key: 'sonstiges', title: 'Sonstiges', subtitle: 'Weitere Module' }, list: rest });

    for (const { cat, list } of sections) {
      if (!list.length) continue;
      const isCollapsible = cat.key === 'archiv';
      const isCollapsed = isCollapsible && collapsed[cat.key];
      html += `
        <div class="section ${cat.key} ${isCollapsed ? 'collapsed' : ''}" data-key="${cat.key}">
          <div class="section-header ${isCollapsible ? 'toggle' : ''}">
            <div>
              <div class="section-title">${esc(cat.title)}</div>
              <div class="section-subtitle">${esc(cat.subtitle)}</div>
            </div>
            <div class="section-count">${list.length}${isCollapsible ? `<span class="chev">${isCollapsed ? '[+]' : '[–]'}</span>` : ''}</div>
          </div>
          <div class="section-grid">${list.map(card).join('')}</div>
        </div>`;
    }
    html += `<div class="home-footer"><span>LernHub Familie Grimm</span><span>Richard &amp; Anton</span></div>`;
    grid.innerHTML = html;

    grid.querySelectorAll('.module-card').forEach(el => {
      el.addEventListener('click', () => openModule(el.dataset.id));
      el.addEventListener('keydown', e => { if (e.key === 'Enter') openModule(el.dataset.id); });
    });
    grid.querySelectorAll('.section-header.toggle').forEach(h => {
      h.addEventListener('click', () => {
        const sec = h.closest('.section'); const key = sec.dataset.key;
        collapsed[key] = !collapsed[key]; saveCollapsed(collapsed);
        sec.classList.toggle('collapsed', collapsed[key]);
        h.querySelector('.chev').textContent = collapsed[key] ? '[+]' : '[–]';
      });
    });
  }

  function openModule(id) {
    const mod = modules.find(m => m.id === id);
    if (!mod) return;
    moduleTitle.textContent = mod.name;
    moduleFrame.src = mod.path;
    moduleView.classList.remove('hidden');
    moduleView.classList.add('entering');
    requestAnimationFrame(() => requestAnimationFrame(() => moduleView.classList.remove('entering')));
    if (location.hash !== '#' + id) history.pushState(null, '', '#' + id);
  }

  function closeModule() {
    moduleView.classList.add('hidden');
    moduleFrame.src = 'about:blank';
    if (location.hash) history.pushState(null, '', location.pathname + location.search);
  }

  backBtn.addEventListener('click', closeModule);

  function handleHash() {
    const id = location.hash.replace('#', '');
    if (id && modules.length > 0) {
      const mod = modules.find(m => m.id === id);
      if (mod) { openModule(id); return; }
    }
    if (!moduleView.classList.contains('hidden')) {
      moduleView.classList.add('hidden');
      moduleFrame.src = 'about:blank';
    }
  }

  window.addEventListener('popstate', handleHash);
  window.addEventListener('message', (e) => { if (e.data && e.data.type === 'lernhub:close') closeModule(); });

  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});

  init();
})();
