(() => {
  const grid = document.getElementById('module-grid');
  const home = document.getElementById('home');
  const moduleView = document.getElementById('module-view');
  const moduleFrame = document.getElementById('module-frame');
  const moduleTitle = document.getElementById('module-title');
  const backBtn = document.getElementById('back-btn');

  let modules = [];

  // Load module registry and render cards
  async function init() {
    try {
      const res = await fetch('modules/registry.json');
      modules = await res.json();
      renderGrid();
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

    grid.innerHTML = modules.map(m => `
      <div class="module-card" data-id="${m.id}" role="button" tabindex="0">
        <div class="icon">${m.icon}</div>
        <div class="name">${m.name}</div>
        <div class="desc">${m.description}</div>
      </div>
    `).join('');

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
    // Trigger animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        moduleView.classList.remove('entering');
      });
    });
  }

  function closeModule() {
    moduleView.classList.add('hidden');
    moduleFrame.src = 'about:blank';
  }

  backBtn.addEventListener('click', closeModule);

  // Listen for messages from modules
  window.addEventListener('message', (e) => {
    if (e.data && e.data.type === 'lernhub:close') {
      closeModule();
    }
  });

  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }

  init();
})();