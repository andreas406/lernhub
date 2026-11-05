window.K7_DATA = {
  id: "k7-chemie",
  fach: "Chemie",
  icon: "CH",
  untertitel: "Klasse 7 Gymnasium · Rahmenlehrplan Berlin-Brandenburg, Themenfelder 3.1–3.4 (Doppeljahrgang 7/8)",
  stand: "November 2026",
  quelle: { titel: "Rahmenlehrplan Teil C Chemie (Jgst. 7–10), Themenfelder 3.1 Faszination Chemie, 3.2 PSE, 3.3 Gase, 3.4 Wasser", url: "https://bildungsserver.berlin-brandenburg.de/fileadmin/bbb/unterricht/rahmenlehrplaene/Rahmenlehrplanprojekt/amtliche_Fassung/Teil_C_Chemie_2015_11_10.pdf" },
  bloecke: [
    {
      id: "stoffe-sicherheit",
      titel: "Stoffe, Eigenschaften und Sicherheit im Labor",
      minuten: 10,
      themen: ["Stoffeigenschaften", "Gefahrensymbole", "Brenner"],
      lesen: [
        { h: "Womit sich Chemie beschäftigt", p: [
          "Chemie untersucht <b>Stoffe</b>, ihre Eigenschaften und wie sie sich in andere Stoffe <b>umwandeln</b>. Ein Stoff erkennt man an seinen <b>Eigenschaften</b>: Farbe, Geruch, Aggregatzustand, Schmelz- und Siedetemperatur, Dichte, Löslichkeit, Leitfähigkeit, Brennbarkeit, Magnetisierbarkeit.",
          "<b>Reinstoffe</b> bestehen aus einer Stoffart (Wasser, Eisen, Zucker). <b>Gemische</b> enthalten mehrere (Luft, Salzwasser, Milch). Trennverfahren: Filtrieren, Eindampfen, Destillieren, Magnetscheiden, Chromatografie." ] },
        { h: "Sicher arbeiten", p: [
          "Regeln: Schutzbrille, lange Haare zusammenbinden, nicht essen oder trinken, nie am Reagenzglas direkt riechen (zufächeln), Reagenzglasöffnung nie auf Menschen richten, Experimente nur nach Anweisung.",
          "<b>GHS-Gefahrenpiktogramme</b> (rote Raute): Flamme = entzündbar, Flamme über Kreis = brandfördernd, Totenkopf = giftig, ätzende Hand/Metall = ätzend, Ausrufezeichen = reizend/gesundheitsschädlich, explodierende Bombe = explosiv, Fisch/Baum = umweltgefährlich, Gasflasche = Gas unter Druck." ] },
        { h: "Der Gasbrenner", p: [
          "Anzünden: Luftzufuhr schließen, Gashahn öffnen, anzünden → <b>leuchtende, gelbe Flamme</b> (kühler, rußt – Sicherheitsflamme). Luftzufuhr öffnen → <b>nicht leuchtende, blaue Flamme</b> (heiß, zum Erhitzen). Die heißeste Stelle ist knapp über dem inneren blauen Kegel.",
          "Ausschalten: erst Luftzufuhr schließen, dann Gashahn." ] }
      ],
      merken: [
        "Stoffeigenschaften: Farbe, Geruch, Schmelz-/Siedetemperatur, Dichte, Löslichkeit, Leitfähigkeit, Brennbarkeit.",
        "Reinstoff = eine Stoffart; Gemisch = mehrere (Luft, Salzwasser).",
        "Schutzbrille, nicht essen, Reagenzglas nie auf Menschen richten.",
        "Brenner: gelbe Flamme = Sicherheitsflamme, blaue Flamme = heiß."
      ],
      aufgaben: [
        { typ: "mc", frage: "Welches ist ein Gemisch?", optionen: ["Luft", "destilliertes Wasser", "Eisen", "Zucker"], richtig: 0, erklaerung: "Luft besteht aus Stickstoff, Sauerstoff, Argon, CO₂ …" },
        { typ: "mc", frage: "Welche Flamme des Brenners ist zum Erhitzen geeignet?", optionen: ["die blaue, nicht leuchtende", "die gelbe, leuchtende", "beide gleich", "keine"], richtig: 0, erklaerung: "Blau = heiß; gelb = kühlere Sicherheitsflamme, rußt." },
        { typ: "mc", frage: "Was bedeutet das Gefahrensymbol „Flamme“?", optionen: ["entzündbar", "ätzend", "giftig", "umweltgefährlich"], richtig: 0, erklaerung: "Flamme = leicht entzündbar." },
        { typ: "mc", frage: "Wie riecht man vorsichtig an einem Stoff?", optionen: ["mit der Hand den Geruch zufächeln", "Nase direkt über das Reagenzglas", "tief einatmen", "gar nicht erlaubt"], richtig: 0, erklaerung: "Zufächeln – nie direkt riechen." },
        { typ: "mc", frage: "Mit welchem Verfahren trennt man Sand von Wasser?", optionen: ["Filtrieren", "Destillieren", "Magnetscheiden", "Chromatografie"], richtig: 0, erklaerung: "Sand bleibt im Filter zurück." },
        { typ: "mc", frage: "Wie gewinnt man Salz aus Salzwasser zurück?", optionen: ["Eindampfen", "Filtrieren", "Magnetscheiden", "Sieben"], richtig: 0, erklaerung: "Wasser verdampft, Salz bleibt zurück." },
        { typ: "mc", frage: "Welche Eigenschaft ist KEINE Stoffeigenschaft?", optionen: ["die Form des Körpers", "die Siedetemperatur", "die Dichte", "die Löslichkeit"], richtig: 0, erklaerung: "Form ist eine Eigenschaft des Gegenstands, nicht des Stoffes." },
        { typ: "tf", frage: "Beim Ausschalten des Brenners schließt man zuerst den Gashahn, dann die Luftzufuhr.", richtig: false, erklaerung: "Erst Luftzufuhr schließen, dann Gashahn." }
      ]
    },
    {
      id: "chemische-reaktion",
      titel: "Chemische Reaktion und Verbrennung",
      minuten: 12,
      themen: ["Edukt/Produkt", "exotherm/endotherm", "Oxidation"],
      lesen: [
        { h: "Was eine chemische Reaktion ist", p: [
          "Bei einer <b>chemischen Reaktion</b> entstehen aus Ausgangsstoffen (<b>Edukte</b>) neue Stoffe (<b>Produkte</b>) mit neuen Eigenschaften. Beispiel: Eisen + Schwefel → Eisensulfid (graues, nicht magnetisches Produkt).",
          "Ein <b>physikalischer Vorgang</b> (Schmelzen, Lösen, Zerkleinern) ändert nur die Form oder den Zustand – der Stoff bleibt derselbe.",
          "<b>Wortgleichung</b>: Edukte links, Pfeil, Produkte rechts: Magnesium + Sauerstoff → Magnesiumoxid. Auf <b>Teilchenebene</b>: Die Atome werden neu gruppiert, kein Atom geht verloren – deshalb gilt das <b>Gesetz von der Erhaltung der Masse</b>: Masse der Edukte = Masse der Produkte." ] },
        { h: "Energie bei Reaktionen", p: [
          "<b>Exotherm</b>: Energie wird abgegeben (Wärme, Licht) – Verbrennung, Knallgasreaktion. <b>Endotherm</b>: Energie muss dauernd zugeführt werden – z. B. Zersetzung von Zucker beim Erhitzen.",
          "Fast jede Reaktion braucht am Anfang einen Anstoß: die <b>Aktivierungsenergie</b> (Streichholz für die Kerze). Danach läuft eine exotherme Reaktion von allein weiter." ],
          beispiel: "Energiediagramm: Edukte oben, Produkte unten = exotherm (Energie wird frei). Produkte höher als Edukte = endotherm." },
        { h: "Verbrennung = Oxidation", p: [
          "<b>Verbrennung</b> ist die Reaktion eines Stoffes mit <b>Sauerstoff</b> unter Abgabe von Energie. Allgemein heißt die Vereinigung mit Sauerstoff <b>Oxidation</b>, die Produkte sind <b>Oxide</b>: Magnesium + Sauerstoff → Magnesiumoxid; Kohlenstoff + Sauerstoff → Kohlenstoffdioxid.",
          "<b>Metalloxide</b> (Magnesiumoxid, Eisenoxid = Rost) sind meist fest. <b>Nichtmetalloxide</b> (Kohlenstoffdioxid, Schwefeldioxid) sind oft gasförmig.",
          "<b>Feuerdreieck</b>: Brennstoff, Sauerstoff und Entzündungstemperatur. Fehlt eines, erlischt das Feuer – darauf beruht das Löschen (ersticken, kühlen, Brennstoff entfernen). Fettbrand nie mit Wasser löschen!" ] }
      ],
      merken: [
        "Chemische Reaktion: neue Stoffe mit neuen Eigenschaften. Edukte → Produkte.",
        "Massenerhaltung: Atome werden nur umgruppiert, Masse bleibt gleich.",
        "Exotherm = gibt Energie ab, endotherm = braucht Energie. Aktivierungsenergie = Anstoß.",
        "Oxidation = Reaktion mit Sauerstoff → Oxide. Feuerdreieck: Brennstoff, Sauerstoff, Temperatur."
      ],
      aufgaben: [
        { typ: "mc", frage: "Welcher Vorgang ist eine chemische Reaktion?", optionen: ["Holz verbrennt", "Eis schmilzt", "Zucker löst sich in Tee", "Papier wird zerschnitten"], richtig: 0, erklaerung: "Beim Verbrennen entstehen neue Stoffe (CO₂, Wasser, Asche)." },
        { typ: "mc", frage: "In „Magnesium + Sauerstoff → Magnesiumoxid“ ist Magnesiumoxid das …", optionen: ["Produkt", "Edukt", "Katalysator", "Lösungsmittel"], richtig: 0, erklaerung: "Rechts vom Pfeil stehen die Produkte." },
        { typ: "mc", frage: "Eine Reaktion gibt Wärme und Licht ab. Sie ist …", optionen: ["exotherm", "endotherm", "physikalisch", "neutral"], richtig: 0, erklaerung: "Energieabgabe = exotherm." },
        { typ: "input", frage: "Wie heißt der Energie-Anstoß, den eine Reaktion zum Starten braucht?", antworten: ["Aktivierungsenergie"], erklaerung: "Aktivierungsenergie, z. B. die Streichholzflamme." },
        { typ: "mc", frage: "Was sagt das Gesetz von der Erhaltung der Masse?", optionen: ["Masse der Edukte = Masse der Produkte", "Produkte sind immer schwerer", "Bei Verbrennungen verschwindet Masse", "Nur Metalle behalten ihre Masse"], richtig: 0, erklaerung: "Atome gehen nicht verloren, sie werden umgruppiert." },
        { typ: "mc", frage: "Wie heißt das Produkt der Reaktion von Kohlenstoff mit Sauerstoff?", optionen: ["Kohlenstoffdioxid", "Kohlenstoffoxid-Wasser", "Carbonat", "Kohlenstoffsulfid"], richtig: 0, erklaerung: "C + O₂ → CO₂." },
        { typ: "mc", frage: "Welche drei Dinge braucht ein Feuer?", optionen: ["Brennstoff, Sauerstoff, Entzündungstemperatur", "Holz, Wasser, Luft", "Brennstoff, Stickstoff, Wärme", "Sauerstoff, Kohlenstoffdioxid, Funken"], richtig: 0, erklaerung: "Feuerdreieck – fehlt eins, geht das Feuer aus." },
        { typ: "tf", frage: "Rost ist ein Metalloxid, das bei der langsamen Oxidation von Eisen entsteht.", richtig: true, erklaerung: "Eisen + Sauerstoff (+ Wasser) → Eisenoxid (Rost)." }
      ]
    },
    {
      id: "atombau-pse",
      titel: "Atombau und Periodensystem",
      minuten: 12,
      themen: ["Kern-Hülle-Modell", "Protonen/Elektronen", "Hauptgruppen"],
      lesen: [
        { h: "Elemente und Symbole", p: [
          "Ein <b>Element</b> ist ein Stoff, der nur aus einer Atomsorte besteht. Jedes Element hat ein <b>Symbol</b>: H Wasserstoff, He Helium, C Kohlenstoff, N Stickstoff, O Sauerstoff, Na Natrium, Mg Magnesium, Al Aluminium, S Schwefel, Cl Chlor, K Kalium, Ca Calcium, Fe Eisen, Cu Kupfer, Zn Zink, Ag Silber, Au Gold.",
          "Eine <b>Verbindung</b> besteht aus mehreren Elementen (Wasser H₂O, Kohlenstoffdioxid CO₂, Kochsalz NaCl)." ] },
        { h: "Kern-Hülle-Modell", p: [
          "Ein Atom hat einen winzigen, schweren <b>Kern</b> aus <b>Protonen</b> (positiv) und <b>Neutronen</b> (neutral) und eine <b>Hülle</b> mit <b>Elektronen</b> (negativ). Ein Atom ist nach außen neutral: Protonenzahl = Elektronenzahl.",
          "Die <b>Protonenzahl</b> (Ordnungszahl) macht das Element aus: 1 Proton = Wasserstoff, 6 = Kohlenstoff, 8 = Sauerstoff. <b>Isotope</b> sind Atome desselben Elements mit verschiedener Neutronenzahl.",
          "Rutherfords Streuversuch (1911) zeigte: Atome sind fast leer, die Masse sitzt im winzigen Kern." ],
          beispiel: "Sauerstoff: Ordnungszahl 8 → 8 Protonen, 8 Elektronen; Massenzahl 16 → 16 − 8 = 8 Neutronen." },
        { h: "Das Periodensystem (PSE)", p: [
          "Die Elemente sind nach steigender Protonenzahl geordnet. <b>Perioden</b> (Zeilen) = Anzahl der Elektronenschalen. <b>Hauptgruppen</b> (Spalten I–VIII) = Anzahl der <b>Außenelektronen (Valenzelektronen)</b>. Elemente einer Gruppe reagieren ähnlich.",
          "Schalenmodell: 1. Schale maximal 2 Elektronen, 2. Schale maximal 8, 3. Schale 8 (für die ersten 20 Elemente). Natrium (11): 2 – 8 – 1 → 1 Außenelektron → I. Hauptgruppe (Alkalimetalle).",
          "Wichtige Gruppen: I Alkalimetalle (sehr reaktiv), II Erdalkalimetalle, VII Halogene (Chlor, Fluor), VIII <b>Edelgase</b> (Helium, Neon, Argon – volle Außenschale, reagieren fast nicht). Links/Mitte: Metalle, rechts oben: Nichtmetalle." ] }
      ],
      merken: [
        "Atom = Kern (Protonen +, Neutronen) + Hülle (Elektronen −). Protonenzahl = Elektronenzahl = Ordnungszahl.",
        "Periode = Anzahl Schalen, Hauptgruppe = Anzahl Außenelektronen.",
        "Schalen: 2 – 8 – 8. Edelgase haben volle Außenschale und reagieren kaum.",
        "Symbole: H, C, N, O, Na, Mg, Al, S, Cl, K, Ca, Fe, Cu."
      ],
      aufgaben: [
        { typ: "input", frage: "Wie lautet das Elementsymbol für Natrium?", antworten: ["Na"], erklaerung: "Na (lateinisch natrium)." },
        { typ: "input", frage: "Welches Element hat das Symbol Fe?", antworten: ["Eisen"], erklaerung: "Fe = ferrum = Eisen." },
        { typ: "mc", frage: "Welche Teilchen befinden sich im Atomkern?", optionen: ["Protonen und Neutronen", "Protonen und Elektronen", "nur Elektronen", "Neutronen und Elektronen"], richtig: 0, erklaerung: "Elektronen sind in der Hülle." },
        { typ: "input", frage: "Ein Atom hat 12 Protonen. Wie viele Elektronen hat es (als neutrales Atom)?", antworten: ["12"], numerisch: true, erklaerung: "Protonenzahl = Elektronenzahl." },
        { typ: "mc", frage: "Chlor steht in der 3. Periode, VII. Hauptgruppe. Was folgt daraus?", optionen: ["3 Schalen, 7 Außenelektronen", "7 Schalen, 3 Außenelektronen", "3 Protonen, 7 Neutronen", "7 Protonen"], richtig: 0, erklaerung: "Periode = Schalen, Hauptgruppe = Außenelektronen." },
        { typ: "mc", frage: "Warum reagieren Edelgase fast nicht?", optionen: ["Ihre Außenschale ist voll besetzt", "Sie haben keine Elektronen", "Sie sind zu schwer", "Sie haben keinen Kern"], richtig: 0, erklaerung: "Volle Außenschale = stabil (Edelgaskonfiguration)." },
        { typ: "mc", frage: "Was unterscheidet die Isotope eines Elements?", optionen: ["die Zahl der Neutronen", "die Zahl der Protonen", "die Zahl der Elektronen", "das Symbol"], richtig: 0, erklaerung: "Gleiche Protonenzahl, verschiedene Neutronenzahl." },
        { typ: "mc", frage: "Natrium (Ordnungszahl 11): Wie verteilen sich die Elektronen auf die Schalen?", optionen: ["2 – 8 – 1", "8 – 2 – 1", "2 – 9", "1 – 8 – 2"], richtig: 0, erklaerung: "1. Schale 2, 2. Schale 8, Rest 1 → I. Hauptgruppe." }
      ]
    },
    {
      id: "gase",
      titel: "Luft, Gase und Nachweise",
      minuten: 12,
      themen: ["Luftzusammensetzung", "Glimmspanprobe", "Knallgasprobe", "Moleküle"],
      lesen: [
        { h: "Die Luft", p: [
          "Luft ist ein Gemisch: etwa <b>78 % Stickstoff</b> (N₂), <b>21 % Sauerstoff</b> (O₂), <b>1 % Argon</b> und ca. <b>0,04 % Kohlenstoffdioxid</b> (CO₂) sowie Wasserdampf.",
          "Den Sauerstoffgehalt bestimmt man z. B. durch Verbrennen in einem abgeschlossenen Volumen: Es wird etwa ein Fünftel der Luft verbraucht." ] },
        { h: "Drei wichtige Gase und ihre Nachweise", p: [
          "<b>Sauerstoff</b> O₂: farblos, geruchlos, fördert Verbrennung (brandfördernd). Nachweis: <b>Glimmspanprobe</b> – ein glimmender Holzspan flammt wieder auf.",
          "<b>Wasserstoff</b> H₂: leichtestes Gas, sehr gut brennbar. Nachweis: <b>Knallgasprobe</b> – Reagenzglas an die Flamme halten; ein pfeifendes Geräusch zeigt Wasserstoff (Reaktion mit Sauerstoff zu Wasser). Hindenburg-Unglück 1937!",
          "<b>Kohlenstoffdioxid</b> CO₂: schwerer als Luft, erstickt Flammen (Feuerlöscher), entsteht bei jeder Verbrennung und beim Ausatmen. Nachweis: <b>Kalkwasserprobe</b> – klares Kalkwasser trübt sich milchig-weiß." ],
          beispiel: "Merke: Glimmspan → Sauerstoff, Knallgas → Wasserstoff, Kalkwasser → Kohlenstoffdioxid." },
        { h: "Moleküle und Elektronenpaarbindung", p: [
          "Gase wie H₂, O₂, N₂, Cl₂ bestehen aus <b>Molekülen</b> – zwei Atome teilen sich Elektronenpaare (<b>Elektronenpaarbindung/Atombindung</b>). So erreicht jedes Atom eine volle Außenschale (<b>Oktettregel</b>: 8 Außenelektronen, Wasserstoff 2).",
          "In der <b>Lewis-Schreibweise</b> werden Außenelektronen als Punkte und Elektronenpaare als Striche gezeichnet: H–H, O=O (Doppelbindung), N≡N (Dreifachbindung). CO₂: O=C=O. Methan CH₄: ein C mit vier H.",
          "<b>Luftverschmutzung</b>: Schwefeldioxid und Stickoxide aus Verbrennung → saurer Regen; zu viel CO₂ verstärkt den Treibhauseffekt." ] }
      ],
      merken: [
        "Luft: 78 % Stickstoff, 21 % Sauerstoff, 1 % Argon, 0,04 % CO₂.",
        "Glimmspanprobe → Sauerstoff. Knallgasprobe → Wasserstoff. Kalkwasserprobe → CO₂.",
        "Moleküle: Atome teilen Elektronenpaare (Atombindung), Oktettregel.",
        "H–H, O=O, N≡N, O=C=O."
      ],
      aufgaben: [
        { typ: "input", frage: "Wie viel Prozent der Luft sind etwa Sauerstoff?", antworten: ["21", "21 %", "21%", "ca. 21"], numerisch: true, erklaerung: "Etwa 21 %." },
        { typ: "mc", frage: "Ein glimmender Holzspan flammt in einem Gas auf. Welches Gas?", optionen: ["Sauerstoff", "Wasserstoff", "Kohlenstoffdioxid", "Stickstoff"], richtig: 0, erklaerung: "Glimmspanprobe weist Sauerstoff nach." },
        { typ: "mc", frage: "Klares Kalkwasser wird milchig trüb. Welches Gas wurde eingeleitet?", optionen: ["Kohlenstoffdioxid", "Sauerstoff", "Wasserstoff", "Argon"], richtig: 0, erklaerung: "Kalkwasserprobe für CO₂." },
        { typ: "mc", frage: "Beim Entzünden pfeift es im Reagenzglas. Das zeigt …", optionen: ["Wasserstoff (Knallgasprobe)", "Sauerstoff", "Kohlenstoffdioxid", "Wasserdampf"], richtig: 0, erklaerung: "Wasserstoff reagiert mit Sauerstoff pfeifend/knallend zu Wasser." },
        { typ: "mc", frage: "Welches Gas macht den größten Anteil der Luft aus?", optionen: ["Stickstoff", "Sauerstoff", "Kohlenstoffdioxid", "Argon"], richtig: 0, erklaerung: "78 % Stickstoff." },
        { typ: "mc", frage: "Wie sind die Atome im Sauerstoffmolekül O₂ verbunden?", optionen: ["durch eine Doppelbindung (zwei gemeinsame Elektronenpaare)", "durch eine Einfachbindung", "durch eine Dreifachbindung", "gar nicht, sie liegen nur nebeneinander"], richtig: 0, erklaerung: "O=O: Jedes O braucht 2 Elektronen zum Oktett." },
        { typ: "mc", frage: "Warum eignet sich CO₂ zum Löschen?", optionen: ["Es ist schwerer als Luft und verdrängt den Sauerstoff", "Es ist sehr kalt", "Es reagiert mit dem Brennstoff", "Es ist leichter als Luft"], richtig: 0, erklaerung: "CO₂ legt sich über das Feuer und erstickt es." },
        { typ: "tf", frage: "Wasserstoff ist das leichteste Gas.", richtig: true, erklaerung: "H₂ hat die kleinste Dichte aller Gase." }
      ]
    },
    {
      id: "wasser",
      titel: "Wasser – eine Verbindung",
      minuten: 12,
      themen: ["H₂O", "Dipol", "Reaktionsgleichung", "Lösungsmittel"],
      lesen: [
        { h: "Wasser ist eine Verbindung", p: [
          "Wasser besteht aus Wasserstoff und Sauerstoff: <b>H₂O</b>. Beweis: Bei der <b>Elektrolyse</b> (Zerlegung mit Strom) entstehen zwei Teile Wasserstoff und ein Teil Sauerstoff. Umgekehrt entsteht bei der Knallgasreaktion aus beiden Gasen Wasser – chemische Reaktionen sind <b>umkehrbar</b>.",
          "<b>Reaktionsgleichung</b> mit Formeln: <b>2 H₂ + O₂ → 2 H₂O</b>. Links und rechts müssen gleich viele Atome jeder Sorte stehen (4 H, 2 O) – die Zahlen vor den Formeln (Koeffizienten) gleichen das aus. Nachweis von Wasser: weißes Kupfersulfat wird blau." ],
          beispiel: "Ausgleichen: H₂ + O₂ → H₂O stimmt nicht (2 O links, 1 O rechts). Richtig: 2 H₂ + O₂ → 2 H₂O." },
        { h: "Der Dipol", p: [
          "Im Wassermolekül sind die beiden H-Atome gewinkelt (ca. 105°) an das O-Atom gebunden. Sauerstoff zieht die Bindungselektronen stärker an (höhere <b>Elektronegativität</b>) – die Bindung ist <b>polar</b>. Dadurch ist das O-Ende leicht negativ, die H-Enden leicht positiv: Wasser ist ein <b>Dipol</b>.",
          "Folgen: Ein Wasserstrahl wird von einem geladenen Stab abgelenkt. Wassermoleküle ziehen sich gegenseitig an (<b>Wasserstoffbrücken</b>) → hohe Siedetemperatur (100 °C), Oberflächenspannung (Wasserläufer), Dichteanomalie (Eis schwimmt)." ] },
        { h: "Wasser als Lösungsmittel", p: [
          "Wasser löst Salze und viele polare Stoffe (Zucker), aber nicht Fett oder Öl (unpolar) – „Gleiches löst sich in Gleichem“. Beim Lösen von Salz ziehen die Wasser-Dipole die Ionen aus dem Kristall.",
          "<b>Süßwasser</b> ist nur etwa 2,5 % des Wassers auf der Erde, davon das meiste als Eis gebunden. Trinkwasser sparen und schützen ist deshalb wichtig – Wasserkreislauf: Verdunsten, Wolken, Niederschlag, Grundwasser." ] }
      ],
      merken: [
        "Wasser = H₂O; Elektrolyse liefert 2 Teile H₂ und 1 Teil O₂. 2 H₂ + O₂ → 2 H₂O.",
        "Reaktionsgleichungen ausgleichen: gleich viele Atome links und rechts.",
        "Wasser ist ein Dipol (polare Bindung, gewinkelt) → Wasserstoffbrücken, hohe Siedetemperatur, Oberflächenspannung.",
        "Wasser löst Salze und Zucker, nicht Fett."
      ],
      aufgaben: [
        { typ: "mc", frage: "In welchem Verhältnis entstehen bei der Elektrolyse von Wasser Wasserstoff und Sauerstoff?", optionen: ["2 : 1", "1 : 1", "1 : 2", "3 : 1"], richtig: 0, erklaerung: "H₂O → zwei Teile Wasserstoff, ein Teil Sauerstoff." },
        { typ: "mc", frage: "Welche Reaktionsgleichung ist richtig ausgeglichen?", optionen: ["2 H₂ + O₂ → 2 H₂O", "H₂ + O₂ → H₂O", "H₂ + O → H₂O", "2 H + O → H₂O"], richtig: 0, erklaerung: "4 H und 2 O auf beiden Seiten." },
        { typ: "mc", frage: "Warum ist Wasser ein Dipol?", optionen: ["Sauerstoff zieht die Elektronen stärker an und das Molekül ist gewinkelt", "Weil Wasser flüssig ist", "Weil es zwei H-Atome hat", "Weil Wasser Strom leitet"], richtig: 0, erklaerung: "Polare Bindung + Winkel → Ladungsschwerpunkte fallen nicht zusammen." },
        { typ: "mc", frage: "Welcher Stoff löst sich NICHT in Wasser?", optionen: ["Öl", "Kochsalz", "Zucker", "Kupfersulfat"], richtig: 0, erklaerung: "Öl ist unpolar – Gleiches löst sich in Gleichem." },
        { typ: "mc", frage: "Womit weist man Wasser nach?", optionen: ["weißes Kupfersulfat wird blau", "Kalkwasser trübt sich", "Glimmspan flammt auf", "Knallgasprobe"], richtig: 0, erklaerung: "Wasserfreies Kupfersulfat färbt sich mit Wasser blau." },
        { typ: "mc", frage: "Warum hat Wasser eine ungewöhnlich hohe Siedetemperatur?", optionen: ["Wasserstoffbrücken zwischen den Molekülen", "Weil es schwer ist", "Weil es Sauerstoff enthält", "Weil es farblos ist"], richtig: 0, erklaerung: "Die Dipole halten sich gegenseitig fest." },
        { typ: "mc", frage: "Ein geladener Stab lenkt einen dünnen Wasserstrahl ab. Was zeigt das?", optionen: ["Wassermoleküle sind Dipole", "Wasser leitet Strom", "Wasser ist magnetisch", "Wasser ist ein Element"], richtig: 0, erklaerung: "Die Dipole richten sich im elektrischen Feld aus." },
        { typ: "tf", frage: "Die Bildung von Wasser aus den Elementen ist exotherm.", richtig: true, erklaerung: "Knallgasreaktion – gibt viel Energie ab." }
      ]
    }
  ]
};
