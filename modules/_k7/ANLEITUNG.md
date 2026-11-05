# LernHub Klasse 7 – Anleitung

Stand: 05.11.2026. Gilt für alle Module `modules/k7-*` und die beiden Fußball-Module. Ältere Module (Klasse 6 und früher) liegen im Archiv und folgen dieser Anleitung nicht.

## Aufbau

Jedes Fach ist ein Ordner unter `modules/` mit drei Dateien:

| Datei | Inhalt | Wer ändert sie? |
|---|---|---|
| `index.html` | Hülle, lädt Engine und Daten – bleibt unverändert | niemand |
| `data.js` | die Lernblöcke des Lehrplans (Lesen – Merken – Üben) | selten, bei Fehlern oder neuen Themen |
| `aktuell.js` | **das, was gerade dran ist**: Vokabeln, Themen für Klassenarbeiten, Zusatzaufgaben | laufend |

Die Engine (`modules/_k7/engine.js` und `engine.css`) ist für alle Fächer gleich. Fortschritt und eigene Listen werden nur auf dem jeweiligen Handy gespeichert (localStorage), nicht im Repo.

## Aktuelle Inhalte einpflegen (der einfache Weg)

`aktuell.js` eines Fachs öffnen und Einträge in die Liste `window.K7_AKTUELL = [ … ]` schreiben. Drei Formate:

### 1. Vokabeln – nur Paare, die Übungen entstehen automatisch

```js
{ typ: "vokabeln", titel: "Unit 3 – At school", bis: "2026-11-20", sprache: "Englisch",
  paare: [
    ["timetable", "Stundenplan"],
    ["to borrow", "ausleihen"],
    ["homework", "Hausaufgaben"]
  ] }
```

Daraus baut die Engine: Liste zum Lesen, Merksätze, und Eingabe-Aufgaben in beide Richtungen (Englisch → Deutsch, Deutsch → Englisch). Pro Durchgang werden bis zu 16 zufällige Aufgaben gestellt. Mehrere richtige Antworten trennt man mit `/`: `["to borrow", "ausleihen / leihen"]`. Artikel (the, a, der, die, das, le, la …), ein vorangestelltes „to“ und Klammerzusätze werden beim Vergleich ignoriert.

### 2. Lernkarten für Klassenarbeiten – Frage und Antwort

```js
{ typ: "karten", titel: "Klassenarbeit Bio: Zelle und Ökosystem", bis: "2026-12-02",
  karten: [
    ["Welche Zellbestandteile gibt es nur in Pflanzenzellen?", "Zellwand, Chloroplasten, große Vakuole"],
    ["Was ist ein Destruent?", "Zersetzer"],
    ["Formel der Fotosynthese in Worten", "Kohlenstoffdioxid + Wasser → (Licht) → Traubenzucker + Sauerstoff"]
  ] }
```

Kurze Antworten (bis ca. 28 Zeichen, ohne Komma) werden als Eingabe abgefragt, längere als Multiple Choice mit den anderen Karten als Ablenker. Ab 4 Karten funktioniert das gut.

### 3. Vollständiger Block – wie im Lehrplan

```js
{ typ: "block", titel: "Englisch: Reading „A day in London“", minuten: 10, themen: ["Reading"],
  lesen: [{ h: "Text", p: ["…"] }],
  merken: ["…"],
  aufgaben: [
    { typ: "mc", frage: "…", optionen: ["richtig", "falsch 1", "falsch 2", "falsch 3"], richtig: 0, erklaerung: "…" },
    { typ: "input", frage: "…", antworten: ["Antwort", "alternative Schreibweise"], erklaerung: "…" },
    { typ: "tf", frage: "Aussage …", richtig: true, erklaerung: "…" }
  ] }
```

Bei `mc` ist `richtig` der Index der richtigen Option (0 = erste); die Reihenfolge wird beim Üben gemischt. Erlaubte HTML-Tags in Texten: `<b> <i> <u> <br> <sup> <sub>`.

