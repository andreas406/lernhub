# LernHub Familie Grimm

Lern-App für Richard und Anton: Lehrplan Klasse 7 (Gymnasium, Rahmenlehrplan Berlin-Brandenburg), aktuelle Vokabeln und Klassenarbeitsthemen, Fußball-Module zur eigenen Position. Läuft als Web-App auf dem Handy (GitHub Pages), ohne weitere Hilfsmittel, offline nutzbar nach dem ersten Öffnen.

## Aufbau

- `index.html`, `css/app.css`, `js/app.js` – Startseite im Familie-Grimm-CI (Fira Sans Condensed, Fira Code, Grimm-Rot)
- `modules/registry.json` – Liste aller Module mit Kategorie (`klassenarbeiten`, `lehrplan`, `fussball`, `archiv`)
- `modules/_k7/` – gemeinsame Engine für alle Klasse-7-Module, `ANLEITUNG.md` (wie Inhalte reinkommen), `check.js` (Prüfung)
- `modules/k7-<fach>/` – je Fach `data.js` (Lehrplan-Blöcke) und `aktuell.js` (Vokabeln, Klassenarbeiten)
- `modules/ka-<fach>-<thema>/` – je anstehende Klassenarbeit ein Modul im Bereich „Klassenarbeiten“ (Lernplan, Grammatik, Vokabeln, Probearbeit); derzeit `ka-englisch-unit1`
- `modules/fussball-die-8/`, `modules/fussball-der-linke-iv/` – Positionsmodule aus den Saison-Journalen
- `fonts/` – Fira-Schriften lokal, damit das CI auch offline hält
- Archiv: alle älteren Module (Klasse 6 und früher) bleiben erreichbar, eingeklappt auf der Startseite

## Pflegen

Vokabeln eintragen: `modules/k7-<fach>/aktuell.js`. Für eine Klassenarbeit mit eigenem Lernplan ein Modul `modules/ka-<fach>-<thema>/` anlegen. Formate und Ablauf in `modules/_k7/ANLEITUNG.md`. Vor dem Push `node modules/_k7/check.js`.

## Quellen

Rahmenlehrplan Berlin-Brandenburg Teil C je Fach (bildungsserver.berlin-brandenburg.de), Kontingentstundentafel Gymnasium aus der Anlage zur Sek I-V Brandenburg (bravors.brandenburg.de). Die Links stehen in jedem Modul im Fuß.
