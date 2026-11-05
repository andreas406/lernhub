#!/usr/bin/env node
// Prüft alle Klasse-7-Datenfiles und die Registry: Struktur, Indizes, leere Felder.
// Aufruf aus dem Repo-Root: node modules/_k7/check.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..', '..');
const registry = JSON.parse(fs.readFileSync(path.join(root, 'modules', 'registry.json'), 'utf8'));
let errors = 0, warnings = 0;
const err = (m) => { errors++; console.log('FEHLER  ' + m); };
const warn = (m) => { warnings++; console.log('Hinweis ' + m); };

function load(file, key) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: file });
  return ctx.window[key];
}

function checkTask(t, where) {
  if (!t.typ) return err(`${where}: Aufgabe ohne typ`);
  if (!t.frage) err(`${where}: Aufgabe ohne frage`);
  if (t.typ === 'mc') {
    if (!Array.isArray(t.optionen) || t.optionen.length < 2) err(`${where}: mc ohne Optionen`);
    else {
      if (typeof t.richtig !== 'number' || t.richtig < 0 || t.richtig >= t.optionen.length) err(`${where}: richtig-Index ungültig (${t.richtig})`);
      const set = new Set(t.optionen.map(o => String(o).trim()));
      if (set.size !== t.optionen.length) warn(`${where}: doppelte Optionen`);
    }
  } else if (t.typ === 'input') {
    if (!Array.isArray(t.antworten) || !t.antworten.length || !t.antworten[0]) err(`${where}: input ohne antworten`);
  } else if (t.typ === 'tf') {
    if (typeof t.richtig !== 'boolean') err(`${where}: tf ohne boolean richtig`);
  } else err(`${where}: unbekannter typ ${t.typ}`);
}

const ids = new Set();
registry.forEach(m => {
  if (ids.has(m.id)) err(`registry: doppelte id ${m.id}`);
  ids.add(m.id);
  const p = path.join(root, m.path);
  if (!fs.existsSync(p)) err(`registry: Datei fehlt ${m.path}`);
  if (!m.code) warn(`registry: ${m.id} ohne code`);
});

const dirs = fs.readdirSync(path.join(root, 'modules')).filter(d => fs.existsSync(path.join(root, 'modules', d, 'data.js')));
let blocks = 0, tasks = 0;
dirs.forEach(d => {
  const file = path.join(root, 'modules', d, 'data.js');
  let D;
  try { D = load(file, 'K7_DATA'); } catch (e) { return err(`${d}/data.js: ${e.message}`); }
  if (!D) return err(`${d}/data.js: window.K7_DATA fehlt`);
  if (D.id !== d) err(`${d}/data.js: id „${D.id}“ ≠ Ordnername`);
  if (!registry.find(m => m.id === d)) warn(`${d}: nicht in registry.json`);
  if (!D.quelle || !D.quelle.url) warn(`${d}: keine Quelle`);
  const bids = new Set();
  (D.bloecke || []).forEach((b, i) => {
    blocks++;
    const w = `${d} › Block ${i + 1} „${b.titel}“`;
    if (!b.id) err(`${w}: ohne id`); else if (bids.has(b.id)) err(`${w}: doppelte Block-id`); else bids.add(b.id);
    if (!Array.isArray(b.lesen) || !b.lesen.length) err(`${w}: lesen fehlt`);
    if (!Array.isArray(b.merken) || !b.merken.length) err(`${w}: merken fehlt`);
    if (!Array.isArray(b.aufgaben) || b.aufgaben.length < 4) err(`${w}: weniger als 4 Aufgaben`);
    (b.aufgaben || []).forEach((t, k) => { tasks++; checkTask(t, `${w} › Aufgabe ${k + 1}`); });
  });
  const ak = path.join(root, 'modules', d, 'aktuell.js');
  if (fs.existsSync(ak)) {
    try {
      const A = load(ak, 'K7_AKTUELL');
      if (!Array.isArray(A)) err(`${d}/aktuell.js: K7_AKTUELL ist keine Liste`);
      else A.forEach((a, i) => {
        if (a.typ === 'vokabeln' && (!Array.isArray(a.paare) || !a.paare.length)) err(`${d}/aktuell.js Eintrag ${i + 1}: paare fehlen`);
        if (a.typ === 'karten' && (!Array.isArray(a.karten) || !a.karten.length)) err(`${d}/aktuell.js Eintrag ${i + 1}: karten fehlen`);
        if (a.typ === 'block') (a.aufgaben || []).forEach((t, k) => checkTask(t, `${d}/aktuell.js Eintrag ${i + 1} › Aufgabe ${k + 1}`));
        if (a.bis && !/^\d{4}-\d{2}-\d{2}$/.test(a.bis)) warn(`${d}/aktuell.js Eintrag ${i + 1}: bis nicht im Format JJJJ-MM-TT`);
      });
    } catch (e) { err(`${d}/aktuell.js: ${e.message}`); }
  }
});
console.log(`${dirs.length} Module, ${blocks} Blöcke, ${tasks} Aufgaben geprüft – ${errors} Fehler, ${warnings} Hinweise`);
process.exit(errors ? 1 : 0);
