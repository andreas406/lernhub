(() => {
  const grid = document.getElementById('module-grid');
  const home = document.getElementById('home');
  const moduleView = document.getElementById('module-view');
  const moduleFrame = document.getElementById('module-frame');
  const moduleTitle = document.getElementById('module-title');
  const backBtn = document.getElementById('back-btn');

  let modules = [];

  // Category definitions: order, label, icon, subtitle
  const categories = [
    { key: 'aktuelles', icon: '📌', title: 'Aktuelles',          subtitle: 'Aktuelle Themen & Tests' },
    { key: 'fussball',  icon: '⚽', title: 'Fußball',            subtitle: 'Training & Mentalstärke' },
    { key: 'lehrplan',  icon: '🎓', title: 'Lehrplan 6. Klasse', subtitle: 'Rahmenlehrplan Brandenburg' },
    { key: 'archiv',    icon: '📦', title: 'Archiv',             subtitle: 'Ältere Module' }
  ];

  async function init() {
    try {
      const res = await fetch('modules/registry.json');
      modules = await res.json();
      renderGrid();
      handleHash(); // Open module if URL has #module-id
    } catch (e) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">📭</div>
          <p>Keine Module gefunden.<br>Füge Module in <code>modules/registry.json</code> hinzu.</p>
        </div>`;
    }
  }

  function renderGrid() {
    if (modules.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">📭</div>
          <p>Noch keine Module vorhanden.<br>Füge dein erstes Modul hinzu!</p>
        </div>`;
      return;
    }

    let html = '';

    for (const cat of categories) {
      const catModules = modules.filter(m => m.category === cat.key);
      if (catModules.length === 0) continue;

      html += `
        <div class="section">
          <div class="section-header">
            <div class="section-icon ${cat.key}">${cat.icon}</div>
            <div class="section-label">
              <div class="section-title">${cat.title}</div>
              <div class="section-subtitle">${cat.subtitle}</div>
            </div>
            <div class="section-line"></div>
          </div>
          <div class="section-grid ${cat.key}">
            ${catModules.map(m => `
              <div class="module-card" data-id="${m.id}" role="button" tabindex="0">
                <div class="icon">${m.icon}</div>
                <div class="card-text">
                  <div class="name">${m.name}</div>
                  <div class="desc">${m.description}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>`;
    }

    // Uncategorized modules (fallback)
    const uncategorized = modules.filter(m => !m.category || !categories.find(c => c.key === m.category));
    if (uncategorized.length > 0) {
      html += `
        <div class="section">
          <div class="section-header">
            <div class="section-icon" style="background:rgba(148,163,184,0.15)">📦</div>
            <div class="section-label">
              <div class="section-title">Sonstiges</div>
              <div class="section-subtitle">Weitere Module</div>
            </div>
            <div class="section-line"></div>
          </div>
          <div class="section-grid">
            ${uncategorized.map(m => `
              <div class="module-card" data-id="${m.id}" role="button" tabindex="0">
                <div class="icon">${m.icon}</div>
                <div class="card-text">
                  <div class="name">${m.name}</div>
                  <div class="desc">${m.description}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>`;
    }

    grid.innerHTML = html;

    grid.querySelectorAll('.module-card').forEach(card => {
      card.addEventListener('click', () => openModule(card.dataset.id));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter') openModule(card.dataset.id);
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
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        moduleView.classList.remove('entering');
      });
    });

    // Update URL hash for deep linking
    if (location.hash !== '#' + id) {
      history.pushState(null, '', '#' + id);
    }
  }

  function closeModule() {
    moduleView.classList.add('hidden');
    moduleFrame.src = 'about:blank';

    // Clear hash without triggering hashchange
    if (location.hash) {
      history.pushState(null, '', location.pathname + location.search);
    }
  }

  backBtn.addEventListener('click', closeModule);

  // Handle browser back/forward and initial deep link
  function handleHash() {
    const id = location.hash.replace('#', '');
    if (id && modules.length > 0) {
      const mod = modules.find(m => m.id === id);
      if (mod) { openModule(id); return; }
    }
    // No valid hash → show home
    if (!moduleView.classList.contains('hidden')) {
      moduleView.classList.add('hidden');
      moduleFrame.src = 'about:blank';
    }
  }

  window.addEventListener('popstate', handleHash);

  window.addEventListener('message', (e) => {
    if (e.data && e.data.type === 'lernhub:close') {
      closeModule();
    }
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }

  init();
})();