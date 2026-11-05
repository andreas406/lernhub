/* LernHub Klasse 7 – Lernblock-Engine
   Erwartet window.K7_DATA = {
     id, fach, icon, untertitel, quelle:{titel,url}, hinweis?, stand?,
     bloecke:[{ id, titel, minuten, themen:[...],
                lesen:[{h, p:[...], beispiel?, liste?}],
                merken:[...],
                aufgaben:[ {typ:'mc', frage, optionen:[...], richtig:idx, erklaerung},
                           {typ:'input', frage, antworten:[...], erklaerung, hinweis?},
                           {typ:'tf', frage, richtig:true|false, erklaerung} ] }]
   }
   Optional: aktuell.js im Modulordner mit window.K7_AKTUELL = [ ... ] (siehe modules/_k7/ANLEITUNG.md):
     { typ:'vokabeln', titel, bis?, paare:[[fremd, deutsch], ...] }
     { typ:'karten',   titel, bis?, karten:[[frage, antwort], ...] }
     { typ:'block',    ...vollständiger Block wie oben... }
   Außerdem: eigene Listen direkt im Handy (localStorage).
   Optional in K7_DATA (z. B. für Klassenarbeits-Module):
     titel     – Fenstertitel (Standard: „<fach> – Klasse 7“)
     labels    – { seiten, aktuell, bloecke } Abschnittstitel der Startseite
     seiten    – [{ id, titel, code?, untertitel?, lesen:[…] }] reine Leseseiten (Lernplan, Probearbeit, Checkliste)
     mixAlle   – true: Mix-Quiz zieht auch aus „Aktuell“ (Vokabeln, Lernkarten)
   In lesen-Abschnitten zusätzlich: tabelle:[[Kopf…],[Zeile…],…] und nach:[…] (Absätze nach der Liste)
*/
(function () {
  const D = window.K7_DATA;
  const root = document.getElementById('app');
  const KEY = 'lernhub.k7.' + D.id;
  const KEY_EIGENE = KEY + '.eigene';
  const L = Object.assign({ seiten: 'Plan und Infos', aktuell: 'Aktuell', bloecke: 'Lehrplan Klasse 7' }, D.labels || {});
  const SEITEN = Array.isArray(D.seiten) ? D.seiten : [];

  // ---------- Speicher (localStorage, best-effort) ----------
  function lsGet(k, fallback) { try { const v = localStorage.getItem(k); return v === null ? fallback : JSON.parse(v); } catch (e) { return fallback; } }
  function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* ignore */ } }
  let progress = lsGet(KEY, {});

  // ---------- Helfer ----------
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function rich(s) { return esc(s).replace(/&lt;(\/?)(b|i|br|u|sup|sub|em|strong)&gt;/g, '<$1$2>'); }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  function norm(s) {
    return String(s).toLowerCase().trim()
      .replace(/\s+/g, ' ')
      .replace(/[„“"'’`´]/g, '')
      .replace(/^(the|a|an|to|der|die|das|ein|eine|le|la|les|un|une|des|l) /, '')
      .replace(/\s*\(.*?\)\s*/g, ' ').trim()
      .replace(/\s*([,;:.!?])\s*$/g, '')
      .replace(/(\d),(\d)/g, '$1.$2')
      .replace(/ß/g, 'ss');
  }
  function checkInput(task, value) {
    const v = norm(value);
    if (!v) return false;
    return task.antworten.some(a => a.split('/').some(alt => norm(alt) === v));
  }
  function scrollTop() { window.scrollTo(0, 0); }
  function fmtDate(iso) {
    if (!iso) return '';
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso); if (!m) return iso;
    return `${m[3]}.${m[2]}.${m[1]}`;
  }
  function isDone(b) { const p = progress[b.id]; return p && p.best >= Math.ceil(p.total * 0.6); }

  // ---------- Aktuelle Inhalte: Vokabeln / Lernkarten → Blöcke ----------
  function vokabelnZuBlock(v, idx) {
    const paare = v.paare.filter(p => p && p.length >= 2);
    const lesen = [{ h: v.untertitel || 'Vokabeln lesen', p: ['Lies die Liste erst einmal durch. Deck dann mit dem Daumen die rechte Spalte ab und sag dir die Übersetzung.'],
      liste: paare.map(p => `<b>${p[0]}</b> – ${p[1]}`) }];
    const merken = paare.slice(0, 6).map(p => `${p[0]} = ${p[1]}`);
    const aufgaben = [];
    paare.forEach(p => {
      aufgaben.push({ typ: 'input', frage: `Übersetze: <b>${p[1]}</b>`, antworten: [p[0]], erklaerung: `${p[1]} = ${p[0]}`, placeholder: v.sprache ? `auf ${v.sprache}` : 'Vokabel' });
      aufgaben.push({ typ: 'input', frage: `Was heißt <b>${p[0]}</b>?`, antworten: [p[1]], erklaerung: `${p[0]} = ${p[1]}`, placeholder: 'auf Deutsch' });
    });
    return { id: 'aktuell-' + (v.id || idx), titel: v.titel, minuten: Math.max(5, Math.round(paare.length / 2)), themen: [v.bis ? 'bis ' + fmtDate(v.bis) : 'Vokabeln', `${paare.length} Vokabeln`],
      lesen, merken, aufgaben, zufall: Math.min(16, aufgaben.length), aktuell: true, bis: v.bis };
  }
  function kartenZuBlock(k, idx) {
    const karten = k.karten.filter(c => c && c.length >= 2);
    const lesen = [{ h: k.untertitel || 'Lernkarten lesen', p: [k.hinweis || 'Lies Frage und Antwort. Beim zweiten Durchgang die Antwort abdecken und selbst beantworten.'],
      liste: karten.map(c => `<b>${c[0]}</b><br>${c[1]}`) }];
    const merken = karten.slice(0, 8).map(c => `<b>${c[0]}</b> – ${c[1]}`);
    const alle = karten.map(c => c[1]);
    const aufgaben = karten.map(c => {
      const kurz = c[1].length <= 28 && !/[,;]/.test(c[1]);
      if (kurz) return { typ: 'input', frage: c[0], antworten: [c[1]], erklaerung: `${c[0]} → ${c[1]}` };
      const distr = shuffle(alle.filter(a => a !== c[1])).slice(0, 3);
      const optionen = [c[1]].concat(distr);
      return { typ: 'mc', frage: c[0], optionen, richtig: 0, erklaerung: '' };
    });
    return { id: 'aktuell-' + (k.id || idx), titel: k.titel, minuten: Math.max(5, Math.round(karten.length * 0.7)), themen: [k.bis ? 'bis ' + fmtDate(k.bis) : 'Lernkarten', `${karten.length} Karten`],
      lesen, merken, aufgaben, zufall: Math.min(12, aufgaben.length), aktuell: true, bis: k.bis };
  }
  function parseEigene(text) {
    // Zeilenformat: „wort – übersetzung“ (auch -, :, =, Tab oder ;)
    return text.split(/\n/).map(l => l.trim()).filter(Boolean).map(l => {
      const m = l.split(/\s+[–—-]\s+|\s*[:=;\t]\s*/);
      return m.length >= 2 ? [m[0].trim(), m.slice(1).join(' ').trim()] : null;
    }).filter(Boolean);
  }
  function aktuelleBloecke() {
    const out = [];
    (window.K7_AKTUELL || []).forEach((a, i) => {
      if (!a || !a.typ) return;
      if (a.typ === 'vokabeln') out.push(vokabelnZuBlock(a, i));
      else if (a.typ === 'karten') out.push(kartenZuBlock(a, i));
      else if (a.typ === 'block') out.push(Object.assign({ aktuell: true, id: 'aktuell-' + (a.id || i), minuten: 10, themen: [], lesen: [], merken: [] }, a));
    });
    const eigene = lsGet(KEY_EIGENE, '');
    const paare = parseEigene(eigene);
    if (paare.length) out.push(Object.assign(vokabelnZuBlock({ titel: 'Meine eigene Liste', paare, id: 'eigene' }, 'eigene'), { eigene: true }));
    return out;
  }
  let AKTUELL = [];
  let ALLE = []; // aktuelle + Lehrplan-Blöcke

  // ---------- State ----------
  let view = { name: 'home' };

  // ---------- Startseite ----------
  function blockCard(b, i, nr) {
    const p = progress[b.id], ok = isDone(b);
    return `<button class="block ${ok ? 'done' : ''}" data-i="${i}">
        <div class="num">${ok ? 'OK' : nr}</div>
        <div style="min-width:0;flex:1">
          <div class="bt">${esc(b.titel)}</div>
          <div class="bm">${b.minuten || 10} Min · ${b.zufall ? b.zufall + ' von ' + b.aufgaben.length : b.aufgaben.length} Aufgaben</div>
          ${b.themen && b.themen.length ? `<div class="chips">${b.themen.map(t => `<span class="chip">${esc(t)}</span>`).join('')}</div>` : ''}
        </div>
        ${p ? `<div class="score">${p.best}/${p.total}</div>` : ''}
      </button>`;
  }

  function renderHome() {
    AKTUELL = aktuelleBloecke();
    ALLE = AKTUELL.concat(D.bloecke);
    const total = D.bloecke.length;
    const done = D.bloecke.filter(isDone).length;
    const pct = total ? Math.round(done / total * 100) : 0;
    let html = `
      <h1>${esc(D.fach)}</h1>
      <p class="subtitle">${rich(D.untertitel || '')}</p>`;
    if (D.hinweis) html += `<div class="info">${rich(D.hinweis)}</div>`;

    // Leseseiten (optional)
    if (SEITEN.length) {
      html += `<div class="sec"><div class="sec-title">${esc(L.seiten)}</div>` + SEITEN.map((sd, k) => `<button class="block seite" data-s="${k}">
        <div class="num">${esc(sd.code || 'i')}</div>
        <div style="min-width:0;flex:1"><div class="bt">${esc(sd.titel)}</div>${sd.untertitel ? `<div class="bm">${rich(sd.untertitel)}</div>` : ''}</div>
      </button>`).join('') + `</div>`;
    }

    // Aktuelles (Vokabeln, Klassenarbeiten, eigene Listen)
    html += `<div class="sec"><div class="sec-title">${esc(L.aktuell)}</div>`;
    if (AKTUELL.length) html += AKTUELL.map((b, i) => blockCard(b, i, '!')).join('');
    else html += `<p class="muted" style="margin:4px 0 10px">Noch nichts Aktuelles – hier erscheinen Vokabeln und Themen für Klassenarbeiten.</p>`;
    html += `<button class="btn small ghost" id="eigene">Eigene Liste eingeben</button></div>`;

    // Lehrplan
    html += `<div class="sec"><div class="sec-title">${esc(L.bloecke)}</div>
      <div class="progress"><span>${done}/${total} Blöcke geschafft</span><div class="bar"><span style="width:${pct}%"></span></div><span>${pct}%</span></div>`;
    html += D.bloecke.map((b, i) => blockCard(b, AKTUELL.length + i, i + 1)).join('') + `</div>`;

    html += `<div class="card" style="margin-top:16px">
        <h2>Mix-Quiz</h2>
        <p class="muted" style="margin-bottom:10px">10 zufällige Aufgaben aus allen Blöcken${D.mixAlle ? ' und Vokabellisten' : ''} – gut zum Wiederholen vor einem Test.</p>
        <button class="btn block-btn" id="mix">Mix-Quiz starten</button>
      </div>`;
    html += `<footer>${D.quelle ? `Quelle: ${D.quelle.url ? `<a href="${esc(D.quelle.url)}" target="_blank" rel="noopener">${esc(D.quelle.titel)}</a>` : esc(D.quelle.titel)}` : ''}${D.stand ? `<br>Stand: ${esc(D.stand)}` : ''}<br><button class="btn small ghost" id="reset" style="margin-top:8px">Fortschritt zurücksetzen</button></footer>`;
    root.innerHTML = html;
    root.querySelectorAll('.block:not(.seite)').forEach(el => el.addEventListener('click', () => openBlock(+el.dataset.i)));
    root.querySelectorAll('.block.seite').forEach(el => el.addEventListener('click', () => openSeite(+el.dataset.s)));
    document.getElementById('mix').addEventListener('click', startMix);
    document.getElementById('eigene').addEventListener('click', renderEigene);
    document.getElementById('reset').addEventListener('click', () => {
      if (confirm('Fortschritt für dieses Fach wirklich löschen?')) { progress = {}; lsSet(KEY, progress); renderHome(); }
    });
    scrollTop();
  }

  // ---------- Eigene Liste ----------
  function renderEigene() {
    const text = lsGet(KEY_EIGENE, '');
    root.innerHTML = topbar('Eigene Liste') + `<h1>Eigene Liste</h1>
      <p class="subtitle">Eine Zeile pro Eintrag, links die Vokabel oder Frage, rechts die Lösung – getrennt durch „–“, „:“ oder „=“. Wird nur auf diesem Handy gespeichert.</p>
      <div class="card">
        <textarea class="inp" id="txt" rows="12" style="width:100%;resize:vertical;font-size:15px" placeholder="dog – Hund&#10;to run – rennen&#10;Was ist ein Chloroplast? : Zellbestandteil für Fotosynthese">${esc(text)}</textarea>
        <div class="row"><button class="btn ghost" id="cancel">Abbrechen</button><button class="btn" id="save">Speichern</button></div>
      </div>`;
    document.getElementById('back').addEventListener('click', renderHome);
    document.getElementById('cancel').addEventListener('click', renderHome);
    document.getElementById('save').addEventListener('click', () => { lsSet(KEY_EIGENE, document.getElementById('txt').value); renderHome(); });
  }

  // ---------- Lesen (Blöcke und Leseseiten) ----------
  function lesenHtml(lesen) {
    return `<div class="card">` + lesen.map(sec => {
      let s = (sec.h ? `<h3>${rich(sec.h)}</h3>` : '') + (sec.p || []).map(p => `<p>${rich(p)}</p>`).join('');
      if (sec.beispiel) s += `<div class="example">${rich(sec.beispiel)}</div>`;
      if (sec.tabelle) s += `<div class="tab-wrap"><table class="tab">${sec.tabelle.map((r, k) => `<tr>${r.map(c => k === 0 ? `<th>${rich(c)}</th>` : `<td>${rich(c)}</td>`).join('')}</tr>`).join('')}</table></div>`;
      if (sec.liste) s += `<ul>${sec.liste.map(li => `<li>${rich(li)}</li>`).join('')}</ul>`;
      if (sec.nach) s += (sec.nach || []).map(p => `<p>${rich(p)}</p>`).join('');
      return s;
    }).join('') + `</div>`;
  }

  // ---------- Leseseite ----------
  function openSeite(k) {
    const sd = SEITEN[k];
    root.innerHTML = topbar(L.seiten) + `<h1>${esc(sd.titel)}</h1>${sd.untertitel ? `<p class="subtitle">${rich(sd.untertitel)}</p>` : ''}` +
      lesenHtml(sd.lesen || []) + `<button class="btn block-btn ghost" id="home">‹ Zur Übersicht</button>`;
    document.getElementById('back').addEventListener('click', renderHome);
    document.getElementById('home').addEventListener('click', renderHome);
    scrollTop();
  }

  // ---------- Block ----------
  function openBlock(i) {
    view = { name: 'block', i, step: 0 };
    const b = ALLE[i];
    if (!b.lesen || !b.lesen.length) { view.step = 2; startQuiz(pickTasks(b), b); return; }
    renderBlock();
  }
  function pickTasks(b) {
    if (b.zufall && b.zufall < b.aufgaben.length) return shuffle(b.aufgaben).slice(0, b.zufall);
    return b.aufgaben;
  }

  function stepsHtml(step) {
    const names = ['1 Lesen', '2 Merken', '3 Üben'];
    return `<div class="steps">${names.map((n, k) => `<div class="step ${k === step ? 'active' : k < step ? 'done' : ''}">${n}</div>`).join('')}</div>`;
  }
  function topbar(crumb) {
    return `<div class="topbar"><button class="back" id="back">‹ Übersicht</button><span class="crumb">${esc(crumb)}</span></div>`;
  }
  function crumbFor(b) { return b.aktuell ? L.aktuell : `Block ${view.i - AKTUELL.length + 1} von ${D.bloecke.length}`; }

  function renderBlock() {
    const b = ALLE[view.i];
    let html = topbar(crumbFor(b)) + `<h1>${esc(b.titel)}</h1><p class="subtitle">${b.minuten || 10} Minuten · ${esc(D.fach)}${b.bis ? ' · bis ' + fmtDate(b.bis) : ''}</p>` + stepsHtml(view.step);
    if (view.step === 0) {
      html += lesenHtml(b.lesen) + `
      <button class="btn block-btn" id="next">Weiter zu „Merken“ ›</button>`;
    } else if (view.step === 1) {
      html += `<div class="card"><h2>Das musst du dir merken</h2>` +
        (b.merken || []).map((m, k) => `<div class="merk"><span class="n">${k + 1}</span><span>${rich(m)}</span></div>`).join('') +
        `</div><div class="row"><button class="btn ghost" id="prev">‹ Nochmal lesen</button><button class="btn" id="next">Jetzt üben ›</button></div>`;
    }
    root.innerHTML = html;
    document.getElementById('back').addEventListener('click', renderHome);
    const n = document.getElementById('next'); if (n) n.addEventListener('click', () => { view.step++; if (view.step === 2) startQuiz(pickTasks(b), b); else renderBlock(); });
    const p = document.getElementById('prev'); if (p) p.addEventListener('click', () => { view.step--; renderBlock(); });
    scrollTop();
  }

  // ---------- Quiz ----------
  let quiz = null;

  function prepare(task) {
    const t = Object.assign({}, task);
    if (t.typ === 'tf') { t.typ = 'mc'; t.optionen = ['Richtig', 'Falsch']; t.richtig = t.richtig ? 0 : 1; t.noShuffle = true; }
    if (t.typ === 'mc' && !t.noShuffle) {
      const idx = shuffle(t.optionen.map((_, k) => k));
      t.optionen = idx.map(k => task.optionen[k]);
      t.richtig = idx.indexOf(task.richtig);
    }
    return t;
  }

  function startQuiz(tasks, block) {
    quiz = { tasks: tasks.map(prepare), cur: 0, score: 0, answered: [], block, mix: !block };
    renderQuestion();
  }

  function startMix() {
    const all = [];
    (D.mixAlle ? ALLE : D.bloecke).forEach(b => b.aufgaben.forEach(a => all.push(Object.assign({ _block: b.titel }, a))));
    view = { name: 'mix' };
    startQuiz(shuffle(all).slice(0, Math.min(10, all.length)), null);
  }

  function renderQuestion() {
    const q = quiz.tasks[quiz.cur];
    const title = quiz.mix ? 'Mix-Quiz' : quiz.block.titel;
    let html = topbar(quiz.mix ? 'Mix-Quiz' : crumbFor(quiz.block) + ' · Üben') + `<h1>${esc(title)}</h1>` + (quiz.mix || !quiz.block.lesen.length ? '' : stepsHtml(2)) +
      `<div class="qbar"><span>Aufgabe ${quiz.cur + 1} von ${quiz.tasks.length}</span><span><b>${quiz.score}</b> richtig</span></div>
       <div class="dots">${quiz.tasks.map((_, k) => `<div class="dot ${k < quiz.cur ? (quiz.answered[k] ? 'ok' : 'bad') : k === quiz.cur ? 'cur' : ''}"></div>`).join('')}</div>
       <div class="card">
         <div class="question">${rich(q.frage)}${q._block ? `<span class="ctx">aus: ${esc(q._block)}</span>` : ''}${q.kontext ? `<span class="ctx">${rich(q.kontext)}</span>` : ''}</div>`;
    if (q.typ === 'mc') {
      html += `<div class="options">${q.optionen.map((o, k) => `<button class="opt" data-k="${k}">${rich(o)}</button>`).join('')}</div>`;
    } else {
      html += `<div class="inputrow"><input class="inp" id="inp" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="${esc(q.placeholder || 'Antwort eingeben')}" inputmode="${q.numerisch ? 'decimal' : 'text'}"><button class="btn" id="check">OK</button></div>`;
      if (q.hinweis) html += `<p class="muted">Tipp: ${rich(q.hinweis)}</p>`;
    }
    html += `<div class="feedback hidden" id="fb"></div><button class="btn block-btn hidden" id="next">Weiter ›</button></div>`;
    root.innerHTML = html;
    document.getElementById('back').addEventListener('click', () => { if (confirm('Quiz abbrechen?')) renderHome(); });
    if (q.typ === 'mc') {
      root.querySelectorAll('.opt').forEach(el => el.addEventListener('click', () => answerMc(+el.dataset.k)));
    } else {
      const inp = document.getElementById('inp');
      document.getElementById('check').addEventListener('click', () => answerInput(inp.value));
      inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); if (inp.disabled) nextQuestion(); else answerInput(inp.value); } });
      setTimeout(() => inp.focus(), 50);
    }
    document.getElementById('next').addEventListener('click', nextQuestion);
    scrollTop();
  }

  function showFeedback(correct, q, extra) {
    if (correct) quiz.score++;
    quiz.answered.push(correct);
    const fb = document.getElementById('fb');
    fb.className = 'feedback ' + (correct ? 'correct' : 'wrong');
    fb.innerHTML = (correct ? '<b>Richtig.</b>' : `<b>Leider nicht.</b>${extra || ''}`) + rich(q.erklaerung || '');
    const n = document.getElementById('next');
    n.classList.remove('hidden');
    n.textContent = quiz.cur + 1 < quiz.tasks.length ? 'Weiter ›' : 'Ergebnis anzeigen ›';
    if (q.typ === 'mc') n.focus();
  }

  function answerMc(k) {
    const q = quiz.tasks[quiz.cur];
    const correct = k === q.richtig;
    root.querySelectorAll('.opt').forEach((el, j) => {
      el.classList.add('disabled');
      if (j === q.richtig) el.classList.add('correct');
      if (j === k && !correct) el.classList.add('wrong');
    });
    showFeedback(correct, q);
  }

  function answerInput(value) {
    const q = quiz.tasks[quiz.cur];
    const inp = document.getElementById('inp');
    if (inp.disabled) return;
    const correct = checkInput(q, value);
    inp.disabled = true; inp.classList.add(correct ? 'correct' : 'wrong');
    document.getElementById('check').classList.add('hidden');
    showFeedback(correct, q, ` Richtig wäre: <b style="display:inline">${esc(q.antworten[0])}</b><br>`);
  }

  function nextQuestion() {
    quiz.cur++;
    if (quiz.cur < quiz.tasks.length) renderQuestion(); else renderResult();
  }

  function renderResult() {
    const total = quiz.tasks.length, s = quiz.score, pct = Math.round(s / total * 100);
    if (!quiz.mix) {
      const b = quiz.block, old = progress[b.id];
      progress[b.id] = { best: old && old.total === total ? Math.max(old.best, s) : s, total, date: new Date().toISOString().slice(0, 10) };
      lsSet(KEY, progress);
    }
    const icon = pct + ' %';
    const text = pct === 100 ? 'Perfekt!' : pct >= 80 ? 'Sehr gut!' : pct >= 60 ? 'Gut gemacht!' : 'Dranbleiben – nochmal lesen hilft.';
    const wrong = quiz.tasks.map((q, k) => ({ q, ok: quiz.answered[k] })).filter(x => !x.ok);
    const hasNext = !quiz.mix && view.i + 1 < ALLE.length;
    let html = topbar(quiz.mix ? 'Mix-Quiz' : crumbFor(quiz.block) + ' · Ergebnis') + `<div class="card result">
        <div class="big">${icon}</div><h2>${text}</h2><p>${s} von ${total} richtig (${pct}%)</p>
        <div class="row">
          <button class="btn ghost" id="again">Nochmal</button>
          ${hasNext ? `<button class="btn" id="nextblock">Nächster Block ›</button>` : ''}
          <button class="btn ghost" id="home">Übersicht</button>
        </div>`;
    if (wrong.length) {
      html += `<div class="review"><p class="muted" style="margin-bottom:8px">Das solltest du dir nochmal anschauen:</p>` +
        wrong.map(x => `<div class="item">${rich(x.q.frage)}<small>Richtig: ${x.q.typ === 'mc' ? rich(x.q.optionen[x.q.richtig]) : esc(x.q.antworten[0])}${x.q.erklaerung ? ' – ' + rich(x.q.erklaerung) : ''}</small></div>`).join('') + `</div>`;
    }
    html += `</div>`;
    root.innerHTML = html;
    document.getElementById('back').addEventListener('click', renderHome);
    document.getElementById('home').addEventListener('click', renderHome);
    document.getElementById('again').addEventListener('click', () => quiz.mix ? startMix() : startQuiz(pickTasks(quiz.block), quiz.block));
    const nb = document.getElementById('nextblock'); if (nb) nb.addEventListener('click', () => openBlock(view.i + 1));
    scrollTop();
  }

  // ---------- Start: optionale aktuell.js laden, dann rendern ----------
  document.title = D.titel || (D.fach + ' – Klasse 7');
  const s = document.createElement('script');
  s.src = 'aktuell.js?v=' + Date.now();
  s.onload = renderHome; s.onerror = renderHome;
  document.head.appendChild(s);
})();