Das Feld `bis` (Datum `JJJJ-MM-TT`) ist optional und erscheint als Chip („bis 20.11.2026“). Einträge, deren Termin vorbei ist, einfach löschen oder in `data.js` übernehmen, wenn sie dauerhaft nützlich sind.

## Ohne Tippen: Foto der Vokabelliste an Claude

Bewährter Prompt in einem Chat mit Zugriff auf das Repo:

> „Hier ist ein Foto der Vokabeln aus Unit 3 (Englisch). Trag sie als `vokabeln`-Eintrag in `modules/k7-englisch/aktuell.js` im Repo andreas406/lernhub ein, Titel ‚Unit 3 – …‘, Termin 20.11.2026, und pushe.“

Für Klassenarbeiten entsprechend: „Mach aus diesem Hefteintrag/Foto 12 Lernkarten als `karten`-Eintrag für `k7-biologie/aktuell.js`.“

## Direkt am Handy

Im Modul unter „Aktuell“ gibt es den Button **Eigene Liste eingeben**: eine Zeile pro Eintrag, links die Vokabel oder Frage, rechts die Lösung, getrennt durch `–`, `:` oder `=`. Die Liste bleibt auf dem Handy gespeichert und wird wie ein Vokabel-Block geübt. Das ist der Weg für die Jungs selbst, wenn gerade niemand das Repo pflegt.

## Klassenarbeits-Module (Bereich „Klassenarbeiten“)

Für eine anstehende Klassenarbeit mit Lernplan gibt es ein eigenes Modul, das auf der Startseite ganz oben unter **Klassenarbeiten** steht. Beispiel: `modules/ka-englisch-unit1/` (Englisch Unit 1 „London – city of wonders“, letzte Novemberwoche 2026).

- Ordnername `ka-<fach>-<thema>`, Registry-Kategorie `klassenarbeiten`.
- `data.js` wie ein Fach-Modul, dazu optional:
  - `titel` – Fenstertitel,
  - `labels: { seiten, aktuell, bloecke }` – Abschnittstitel (z. B. „Plan und Infos“, „Vokabeln“, „Grammatik und Skills“),
  - `seiten: [{ id, code, titel, untertitel, lesen:[…] }]` – reine Leseseiten ohne Aufgaben: Lernplan Tag für Tag, Überblick, Probearbeit, Lösungen, Checkliste,
  - `mixAlle: true` – das Mix-Quiz zieht auch aus den Vokabellisten.
  - In `lesen`-Abschnitten gehen zusätzlich `tabelle: [[Kopf…], [Zeile…]]` und `nach: […]` (Absätze nach einer Liste).
- `aktuell.js` enthält die Vokabellisten der Arbeit (`typ: "vokabeln"`), `bis` = Termin der Arbeit. „Eigene Liste eingeben“ bleibt für fehlende Wörter.
- Öffentliches Repo: keine Trainingszeiten, Orte, Abwesenheiten oder Uhrzeiten der Jungs in die Module schreiben – neutral formulieren („wer unterwegs ist …“).
- Nach der Arbeit: in `registry.json` die Kategorie auf `archiv` setzen. Was dauerhaft nützlich ist (Regeln, Aufgaben), kann in `modules/k7-<fach>/data.js` übernommen werden.

## Neues Fach oder Modul anlegen

1. Ordner `modules/<id>/` anlegen, `index.html` aus einem bestehenden k7-Modul kopieren (nur `<title>` anpassen).
2. `data.js` mit `window.K7_DATA = { id, fach, icon, untertitel, quelle:{titel,url}, bloecke:[…] }` anlegen (Struktur wie oben, `id` = Ordnername).
3. Leere `aktuell.js` kopieren.
4. In `modules/registry.json` einen Eintrag ergänzen: `{ "id", "code" (2–3 Buchstaben für die Kachel), "name", "description", "path", "category" }`. Kategorien: `klassenarbeiten`, `lehrplan`, `fussball`, `archiv`.

## Prüfen

`node modules/_k7/check.js` prüft alle Datenfiles (Struktur, Indizes, leere Felder). Vor dem Push laufen lassen.
