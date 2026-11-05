// Klassenarbeit Mathematik „Rationale Zahlen, Terme und Gleichungen“ (Klasse 7)
// Inhalt aus dem Lernplan vom 05.11.2026 (Notizzettel der Jungs + Rahmenlehrplan Teil C Mathematik, Niveaustufe E).
// Der Hefter lag nicht vor – Aufgabentypen der Lehrkraft noch abgleichen.
// Sobald der genaue Tag der Arbeit feststeht: untertitel und stand hier anpassen, bis-Datum in aktuell.js nachziehen.
window.K7_DATA = {
  id: "ka-mathe-terme",
  fach: "Mathe: Klassenarbeit Rationale Zahlen, Terme, Gleichungen",
  titel: "Klassenarbeit Mathe – Rationale Zahlen, Terme, Gleichungen",
  icon: "MA",
  untertitel: "Klasse 7 · Klassenarbeit Ende November (genauer Tag offen) · Lernphase Fr 06.11.–So 22.11. · alles ohne Taschenrechner",
  stand: "05.11.2026 · genauer Tag der Arbeit noch offen",
  quelle: { titel: "Rahmenlehrplan Teil C Mathematik, Niveaustufe E: L1 Zahlen und Operationen (S. 22), L4 Gleichungen und Funktionen (S. 28), Rationale Zahlen (S. 36–37)", url: "https://bildungsserver.berlin-brandenburg.de/fileadmin/bbb/unterricht/rahmenlehrplaene/Rahmenlehrplanprojekt/amtliche_Fassung/Teil_C_Mathematik_2015_11_10.pdf" },
  hinweis: "So gehst du vor: Unter <b>Plan und Infos</b> steht, was an welchem Tag dran ist. Die <b>Themen</b> übst du Block für Block: erst lesen, dann merken, dann rechnen – auf Papier mitrechnen! Unter <b>Fachbegriffe</b> stehen Lernkarten. Am Sa 21.11. schreibst du die <b>Probe-Klassenarbeit</b>.",
  labels: { seiten: "Plan und Infos", aktuell: "Fachbegriffe", bloecke: "Themen" },
  mixAlle: true,

  seiten: [
    {
      id: "lernplan", code: "PL", titel: "Lernplan Tag für Tag",
      untertitel: "Fr 06.11.–So 22.11. · Schultage 20 Min, Wochenende 25 Min",
      lesen: [
        { h: "So funktioniert der Plan", p: [
          "Mathe ist an neun Tagen dran, Englisch jeden Tag, Deutsch an den anderen Tagen. Schultage 20 Minuten, Wochenende 25 Minuten. An Trainingstagen die Einheit vor dem Training machen oder unterwegs am Handy hier üben.",
          "Jede Einheit: Block lesen, Merksätze lesen, dann die Pflicht auf Papier rechnen, dann die Aufgaben im Block. Der <b>Extra-Teil</b> ist für den, der schneller fertig ist.",
          "Wer an einem Tag unterwegs ist, holt die Einheit beim nächsten Mathe-Termin zusammen mit der neuen nach (dann jeweils nur die ersten Pflicht-Aufgaben)." ] },
        { h: "Woche 1: Fr 06.11.–So 08.11.", liste: [
          "<b>Fr 06.11. · Bestandsaufnahme</b> (15 Min)<br>Pflicht: Hefter durchblättern und alle Aufgabentypen zu rationalen Zahlen, Termen und Gleichungen mit Klebezetteln markieren. Mix-Quiz in diesem Modul einmal ohne Hilfe, Fehler notieren.<br>Extra: Liste „Das kann ich schon / Das ist unsicher“.",
          "<b>So 08.11. · M1 Rationale Zahlen ordnen</b> (25 Min)<br>Pflicht: Block M1. Zahlengerade von −5 bis 5 zeichnen und eintragen: −3,5; 1/2; −1/4; 2,75; −4; 0; −2/3; 4,5. Zu allen Betrag und Gegenzahl.<br>Extra: Vergleichen: −3/4 und −0,7; −1,2 und −6/5."
        ] },
        { h: "Woche 2: Mo 09.11.–So 15.11.", liste: [
          "<b>Mo 09.11. · M2 Addieren und Subtrahieren</b> (20 Min)<br>Pflicht: Block M2. 12 Aufgaben aus dem Hefter schriftlich, Zahlengerade als Hilfe.<br>Extra: Temperaturen einer Woche aufschreiben und Unterschiede berechnen.",
          "<b>Mi 11.11. · M3 Mal und Geteilt</b> (20 Min)<br>Pflicht: Block M3. Vorzeichenregel als Tabelle abschreiben. 10 Aufgaben, auch mit Brüchen und (−2)² / −2².<br>Extra: Vier Faktoren mit Minus – erst das Vorzeichen bestimmen, dann rechnen.",
          "<b>Fr 13.11. · M4 Reihenfolge und Rechengesetze</b> (20 Min)<br>Pflicht: Block M4. Die drei Gesetze mit je einem Beispiel mit negativen Zahlen aufschreiben. 8 gemischte Aufgaben mit Klammern.<br>Extra: Zwei Aufgaben vorteilhaft rechnen und das Gesetz dazuschreiben.",
          "<b>Sa 14.11. · M5 Terme aufstellen und berechnen</b> (25 Min)<br>Pflicht: Block M5. Sechs Wortterme in Terme übersetzen. Wertetabelle für 2x − 5 und 3(x + 1) mit x = −2; −1; 0; 0,5; 3.<br>Extra: Eigenes Streichholzmuster zeichnen und einen Term für Figur n finden."
        ] },
        { h: "Woche 3: Mo 16.11.–So 22.11.", liste: [
          "<b>Mo 16.11. · M6 Terme umformen</b> (20 Min)<br>Pflicht: Block M6. 10 Terme vereinfachen, davon 4 mit Minus vor der Klammer. Bei drei Ergebnissen Probe mit x = 1.<br>Extra: Ausklammern: 6x + 9; 12a − 8; −4y − 10.",
          "<b>Mi 18.11. · M7 Gleichungen lösen</b> (25 Min)<br>Pflicht: Block M7. 8 Gleichungen mit Rechenbefehl hinter dem Strich und Probe.<br>Extra: Sonderfälle L = { } und L = ℚ an je einem Beispiel.",
          "<b>Fr 20.11. · M8 Sachaufgaben</b> (20 Min)<br>Pflicht: Block M8. Vier Sachaufgaben mit allen vier Schritten (Variable, Gleichung, Lösung, Antwortsatz).<br>Extra: Selbst eine Sachaufgabe für den Bruder erfinden.",
          "<b>Sa 21.11. · Probe-Klassenarbeit</b> (45 Min)<br>Die Probe-Klassenarbeit (Seite „Probe-Klassenarbeit“) ohne Taschenrechner lösen, am besten nachmittags. Danach mit den Lösungen korrigieren und Punkte zählen.",
          "<b>So 22.11. · Fehler nacharbeiten</b> (20 Min)<br>Jeden Fehler einem Thema M1–M8 zuordnen, Merksätze lesen, zwei ähnliche Aufgaben rechnen. Ist die Arbeit nicht am Montag, geht das auch am Mo 23.11.<br>Extra: Mix-Quiz, Ziel höchstens drei Fehler."
        ] },
        { h: "Prüfungswoche", liste: [
          "Jeden Abend bis zur Arbeit: 10 Minuten Mix-Quiz, sonst nichts Neues.",
          "Vorabend: Merkzettel auf der Seite „Checkliste“ lesen, Geodreieck und Stifte einpacken.",
          "In der Arbeit: bei jeder Rechnung zuerst das Vorzeichen, dann den Betrag. Negative Zahlen in Klammern. Bei Gleichungen immer Probe. Fünf Minuten am Ende für die Vorzeichen."
        ] }
      ]
    },
    {
      id: "gebiete", code: "UE", titel: "Was drankommt",
      untertitel: "Acht Themen aus Zettel und Rahmenlehrplan",
      lesen: [
        { h: "Die Themen", tabelle: [
          ["Nr.", "Thema", "Gewicht"],
          ["M1", "Rationale Zahlen darstellen und ordnen: Zahlengerade, Betrag, Gegenzahl", "hoch"],
          ["M2", "Addieren und Subtrahieren rationaler Zahlen", "hoch"],
          ["M3", "Multiplizieren und Dividieren, Vorzeichenregeln, Kehrwert, Potenzen", "hoch"],
          ["M4", "Rechenreihenfolge und Rechengesetze", "mittel"],
          ["M5", "Variablen und Terme aufstellen, Termwerte berechnen", "hoch"],
          ["M6", "Terme umformen: zusammenfassen, Klammern auflösen", "hoch"],
          ["M7", "Lineare Gleichungen lösen mit Äquivalenzumformungen und Probe", "hoch"],
          ["M8", "Sachaufgaben mit Gleichungen", "mittel"]
        ],
          nach: [
            "Das Gewicht ist eine Einschätzung, keine Angabe der Lehrkraft. Was im Hefter steht, geht vor: Aufgabentypen von dort zuerst üben.",
            "Nicht erwartet (kommt meist erst in Klasse 8): Gleichungssysteme, Zehnerpotenzen, Zinsrechnung." ] }
      ]
    },
    {
      id: "probe", code: "PK", titel: "Probe-Klassenarbeit",
      untertitel: "45 Minuten · ohne Taschenrechner · 60 Punkte",
      lesen: [
        { h: "So geht’s", p: [ "Auf Papier rechnen, Rechenweg aufschreiben. Erst danach die Seite „Lösungen“ öffnen." ] },
        { h: "Aufgabe 1 – Rationale Zahlen ordnen (6 P.)", liste: [
          "a) Ordne der Größe nach, beginne mit der kleinsten Zahl: −2,5; 1/2; −3; 0; −1/4; 2 (3 P.)",
          "b) Gib jeweils Betrag und Gegenzahl an: −7,2 und 4/5 (2 P.)",
          "c) Welche Zahl liegt genau in der Mitte zwischen −6 und 2? (1 P.)" ] },
        { h: "Aufgabe 2 – Berechne (12 P.)", liste: [
          "a) −8 + 13 · b) −4 − 9 · c) 7 − (−5) · d) −2,5 + (−1,5)",
          "e) (−6) · (−7) · f) 48 : (−8) · g) (−3/4) · 2/3 · h) −1/2 − 1/3",
          "i) (−2)³ · j) −2² · k) (−0,5) · (−4) · (−3) · l) (−3/5) : (−3/10)" ] },
        { h: "Aufgabe 3 – Rechenreihenfolge und Rechengesetze (8 P.)", liste: [
          "a) 5 − 3 · (−4) · b) (−18) : (2 − 5)",
          "c) Rechne vorteilhaft und nenne das Gesetz: 4 · (−25) · (−3)",
          "d) Rechne vorteilhaft und nenne das Gesetz: 17 · (−8) + 17 · (−2)" ] },
        { h: "Aufgabe 4 – Temperatur (4 P.)", p: [
          "Morgens zeigt das Thermometer −7,5 °C, mittags 4 °C. In der Nacht sinkt die Temperatur von mittags aus um 9,5 Grad.",
          "a) Um wie viel Grad ist es von morgens bis mittags wärmer geworden? b) Wie kalt ist es in der Nacht? c) Um wie viel Grad müsste es in der Nacht steigen, bis 0 °C erreicht sind?" ] },
        { h: "Aufgabe 5 – Terme (8 P.)", liste: [
          "a) Berechne den Wert von T(x) = 2x − 5 für x = −3, x = 0,5 und x = −1/2. (3 P.)",
          "b) Vereinfache: (1) 5a − 3b + 2a + 7b · (2) 4x · (−3) · (3) −2(3y − 4) · (4) 8 − (2x − 5) · (5) 6x − (x + 4) + 2 (5 P.)" ] },
        { h: "Aufgabe 6 – Term aufstellen (4 P.)", p: [
          "Ein Rechteck ist x cm breit und 3 cm länger als breit. a) Stelle einen Term für den Umfang auf und vereinfache ihn. (3 P.) b) Berechne den Umfang für x = 5. (1 P.)" ] },
        { h: "Aufgabe 7 – Gleichungen (12 P.)", p: [
          "Löse und mache bei d) und e) die Probe.",
          "a) x + 7 = 3 · b) −4x = 28 · c) 3x − 5 = 16 · d) 5x + 4 = 2x − 11 · e) 2(x − 3) = x + 4 · f) x/3 − 2 = −5" ] },
        { h: "Aufgabe 8 – Sachaufgaben (6 P.)", liste: [
          "a) Ich denke mir eine Zahl, multipliziere sie mit −3 und addiere 7. Ich erhalte −14. Wie heißt die Zahl? Stelle eine Gleichung auf. (2 P.)",
          "b) Ein Verein kauft drei Kisten mit gleich vielen Bällen und vier einzelne Bälle, zusammen 40 Bälle. Wie viele Bälle sind in einer Kiste? Variable, Gleichung, Lösung, Antwortsatz. (4 P.)" ] }
      ]
    },
    {
      id: "loesungen", code: "LÖ", titel: "Lösungen zur Probe-Klassenarbeit",
      untertitel: "Erst nach dem Rechnen öffnen",
      lesen: [
        { h: "Lösungen", liste: [
          "<b>A1</b> a) −3 < −2,5 < −1/4 < 0 < 1/2 < 2 · b) |−7,2| = 7,2, Gegenzahl 7,2; |4/5| = 4/5, Gegenzahl −4/5 · c) −2",
          "<b>A2</b> a) 5 · b) −13 · c) 12 · d) −4 · e) 42 · f) −6 · g) −1/2 · h) −5/6 · i) −8 · j) −4 · k) −6 · l) 2",
          "<b>A3</b> a) 17 · b) 6 · c) (4 · (−25)) · (−3) = (−100) · (−3) = 300, Assoziativgesetz · d) 17 · ((−8) + (−2)) = 17 · (−10) = −170, Distributivgesetz",
          "<b>A4</b> a) 4 − (−7,5) = 11,5 Grad · b) 4 − 9,5 = −5,5 °C · c) 5,5 Grad",
          "<b>A5</b> a) −11; −4; −6 · b) (1) 7a + 4b · (2) −12x · (3) −6y + 8 · (4) 13 − 2x · (5) 5x − 2",
          "<b>A6</b> a) u = 2 · (x + 3) + 2 · x = 4x + 6 · b) 26 cm",
          "<b>A7</b> a) x = −4 · b) x = −7 · c) x = 7 · d) x = −5, Probe −21 = −21 · e) x = 10, Probe 14 = 14 · f) x = −9",
          "<b>A8</b> a) −3x + 7 = −14 → x = 7 · b) x = Bälle pro Kiste; 3x + 4 = 40 → x = 12; „In einer Kiste sind 12 Bälle.“" ] },
        { h: "Wie lief es?", p: [
          "50–60 Punkte: sicher. 40–49 Punkte: die Fehlerthemen am So 22.11. gezielt nacharbeiten. Unter 40 Punkte: M2, M3 und M7 noch einmal mit Papa. Das ist eine Selbsteinschätzung, kein Notenschlüssel der Schule." ] }
      ]
    },
    {
      id: "checkliste", code: "OK", titel: "Checkliste und Merkzettel",
      untertitel: "Kann ich das?",
      lesen: [
        { h: "Checkliste", liste: [
          "Ich kann rationale Zahlen auf der Zahlengeraden eintragen und ordnen, auch Brüche und Dezimalzahlen.",
          "Ich kenne Betrag und Gegenzahl; der Betrag ist nie negativ.",
          "Ich kann rationale Zahlen addieren und subtrahieren: Minus Minus wird Plus.",
          "Ich kenne die Vorzeichenregel für Mal und Geteilt, auch bei mehreren Faktoren.",
          "Ich kann durch einen Bruch teilen (mal Kehrwert).",
          "Ich weiß: (−2)² = 4, aber −2² = −4.",
          "Ich halte Klammer – Potenz – Punkt – Strich ein und kenne Kommutativ-, Assoziativ- und Distributivgesetz.",
          "Ich kann aus einem Text oder einer Figur einen Term aufstellen.",
          "Ich kann Termwerte auch für negative Zahlen und Brüche berechnen.",
          "Ich kann gleichartige Glieder zusammenfassen und Klammern auflösen, auch mit Minus davor.",
          "Ich löse lineare Gleichungen mit Äquivalenzumformungen und schreibe den Befehl hinter den Strich.",
          "Ich mache immer die Probe und gebe die Lösungsmenge an.",
          "Ich löse Sachaufgaben in vier Schritten mit Antwortsatz." ] },
        { h: "Merkzettel „Vorzeichen, Klammer, Waage“", liste: [
          "Plus/Minus: + (− → − · − (− → + · Zahlengerade: + nach rechts, − nach links",
          "Mal/Geteilt: gleiche Zeichen +, verschiedene −; Minuszeichen zählen",
          "Reihenfolge: Klammer → Potenz → Punkt → Strich",
          "Minus vor der Klammer: alles in der Klammer umdrehen",
          "Gleichung: | Befehl auf beiden Seiten · x allein · Probe · L = { }" ] }
      ]
    },
    {
      id: "papa", code: "PA", titel: "Hinweise für Papa",
      untertitel: "Abfragen und offene Punkte",
      lesen: [
        { h: "Abfragen", p: [
          "Eine Aufgabe nennen und vor dem Rechnen fragen: „Welches Vorzeichen kommt raus – und warum?“ Vorzeichenfehler sind bei diesem Thema die häufigste Fehlerquelle.",
          "Bei Gleichungen jeden Umformungsschritt laut ansagen lassen („minus 2x auf beiden Seiten“) und die Probe einfordern." ] },
        { h: "In der ersten Woche klären", liste: [
          "Hefter abgleichen: Welche Aufgabentypen gab es (Brüche mit Minus, Potenzen, Sonderfälle, Ausklammern)? Was dort nicht vorkommt, ist hier Extra. Fotos vom Hefter reichen, dann wird das Modul angepasst.",
          "Schreibweisen der Lehrkraft übernehmen (L = {…}, Befehl hinter dem Strich).",
          "Ist ein Taschenrechner erlaubt? Das Modul geht von „ohne“ aus.",
          "Genauer Tag der Arbeit – dann Prüfungswoche und Termine anpassen."
        ] }
      ]
    }
  ],

  bloecke: [
    {
      id: "m1-ordnen",
      titel: "M1 Rationale Zahlen ordnen",
      minuten: 10,
      themen: ["Zahlengerade", "Betrag", "Gegenzahl"],
      lesen: [
        { h: "Zahlbereiche", p: [
          "Natürliche Zahlen ℕ: 0, 1, 2, 3, … · Ganze Zahlen ℤ: …, −2, −1, 0, 1, 2, … · Rationale Zahlen ℚ: alle Zahlen, die man als Bruch schreiben kann, auch negative wie −3/4 oder −2,5.",
          "Jede natürliche Zahl ist auch eine ganze Zahl, jede ganze Zahl auch eine rationale: ℕ ⊂ ℤ ⊂ ℚ." ] },
        { h: "Ordnen auf der Zahlengeraden", p: [
          "Links von der 0 liegen die negativen Zahlen. Je weiter links, desto kleiner: −7 < −3 < −0,5 < 0 < 2.",
          "Bei negativen Zahlen ist die Zahl mit dem <b>kleineren Betrag</b> die größere: −3 > −8.",
          "Brüche vergleichen: in Dezimalzahlen umwandeln. −1/4 = −0,25 und −1/2 = −0,5 → −1/2 < −1/4." ],
          beispiel: "Ordne: −2,5; 1/2; −3; 0; −1/4; 2 → −3 < −2,5 < −1/4 < 0 < 1/2 < 2" },
        { h: "Betrag, Gegenzahl, Mitte", p: [
          "<b>Gegenzahl</b>: Vorzeichen wechseln. 4 ↔ −4, −2,5 ↔ 2,5. Zahl und Gegenzahl liegen gleich weit von 0 entfernt.",
          "<b>Betrag</b> |a| = Abstand zur 0, nie negativ: |−7| = 7, |3,5| = 3,5.",
          "<b>Mitte</b> zwischen zwei Zahlen: (a + b) : 2. Mitte zwischen −6 und 2: (−6 + 2) : 2 = −2." ] }
      ],
      merken: [
        "Weiter links auf der Zahlengeraden = kleiner: −8 < −3.",
        "Gegenzahl: Vorzeichen wechseln. Betrag: Abstand zur 0, immer ≥ 0.",
        "ℕ ⊂ ℤ ⊂ ℚ – rationale Zahlen sind alle Brüche, auch negative.",
        "Brüche vergleichen: in Dezimalzahlen umwandeln."
      ],
      aufgaben: [
        { typ: "mc", frage: "Welche Zahl ist die kleinste?", optionen: ["−2,5", "−1/4", "0", "−2"], richtig: 0, erklaerung: "−2,5 liegt am weitesten links." },
        { typ: "mc", frage: "Welche Aussage stimmt?", optionen: ["−3 > −8", "−3 < −8", "−0,5 < −1", "|−4| < 0"], richtig: 0, erklaerung: "−3 liegt rechts von −8." },
        { typ: "mc", frage: "Was ist größer: −1/2 oder −1/4?", optionen: ["−1/4", "−1/2", "beide gleich", "kann man nicht sagen"], richtig: 0, erklaerung: "−1/4 = −0,25 liegt rechts von −0,5." },
        { typ: "input", frage: "|−7,2| = ?", antworten: ["7,2"], numerisch: true, erklaerung: "Betrag = Abstand zur 0: 7,2." },
        { typ: "input", frage: "Gegenzahl von 4,5?", antworten: ["−4,5/-4,5"], numerisch: true, erklaerung: "Vorzeichen wechseln: −4,5." },
        { typ: "input", frage: "Welche Zahl liegt genau in der Mitte zwischen −6 und 2?", antworten: ["−2/-2"], numerisch: true, erklaerung: "(−6 + 2) : 2 = −2." },
        { typ: "tf", frage: "−5 ist eine ganze Zahl, aber keine natürliche Zahl.", richtig: true, erklaerung: "Natürliche Zahlen sind 0, 1, 2, … – negative Zahlen gehören zu ℤ und ℚ." },
        { typ: "tf", frage: "Zwischen −1 und 0 gibt es keine rationale Zahl.", richtig: false, erklaerung: "Zum Beispiel −0,5 oder −1/3 – zwischen zwei rationalen Zahlen liegt immer noch eine." },
        { typ: "mc", frage: "Welche Reihenfolge ist richtig?", optionen: ["−4 < −2/3 < 0 < 2,75", "−2/3 < −4 < 0 < 2,75", "0 < −2/3 < −4 < 2,75", "−4 < 0 < −2/3 < 2,75"], richtig: 0, erklaerung: "−4 liegt ganz links, dann −0,67, dann 0." }
      ]
    },
    {
      id: "m2-plus-minus",
      titel: "M2 Addieren und Subtrahieren",
      minuten: 10,
      themen: ["Zahlengerade", "Minus Minus", "Abstand"],
      lesen: [
        { h: "Plus nach rechts, Minus nach links", p: [
          "Auf der Zahlengeraden: Plus = nach rechts gehen, Minus = nach links gehen.",
          "−3 + 5 = 2 · 2 − 6 = −4 · −4 − 9 = −13 (zweimal nach links)." ] },
        { h: "Zwei Zeichen nebeneinander", p: [
          "Eine negative Zahl <b>subtrahieren</b> = ihre Gegenzahl addieren: 7 − (−5) = 7 + 5 = 12.",
          "Eine negative Zahl <b>addieren</b> = subtrahieren: 7 + (−5) = 7 − 5 = 2.",
          "Kurz: + (+ → + · − (− → + · + (− → − · − (+ → −" ],
          beispiel: "−2,5 + (−1,5) = −4 · −1/2 − 1/3 = −3/6 − 2/6 = −5/6" },
        { h: "Abstand", p: [
          "Abstand zweier Zahlen = größere minus kleinere: von −6 bis 4 sind es 4 − (−6) = 10.",
          "Temperaturen: von −7,5 °C auf 4 °C sind es 4 − (−7,5) = 11,5 Grad." ] }
      ],
      merken: [
        "Plus = nach rechts, Minus = nach links.",
        "Minus Minus wird Plus: 7 − (−5) = 12.",
        "Plus Minus wird Minus: 7 + (−5) = 2.",
        "Abstand = größere Zahl minus kleinere Zahl."
      ],
      aufgaben: [
        { typ: "input", frage: "−8 + 13 = ?", antworten: ["5"], numerisch: true, erklaerung: "Von −8 dreizehn nach rechts: 5." },
        { typ: "input", frage: "−4 − 9 = ?", antworten: ["−13/-13"], numerisch: true, erklaerung: "Beide Schritte nach links: −13." },
        { typ: "input", frage: "7 − (−5) = ?", antworten: ["12"], numerisch: true, erklaerung: "Minus Minus wird Plus: 7 + 5." },
        { typ: "input", frage: "−3 + (−6) = ?", antworten: ["−9/-9"], numerisch: true, erklaerung: "Plus Minus wird Minus: −3 − 6 = −9." },
        { typ: "input", frage: "−2,5 + (−1,5) = ?", antworten: ["−4/-4"], numerisch: true, erklaerung: "−2,5 − 1,5 = −4." },
        { typ: "input", frage: "−10 − (−4) = ?", antworten: ["−6/-6"], numerisch: true, erklaerung: "−10 + 4 = −6." },
        { typ: "mc", frage: "−1/2 − 1/3 = ?", optionen: ["−5/6", "−1/6", "1/6", "−2/5"], richtig: 0, erklaerung: "−3/6 − 2/6 = −5/6." },
        { typ: "input", frage: "Abstand zwischen −6 und 4 auf der Zahlengeraden?", antworten: ["10"], numerisch: true, erklaerung: "4 − (−6) = 10." },
        { typ: "mc", frage: "Kontostand −35 €. Es werden 50 € eingezahlt. Neuer Kontostand?", optionen: ["15 €", "−85 €", "85 €", "−15 €"], richtig: 0, erklaerung: "−35 + 50 = 15." }
      ]
    },
    {
      id: "m3-mal-geteilt",
      titel: "M3 Multiplizieren und Dividieren",
      minuten: 10,
      themen: ["Vorzeichenregel", "Kehrwert", "Potenzen"],
      lesen: [
        { h: "Vorzeichenregel", p: [
          "<b>Gleiche Vorzeichen → Plus. Verschiedene Vorzeichen → Minus.</b> Gilt für Mal und Geteilt.",
          "(−6) · (−7) = 42 · (−6) · 7 = −42 · 48 : (−8) = −6 · (−48) : (−8) = 6",
          "Mehrere Faktoren: Minuszeichen zählen. Gerade Anzahl → +, ungerade → −. (−0,5) · (−4) · (−3) = −6." ] },
        { h: "Brüche", p: [
          "Erst das Vorzeichen bestimmen, dann Zähler mal Zähler, Nenner mal Nenner: (−3/4) · (2/3) = −6/12 = −1/2.",
          "Durch einen Bruch teilen = mit dem <b>Kehrwert</b> malnehmen: (−3/5) : (−3/10) = (−3/5) · (−10/3) = 2." ] },
        { h: "Potenzen – die Falle", p: [
          "(−2)³ = (−2) · (−2) · (−2) = −8 · (−2)² = 4",
          "Ohne Klammer gehört das Minus nicht zur Basis: −2² = −(2 · 2) = −4." ] }
      ],
      merken: [
        "Gleiche Vorzeichen → +, verschiedene → −.",
        "Gerade Anzahl Minuszeichen → +, ungerade → −.",
        "Durch einen Bruch teilen = mal Kehrwert.",
        "(−2)² = 4, aber −2² = −4."
      ],
      aufgaben: [
        { typ: "input", frage: "(−6) · (−7) = ?", antworten: ["42"], numerisch: true, erklaerung: "Gleiche Vorzeichen → positiv." },
        { typ: "input", frage: "48 : (−8) = ?", antworten: ["−6/-6"], numerisch: true, erklaerung: "Verschiedene Vorzeichen → negativ." },
        { typ: "input", frage: "(−0,5) · (−4) · (−3) = ?", antworten: ["−6/-6"], numerisch: true, erklaerung: "Drei Minuszeichen (ungerade) → negativ; 0,5 · 4 · 3 = 6." },
        { typ: "mc", frage: "(−3/4) · (2/3) = ?", optionen: ["−1/2", "1/2", "−5/7", "−9/8"], richtig: 0, erklaerung: "−6/12 = −1/2." },
        { typ: "input", frage: "(−3/5) : (−3/10) = ?", antworten: ["2"], numerisch: true, erklaerung: "(−3/5) · (−10/3) = 30/15 = 2." },
        { typ: "input", frage: "(−2)³ = ?", antworten: ["−8/-8"], numerisch: true, erklaerung: "(−2) · (−2) · (−2) = −8." },
        { typ: "mc", frage: "Was ist −2²?", optionen: ["−4", "4", "−2", "0"], richtig: 0, erklaerung: "Ohne Klammer: −(2 · 2) = −4." },
        { typ: "mc", frage: "(−1) · (−1) · (−1) · (−1) · (−1) = ?", optionen: ["−1", "1", "−5", "5"], richtig: 0, erklaerung: "Fünf Minuszeichen (ungerade) → −1." },
        { typ: "tf", frage: "(−12) : (−3) ergibt eine negative Zahl.", richtig: false, erklaerung: "Gleiche Vorzeichen → positiv: 4." }
      ]
    },
    {
      id: "m4-reihenfolge-gesetze",
      titel: "M4 Rechenreihenfolge und Rechengesetze",
      minuten: 10,
      themen: ["KlaPoPS", "Assoziativgesetz", "Distributivgesetz"],
      lesen: [
        { h: "Reihenfolge", p: [
          "<b>Klammer → Potenz → Punkt (· :) → Strich (+ −)</b>, sonst von links nach rechts.",
          "5 − 3 · (−4) = 5 − (−12) = 17 · (−18) : (2 − 5) = (−18) : (−3) = 6" ] },
        { h: "Rechengesetze", p: [
          "<b>Kommutativgesetz</b> (Vertauschen): a + b = b + a; a · b = b · a.",
          "<b>Assoziativgesetz</b> (Verbinden): (a · b) · c = a · (b · c). 4 · (−25) · (−3) = (4 · (−25)) · (−3) = (−100) · (−3) = 300.",
          "<b>Distributivgesetz</b> (Verteilen): a · b + a · c = a · (b + c). 17 · (−8) + 17 · (−2) = 17 · (−10) = −170." ] },
        { h: "Achtung beim Minus", p: [
          "Bei der Subtraktion darf man nicht einfach vertauschen: 3 − 5 ≠ 5 − 3. Erst als Addition der Gegenzahl schreiben: 3 + (−5) = (−5) + 3." ] }
      ],
      merken: [
        "Klammer → Potenz → Punkt → Strich.",
        "Kommutativ = vertauschen, assoziativ = anders verbinden, distributiv = verteilen/ausklammern.",
        "Subtraktion vor dem Vertauschen in Addition der Gegenzahl umschreiben."
      ],
      aufgaben: [
        { typ: "input", frage: "5 − 3 · (−4) = ?", antworten: ["17"], numerisch: true, erklaerung: "Punkt vor Strich: 3 · (−4) = −12; 5 − (−12) = 17." },
        { typ: "input", frage: "(−18) : (2 − 5) = ?", antworten: ["6"], numerisch: true, erklaerung: "Klammer zuerst: 2 − 5 = −3; (−18) : (−3) = 6." },
        { typ: "input", frage: "4 · (−25) · (−3) = ?", antworten: ["300"], numerisch: true, erklaerung: "4 · (−25) = −100; (−100) · (−3) = 300." },
        { typ: "input", frage: "17 · (−8) + 17 · (−2) = ?", antworten: ["−170/-170"], numerisch: true, erklaerung: "17 · (−10) = −170." },
        { typ: "mc", frage: "17 · (−8) + 17 · (−2) = 17 · (−10) – welches Gesetz?", optionen: ["Distributivgesetz", "Kommutativgesetz", "Assoziativgesetz", "Punkt vor Strich"], richtig: 0, erklaerung: "Gemeinsamer Faktor ausgeklammert = Distributivgesetz." },
        { typ: "input", frage: "−2 · (3 − 7) = ?", antworten: ["8"], numerisch: true, erklaerung: "3 − 7 = −4; −2 · (−4) = 8." },
        { typ: "input", frage: "(−3)² − 10 = ?", antworten: ["−1/-1"], numerisch: true, erklaerung: "Potenz zuerst: 9 − 10 = −1." },
        { typ: "tf", frage: "4 − 9 = 9 − 4", richtig: false, erklaerung: "Bei der Subtraktion gilt das Kommutativgesetz nicht: −5 ≠ 5." }
      ]
    },
    {
      id: "m5-terme-aufstellen",
      titel: "M5 Terme aufstellen und berechnen",
      minuten: 12,
      themen: ["Variable", "Term", "Termwert"],
      lesen: [
        { h: "Variable und Term", p: [
          "Eine <b>Variable</b> (x, a, n …) ist ein Platzhalter für eine Zahl. Ein <b>Term</b> ist ein Rechenausdruck aus Zahlen, Variablen und Rechenzeichen – ohne Gleichheitszeichen: 3x + 5; 2(a − 1).",
          "3x bedeutet 3 · x. Das Malzeichen zwischen Zahl und Variable lässt man weg." ] },
        { h: "Terme aus Texten", p: [
          "„das Doppelte einer Zahl, vermindert um 5“ → 2x − 5",
          "„eine Zahl, um 3 vergrößert, dann verdreifacht“ → 3(x + 3)",
          "„8 € pro Person und 4,50 € für Popcorn“ → 8p + 4,5",
          "Umfang eines Rechtecks, Länge x + 3, Breite x → 2(x + 3) + 2x = 4x + 6" ] },
        { h: "Termwert berechnen", p: [
          "Zahl einsetzen, negative Zahlen in Klammern. T(x) = 2x − 5:",
          "x = −3 → 2 · (−3) − 5 = −11 · x = 0,5 → 2 · 0,5 − 5 = −4 · x = −1/2 → 2 · (−1/2) − 5 = −6" ],
          beispiel: "Gleichwertige Terme haben für jede Zahl denselben Wert: 2(x + 3) + 2x und 4x + 6 → für x = 5 beide 26." }
      ],
      merken: [
        "Term = Rechenausdruck ohne „=“. Variable = Platzhalter.",
        "vermindert um = −, vermehrt um = +, das Dreifache = 3 ·.",
        "Beim Einsetzen negative Zahlen in Klammern: 3 · (−2).",
        "Gleichwertige Terme: gleicher Wert für jede Einsetzung."
      ],
      aufgaben: [
        { typ: "mc", frage: "„Das Doppelte einer Zahl, vermindert um 5“", optionen: ["2x − 5", "2(x − 5)", "x² − 5", "5 − 2x"], richtig: 0, erklaerung: "Erst verdoppeln (2x), dann 5 abziehen." },
        { typ: "mc", frage: "„Eine Zahl um 3 vergrößern und das Ergebnis verdreifachen“", optionen: ["3(x + 3)", "3x + 3", "x + 9", "3 + x · 3"], richtig: 0, erklaerung: "Die Summe x + 3 wird verdreifacht → Klammer." },
        { typ: "input", frage: "Wert von 2x − 5 für x = −3?", antworten: ["−11/-11"], numerisch: true, erklaerung: "2 · (−3) − 5 = −6 − 5 = −11." },
        { typ: "input", frage: "Wert von 2x − 5 für x = 0,5?", antworten: ["−4/-4"], numerisch: true, erklaerung: "1 − 5 = −4." },
        { typ: "input", frage: "Wert von 3(x + 1) für x = −2?", antworten: ["−3/-3"], numerisch: true, erklaerung: "3 · (−1) = −3." },
        { typ: "input", frage: "Wert von −4x + 1 für x = −2?", antworten: ["9"], numerisch: true, erklaerung: "−4 · (−2) + 1 = 8 + 1 = 9." },
        { typ: "mc", frage: "Rechteck: Breite x, Länge 3 cm mehr. Welcher Term gibt den Umfang an?", optionen: ["4x + 6", "2x + 3", "x(x + 3)", "4x + 3"], richtig: 0, erklaerung: "2(x + 3) + 2x = 2x + 6 + 2x = 4x + 6." },
        { typ: "mc", frage: "Eintritt 8 € pro Person, dazu einmal Popcorn für 4,50 €. Kosten für p Personen?", optionen: ["8p + 4,5", "8 + 4,5p", "12,5p", "8(p + 4,5)"], richtig: 0, erklaerung: "Pro Person 8 €, Popcorn nur einmal." },
        { typ: "tf", frage: "3x und 3 + x bedeuten dasselbe.", richtig: false, erklaerung: "3x = 3 · x. Für x = 2: 6 und 5." }
      ]
    },
    {
      id: "m6-terme-umformen",
      titel: "M6 Terme umformen",
      minuten: 12,
      themen: ["zusammenfassen", "Klammern", "Minusklammer"],
      lesen: [
        { h: "Zusammenfassen", p: [
          "Nur <b>gleichartige Glieder</b> zusammenfassen: 5a − 3b + 2a + 7b = 7a + 4b.",
          "3x + 2 bleibt so. x und x² sind auch nicht gleichartig.",
          "Zahl mal Variable: 4x · (−3) = −12x; 2a · 3b = 6ab." ] },
        { h: "Klammern auflösen", p: [
          "Jedes Glied in der Klammer wird mit dem Faktor davor malgenommen: 3(2x − 5) = 6x − 15; −2(3y − 4) = −6y + 8.",
          "<b>Plus vor der Klammer</b>: Klammer weglassen. <b>Minus vor der Klammer</b>: alle Vorzeichen in der Klammer umdrehen.",
          "8 − (2x − 5) = 8 − 2x + 5 = 13 − 2x · 6x − (x + 4) + 2 = 6x − x − 4 + 2 = 5x − 2" ] },
        { h: "Ausklammern und Kontrolle", p: [
          "Ausklammern ist das Umgekehrte: 6x + 9 = 3(2x + 3).",
          "Kontrolle: x = 1 in Ausgangsterm und Ergebnis einsetzen – beide müssen gleich sein." ] }
      ],
      merken: [
        "Nur gleichartige Glieder zusammenfassen.",
        "Faktor vor der Klammer mal jedes Glied: −2(3y − 4) = −6y + 8.",
        "Minus vor der Klammer dreht alle Vorzeichen um.",
        "Probe: x = 1 einsetzen."
      ],
      aufgaben: [
        { typ: "mc", frage: "Vereinfache: 5a − 3b + 2a + 7b", optionen: ["7a + 4b", "11ab", "7a − 4b", "3a + 4b"], richtig: 0, erklaerung: "5a + 2a = 7a; −3b + 7b = 4b." },
        { typ: "mc", frage: "4x · (−3) = ?", optionen: ["−12x", "x", "12x", "−7x"], richtig: 0, erklaerung: "4 · (−3) = −12." },
        { typ: "mc", frage: "−2(3y − 4) = ?", optionen: ["−6y + 8", "−6y − 8", "6y − 8", "−6y − 4"], richtig: 0, erklaerung: "−2 · 3y = −6y und −2 · (−4) = +8." },
        { typ: "mc", frage: "8 − (2x − 5) = ?", optionen: ["13 − 2x", "3 − 2x", "13 + 2x", "6x − 5"], richtig: 0, erklaerung: "Minus vor der Klammer: 8 − 2x + 5." },
        { typ: "mc", frage: "6x − (x + 4) + 2 = ?", optionen: ["5x − 2", "5x + 6", "7x − 2", "5x + 2"], richtig: 0, erklaerung: "6x − x − 4 + 2 = 5x − 2." },
        { typ: "mc", frage: "Ausklammern: 6x + 9 = ?", optionen: ["3(2x + 3)", "3(2x + 9)", "6(x + 9)", "9(x + 1)"], richtig: 0, erklaerung: "Gemeinsamer Faktor 3: 3 · 2x + 3 · 3." },
        { typ: "tf", frage: "3x + 2 kann man zu 5x zusammenfassen.", richtig: false, erklaerung: "x-Glied und Zahl sind nicht gleichartig." },
        { typ: "mc", frage: "x − 3(x − 2) = ?", optionen: ["−2x + 6", "−2x − 6", "−2x − 2", "4x − 6"], richtig: 0, erklaerung: "x − 3x + 6 = −2x + 6." }
      ]
    },
    {
      id: "m7-gleichungen",
      titel: "M7 Gleichungen lösen",
      minuten: 12,
      themen: ["Waage", "Äquivalenzumformung", "Probe"],
      lesen: [
        { h: "Die Waage", p: [
          "Eine Gleichung ist wie eine Waage im Gleichgewicht. Was du auf einer Seite tust, tust du auch auf der anderen: das ist eine <b>Äquivalenzumformung</b>. Ziel: x allein auf einer Seite.",
          "Erlaubt: auf beiden Seiten dieselbe Zahl oder denselben Term addieren oder subtrahieren; mit derselben Zahl (nicht 0) malnehmen oder durch sie teilen." ] },
        { h: "Schritt für Schritt", p: [
          "3x − 5 = 16 | + 5 → 3x = 21 | : 3 → x = 7",
          "−4x = 28 | : (−4) → x = −7",
          "5x + 4 = 2x − 11 | − 2x → 3x + 4 = −11 | − 4 → 3x = −15 | : 3 → x = −5",
          "2(x − 3) = x + 4 → Klammer auflösen: 2x − 6 = x + 4 | − x → x − 6 = 4 | + 6 → x = 10",
          "x/3 − 2 = −5 | + 2 → x/3 = −3 | · 3 → x = −9" ] },
        { h: "Probe und Lösungsmenge", p: [
          "Lösung in die <b>Ausgangsgleichung</b> einsetzen: x = −5 → links 5 · (−5) + 4 = −21, rechts 2 · (−5) − 11 = −21 ✓. Lösungsmenge L = {−5}.",
          "Sonderfälle (Extra): 2x + 1 = 2x + 5 führt zu 1 = 5 → keine Lösung, L = { }. 2(x + 1) = 2x + 2 ist immer wahr → L = ℚ." ] }
      ],
      merken: [
        "Auf beiden Seiten dasselbe tun – Befehl hinter den Strich schreiben.",
        "Erst Klammern auflösen, dann x-Glieder auf eine Seite, Zahlen auf die andere.",
        "Durch die Zahl vor x teilen – mit Vorzeichen.",
        "Immer Probe in der Ausgangsgleichung, dann L = { … }."
      ],
      aufgaben: [
        { typ: "input", frage: "x + 7 = 3. x = ?", antworten: ["−4/-4"], numerisch: true, erklaerung: "| − 7 → x = −4." },
        { typ: "input", frage: "−4x = 28. x = ?", antworten: ["−7/-7"], numerisch: true, erklaerung: "| : (−4) → x = −7." },
        { typ: "input", frage: "3x − 5 = 16. x = ?", antworten: ["7"], numerisch: true, erklaerung: "3x = 21 → x = 7." },
        { typ: "input", frage: "5x + 4 = 2x − 11. x = ?", antworten: ["−5/-5"], numerisch: true, erklaerung: "3x + 4 = −11 → 3x = −15 → x = −5." },
        { typ: "input", frage: "2(x − 3) = x + 4. x = ?", antworten: ["10"], numerisch: true, erklaerung: "2x − 6 = x + 4 → x = 10." },
        { typ: "input", frage: "x/3 − 2 = −5. x = ?", antworten: ["−9/-9"], numerisch: true, erklaerung: "x/3 = −3 → x = −9." },
        { typ: "input", frage: "−2x + 9 = 1. x = ?", antworten: ["4"], numerisch: true, erklaerung: "−2x = −8 → x = 4." },
        { typ: "mc", frage: "Welcher Schritt ist bei 6x − 7 = 2x + 5 als Erstes sinnvoll?", optionen: ["| − 2x", "| : 6", "| · 7", "| − 6x + 7"], richtig: 0, erklaerung: "Erst alle x auf eine Seite: 4x − 7 = 5." },
        { typ: "mc", frage: "Probe für x = 2 bei 3x + 1 = 5x − 3: Was kommt heraus?", optionen: ["7 = 7, stimmt", "7 = 13, falsch", "5 = 7, falsch", "6 = 10, falsch"], richtig: 0, erklaerung: "3 · 2 + 1 = 7 und 5 · 2 − 3 = 7." },
        { typ: "tf", frage: "Die Gleichung 2x + 1 = 2x + 5 hat keine Lösung.", richtig: true, erklaerung: "| − 2x → 1 = 5 ist falsch für jedes x: L = { }." }
      ]
    },
    {
      id: "m8-sachaufgaben",
      titel: "M8 Sachaufgaben",
      minuten: 10,
      themen: ["Variable festlegen", "Gleichung", "Antwortsatz"],
      lesen: [
        { h: "Vier Schritte", liste: [
          "<b>1. Variable festlegen:</b> „x = Anzahl der Bälle in einer Kiste“",
          "<b>2. Gleichung aufstellen:</b> 3x + 4 = 40",
          "<b>3. Lösen und Probe:</b> 3x = 36 → x = 12; 3 · 12 + 4 = 40 ✓",
          "<b>4. Antwortsatz:</b> „In einer Kiste sind 12 Bälle.“" ] },
        { h: "Typische Aufgaben", p: [
          "Zahlenrätsel: „Ich denke mir eine Zahl, multipliziere sie mit −3 und addiere 7. Ich erhalte −14.“ → −3x + 7 = −14 → x = 7.",
          "Altersrätsel: „Lena ist 4 Jahre älter als Tom, zusammen sind sie 30.“ → x + (x + 4) = 30 → Tom ist 13, Lena 17.",
          "Geometrie: „Ein Rechteck ist doppelt so lang wie breit, Umfang 36 cm.“ → 2 · (2x + x) = 36 → 6x = 36 → x = 6: 6 cm breit, 12 cm lang." ] },
        { h: "Passt das Ergebnis?", p: [ "Am Ende prüfen, ob die Lösung zur Situation passt: keine −3 Bälle, keine halben Kinder." ] }
      ],
      merken: [
        "Variable festlegen – mit Wort und Einheit.",
        "Gleichung aufstellen, lösen, Probe.",
        "Antwortsatz nicht vergessen.",
        "Prüfen: Passt die Zahl zur Situation?"
      ],
      aufgaben: [
        { typ: "input", frage: "Ich denke mir eine Zahl, multipliziere sie mit −3 und addiere 7. Ergebnis: −14. Die Zahl?", antworten: ["7"], numerisch: true, erklaerung: "−3x + 7 = −14 → −3x = −21 → x = 7." },
        { typ: "input", frage: "Drei Kisten mit gleich vielen Bällen und 4 einzelne Bälle, zusammen 40. Bälle pro Kiste?", antworten: ["12"], numerisch: true, erklaerung: "3x + 4 = 40 → x = 12." },
        { typ: "mc", frage: "Lena ist 4 Jahre älter als Tom, zusammen sind sie 30. Welche Gleichung passt (x = Toms Alter)?", optionen: ["x + (x + 4) = 30", "x + 4 = 30", "4x = 30", "x · (x + 4) = 30"], richtig: 0, erklaerung: "Tom x, Lena x + 4, Summe 30." },
        { typ: "input", frage: "Lena ist 4 Jahre älter als Tom, zusammen 30. Wie alt ist Tom?", antworten: ["13"], numerisch: true, erklaerung: "2x + 4 = 30 → x = 13." },
        { typ: "input", frage: "Ein Rechteck ist doppelt so lang wie breit, Umfang 36 cm. Breite in cm?", antworten: ["6"], numerisch: true, erklaerung: "2 · (2x + x) = 6x = 36 → x = 6." },
        { typ: "input", frage: "Die Summe aus einer Zahl und ihrem Fünffachen ist −42. Die Zahl?", antworten: ["−7/-7"], numerisch: true, erklaerung: "x + 5x = 6x = −42 → x = −7." },
        { typ: "mc", frage: "Ein Handyvertrag kostet 5 € Grundgebühr plus 2 € pro GB. Diesen Monat 17 €. Wie viele GB?", optionen: ["6", "8,5", "11", "12"], richtig: 0, erklaerung: "5 + 2x = 17 → 2x = 12 → x = 6." },
        { typ: "tf", frage: "Zu einer vollständigen Lösung einer Sachaufgabe gehört ein Antwortsatz.", richtig: true, erklaerung: "Ohne Antwortsatz gibt es meist Punktabzug." }
      ]
    }
  ]
};
