window.K7_DATA = {
  id: "k7-mathe",
  fach: "Mathematik",
  icon: "📐",
  untertitel: "Klasse 7 Gymnasium · Rahmenlehrplan Berlin-Brandenburg, Niveaustufe E · alles ohne Taschenrechner lösbar",
  stand: "November 2026",
  quelle: { titel: "Rahmenlehrplan Teil C Mathematik (Jgst. 1–10), Kapitel 3, Niveaustufe E", url: "https://bildungsserver.berlin-brandenburg.de/fileadmin/bbb/unterricht/rahmenlehrplaene/Rahmenlehrplanprojekt/amtliche_Fassung/Teil_C_Mathematik_2015_11_10.pdf" },
  bloecke: [
    {
      id: "rationale-zahlen",
      titel: "Rationale Zahlen und die Zahlengerade",
      minuten: 10,
      themen: ["negative Zahlen", "Betrag", "Gegenzahl"],
      lesen: [
        { h: "Warum negative Zahlen?", p: [
          "Temperaturen unter null, Schulden, Höhen unter dem Meeresspiegel: Dafür braucht man <b>negative Zahlen</b>. Die natürlichen Zahlen (0, 1, 2, …) und die Brüche werden um die negativen Zahlen erweitert. Alle zusammen heißen <b>rationale Zahlen</b> (ℚ).",
          "Der Zahlenstrahl wird zur <b>Zahlengeraden</b>: Links von der 0 liegen die negativen Zahlen. Je weiter links, desto kleiner: −5 < −2 < 0 < 3." ] },
        { h: "Gegenzahl und Betrag", p: [
          "Die <b>Gegenzahl</b> von 4 ist −4, die Gegenzahl von −2,5 ist 2,5. Zahl und Gegenzahl liegen gleich weit von der 0 entfernt.",
          "Der <b>Betrag</b> |a| ist der Abstand zur 0 – immer positiv: |−7| = 7, |3| = 3, |0| = 0.",
          "Achtung: Vorzeichen (−3 = „minus drei“) und Rechenzeichen (5 − 3 = „fünf minus drei“) sehen gleich aus, bedeuten aber Verschiedenes." ],
          beispiel: "Ordne: −3 ; 2 ; −0,5 ; 0 ; −7 → −7 < −3 < −0,5 < 0 < 2" },
        { h: "Brüche, Dezimalzahlen, Prozente", p: [
          "Eine rationale Zahl kannst du als Bruch, als Dezimalzahl oder als Prozent schreiben: 1/4 = 0,25 = 25 %; 3/5 = 0,6 = 60 %.",
          "Manche Divisionen ergeben <b>periodische Dezimalzahlen</b>: 1/3 = 0,333… = 0,<span style='text-decoration:overline'>3</span>; 2/9 = 0,222…" ] }
      ],
      merken: [
        "Zahlengerade: links negativ, rechts positiv; weiter links = kleiner (−5 < −2).",
        "Gegenzahl: Vorzeichen wechseln (4 ↔ −4). Betrag: Abstand zur 0, immer positiv (|−7| = 7).",
        "Bruch = Dezimalzahl = Prozent: 1/4 = 0,25 = 25 %.",
        "1/3 = 0,333… ist eine periodische Dezimalzahl."
      ],
      aufgaben: [
        { typ: "mc", frage: "Welche Zahl ist die kleinste?", optionen: ["−8", "−3", "0", "2"], richtig: 0, erklaerung: "Auf der Zahlengeraden liegt −8 am weitesten links." },
        { typ: "input", frage: "Wie groß ist |−12|?", antworten: ["12"], numerisch: true, erklaerung: "Der Betrag ist der Abstand zur 0: 12." },
        { typ: "input", frage: "Nenne die Gegenzahl von −6,5.", antworten: ["6,5", "6.5", "+6,5"], numerisch: true, erklaerung: "Vorzeichen wechseln: 6,5." },
        { typ: "mc", frage: "Welche Aussage ist richtig?", optionen: ["−2 > −9", "−2 < −9", "−9 > 0", "|−2| = −2"], richtig: 0, erklaerung: "−2 liegt rechts von −9, ist also größer." },
        { typ: "input", frage: "Schreibe 3/4 als Dezimalzahl.", antworten: ["0,75", "0.75"], numerisch: true, erklaerung: "3 : 4 = 0,75." },
        { typ: "input", frage: "Wie viel Prozent sind 2/5?", antworten: ["40", "40 %", "40%"], numerisch: true, erklaerung: "2/5 = 0,4 = 40 %." },
        { typ: "mc", frage: "Es ist −4 °C. Die Temperatur steigt um 9 °C. Wie warm ist es jetzt?", optionen: ["5 °C", "−13 °C", "13 °C", "−5 °C"], richtig: 0, erklaerung: "−4 + 9 = 5." },
        { typ: "tf", frage: "Der Betrag einer Zahl kann negativ sein.", richtig: false, erklaerung: "Der Betrag ist ein Abstand und deshalb nie negativ." }
      ]
    },
    {
      id: "rechnen-rational",
      titel: "Rechnen mit rationalen Zahlen",
      minuten: 12,
      themen: ["Vorzeichenregeln", "Addition", "Multiplikation"],
      lesen: [
        { h: "Addieren und Subtrahieren", p: [
          "Stell dir die Zahlengerade vor: Plus = nach rechts, Minus = nach links. −3 + 5 = 2 (von −3 fünf Schritte nach rechts). 2 − 6 = −4.",
          "<b>Minus mal Minus</b>: Zwei Minuszeichen hintereinander werden zu Plus: 4 − (−3) = 4 + 3 = 7. Und: 4 + (−3) = 4 − 3 = 1.",
          "Subtrahieren heißt: die Gegenzahl addieren. Abstand zwischen −2 und 5: 5 − (−2) = 7." ],
          beispiel: "−7 + 3 = −4 · −7 − 3 = −10 · −7 − (−3) = −4 · 7 + (−3) = 4" },
        { h: "Multiplizieren und Dividieren", p: [
          "Vorzeichenregel: <b>gleiche Vorzeichen → Plus</b>, <b>verschiedene Vorzeichen → Minus</b>.",
          "(−3) · (−4) = 12 · (−3) · 4 = −12 · 12 : (−4) = −3 · (−12) : (−4) = 3",
          "Bei mehreren Faktoren zählst du die Minuszeichen: gerade Anzahl → Plus, ungerade Anzahl → Minus. (−1)·(−2)·(−3) = −6." ] },
        { h: "Reihenfolge", p: [
          "Es gilt weiter: Klammer vor Punkt vor Strich. Beispiel: 3 − 2 · (−4) = 3 − (−8) = 3 + 8 = 11.",
          "Mit Brüchen genauso: −1/2 + 3/4 = −2/4 + 3/4 = 1/4." ] }
      ],
      merken: [
        "Plus = nach rechts, Minus = nach links auf der Zahlengeraden.",
        "Minus Minus wird Plus: 4 − (−3) = 7. Plus Minus bleibt Minus: 4 + (−3) = 1.",
        "Mal/Geteilt: gleiche Vorzeichen → +, verschiedene → −.",
        "Klammer vor Punkt vor Strich gilt auch mit negativen Zahlen."
      ],
      aufgaben: [
        { typ: "input", frage: "−8 + 5 = ?", antworten: ["-3", "−3"], numerisch: true, erklaerung: "Von −8 fünf nach rechts: −3." },
        { typ: "input", frage: "6 − (−4) = ?", antworten: ["10"], numerisch: true, erklaerung: "Minus Minus wird Plus: 6 + 4 = 10." },
        { typ: "input", frage: "(−7) · (−3) = ?", antworten: ["21"], numerisch: true, erklaerung: "Gleiche Vorzeichen → positiv: 21." },
        { typ: "input", frage: "(−24) : 6 = ?", antworten: ["-4", "−4"], numerisch: true, erklaerung: "Verschiedene Vorzeichen → negativ: −4." },
        { typ: "mc", frage: "2 − 3 · (−5) = ?", optionen: ["17", "−13", "5", "−17"], richtig: 0, erklaerung: "Punkt vor Strich: 3 · (−5) = −15; 2 − (−15) = 17." },
        { typ: "input", frage: "−2,5 − 1,5 = ?", antworten: ["-4", "−4", "-4,0"], numerisch: true, erklaerung: "Beide negativ, Beträge addieren: −4." },
        { typ: "mc", frage: "(−1) · (−1) · (−1) · (−1) = ?", optionen: ["1", "−1", "4", "−4"], richtig: 0, erklaerung: "Vier Minuszeichen (gerade Anzahl) → positiv: 1." },
        { typ: "input", frage: "Wie groß ist der Abstand zwischen −6 und 4 auf der Zahlengeraden?", antworten: ["10"], numerisch: true, erklaerung: "4 − (−6) = 10." }
      ]
    },
    {
      id: "prozent",
      titel: "Prozentrechnung",
      minuten: 12,
      themen: ["Grundwert", "Prozentwert", "Prozentsatz"],
      lesen: [
        { h: "Die drei Größen", p: [
          "<b>Grundwert G</b> = das Ganze (100 %). <b>Prozentsatz p %</b> = der Anteil in Prozent. <b>Prozentwert W</b> = der Teil, der dem Prozentsatz entspricht.",
          "Formel: W = G · p/100. Umgestellt: G = W · 100/p und p = W · 100/G." ],
          beispiel: "25 % von 80 € → W = 80 · 25/100 = 20 €. Grundwert G = 80, Prozentsatz 25 %, Prozentwert 20." },
        { h: "Rechnen ohne Taschenrechner", p: [
          "Dreisatz über 1 %: 100 % = 80 € → 1 % = 0,80 € → 25 % = 20 €.",
          "Praktische Anteile: 50 % = die Hälfte, 25 % = ein Viertel, 10 % = ein Zehntel, 20 % = ein Fünftel, 1 % = ein Hundertstel. 15 % = 10 % + 5 % (die Hälfte von 10 %).",
          "<b>Prozentsatz finden</b>: 12 von 48 → 12/48 = 1/4 = 25 %." ] },
        { h: "Erhöhung und Senkung", p: [
          "Preis 40 € um 20 % erhöht: 20 % von 40 = 8 → neuer Preis 48 €. Oder mit Faktor: 40 · 1,2 = 48.",
          "Preis 40 € um 20 % gesenkt: 40 − 8 = 32 €, also 40 · 0,8.",
          "Vorsicht: Erst +20 % und dann −20 % ergibt NICHT den Ausgangspreis (48 · 0,8 = 38,40 €)." ] }
      ],
      merken: [
        "W = G · p/100 (Prozentwert = Grundwert mal Prozentsatz durch 100).",
        "Grundwert = das Ganze = 100 %. Der Prozentwert ist der Teil.",
        "Merkanteile: 50 % = ½, 25 % = ¼, 20 % = ⅕, 10 % = ⅒.",
        "Erhöhung um p %: mal (1 + p/100). Senkung: mal (1 − p/100)."
      ],
      aufgaben: [
        { typ: "input", frage: "Wie viel sind 25 % von 120?", antworten: ["30"], numerisch: true, erklaerung: "Ein Viertel von 120 = 30." },
        { typ: "input", frage: "Wie viel sind 15 % von 200?", antworten: ["30"], numerisch: true, erklaerung: "10 % = 20, 5 % = 10 → 30." },
        { typ: "input", frage: "18 von 60 Schülern fahren Rad. Wie viel Prozent sind das?", antworten: ["30", "30 %", "30%"], numerisch: true, erklaerung: "18/60 = 3/10 = 30 %." },
        { typ: "input", frage: "12 € sind 20 % eines Preises. Wie hoch ist der ganze Preis (Grundwert)?", antworten: ["60"], numerisch: true, erklaerung: "20 % = 12 € → 100 % = 5 · 12 = 60 €." },
        { typ: "mc", frage: "Ein Trikot kostet 50 €. Es wird um 30 % reduziert. Neuer Preis?", optionen: ["35 €", "20 €", "15 €", "65 €"], richtig: 0, erklaerung: "30 % von 50 = 15 → 50 − 15 = 35 €." },
        { typ: "mc", frage: "Mit welchem Faktor multiplizierst du bei einer Erhöhung um 8 %?", optionen: ["1,08", "0,92", "1,8", "8"], richtig: 0, erklaerung: "100 % + 8 % = 108 % = 1,08." },
        { typ: "mc", frage: "In einer Klasse mit 28 Kindern sind 7 Linkshänder. Prozentsatz?", optionen: ["25 %", "7 %", "28 %", "21 %"], richtig: 0, erklaerung: "7/28 = 1/4 = 25 %." },
        { typ: "tf", frage: "Ein Preis wird erst um 10 % erhöht und dann um 10 % gesenkt. Danach ist er wieder genau so hoch wie am Anfang.", richtig: false, erklaerung: "100 → 110 → 99. Die 10 % beziehen sich auf verschiedene Grundwerte." }
      ]
    },
    {
      id: "zuordnungen",
      titel: "Proportionale und antiproportionale Zuordnungen",
      minuten: 12,
      themen: ["Dreisatz", "proportional", "antiproportional"],
      lesen: [
        { h: "Proportional", p: [
          "Eine Zuordnung ist <b>proportional</b>, wenn das Doppelte der einen Größe zum Doppelten der anderen gehört: 2 Brötchen kosten 1 €, 4 Brötchen 2 €. Der <b>Quotient</b> y : x ist immer gleich (Proportionalitätsfaktor), der Graph ist eine <b>Gerade durch den Ursprung</b>.",
          "Dreisatz: 5 Hefte kosten 4 €. Wie viel kosten 8 Hefte? → 1 Heft: 4 € : 5 = 0,80 € → 8 Hefte: 8 · 0,80 € = 6,40 €." ] },
        { h: "Antiproportional", p: [
          "Eine Zuordnung ist <b>antiproportional</b> (umgekehrt proportional), wenn das Doppelte der einen Größe zur Hälfte der anderen gehört: 2 Maler brauchen 6 Tage, 4 Maler 3 Tage. Das <b>Produkt</b> x · y ist immer gleich (2 · 6 = 4 · 3 = 12).",
          "Dreisatz: 3 Pumpen leeren ein Becken in 8 Stunden. 4 Pumpen? → 1 Pumpe: 3 · 8 = 24 h → 4 Pumpen: 24 : 4 = 6 h." ],
          beispiel: "Proportional: mehr → mehr (gleicher Faktor). Antiproportional: mehr → weniger (gleiches Produkt). Nicht jede Zuordnung ist eins von beiden (z. B. Alter → Körpergröße)." },
        { h: "Tabelle und Graph", p: [
          "Proportional erkennst du in der Tabelle am gleichen Quotienten, antiproportional am gleichen Produkt.",
          "Graph proportional: Ursprungsgerade. Graph antiproportional: fallende Kurve (Hyperbel), die die Achsen nie berührt." ] }
      ],
      merken: [
        "Proportional: Quotient y : x konstant, Graph = Gerade durch den Ursprung.",
        "Antiproportional: Produkt x · y konstant, Graph = fallende Kurve.",
        "Dreisatz immer über die Einheit (1 Stück, 1 Pumpe …) rechnen.",
        "Bei antiproportional: mehr Arbeiter → weniger Zeit."
      ],
      aufgaben: [
        { typ: "input", frage: "4 Äpfel kosten 2 €. Was kosten 10 Äpfel? (in €)", antworten: ["5", "5 €", "5,00"], numerisch: true, erklaerung: "1 Apfel 0,50 € → 10 Äpfel 5 €." },
        { typ: "input", frage: "6 Arbeiter brauchen 10 Tage. Wie viele Tage brauchen 4 Arbeiter?", antworten: ["15"], numerisch: true, erklaerung: "Antiproportional: 6 · 10 = 60 → 60 : 4 = 15 Tage." },
        { typ: "mc", frage: "Welche Zuordnung ist proportional?", optionen: ["Anzahl Kinokarten → Gesamtpreis", "Anzahl Helfer → Dauer der Arbeit", "Alter eines Menschen → Körpergröße", "Geschwindigkeit → Fahrzeit für 100 km"], richtig: 0, erklaerung: "Doppelt so viele Karten kosten doppelt so viel." },
        { typ: "mc", frage: "Tabelle: x = 2, 4, 6 und y = 12, 6, 4. Welche Zuordnung?", optionen: ["antiproportional (Produkt immer 24)", "proportional (Quotient immer 6)", "weder noch", "proportional (Summe immer 14)"], richtig: 0, erklaerung: "2·12 = 4·6 = 6·4 = 24 → antiproportional." },
        { typ: "mc", frage: "Wie sieht der Graph einer proportionalen Zuordnung aus?", optionen: ["Gerade durch den Ursprung", "fallende Kurve", "waagerechte Gerade", "Parabel"], richtig: 0, erklaerung: "Proportional = Ursprungsgerade." },
        { typ: "input", frage: "Ein Auto fährt mit 60 km/h 2 Stunden. Wie lange braucht es für dieselbe Strecke mit 80 km/h? (in Stunden, Dezimalzahl)", antworten: ["1,5", "1.5"], numerisch: true, erklaerung: "60 · 2 = 120 km → 120 : 80 = 1,5 h." },
        { typ: "input", frage: "3 kg Kartoffeln kosten 2,40 €. Was kosten 5 kg? (in €)", antworten: ["4", "4 €", "4,00"], numerisch: true, erklaerung: "1 kg = 0,80 € → 5 kg = 4 €." },
        { typ: "tf", frage: "Bei einer antiproportionalen Zuordnung ist der Quotient y : x immer gleich.", richtig: false, erklaerung: "Bei antiproportional ist das PRODUKT konstant, bei proportional der Quotient." }
      ]
    },
    {
      id: "terme-gleichungen",
      titel: "Terme und lineare Gleichungen",
      minuten: 12,
      themen: ["Variablen", "Äquivalenzumformung", "Probe"],
      lesen: [
        { h: "Terme vereinfachen", p: [
          "Ein <b>Term</b> ist ein Rechenausdruck mit Zahlen und Variablen: 3x + 5. Gleichartige Glieder darf man zusammenfassen: 3x + 2x = 5x; 4a − a + 7 = 3a + 7. Aber: 3x + 2 bleibt so (x und Zahl sind nicht gleichartig).",
          "<b>Klammern auflösen</b>: 2 · (x + 4) = 2x + 8 (Distributivgesetz). Minus vor der Klammer dreht alle Vorzeichen: 5 − (x − 3) = 5 − x + 3 = 8 − x." ],
          beispiel: "Termwert berechnen: T(x) = 3x − 4 für x = 5 → 3 · 5 − 4 = 11." },
        { h: "Gleichungen lösen", p: [
          "Eine <b>Gleichung</b> ist wie eine Waage: Was du auf der einen Seite tust, musst du auch auf der anderen tun (<b>Äquivalenzumformung</b>).",
          "Ziel: x allein auf eine Seite bringen. 3x + 5 = 20 | −5 → 3x = 15 | :3 → x = 5.",
          "Variablen auf beiden Seiten: 5x − 4 = 2x + 8 | −2x → 3x − 4 = 8 | +4 → 3x = 12 | :3 → x = 4." ] },
        { h: "Probe und Sachaufgaben", p: [
          "<b>Probe</b>: Lösung einsetzen: 5 · 4 − 4 = 16 und 2 · 4 + 8 = 16 ✓.",
          "Sachaufgabe: „Anna hat 3 € mehr als Ben, zusammen 25 €.“ → Ben = x, Anna = x + 3 → x + x + 3 = 25 → 2x = 22 → x = 11. Ben hat 11 €, Anna 14 €." ] }
      ],
      merken: [
        "Nur gleichartige Glieder zusammenfassen: 3x + 2x = 5x, aber 3x + 2 bleibt.",
        "Klammer: 2(x + 4) = 2x + 8. Minus vor der Klammer dreht alle Vorzeichen.",
        "Gleichung = Waage: auf beiden Seiten dasselbe tun, bis x allein steht.",
        "Immer Probe machen: Lösung einsetzen, beide Seiten müssen gleich sein."
      ],
      aufgaben: [
        { typ: "input", frage: "Vereinfache: 4x + 3x − x = ?", antworten: ["6x"], erklaerung: "4 + 3 − 1 = 6 → 6x." },
        { typ: "input", frage: "Löse: 2x + 7 = 19. x = ?", antworten: ["6"], numerisch: true, erklaerung: "2x = 12 → x = 6." },
        { typ: "input", frage: "Löse: 5x − 3 = 3x + 9. x = ?", antworten: ["6"], numerisch: true, erklaerung: "2x − 3 = 9 → 2x = 12 → x = 6." },
        { typ: "mc", frage: "Löse die Klammer auf: 3 · (2x − 5)", optionen: ["6x − 15", "6x − 5", "5x − 15", "6x + 15"], richtig: 0, erklaerung: "3 · 2x = 6x und 3 · (−5) = −15." },
        { typ: "mc", frage: "Vereinfache: 7 − (x − 2)", optionen: ["9 − x", "5 − x", "9 + x", "5 + x"], richtig: 0, erklaerung: "Minus vor der Klammer: 7 − x + 2 = 9 − x." },
        { typ: "input", frage: "Berechne den Termwert von 4x − 3 für x = −2.", antworten: ["-11", "−11"], numerisch: true, erklaerung: "4 · (−2) − 3 = −8 − 3 = −11." },
        { typ: "input", frage: "Löse: x/4 = 7. x = ?", antworten: ["28"], numerisch: true, erklaerung: "Beide Seiten mal 4: x = 28." },
        { typ: "mc", frage: "Lena ist 4 Jahre älter als Tom. Zusammen sind sie 30. Wie alt ist Tom?", optionen: ["13", "17", "15", "11"], richtig: 0, erklaerung: "x + (x + 4) = 30 → 2x = 26 → x = 13." }
      ]
    },
    {
      id: "winkel-dreiecke",
      titel: "Winkel, Dreiecke und Kongruenz",
      minuten: 12,
      themen: ["Winkelsätze", "Dreiecksarten", "Kongruenzsätze"],
      lesen: [
        { h: "Winkel an Geraden", p: [
          "<b>Nebenwinkel</b> ergänzen sich zu 180°. <b>Scheitelwinkel</b> (gegenüberliegend an sich schneidenden Geraden) sind gleich groß.",
          "Schneidet eine Gerade zwei <b>parallele</b> Geraden, sind <b>Stufenwinkel</b> (F-Form) und <b>Wechselwinkel</b> (Z-Form) gleich groß.",
          "<b>Innenwinkelsumme</b> im Dreieck: 180°. Im Viereck: 360°. Allgemein im n-Eck: (n − 2) · 180°." ],
          beispiel: "Dreieck mit α = 50° und β = 60° → γ = 180° − 50° − 60° = 70°." },
        { h: "Dreiecksarten", p: [
          "Nach Seiten: <b>gleichseitig</b> (alle Seiten gleich, alle Winkel 60°), <b>gleichschenklig</b> (zwei gleiche Schenkel, zwei gleiche Basiswinkel), <b>unregelmäßig</b>.",
          "Nach Winkeln: <b>spitzwinklig</b> (alle < 90°), <b>rechtwinklig</b> (ein Winkel = 90°), <b>stumpfwinklig</b> (ein Winkel > 90°).",
          "<b>Dreiecksungleichung</b>: Jede Seite ist kürzer als die Summe der beiden anderen – sonst gibt es kein Dreieck (3 cm, 4 cm, 9 cm geht nicht)." ] },
        { h: "Kongruenz und Konstruktion", p: [
          "Zwei Figuren sind <b>kongruent</b> (deckungsgleich), wenn sie in Form und Größe übereinstimmen. Ein Dreieck ist eindeutig konstruierbar nach den <b>Kongruenzsätzen</b>: <b>SSS</b> (drei Seiten), <b>SWS</b> (zwei Seiten und der eingeschlossene Winkel), <b>WSW</b> (eine Seite und die beiden anliegenden Winkel), <b>SsW</b> (zwei Seiten und der Winkel gegenüber der längeren Seite).",
          "<b>Besondere Linien</b>: Die <b>Mittelsenkrechte</b> steht senkrecht auf der Seitenmitte (Schnittpunkt = Umkreismittelpunkt). Die <b>Höhe</b> geht vom Eckpunkt senkrecht auf die gegenüberliegende Seite. Die <b>Seitenhalbierende</b> verbindet Eckpunkt und Mitte der gegenüberliegenden Seite." ] }
      ],
      merken: [
        "Nebenwinkel: 180°. Scheitelwinkel gleich. Stufen-/Wechselwinkel an Parallelen gleich.",
        "Winkelsumme Dreieck 180°, Viereck 360°.",
        "Kongruenzsätze: SSS, SWS, WSW, SsW.",
        "Gleichschenklig: zwei gleiche Schenkel und zwei gleiche Basiswinkel. Gleichseitig: 3 × 60°."
      ],
      aufgaben: [
        { typ: "input", frage: "In einem Dreieck sind α = 35° und β = 85°. Wie groß ist γ? (nur die Zahl)", antworten: ["60", "60°"], numerisch: true, erklaerung: "180 − 35 − 85 = 60°." },
        { typ: "input", frage: "Ein Winkel misst 118°. Wie groß ist sein Nebenwinkel?", antworten: ["62", "62°"], numerisch: true, erklaerung: "180 − 118 = 62°." },
        { typ: "mc", frage: "Zwei Seiten und der von ihnen eingeschlossene Winkel sind gegeben. Welcher Kongruenzsatz?", optionen: ["SWS", "SSS", "WSW", "SsW"], richtig: 0, erklaerung: "Seite–Winkel–Seite = SWS." },
        { typ: "mc", frage: "Ein gleichschenkliges Dreieck hat einen Winkel von 40° an der Spitze. Wie groß sind die Basiswinkel?", optionen: ["je 70°", "je 40°", "je 50°", "je 140°"], richtig: 0, erklaerung: "(180 − 40) : 2 = 70°." },
        { typ: "mc", frage: "Gibt es ein Dreieck mit den Seiten 2 cm, 3 cm und 6 cm?", optionen: ["Nein, 2 + 3 < 6 verletzt die Dreiecksungleichung", "Ja, immer", "Ja, aber nur rechtwinklig", "Nur wenn es gleichschenklig ist"], richtig: 0, erklaerung: "Die beiden kurzen Seiten reichen nicht bis zusammen." },
        { typ: "input", frage: "Wie groß ist die Innenwinkelsumme eines Fünfecks? (in Grad)", antworten: ["540", "540°"], numerisch: true, erklaerung: "(5 − 2) · 180° = 540°." },
        { typ: "mc", frage: "Welche Linie steht senkrecht auf einer Seite und geht durch deren Mittelpunkt?", optionen: ["Mittelsenkrechte", "Höhe", "Seitenhalbierende", "Winkelhalbierende"], richtig: 0, erklaerung: "Mittelsenkrechte = senkrecht + durch die Mitte." },
        { typ: "tf", frage: "Scheitelwinkel sind immer gleich groß.", richtig: true, erklaerung: "Gegenüberliegende Winkel an sich schneidenden Geraden sind gleich." }
      ]
    },
    {
      id: "flaechen-koerper",
      titel: "Flächen, Prismen und Kreise",
      minuten: 12,
      themen: ["Dreieck", "Parallelogramm", "Prisma", "Kreis"],
      lesen: [
        { h: "Flächen berechnen", p: [
          "<b>Rechteck</b>: A = a · b. <b>Parallelogramm</b>: A = g · h (Grundseite mal Höhe – die Höhe steht senkrecht!). <b>Dreieck</b>: A = ½ · g · h (halbes Parallelogramm). <b>Trapez</b>: A = ½ · (a + c) · h (Mittelwert der parallelen Seiten mal Höhe).",
          "Zusammengesetzte Figuren zerlegst du in Rechtecke und Dreiecke und addierst." ],
          beispiel: "Dreieck mit g = 8 cm und h = 5 cm: A = ½ · 8 · 5 = 20 cm²." },
        { h: "Prismen", p: [
          "Ein <b>Prisma</b> hat zwei gleiche, parallele Grundflächen (z. B. Dreieck) und rechteckige Seitenflächen. Der Quader ist ein Prisma mit Rechteck-Grundfläche.",
          "<b>Volumen</b>: V = Grundfläche · Höhe (V = G · h). <b>Oberfläche</b>: O = 2 · G + Mantel (Mantel = Umfang der Grundfläche · Höhe).",
          "Einheiten: 1 dm³ = 1 Liter = 1000 cm³; 1 m³ = 1000 dm³." ] },
        { h: "Der Kreis", p: [
          "<b>Umfang</b> u = π · d = 2 · π · r. <b>Fläche</b> A = π · r². Mit π ≈ 3,14 (zum Kopfrechnen oft π ≈ 3).",
          "r = 10 cm → u ≈ 62,8 cm, A ≈ 314 cm². Halber Kreis: Fläche halbieren." ] }
      ],
      merken: [
        "Dreieck A = ½ · g · h. Parallelogramm A = g · h. Trapez A = ½ · (a + c) · h.",
        "Prisma: V = G · h, O = 2 G + Mantel.",
        "Kreis: u = 2πr, A = πr², π ≈ 3,14.",
        "1 Liter = 1 dm³ = 1000 cm³."
      ],
      aufgaben: [
        { typ: "input", frage: "Dreieck mit Grundseite 10 cm und Höhe 6 cm. Flächeninhalt in cm²?", antworten: ["30"], numerisch: true, erklaerung: "½ · 10 · 6 = 30 cm²." },
        { typ: "input", frage: "Parallelogramm mit g = 7 cm und h = 4 cm. Flächeninhalt in cm²?", antworten: ["28"], numerisch: true, erklaerung: "7 · 4 = 28 cm²." },
        { typ: "input", frage: "Trapez mit a = 8 cm, c = 4 cm, h = 5 cm. Flächeninhalt in cm²?", antworten: ["30"], numerisch: true, erklaerung: "½ · (8 + 4) · 5 = 6 · 5 = 30 cm²." },
        { typ: "input", frage: "Ein Prisma hat die Grundfläche 12 cm² und die Höhe 10 cm. Volumen in cm³?", antworten: ["120"], numerisch: true, erklaerung: "V = G · h = 120 cm³." },
        { typ: "mc", frage: "Umfang eines Kreises mit Radius 5 cm (π ≈ 3,14)?", optionen: ["ca. 31,4 cm", "ca. 15,7 cm", "ca. 78,5 cm", "ca. 10 cm"], richtig: 0, erklaerung: "u = 2 · 3,14 · 5 = 31,4 cm." },
        { typ: "mc", frage: "Fläche eines Kreises mit Radius 2 cm (π ≈ 3,14)?", optionen: ["ca. 12,56 cm²", "ca. 6,28 cm²", "ca. 25,12 cm²", "ca. 4 cm²"], richtig: 0, erklaerung: "A = 3,14 · 2² = 12,56 cm²." },
        { typ: "input", frage: "Wie viele cm³ sind 2,5 Liter?", antworten: ["2500"], numerisch: true, erklaerung: "1 l = 1000 cm³ → 2500 cm³." },
        { typ: "tf", frage: "Beim Parallelogramm rechnet man Grundseite mal Schenkel (schräge Seite).", richtig: false, erklaerung: "Grundseite mal HÖHE – die Höhe steht senkrecht auf der Grundseite." }
      ]
    },
    {
      id: "daten-zufall",
      titel: "Daten und Wahrscheinlichkeit",
      minuten: 12,
      themen: ["Mittelwert", "Median", "Laplace", "Häufigkeit"],
      lesen: [
        { h: "Daten auswerten", p: [
          "<b>Arithmetisches Mittel</b> (Durchschnitt): alle Werte addieren, durch die Anzahl teilen. Noten 2, 3, 3, 4 → (2+3+3+4) : 4 = 3.",
          "<b>Median</b> (Zentralwert): Werte der Größe nach ordnen, der mittlere Wert (bei gerader Anzahl: Mittel der beiden mittleren). <b>Modalwert</b>: der häufigste Wert.",
          "<b>Absolute Häufigkeit</b>: wie oft etwas vorkommt (z. B. 6-mal). <b>Relative Häufigkeit</b>: Anteil an allen (6 von 20 = 0,3 = 30 %). Kreisdiagramm: 100 % = 360°, also 30 % = 108°." ],
          beispiel: "Werte 5, 1, 9, 3, 7 → geordnet 1, 3, 5, 7, 9 → Median 5, Mittelwert 25 : 5 = 5." },
        { h: "Wahrscheinlichkeit", p: [
          "Ein <b>Zufallsexperiment</b> hat mehrere mögliche <b>Ergebnisse</b> (Würfel: 1–6). Ein <b>Ereignis</b> fasst Ergebnisse zusammen („gerade Zahl“ = {2, 4, 6}).",
          "<b>Laplace-Regel</b> (alle Ergebnisse gleich wahrscheinlich): P(E) = günstige : mögliche. P(gerade Zahl) = 3/6 = ½.",
          "<b>Summenregel</b>: P(1 oder 6) = 1/6 + 1/6 = 2/6 = 1/3. Gegenereignis: P(nicht 6) = 1 − 1/6 = 5/6." ] },
        { h: "Gesetz der großen Zahlen", p: [
          "Je öfter man ein Experiment wiederholt, desto näher kommt die relative Häufigkeit der Wahrscheinlichkeit. Bei 600 Würfen erwartet man etwa 100 Sechsen – nicht genau, aber ungefähr.",
          "Wahrscheinlichkeiten liegen immer zwischen 0 (unmöglich) und 1 (sicher)." ] }
      ],
      merken: [
        "Mittelwert = Summe : Anzahl. Median = mittlerer Wert der geordneten Liste. Modalwert = häufigster Wert.",
        "Relative Häufigkeit = Anzahl : Gesamtzahl (als Bruch, Dezimalzahl oder Prozent).",
        "Laplace: P = günstige : mögliche Ergebnisse.",
        "Gegenereignis: P(nicht E) = 1 − P(E)."
      ],
      aufgaben: [
        { typ: "input", frage: "Mittelwert von 4, 7, 9, 12?", antworten: ["8"], numerisch: true, erklaerung: "32 : 4 = 8." },
        { typ: "input", frage: "Median von 8, 2, 5, 11, 3?", antworten: ["5"], numerisch: true, erklaerung: "Geordnet: 2, 3, 5, 8, 11 → Mitte: 5." },
        { typ: "input", frage: "Wahrscheinlichkeit, mit einem Würfel eine Zahl größer als 4 zu würfeln? (als Bruch, z. B. 1/2)", antworten: ["1/3", "2/6"], erklaerung: "Günstig: 5, 6 → 2 von 6 = 1/3." },
        { typ: "mc", frage: "In einer Urne sind 3 rote und 5 blaue Kugeln. P(rot)?", optionen: ["3/8", "3/5", "5/8", "1/3"], richtig: 0, erklaerung: "3 günstige von 8 möglichen." },
        { typ: "input", frage: "P(keine 6) beim einmaligen Würfeln? (als Bruch)", antworten: ["5/6"], erklaerung: "1 − 1/6 = 5/6." },
        { typ: "mc", frage: "Von 40 Kindern haben 10 ein Haustier. Relative Häufigkeit?", optionen: ["25 %", "10 %", "40 %", "4 %"], richtig: 0, erklaerung: "10/40 = 1/4 = 25 %." },
        { typ: "mc", frage: "Welcher Winkel gehört im Kreisdiagramm zu 25 %?", optionen: ["90°", "25°", "180°", "45°"], richtig: 0, erklaerung: "25 % von 360° = 90°." },
        { typ: "mc", frage: "Eine Münze wird 1000-mal geworfen. Was erwartest du?", optionen: ["ungefähr 500-mal Kopf, nicht unbedingt genau", "genau 500-mal Kopf", "immer mehr Kopf als Zahl", "das lässt sich nicht abschätzen"], richtig: 0, erklaerung: "Gesetz der großen Zahlen: relative Häufigkeit nähert sich 0,5." }
      ]
    }
  ]
};
