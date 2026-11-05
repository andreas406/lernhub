window.K7_DATA = {
  id: "k7-physik",
  fach: "Physik",
  icon: "PH",
  untertitel: "Klasse 7 Gymnasium · Rahmenlehrplan Berlin-Brandenburg, Themenfelder 3.1–3.4 (Doppeljahrgang 7/8)",
  stand: "November 2026",
  quelle: { titel: "Rahmenlehrplan Teil C Physik (Jgst. 7–10), Themenfelder 3.1 Thermisches Verhalten, 3.2 Kraft, 3.3 Energie und Arbeit, 3.4 Wärme", url: "https://bildungsserver.berlin-brandenburg.de/fileadmin/bbb/unterricht/rahmenlehrplaene/Rahmenlehrplanprojekt/amtliche_Fassung/Teil_C_Physik_2015_11_16.pdf" },
  bloecke: [
    {
      id: "temperatur-teilchen",
      titel: "Temperatur, Teilchenmodell und Ausdehnung",
      minuten: 12,
      themen: ["Celsius/Kelvin", "Teilchenmodell", "Bimetall"],
      lesen: [
        { h: "Was Physik ist", p: [
          "Physik untersucht die unbelebte Natur mit Messungen und Experimenten: Mechanik (Kräfte, Bewegung), Wärmelehre, Elektrizität, Optik, Akustik. Eine <b>physikalische Größe</b> hat immer einen Zahlenwert und eine Einheit: Temperatur 20 °C, Länge 3 m, Masse 2 kg, Zeit 10 s." ] },
        { h: "Temperatur messen", p: [
          "<b>Celsius-Skala</b>: 0 °C = Wasser gefriert, 100 °C = Wasser siedet. <b>Kelvin-Skala</b>: beginnt beim absoluten Nullpunkt −273 °C = 0 K. Umrechnung: K = °C + 273. Temperaturdifferenzen sind in beiden Skalen gleich groß (10 °C Unterschied = 10 K Unterschied).",
          "<b>Teilchenmodell</b>: Alle Stoffe bestehen aus winzigen Teilchen, die sich ständig bewegen. Je höher die Temperatur, desto schneller die Teilchen. Beleg: <b>Brownsche Bewegung</b> (Zickzack-Bewegung kleiner Teilchen unter dem Mikroskop)." ] },
        { h: "Ausdehnung bei Erwärmung", p: [
          "Feste Körper, Flüssigkeiten und Gase dehnen sich beim Erwärmen <b>aus</b> und ziehen sich beim Abkühlen zusammen – die Teilchen brauchen bei schnellerer Bewegung mehr Platz. Gase am stärksten, Feststoffe am wenigsten.",
          "Anwendungen: Dehnungsfugen an Brücken und Schienen, Flüssigkeitsthermometer, Heißluftballon. Ein <b>Bimetallstreifen</b> (zwei verschiedene Metalle) biegt sich beim Erwärmen, weil sich ein Metall stärker ausdehnt – genutzt in Feuermeldern und Bügeleisen.",
          "<b>Anomalie des Wassers</b>: Wasser hat bei 4 °C die größte Dichte – deshalb friert ein See von oben zu." ],
          beispiel: "Eine Stahlbrücke wird im Sommer einige Zentimeter länger – ohne Dehnungsfuge würde sie sich verbiegen." }
      ],
      merken: [
        "Physikalische Größe = Zahlenwert + Einheit.",
        "Kelvin = Celsius + 273; 0 K = absoluter Nullpunkt.",
        "Teilchen bewegen sich ständig; höhere Temperatur = schnellere Teilchen.",
        "Erwärmen → Ausdehnung (Gase > Flüssigkeiten > Feststoffe). Bimetall biegt sich."
      ],
      aufgaben: [
        { typ: "input", frage: "Wie viel Kelvin sind 27 °C? (nur die Zahl)", antworten: ["300"], numerisch: true, erklaerung: "27 + 273 = 300 K." },
        { typ: "mc", frage: "Was passiert mit den Teilchen eines Stoffes, wenn er erwärmt wird?", optionen: ["Sie bewegen sich schneller", "Sie werden größer", "Sie werden weniger", "Sie bleiben stehen"], richtig: 0, erklaerung: "Temperatur = Maß für die Teilchenbewegung." },
        { typ: "mc", frage: "Warum haben Brücken Dehnungsfugen?", optionen: ["Weil sich der Stahl bei Wärme ausdehnt", "Damit Regen abfließt", "Damit die Brücke leichter wird", "Für den Schall"], richtig: 0, erklaerung: "Ohne Fuge würde sich die Brücke bei Erwärmung verbiegen." },
        { typ: "mc", frage: "Welcher Stoffzustand dehnt sich bei Erwärmung am stärksten aus?", optionen: ["Gas", "Flüssigkeit", "Feststoff", "alle gleich"], richtig: 0, erklaerung: "Gase dehnen sich am stärksten aus." },
        { typ: "mc", frage: "Ein Bimetallstreifen biegt sich beim Erwärmen, weil …", optionen: ["sich die beiden Metalle unterschiedlich stark ausdehnen", "ein Metall schmilzt", "beide Metalle schrumpfen", "er magnetisch wird"], richtig: 0, erklaerung: "Das Metall mit der stärkeren Ausdehnung liegt außen in der Kurve." },
        { typ: "mc", frage: "Bei welcher Temperatur hat Wasser die größte Dichte?", optionen: ["4 °C", "0 °C", "100 °C", "−273 °C"], richtig: 0, erklaerung: "Anomalie des Wassers: größte Dichte bei 4 °C." },
        { typ: "mc", frage: "Was beweist die Brownsche Bewegung?", optionen: ["dass sich Teilchen ständig bewegen", "dass Wasser bei 100 °C siedet", "dass Metalle leiten", "dass Luft ein Gewicht hat"], richtig: 0, erklaerung: "Kleine Teilchen werden von den unsichtbaren, bewegten Wasserteilchen angestoßen." },
        { typ: "tf", frage: "Ein Temperaturunterschied von 20 °C entspricht einem Unterschied von 20 K.", richtig: true, erklaerung: "Die Skalen sind nur verschoben, die Schrittweite ist gleich." }
      ]
    },
    {
      id: "dichte-druck",
      titel: "Masse, Volumen, Dichte und Luftdruck",
      minuten: 12,
      themen: ["Dichte", "g/cm³", "Aggregatzustände"],
      lesen: [
        { h: "Dichte", p: [
          "<b>Dichte</b> = Masse geteilt durch Volumen: <b>ρ = m / V</b>. Einheit: g/cm³ oder kg/m³ (1 g/cm³ = 1000 kg/m³). Die Dichte ist eine <b>Stoffeigenschaft</b>: Ein kleiner und ein großer Eisenklotz haben dieselbe Dichte.",
          "Wasser: 1 g/cm³. Eisen: 7,9 g/cm³. Aluminium: 2,7 g/cm³. Holz: ca. 0,5–0,8 g/cm³. Luft: 0,0013 g/cm³. Was eine kleinere Dichte als Wasser hat, schwimmt." ],
          beispiel: "Ein Würfel mit 2 cm Kantenlänge (V = 8 cm³) wiegt 63,2 g. Dichte = 63,2 : 8 = 7,9 g/cm³ → Eisen." },
        { h: "Aggregatzustände im Teilchenmodell", p: [
          "<b>Fest</b>: Teilchen sitzen dicht auf festen Plätzen und schwingen nur. <b>Flüssig</b>: Teilchen sind dicht, aber verschiebbar. <b>Gasförmig</b>: Teilchen fliegen frei und schnell mit großem Abstand.",
          "Übergänge: Schmelzen (fest → flüssig), Erstarren, Sieden/Verdampfen (flüssig → gasförmig), Kondensieren, Sublimieren (fest → gasförmig)." ] },
        { h: "Druck in Gasen und Luftdruck", p: [
          "Der <b>Druck</b> in einem Gas entsteht durch Stöße der Teilchen gegen die Wand. Mehr Temperatur bei gleichem Volumen → schnellere Teilchen → mehr Druck (deshalb Spraydosen nicht erhitzen!).",
          "<b>Luftdruck</b>: Die Luft über uns drückt mit etwa 1000 hPa (Hektopascal) ≈ 1 bar. Er nimmt mit der Höhe ab (auf Bergen „dünne Luft“). Messgerät: Barometer. Wetter: Hochdruck → meist schön, Tiefdruck → oft Regen." ] }
      ],
      merken: [
        "Dichte ρ = m / V, Einheit g/cm³. Wasser: 1 g/cm³.",
        "Dichte ist eine Stoffeigenschaft, unabhängig von der Größe des Körpers.",
        "Fest: feste Plätze. Flüssig: verschiebbar. Gasförmig: frei und schnell.",
        "Gasdruck = Teilchenstöße; höhere Temperatur bei gleichem Volumen = höherer Druck. Luftdruck ≈ 1000 hPa."
      ],
      aufgaben: [
        { typ: "input", frage: "Ein Körper hat die Masse 54 g und das Volumen 20 cm³. Dichte in g/cm³?", antworten: ["2,7", "2.7"], numerisch: true, erklaerung: "54 : 20 = 2,7 g/cm³ (Aluminium)." },
        { typ: "mc", frage: "Welcher Körper schwimmt auf Wasser?", optionen: ["Dichte 0,6 g/cm³", "Dichte 1,2 g/cm³", "Dichte 7,9 g/cm³", "Dichte 2,7 g/cm³"], richtig: 0, erklaerung: "Kleiner als 1 g/cm³ → schwimmt." },
        { typ: "input", frage: "Wie schwer ist 1 Liter Wasser (Dichte 1 g/cm³) in Gramm?", antworten: ["1000", "1000 g"], numerisch: true, erklaerung: "1 l = 1000 cm³ → 1000 g = 1 kg." },
        { typ: "mc", frage: "Ein großer und ein kleiner Würfel aus Eisen: Was gilt?", optionen: ["gleiche Dichte, verschiedene Masse", "gleiche Masse, verschiedene Dichte", "der große hat die höhere Dichte", "der kleine hat die höhere Dichte"], richtig: 0, erklaerung: "Dichte ist eine Stoffeigenschaft." },
        { typ: "mc", frage: "Flüssig → gasförmig heißt …", optionen: ["Verdampfen/Sieden", "Schmelzen", "Kondensieren", "Erstarren"], richtig: 0, erklaerung: "Verdampfen (bei Siedetemperatur: Sieden)." },
        { typ: "mc", frage: "Wie entsteht der Druck eines Gases im Teilchenmodell?", optionen: ["Teilchen stoßen gegen die Gefäßwand", "Teilchen kleben an der Wand", "Teilchen werden schwerer", "Teilchen hören auf, sich zu bewegen"], richtig: 0, erklaerung: "Viele schnelle Stöße = hoher Druck." },
        { typ: "mc", frage: "Wie verändert sich der Luftdruck beim Bergsteigen?", optionen: ["er nimmt ab", "er nimmt zu", "er bleibt gleich", "er verdoppelt sich alle 100 m"], richtig: 0, erklaerung: "Weniger Luft über einem → weniger Druck." },
        { typ: "mc", frage: "Im festen Zustand …", optionen: ["schwingen die Teilchen auf festen Plätzen", "fliegen die Teilchen frei umher", "gibt es keine Teilchen", "sind die Teilchen verschiebbar wie in Flüssigkeiten"], richtig: 0, erklaerung: "Fest = feste Plätze, nur Schwingung." }
      ]
    },
    {
      id: "kraft",
      titel: "Kraft, Gewichtskraft und Federn",
      minuten: 12,
      themen: ["Newton", "Kraftpfeil", "Hookesches Gesetz"],
      lesen: [
        { h: "Was eine Kraft ist", p: [
          "Eine <b>Kraft</b> erkennt man an ihrer Wirkung: Sie <b>verformt</b> Körper (elastisch – geht zurück, wie eine Feder; plastisch – bleibt, wie Knete) oder <b>ändert ihre Bewegung</b> (schneller, langsamer, andere Richtung).",
          "Einheit: <b>Newton (N)</b>. Formelzeichen F. Eine Kraft hat Betrag, Richtung und Angriffspunkt – darum zeichnet man sie als <b>Kraftpfeil</b>. Messgerät: Federkraftmesser.",
          "Kräfte treten immer <b>paarweise</b> auf (Wechselwirkung): Drückst du gegen die Wand, drückt die Wand genauso stark zurück." ] },
        { h: "Masse und Gewichtskraft", p: [
          "<b>Masse</b> m (in kg) ist die Stoffmenge eines Körpers – überall gleich. <b>Gewichtskraft</b> F<sub>G</sub> (in N) ist die Kraft, mit der die Erde den Körper anzieht – auf dem Mond nur ein Sechstel.",
          "Auf der Erde: <b>F<sub>G</sub> = m · g</b> mit g ≈ 10 N/kg (genauer 9,81). 1 kg wiegt also etwa 10 N; eine Tafel Schokolade (100 g) etwa 1 N." ],
          beispiel: "Anton hat 45 kg Masse → Gewichtskraft ≈ 450 N. Auf dem Mond: Masse immer noch 45 kg, Gewichtskraft nur 75 N." },
        { h: "Hookesches Gesetz", p: [
          "Bei einer Schraubenfeder ist die <b>Verlängerung proportional zur Kraft</b>: doppelte Kraft → doppelte Verlängerung. Formel: F = D · s (D = Federkonstante in N/cm, s = Verlängerung).",
          "Das gilt nur, solange die Feder nicht überdehnt wird. Darauf beruht der Federkraftmesser. <b>Kräftegleichgewicht</b>: Zwei gleich große, entgegengesetzte Kräfte heben sich auf – der Körper bleibt in Ruhe." ] }
      ],
      merken: [
        "Kraft: verformt oder ändert Bewegung. Einheit Newton (N). Kraftpfeil = Betrag + Richtung + Angriffspunkt.",
        "Masse (kg) ist überall gleich, Gewichtskraft (N) hängt vom Ort ab.",
        "F_G = m · g, g ≈ 10 N/kg → 1 kg ≈ 10 N.",
        "Hooke: Verlängerung der Feder proportional zur Kraft (F = D · s)."
      ],
      aufgaben: [
        { typ: "input", frage: "Welche Gewichtskraft hat ein Körper mit 3 kg Masse auf der Erde? (g = 10 N/kg, Zahl in N)", antworten: ["30", "30 N"], numerisch: true, erklaerung: "3 · 10 = 30 N." },
        { typ: "mc", frage: "Welche Einheit hat die Kraft?", optionen: ["Newton", "Kilogramm", "Joule", "Watt"], richtig: 0, erklaerung: "Kraft in Newton (N)." },
        { typ: "mc", frage: "Ein Astronaut fliegt zum Mond. Was ändert sich?", optionen: ["seine Gewichtskraft, nicht seine Masse", "seine Masse, nicht seine Gewichtskraft", "beides nicht", "beides"], richtig: 0, erklaerung: "Masse bleibt, Gewichtskraft ist auf dem Mond kleiner." },
        { typ: "input", frage: "Eine Feder verlängert sich bei 2 N um 4 cm. Um wie viel cm bei 5 N?", antworten: ["10", "10 cm"], numerisch: true, erklaerung: "Proportional: 1 N → 2 cm, 5 N → 10 cm." },
        { typ: "mc", frage: "Knete wird gedrückt und behält die Form. Welche Verformung?", optionen: ["plastisch", "elastisch", "magnetisch", "thermisch"], richtig: 0, erklaerung: "Plastisch = bleibt verformt." },
        { typ: "mc", frage: "Was zeigt ein Kraftpfeil NICHT?", optionen: ["die Masse des Körpers", "die Richtung der Kraft", "den Betrag der Kraft", "den Angriffspunkt"], richtig: 0, erklaerung: "Der Pfeil zeigt Betrag, Richtung, Angriffspunkt." },
        { typ: "mc", frage: "Zwei Kinder ziehen gleich stark in entgegengesetzte Richtungen an einem Seil. Was passiert?", optionen: ["Das Seil bleibt in Ruhe – Kräftegleichgewicht", "Das Seil bewegt sich nach links", "Das Seil bewegt sich nach rechts", "Das Seil reißt immer"], richtig: 0, erklaerung: "Gleich große, entgegengesetzte Kräfte heben sich auf." },
        { typ: "mc", frage: "Wie schwer (Gewichtskraft) ist etwa eine Tafel Schokolade von 100 g?", optionen: ["1 N", "10 N", "100 N", "0,1 N"], richtig: 0, erklaerung: "0,1 kg · 10 N/kg = 1 N." }
      ]
    },
    {
      id: "energie-arbeit",
      titel: "Energie, Arbeit und Leistung",
      minuten: 12,
      themen: ["Energieformen", "W = F · s", "Goldene Regel"],
      lesen: [
        { h: "Energieformen", p: [
          "<b>Energie</b> ist die Fähigkeit, etwas zu bewirken (Einheit <b>Joule, J</b>; 1 kJ = 1000 J). Formen: <b>Lageenergie</b> (potenzielle Energie – Höhe), <b>Bewegungsenergie</b> (kinetische Energie), <b>Spannenergie</b> (gespannte Feder), <b>thermische</b>, <b>chemische</b> (Nahrung, Benzin), <b>elektrische</b> Energie und <b>Strahlungsenergie</b> (Licht).",
          "<b>Energieerhaltungssatz</b>: Energie geht nie verloren, sie wird nur umgewandelt. Beim Fallen wird Lageenergie zu Bewegungsenergie, beim Bremsen zu thermischer Energie (Wärme)." ],
          beispiel: "Lageenergie: E = m · g · h. Ein Ball (0,5 kg) in 2 m Höhe: 0,5 · 10 · 2 = 10 J." },
        { h: "Mechanische Arbeit", p: [
          "<b>Arbeit</b> wird verrichtet, wenn eine Kraft einen Körper entlang eines Weges bewegt: <b>W = F · s</b> (Kraft mal Weg). Einheit: Joule (1 J = 1 N · 1 m).",
          "Arten: <b>Hubarbeit</b> (heben), <b>Beschleunigungsarbeit</b>, <b>Reibungsarbeit</b>, <b>Spannarbeit</b>. Wer eine Tasche nur hält, verrichtet physikalisch keine Arbeit (kein Weg!)." ],
          beispiel: "Hubarbeit: Eine Kiste mit 200 N Gewichtskraft 1,5 m hochheben: W = 200 · 1,5 = 300 J." },
        { h: "Goldene Regel und Leistung", p: [
          "<b>Goldene Regel der Mechanik</b>: Was man an Kraft spart, muss man an Weg zusetzen. Eine Rampe oder ein Flaschenzug verringert die nötige Kraft, aber der Weg wird länger – die Arbeit bleibt gleich.",
          "<b>Leistung</b> = Arbeit pro Zeit: <b>P = W / t</b>, Einheit <b>Watt (W)</b>; 1 W = 1 J/s, 1 kW = 1000 W. Wer dieselbe Arbeit in der halben Zeit schafft, hat die doppelte Leistung." ] }
      ],
      merken: [
        "Energie in Joule; Formen: Lage-, Bewegungs-, Spann-, thermische, chemische, elektrische Energie.",
        "Energieerhaltung: Energie wird nur umgewandelt, nie vernichtet.",
        "Arbeit W = F · s (nur wenn ein Weg zurückgelegt wird). Leistung P = W / t in Watt.",
        "Goldene Regel: weniger Kraft = längerer Weg, gleiche Arbeit."
      ],
      aufgaben: [
        { typ: "input", frage: "Eine Kraft von 50 N wirkt über 4 m. Verrichtete Arbeit in Joule?", antworten: ["200", "200 J"], numerisch: true, erklaerung: "W = 50 · 4 = 200 J." },
        { typ: "mc", frage: "Welche Energieumwandlung passiert beim Fallen eines Apfels?", optionen: ["Lageenergie → Bewegungsenergie", "Bewegungsenergie → Lageenergie", "chemische → elektrische Energie", "thermische → Spannenergie"], richtig: 0, erklaerung: "Höhe nimmt ab, Geschwindigkeit nimmt zu." },
        { typ: "input", frage: "Eine Arbeit von 600 J wird in 20 s verrichtet. Leistung in Watt?", antworten: ["30", "30 W"], numerisch: true, erklaerung: "P = 600 : 20 = 30 W." },
        { typ: "mc", frage: "Du hältst eine schwere Tasche 5 Minuten still. Physikalisch gesehen …", optionen: ["verrichtest du keine Arbeit, weil kein Weg zurückgelegt wird", "verrichtest du Hubarbeit", "verrichtest du Reibungsarbeit", "verdoppelt sich die Arbeit jede Minute"], richtig: 0, erklaerung: "Arbeit braucht Kraft UND Weg." },
        { typ: "mc", frage: "Was sagt die Goldene Regel der Mechanik?", optionen: ["Kraft sparen heißt Weg zusetzen – die Arbeit bleibt gleich", "Energie geht beim Heben verloren", "Je länger der Weg, desto mehr Kraft", "Eine Rampe spart Arbeit"], richtig: 0, erklaerung: "Rampe/Flaschenzug: weniger Kraft, längerer Weg, gleiche Arbeit." },
        { typ: "input", frage: "Lageenergie eines Körpers mit 2 kg in 5 m Höhe (g = 10 N/kg), in Joule?", antworten: ["100", "100 J"], numerisch: true, erklaerung: "E = 2 · 10 · 5 = 100 J." },
        { typ: "mc", frage: "In welcher Einheit wird Leistung angegeben?", optionen: ["Watt", "Joule", "Newton", "Kelvin"], richtig: 0, erklaerung: "Leistung in Watt (J/s)." },
        { typ: "tf", frage: "Beim Bremsen eines Fahrrads verschwindet die Bewegungsenergie einfach.", richtig: false, erklaerung: "Sie wird in thermische Energie (Wärme an Bremse und Reifen) umgewandelt." }
      ]
    },
    {
      id: "waerme",
      titel: "Thermische Energie und Wärmeübertragung",
      minuten: 12,
      themen: ["Wärmeleitung", "Wärmeströmung", "Wärmestrahlung"],
      lesen: [
        { h: "Wärme und thermische Energie", p: [
          "<b>Thermische Energie</b> steckt in der Bewegung der Teilchen eines Körpers. <b>Wärme</b> ist die Energie, die von einem wärmeren zu einem kälteren Körper <b>übertragen</b> wird – immer in diese Richtung, bis beide die gleiche Temperatur haben (<b>Temperaturausgleich</b>).",
          "Zum Schmelzen von Eis und zum Verdampfen von Wasser braucht man Energie (<b>Schmelzwärme, Verdampfungswärme</b>), ohne dass die Temperatur steigt. Beim Verdunsten (z. B. Schweiß) wird dem Körper Wärme entzogen – <b>Verdunstungskälte</b>." ] },
        { h: "Drei Arten der Wärmeübertragung", p: [
          "<b>Wärmeleitung</b>: Wärme wandert durch einen Stoff, die Teilchen stoßen ihre Nachbarn an. Metalle leiten gut (Topf), Holz, Luft, Styropor schlecht (Isolatoren). Darum fühlt sich Metall kälter an als Holz bei gleicher Temperatur.",
          "<b>Wärmeströmung</b> (Konvektion): Warme Flüssigkeit oder warmes Gas steigt auf (geringere Dichte), kälteres sinkt ab – Heizung im Zimmer, Golfstrom, Land- und Seewind.",
          "<b>Wärmestrahlung</b>: Energie durch Strahlung, braucht keinen Stoff – so kommt die Sonnenwärme durchs Vakuum. Dunkle, matte Flächen nehmen Strahlung gut auf, helle, glänzende reflektieren." ],
          beispiel: "Thermoskanne: Vakuum zwischen den Wänden verhindert Leitung und Strömung, verspiegelte Wände verhindern Strahlung." },
        { h: "Anwendungen", p: [
          "Wärmedämmung am Haus (Luft in Dämmstoffen leitet schlecht), Daunenjacke (eingeschlossene Luft), Eisbär (Fell mit Luftpolster, dunkle Haut), Wüstenfuchs Fennek (große Ohren geben Wärme ab).",
          "Energie sparen: Fenster schließen, Heizung nicht hinter Vorhänge, Dämmung – weniger Wärmeverlust nach draußen." ] }
      ],
      merken: [
        "Wärme fließt immer vom wärmeren zum kälteren Körper (Temperaturausgleich).",
        "Wärmeleitung (Metall gut, Luft schlecht), Wärmeströmung (warm steigt auf), Wärmestrahlung (auch im Vakuum).",
        "Schmelzen und Verdampfen brauchen Energie ohne Temperaturanstieg; Verdunsten kühlt.",
        "Dunkle Flächen nehmen Strahlung gut auf, helle reflektieren."
      ],
      aufgaben: [
        { typ: "mc", frage: "Wie kommt die Wärme der Sonne zur Erde?", optionen: ["Wärmestrahlung", "Wärmeleitung", "Wärmeströmung", "durch die Luft"], richtig: 0, erklaerung: "Zwischen Sonne und Erde ist Vakuum – nur Strahlung geht." },
        { typ: "mc", frage: "Warum fühlt sich ein Metallgeländer kälter an als ein Holzgeländer, obwohl beide 10 °C haben?", optionen: ["Metall leitet die Wärme der Hand schneller ab", "Metall ist wirklich kälter", "Holz erzeugt Wärme", "Metall strahlt Kälte aus"], richtig: 0, erklaerung: "Gute Wärmeleiter entziehen der Hand schnell Wärme." },
        { typ: "mc", frage: "Warme Luft steigt im Zimmer nach oben. Welche Übertragungsart ist das?", optionen: ["Wärmeströmung", "Wärmeleitung", "Wärmestrahlung", "Verdunstung"], richtig: 0, erklaerung: "Konvektion: warme Luft hat geringere Dichte und steigt auf." },
        { typ: "mc", frage: "In welche Richtung fließt Wärme immer?", optionen: ["vom wärmeren zum kälteren Körper", "vom kälteren zum wärmeren Körper", "vom größeren zum kleineren Körper", "von unten nach oben"], richtig: 0, erklaerung: "Bis zum Temperaturausgleich." },
        { typ: "mc", frage: "Warum frieren wir nach dem Schwimmen im Wind?", optionen: ["Verdunstungskälte: Das Wasser entzieht beim Verdunsten Wärme", "Wind ist immer kalt", "Wasser leitet Kälte", "Die Sonne strahlt weniger"], richtig: 0, erklaerung: "Verdunsten braucht Energie – die kommt aus der Haut." },
        { typ: "mc", frage: "Welches Material ist ein guter Wärmeisolator?", optionen: ["Styropor", "Kupfer", "Eisen", "Aluminium"], richtig: 0, erklaerung: "Styropor enthält viel Luft und leitet schlecht." },
        { typ: "mc", frage: "Welches T-Shirt wird in der Sonne am wärmsten?", optionen: ["das schwarze", "das weiße", "das silberne", "alle gleich"], richtig: 0, erklaerung: "Dunkle Flächen nehmen Strahlung gut auf." },
        { typ: "tf", frage: "Während Eis schmilzt, steigt seine Temperatur über 0 °C, solange man heizt.", richtig: false, erklaerung: "Beim Schmelzen bleibt die Temperatur bei 0 °C, bis alles geschmolzen ist (Schmelzwärme)." }
      ]
    },
    {
      id: "messen-auswerten",
      titel: "Messen, Diagramme und Formeln",
      minuten: 8,
      themen: ["Einheiten umrechnen", "Diagramm lesen", "Formel umstellen"],
      lesen: [
        { h: "Einheiten sicher umrechnen", p: [
          "Länge: 1 km = 1000 m, 1 m = 100 cm, 1 cm = 10 mm. Masse: 1 t = 1000 kg, 1 kg = 1000 g. Zeit: 1 h = 60 min = 3600 s. Volumen: 1 m³ = 1000 l, 1 l = 1000 cm³ (ml).",
          "Vorsilben: kilo = 1000, milli = 1/1000, hekto = 100 (hPa), zenti = 1/100." ] },
        { h: "Messwerte und Diagramme", p: [
          "Jede Messung hat eine <b>Messunsicherheit</b> – deshalb mehrmals messen und den Mittelwert bilden. Sinnvolle Genauigkeit: Ein Lineal misst keine Hundertstelmillimeter.",
          "Im <b>Diagramm</b> kommt die Größe, die man selbst verändert, auf die x-Achse (z. B. Zeit), die gemessene auf die y-Achse (z. B. Temperatur). Eine <b>Gerade durch den Ursprung</b> bedeutet: proportional (z. B. Kraft und Federverlängerung)." ] },
        { h: "Mit Formeln rechnen", p: [
          "Formel aufschreiben → Werte mit Einheiten einsetzen → ausrechnen → Antwortsatz. Beispiel: ρ = m/V = 27 g / 10 cm³ = 2,7 g/cm³.",
          "Formeln umstellen wie Gleichungen: Aus ρ = m/V folgt m = ρ · V und V = m/ρ. Aus W = F · s folgt F = W/s." ] }
      ],
      merken: [
        "1 km = 1000 m, 1 h = 3600 s, 1 l = 1000 cm³, 1 kg ≈ 10 N.",
        "Mehrmals messen, Mittelwert bilden, sinnvoll runden.",
        "x-Achse: was ich verändere; y-Achse: was ich messe.",
        "Formel – Werte einsetzen – rechnen – Antwortsatz."
      ],
      aufgaben: [
        { typ: "input", frage: "Wie viele Sekunden hat eine halbe Stunde?", antworten: ["1800"], numerisch: true, erklaerung: "30 · 60 = 1800 s." },
        { typ: "input", frage: "Wie viele Milliliter sind 2,5 Liter?", antworten: ["2500"], numerisch: true, erklaerung: "2,5 · 1000 = 2500 ml." },
        { typ: "mc", frage: "ρ = m/V. Wie lautet die nach m umgestellte Formel?", optionen: ["m = ρ · V", "m = V / ρ", "m = ρ / V", "m = ρ + V"], richtig: 0, erklaerung: "Beide Seiten mal V." },
        { typ: "mc", frage: "Du misst dreimal die Zeit: 4,1 s, 4,3 s, 4,2 s. Welchen Wert gibst du an?", optionen: ["4,2 s (Mittelwert)", "4,1 s (der kleinste)", "4,3 s (der größte)", "12,6 s (die Summe)"], richtig: 0, erklaerung: "(4,1 + 4,3 + 4,2) : 3 = 4,2 s." },
        { typ: "mc", frage: "Ein Diagramm zeigt eine Gerade durch den Ursprung. Was bedeutet das?", optionen: ["die Größen sind proportional", "die Größen sind antiproportional", "es gibt keinen Zusammenhang", "die Messung ist falsch"], richtig: 0, erklaerung: "Doppelter x-Wert → doppelter y-Wert." },
        { typ: "input", frage: "Wie viele Meter sind 3,2 km?", antworten: ["3200"], numerisch: true, erklaerung: "3,2 · 1000 = 3200 m." }
      ]
    }
  ]
};
