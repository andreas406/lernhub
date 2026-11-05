window.K7_DATA = {
  id: "k7-geografie",
  fach: "Geografie",
  icon: "GEO",
  untertitel: "Klasse 7 Gymnasium · Themenfelder 7/8: Leben in Risikoräumen, Migration und Bevölkerung, Vielfalt der Erde, Armut und Reichtum",
  stand: "November 2026",
  quelle: { titel: "Rahmenlehrplan Teil C Geografie (Jgst. 7–10), Themenfelder 3.1–3.4", url: "https://bildungsserver.berlin-brandenburg.de/fileadmin/bbb/unterricht/rahmenlehrplaene/Rahmenlehrplanprojekt/amtliche_Fassung/Teil_C_Geografie_2015_11_10.pdf" },
  bloecke: [
    {
      id: "plattentektonik",
      titel: "Plattentektonik, Erdbeben und Vulkane",
      minuten: 12,
      themen: ["Schalenbau", "Plattengrenzen", "Tsunami"],
      lesen: [
        { h: "Der Aufbau der Erde", p: [
          "Von innen nach außen: <b>Erdkern</b> (innen fest, außen flüssig, bis 6000 °C), <b>Erdmantel</b> (zähflüssiges Gestein, in dem Konvektionsströme fließen) und die dünne <b>Erdkruste</b>. Kruste und oberster Mantel bilden die <b>Lithosphäre</b>, die in etwa ein Dutzend <b>Platten</b> zerbrochen ist.",
          "Die Platten „schwimmen“ auf dem zähen Mantel und bewegen sich einige Zentimeter pro Jahr – angetrieben von Strömungen im Erdmantel. Alfred Wegener beschrieb 1912 die <b>Kontinentaldrift</b> (Südamerika und Afrika passen wie Puzzleteile zusammen)." ] },
        { h: "Was an Plattengrenzen passiert", p: [
          "<b>Auseinander</b> (divergierend): Magma steigt auf, neue Kruste entsteht – Mittelatlantischer Rücken, Island, Ostafrikanischer Graben.",
          "<b>Aufeinander zu</b> (konvergierend): Eine Platte taucht unter die andere (<b>Subduktion</b>) → Tiefseegräben, Vulkanketten (Anden, Japan) oder Gebirge, wenn zwei Kontinente kollidieren (Himalaya, Alpen).",
          "<b>Aneinander vorbei</b> (Transformstörung): Platten verhaken sich und lösen sich ruckartig → Erdbeben (San-Andreas-Verwerfung, Kalifornien).",
          "Der <b>Pazifische Feuerring</b> ist die Zone mit den meisten Erdbeben und Vulkanen." ],
          beispiel: "Erdbeben werden mit Seismografen gemessen; die Magnitude (Richterskala) ist logarithmisch: Stärke 7 setzt etwa 32-mal mehr Energie frei als Stärke 6. Ein Seebeben kann einen Tsunami auslösen (Japan 2011, Indischer Ozean 2004)." },
        { h: "Vulkane und Schutz", p: [
          "Ein <b>Vulkan</b> entsteht, wo Magma aufsteigt; an der Oberfläche heißt es <b>Lava</b>. <b>Schildvulkane</b> (dünnflüssige Lava, flach – Hawaii) und <b>Schichtvulkane</b> (zähflüssige Lava, steil, explosiv – Vesuv, Ätna, Fuji). Gefahren: Lavaströme, Asche, Glutwolken (pyroklastische Ströme), Schlammströme.",
          "Menschen leben trotzdem dort: fruchtbare Böden, Erdwärme, Tourismus. <b>Schutz</b>: Frühwarnsysteme, erdbebensichere Bauweise, Evakuierungspläne, Tsunami-Warnbojen, Bildung. <b>Naturgefahr</b> wird zum <b>Risiko</b>, wenn Menschen betroffen sind." ] }
      ],
      merken: [
        "Erdkern – Erdmantel – Erdkruste; Lithosphärenplatten bewegen sich wenige cm pro Jahr.",
        "Auseinander = neue Kruste (Island); aufeinander zu = Subduktion/Gebirge (Anden, Himalaya); aneinander vorbei = Erdbeben (San Andreas).",
        "Pazifischer Feuerring = meiste Vulkane und Erdbeben. Seebeben → Tsunami.",
        "Schildvulkan flach (Hawaii), Schichtvulkan steil und explosiv (Vesuv). Schutz: Frühwarnung, Bauweise, Evakuierung."
      ],
      aufgaben: [
        { typ: "mc", frage: "Was treibt die Bewegung der Erdplatten an?", optionen: ["Konvektionsströme im Erdmantel", "der Mond", "der Wind", "die Meeresströmungen"], richtig: 0, erklaerung: "Heißes Gestein steigt auf, kühlt ab, sinkt – und schiebt die Platten." },
        { typ: "mc", frage: "An welcher Plattengrenze entsteht neue Erdkruste?", optionen: ["wo Platten auseinanderdriften (z. B. Mittelatlantischer Rücken)", "wo Platten aufeinanderstoßen", "wo Platten aneinander vorbeigleiten", "in der Mitte der Platten"], richtig: 0, erklaerung: "Magma steigt auf und erstarrt – Island wächst so." },
        { typ: "mc", frage: "Wie entstand der Himalaya?", optionen: ["durch die Kollision der indischen mit der eurasischen Platte", "durch einen Vulkanausbruch", "durch einen Meteoriten", "durch Erosion"], richtig: 0, erklaerung: "Zwei Kontinentalplatten stoßen zusammen und falten sich auf." },
        { typ: "input", frage: "Wie heißt flüssiges Gestein, sobald es an der Erdoberfläche austritt?", antworten: ["Lava"], erklaerung: "Unter der Erde Magma, an der Oberfläche Lava." },
        { typ: "mc", frage: "Was kann ein starkes Seebeben auslösen?", optionen: ["einen Tsunami", "einen Tornado", "eine Dürre", "eine Lawine"], richtig: 0, erklaerung: "Der Meeresboden hebt sich ruckartig – eine Flutwelle entsteht." },
        { typ: "mc", frage: "Welcher Vulkantyp ist steil und bricht explosiv aus?", optionen: ["Schichtvulkan", "Schildvulkan", "Spaltenvulkan", "Maar"], richtig: 0, erklaerung: "Zähflüssige Lava, Gas staut sich → Vesuv, Fuji." },
        { typ: "mc", frage: "Warum leben Menschen trotz Gefahr an Vulkanen?", optionen: ["fruchtbare Böden, Erdwärme, Tourismus", "weil es dort nie regnet", "weil Vulkane nie ausbrechen", "weil es dort kein Erdbeben gibt"], richtig: 0, erklaerung: "Nutzen und Risiko werden abgewogen." },
        { typ: "mc", frage: "Wie nennt man die Zone rund um den Pazifik mit den meisten Erdbeben und Vulkanen?", optionen: ["Pazifischer Feuerring", "Mittelatlantischer Rücken", "Ostafrikanischer Graben", "Alpenbogen"], richtig: 0, erklaerung: "Subduktionszonen rund um den Pazifik." }
      ]
    },
    {
      id: "wetterrisiken",
      titel: "Stürme, Hochwasser und Dürre",
      minuten: 10,
      themen: ["Hurrikan", "Tornado", "Hochwasserschutz"],
      lesen: [
        { h: "Tropische Wirbelstürme", p: [
          "<b>Hurrikan</b> (Atlantik/Ostpazifik), <b>Taifun</b> (Westpazifik) und <b>Zyklon</b> (Indischer Ozean) sind dasselbe: tropische Wirbelstürme. Sie entstehen über warmem Meerwasser (über 26 °C), wenn feuchte Luft aufsteigt und sich zu drehen beginnt. Im <b>Auge</b> ist es windstill. Gefahren: Wind über 120 km/h, Sturmflut, Starkregen.",
          "<b>Tornados</b> sind viel kleiner, entstehen über Land aus Gewitterwolken (Tornado Alley in den USA), dauern Minuten, sind aber extrem zerstörerisch." ] },
        { h: "Hochwasser und Sturmflut", p: [
          "<b>Flusshochwasser</b> entsteht durch Starkregen oder Schneeschmelze; verschärft durch Flussbegradigung, versiegelte Flächen (Wasser kann nicht versickern) und Bebauung in der Flussaue. Beispiele: Elbe 2002 und 2013, Ahrtal 2021.",
          "<b>Schutz</b>: Deiche, Rückhaltebecken, Flüsse wieder Raum geben (Auen), Frühwarnung, angepasstes Bauen. <b>Sturmfluten</b> an der Nordsee (1962 Hamburg): Sturm drückt das Wasser gegen die Küste – Deiche und Sperrwerke schützen." ] },
        { h: "Dürre und Hitze", p: [
          "<b>Dürre</b>: lange Zeit zu wenig Regen → Ernteausfälle, Wassermangel, Waldbrände (Brandenburg ist eines der trockensten Bundesländer, Kiefernwälder brennen leicht). <b>Hitzewellen</b> belasten vor allem Alte und Kranke; Städte heizen sich stärker auf (Wärmeinsel).",
          "Anpassung: wassersparende Bewässerung, trockenresistente Pflanzen, Stadtbegrünung, Trinkbrunnen. Der <b>Klimawandel</b> macht viele Extremereignisse häufiger und stärker." ] }
      ],
      merken: [
        "Hurrikan/Taifun/Zyklon = tropischer Wirbelsturm über warmem Meer (> 26 °C), Auge in der Mitte.",
        "Tornado = kleiner Wirbel über Land aus Gewitterwolken.",
        "Hochwasser verschärft durch Begradigung, Versiegelung, Bauen in Auen. Schutz: Deiche, Rückhaltebecken, Raum für Flüsse.",
        "Dürre und Hitze nehmen mit dem Klimawandel zu; Brandenburg ist besonders trocken."
      ],
      aufgaben: [
        { typ: "mc", frage: "Wo entstehen Hurrikane?", optionen: ["über warmem tropischem Meerwasser", "über kalten Gebirgen", "in der Wüste", "über dem Nordpol"], richtig: 0, erklaerung: "Wassertemperatur über 26 °C ist nötig." },
        { typ: "mc", frage: "Wie heißt ein tropischer Wirbelsturm im Westpazifik?", optionen: ["Taifun", "Hurrikan", "Tornado", "Blizzard"], richtig: 0, erklaerung: "Atlantik: Hurrikan, Westpazifik: Taifun, Indischer Ozean: Zyklon." },
        { typ: "mc", frage: "Was verschlimmert Flusshochwasser?", optionen: ["versiegelte Flächen und begradigte Flüsse", "Auenwälder", "Rückhaltebecken", "Deiche"], richtig: 0, erklaerung: "Wasser kann nicht versickern und fließt schneller ab." },
        { typ: "mc", frage: "Was ist im Auge eines Hurrikans?", optionen: ["Windstille", "der stärkste Wind", "Hagel", "ein Tornado"], richtig: 0, erklaerung: "Im Zentrum ist es ruhig, der Ring darum ist am stärksten." },
        { typ: "mc", frage: "Welche Maßnahme gibt Flüssen wieder mehr Raum?", optionen: ["Deiche zurückverlegen und Auen renaturieren", "Flüsse begradigen", "Flussufer bebauen", "mehr Flächen asphaltieren"], richtig: 0, erklaerung: "Auen speichern Hochwasser." },
        { typ: "mc", frage: "Warum ist die Waldbrandgefahr in Brandenburg hoch?", optionen: ["trockene Sommer und viele Kiefernwälder", "zu viele Flüsse", "hohe Berge", "kaltes Klima"], richtig: 0, erklaerung: "Brandenburg gehört zu den trockensten Bundesländern." },
        { typ: "tf", frage: "Ein Tornado ist größer und langlebiger als ein Hurrikan.", richtig: false, erklaerung: "Tornados sind klein und kurz, Hurrikane riesig und tagelang aktiv." },
        { typ: "mc", frage: "Wann wird eine Naturgefahr zum Naturrisiko?", optionen: ["wenn Menschen und ihre Werte betroffen sein können", "wenn sie im Meer stattfindet", "wenn sie im Winter passiert", "wenn sie selten ist"], richtig: 0, erklaerung: "Gefahr + verletzliche Menschen = Risiko." }
      ]
    },
    {
      id: "bevoelkerung",
      titel: "Weltbevölkerung und demografischer Wandel",
      minuten: 12,
      themen: ["Bevölkerungspyramide", "Wachstum", "Alterung"],
      lesen: [
        { h: "Wachstum der Weltbevölkerung", p: [
          "Heute leben über <b>8 Milliarden</b> Menschen auf der Erde (1800: 1 Milliarde, 1960: 3 Milliarden). Das Wachstum findet vor allem in Afrika und Teilen Asiens statt; in Europa, Japan und China schrumpft oder altert die Bevölkerung.",
          "Wachstum = Geburten minus Sterbefälle (natürliche Entwicklung) plus Zuwanderung minus Abwanderung. Wichtige Kennzahlen: <b>Geburtenrate</b> und <b>Sterberate</b> (je 1000 Einwohner), <b>Lebenserwartung</b>, Kinder pro Frau (Fertilität)." ] },
        { h: "Bevölkerungspyramiden lesen", p: [
          "Das Diagramm zeigt Altersgruppen (unten jung, oben alt), links Männer, rechts Frauen. <b>Pyramide</b> (breite Basis): junge, wachsende Bevölkerung (Niger, Uganda). <b>Glocke/Bienenkorb</b>: stabile Bevölkerung. <b>Urne/Pilz</b> (schmale Basis, dicke Mitte): alternde, schrumpfende Bevölkerung (Deutschland, Japan, Italien).",
          "<b>Demografischer Übergang</b>: Mit besserer Medizin sinkt erst die Sterberate (Bevölkerung wächst schnell), später sinkt auch die Geburtenrate (Bildung, Verhütung, Wohlstand) – das Wachstum flacht ab." ],
          beispiel: "Deutschland: wenige Geburten, hohe Lebenserwartung → weniger junge Beitragszahler für mehr Rentner. Antworten: Zuwanderung, längeres Arbeiten, Familienförderung." },
        { h: "Verstädterung", p: [
          "Mehr als die Hälfte der Menschheit lebt in Städten (Tendenz steigend). <b>Landflucht</b>: Menschen ziehen in Städte, weil sie Arbeit, Bildung und Gesundheitsversorgung erhoffen. <b>Megastädte</b> (über 10 Mio.): Tokio, Delhi, Shanghai, São Paulo, Mexiko-Stadt, Lagos.",
          "Probleme: Slums ohne Wasser und Kanalisation, Verkehr, Luftverschmutzung. Chancen: Stadt als Entwicklungsmotor – Jobs, Schulen, Innovation." ] }
      ],
      merken: [
        "Über 8 Milliarden Menschen; Wachstum vor allem in Afrika, Alterung in Europa und Ostasien.",
        "Pyramide = jung und wachsend, Urne = alt und schrumpfend.",
        "Demografischer Übergang: erst sinkt die Sterberate, dann die Geburtenrate.",
        "Verstädterung: über 50 % leben in Städten; Megastadt = über 10 Mio."
      ],
      aufgaben: [
        { typ: "mc", frage: "Wie viele Menschen leben etwa auf der Erde?", optionen: ["über 8 Milliarden", "etwa 5 Milliarden", "etwa 12 Milliarden", "800 Millionen"], richtig: 0, erklaerung: "Die 8-Milliarden-Marke wurde 2022 überschritten." },
        { typ: "mc", frage: "Eine Bevölkerungspyramide mit sehr breiter Basis zeigt …", optionen: ["eine junge, schnell wachsende Bevölkerung", "eine alternde Bevölkerung", "eine stabile Bevölkerung", "viele alte Männer"], richtig: 0, erklaerung: "Viele Kinder = breite Basis = Wachstum." },
        { typ: "mc", frage: "Welche Form hat die Bevölkerungspyramide Deutschlands?", optionen: ["Urne (schmale Basis, dicke Mitte)", "Dreieck/Pyramide", "Glocke", "Rechteck"], richtig: 0, erklaerung: "Wenige Geburten, starke mittlere und ältere Jahrgänge." },
        { typ: "mc", frage: "Was sinkt beim demografischen Übergang zuerst?", optionen: ["die Sterberate", "die Geburtenrate", "die Lebenserwartung", "die Zuwanderung"], richtig: 0, erklaerung: "Bessere Medizin → weniger Tote; die Geburtenrate sinkt erst später." },
        { typ: "mc", frage: "Ab wie vielen Einwohnern spricht man von einer Megastadt?", optionen: ["über 10 Millionen", "über 1 Million", "über 100 Millionen", "über 500 000"], richtig: 0, erklaerung: "Megastadt = mehr als 10 Mio. Einwohner." },
        { typ: "mc", frage: "Was ist Landflucht?", optionen: ["Abwanderung vom Land in die Städte", "Flucht vor Hochwasser", "Umzug von der Stadt aufs Land", "Auswanderung in ein anderes Land"], richtig: 0, erklaerung: "Hoffnung auf Arbeit und Bildung in der Stadt." },
        { typ: "mc", frage: "Welches Problem bringt eine alternde Bevölkerung mit sich?", optionen: ["weniger Beitragszahler für mehr Rentner", "zu viele Schulen", "Überfüllung der Kindergärten", "zu wenig Altersheime werden gebraucht"], richtig: 0, erklaerung: "Rentensystem und Pflege werden belastet." },
        { typ: "tf", frage: "Mehr als die Hälfte der Weltbevölkerung lebt heute in Städten.", richtig: true, erklaerung: "Seit etwa 2007 – Tendenz steigend." }
      ]
    },
    {
      id: "migration",
      titel: "Migration – Ursachen und Folgen",
      minuten: 10,
      themen: ["Push/Pull", "Flucht", "Integration"],
      lesen: [
        { h: "Formen und Ursachen", p: [
          "<b>Migration</b> = dauerhafter Wohnortwechsel. <b>Binnenmigration</b> (innerhalb eines Landes, z. B. Landflucht) und <b>internationale Migration</b>. <b>Flucht</b> ist unfreiwillige Migration vor Krieg, Verfolgung oder Katastrophen.",
          "<b>Push-Faktoren</b> (stoßen ab): Armut, Arbeitslosigkeit, Krieg, Verfolgung, Dürre, fehlende Bildung. <b>Pull-Faktoren</b> (ziehen an): Arbeit, Sicherheit, Freiheit, Bildung, Familie im Zielland." ] },
        { h: "Folgen", p: [
          "Für die <b>Herkunftsregion</b>: Verlust junger Menschen und Fachkräfte (Brain Drain), aber Geldüberweisungen an die Familie (Rücküberweisungen) und weniger Druck auf den Arbeitsmarkt.",
          "Für die <b>Zielregion</b>: Arbeitskräfte und Vielfalt, aber Herausforderungen bei Wohnraum, Sprache, Schule und <b>Integration</b>. Weltweit sind über 100 Millionen Menschen auf der Flucht – die meisten bleiben in ihrem eigenen Land oder in Nachbarländern." ],
          beispiel: "Deutschland: Gastarbeiter ab 1955 (Italien, Türkei …), Spätaussiedler nach 1990, Geflüchtete aus Syrien 2015 und der Ukraine 2022. Brandenburg: Abwanderung nach 1990, heute Zuzug ins Berliner Umland (Potsdam wächst), Abwanderung aus ländlichen Regionen." },
        { h: "Zuwanderung verstehen", p: [
          "Begriffe: <b>Asyl</b> = Schutz für politisch Verfolgte (Grundrecht, Art. 16a GG); <b>Flüchtling</b> nach der Genfer Konvention; <b>Arbeitsmigration</b>. Vorurteile prüfen: Fakten statt Gefühl, Einzelfälle nicht verallgemeinern." ] }
      ],
      merken: [
        "Migration = dauerhafter Wohnortwechsel; Flucht = unfreiwillig.",
        "Push: Armut, Krieg, Verfolgung, Dürre. Pull: Arbeit, Sicherheit, Freiheit, Familie.",
        "Herkunftsland: Brain Drain, aber Rücküberweisungen. Zielland: Arbeitskräfte, Integration als Aufgabe.",
        "Die meisten Geflüchteten bleiben im eigenen Land oder in Nachbarländern."
      ],
      aufgaben: [
        { typ: "mc", frage: "Welches ist ein Pull-Faktor?", optionen: ["gute Arbeitsplätze im Zielland", "Krieg in der Heimat", "Dürre in der Heimat", "Arbeitslosigkeit in der Heimat"], richtig: 0, erklaerung: "Pull-Faktoren ziehen in das Zielland." },
        { typ: "mc", frage: "Was ist Binnenmigration?", optionen: ["Umzug innerhalb eines Landes", "Flucht über das Meer", "Auswanderung nach Amerika", "Pendeln zur Arbeit"], richtig: 0, erklaerung: "z. B. vom Dorf nach Berlin." },
        { typ: "mc", frage: "Was bedeutet „Brain Drain“?", optionen: ["Abwanderung gut ausgebildeter Menschen aus einem Land", "Zuwanderung von Fachkräften", "Verlust von Ackerland", "Verstädterung"], richtig: 0, erklaerung: "Das Herkunftsland verliert Fachkräfte." },
        { typ: "mc", frage: "Wo leben die meisten Geflüchteten weltweit?", optionen: ["im eigenen Land oder in Nachbarländern", "in Deutschland", "in den USA", "in Australien"], richtig: 0, erklaerung: "Die meisten Fluchtbewegungen sind regional." },
        { typ: "mc", frage: "Welche Region in Brandenburg wächst heute durch Zuzug?", optionen: ["das Berliner Umland (z. B. Potsdam)", "die Prignitz", "die Uckermark", "die Lausitz"], richtig: 0, erklaerung: "Speckgürtel um Berlin wächst, ländliche Räume verlieren Einwohner." },
        { typ: "mc", frage: "Was sind Rücküberweisungen?", optionen: ["Geld, das Migranten an Familien in der Heimat schicken", "Steuern an das Zielland", "Rückzahlung von Fluchtkosten", "Geld vom Staat für Rückkehrer"], richtig: 0, erklaerung: "Wichtige Einnahmequelle vieler Herkunftsländer." },
        { typ: "mc", frage: "Was bedeutet Integration?", optionen: ["Zugewanderte werden Teil der Gesellschaft – mit Sprache, Arbeit, Teilhabe", "Zugewanderte leben getrennt in eigenen Vierteln", "Zugewanderte müssen das Land wieder verlassen", "Zugewanderte geben ihre Herkunft vollständig auf"], richtig: 0, erklaerung: "Teilhabe von beiden Seiten." },
        { typ: "tf", frage: "Flucht ist eine Form unfreiwilliger Migration.", richtig: true, erklaerung: "Vor Krieg, Verfolgung oder Katastrophen." }
      ]
    },
    {
      id: "tropen",
      titel: "Vielfalt der Erde: Klimazonen und Tropen",
      minuten: 12,
      themen: ["Klimazonen", "Regenwald", "Nachhaltigkeit"],
      lesen: [
        { h: "Klimazonen und Geofaktoren", p: [
          "Je nach Breitenlage gliedert sich die Erde in <b>Klimazonen</b>: Polare Zone, Gemäßigte Zone (Deutschland), Subtropen (Mittelmeer, Wüsten), <b>Tropen</b> (um den Äquator). Die Sonne steht in den Tropen das ganze Jahr hoch – es gibt keine Jahreszeiten wie bei uns, sondern Regen- und Trockenzeiten.",
          "<b>Geofaktoren</b> wie Klima, Relief, Boden, Wasser, Vegetation und Mensch hängen zusammen (Modell der Geofaktoren): Ändert sich einer, ändern sich die anderen." ] },
        { h: "Der tropische Regenwald", p: [
          "<b>Immerfeuchte Tropen</b> (Amazonas, Kongobecken, Indonesien): das ganze Jahr heiß (ca. 25 °C) und feucht (über 2000 mm Regen), <b>Tageszeitenklima</b> (Unterschied Tag–Nacht größer als zwischen den Monaten). Größte Artenvielfalt der Erde, <b>Stockwerkbau</b> (Kraut-, Strauch-, Baumschicht, Urwaldriesen).",
          "Paradox: Üppiger Wald auf <b>nährstoffarmem Boden</b> – die Nährstoffe stecken in den Pflanzen, der <b>Nährstoffkreislauf</b> ist kurz (abgestorbenes wird sofort zersetzt). Wird der Wald gerodet, spült der Regen den Boden aus (Erosion, Laterit)." ],
          beispiel: "Wechselfeuchte Tropen (Savanne): Regen- und Trockenzeit, Gräser und einzelne Bäume, große Tierherden (Serengeti)." },
        { h: "Nutzung und Nachhaltigkeit", p: [
          "Gefährdung: Rodung für Rinderweiden, Soja, Palmöl, Holz, Bergbau, Straßen – jedes Jahr verschwinden Millionen Hektar. Folgen: Artensterben, CO₂-Freisetzung, Verlust des Lebensraums indigener Völker.",
          "<b>Nachhaltige Nutzung</b>: Agroforstwirtschaft (Bäume und Nutzpflanzen gemischt), Schutzgebiete, fairer Handel, Zertifikate (FSC-Holz), weniger Fleisch- und Palmölkonsum bei uns. Nachhaltig heißt: ökologisch, ökonomisch und sozial tragfähig – auch für künftige Generationen." ] }
      ],
      merken: [
        "Klimazonen: polar – gemäßigt – subtropisch – tropisch; Tropen mit Tageszeitenklima.",
        "Regenwald: heiß, feucht, artenreich, Stockwerkbau – aber nährstoffarmer Boden, kurzer Nährstoffkreislauf.",
        "Rodung → Erosion, Artensterben, CO₂. Ursachen: Weiden, Soja, Palmöl, Holz.",
        "Nachhaltig = ökologisch + ökonomisch + sozial, auch für künftige Generationen."
      ],
      aufgaben: [
        { typ: "mc", frage: "Was ist typisch für das Klima der immerfeuchten Tropen?", optionen: ["ganzjährig heiß und feucht, Tageszeitenklima", "heiße Sommer, kalte Winter", "trocken mit wenig Regen", "lange Dunkelheit im Winter"], richtig: 0, erklaerung: "Kaum Unterschiede zwischen den Monaten, große zwischen Tag und Nacht." },
        { typ: "mc", frage: "Warum ist der Boden im Regenwald nährstoffarm?", optionen: ["Die Nährstoffe sind in den Pflanzen gespeichert, der Kreislauf ist kurz", "Weil es nie regnet", "Weil es zu kalt ist", "Weil keine Tiere dort leben"], richtig: 0, erklaerung: "Abgestorbenes wird sofort zersetzt und wieder aufgenommen." },
        { typ: "mc", frage: "Was passiert nach der Rodung mit dem Regenwaldboden?", optionen: ["Er wird vom Regen ausgewaschen und unfruchtbar (Erosion)", "Er wird fruchtbarer", "Er bleibt unverändert", "Er friert ein"], richtig: 0, erklaerung: "Ohne Pflanzendecke spült der Regen die wenigen Nährstoffe weg." },
        { typ: "input", frage: "Wie nennt man die Gliederung des Regenwalds in Kraut-, Strauch- und Baumschicht? (…bau)", antworten: ["Stockwerkbau", "Stockwerksbau"], erklaerung: "Stockwerkbau mit mehreren Etagen." },
        { typ: "mc", frage: "Welcher Grund für Regenwaldrodung hängt mit unserem Konsum zusammen?", optionen: ["Anbau von Soja (Tierfutter) und Palmöl", "Bau von Skigebieten", "Olivenanbau", "Weinanbau"], richtig: 0, erklaerung: "Soja für Fleischproduktion, Palmöl in vielen Lebensmitteln." },
        { typ: "mc", frage: "In welcher Klimazone liegt Deutschland?", optionen: ["gemäßigte Zone", "Tropen", "Subtropen", "polare Zone"], richtig: 0, erklaerung: "Gemäßigte Zone mit vier Jahreszeiten." },
        { typ: "mc", frage: "Was ist Agroforstwirtschaft?", optionen: ["Bäume und Nutzpflanzen gemeinsam anbauen", "Wald komplett roden für Felder", "nur Rinder halten", "Monokultur aus Palmen"], richtig: 0, erklaerung: "Schont den Boden und erhält Vielfalt." },
        { typ: "mc", frage: "Welche drei Dimensionen hat Nachhaltigkeit?", optionen: ["ökologisch, ökonomisch, sozial", "schnell, billig, groß", "Luft, Wasser, Boden", "Stadt, Land, Fluss"], richtig: 0, erklaerung: "Umwelt, Wirtschaft und Gesellschaft im Gleichgewicht." }
      ]
    },
    {
      id: "armut-reichtum",
      titel: "Armut und Reichtum in der Einen Welt",
      minuten: 12,
      themen: ["Entwicklungsindikatoren", "HDI", "fairer Handel"],
      lesen: [
        { h: "Entwicklungsunterschiede messen", p: [
          "<b>Indikatoren</b>: Bruttoinlandsprodukt pro Kopf (BIP – Wirtschaftsleistung), Lebenserwartung, Kindersterblichkeit, Alphabetisierungsrate, Schulbesuch, Zugang zu sauberem Wasser und Gesundheitsversorgung. Der <b>HDI</b> (Index der menschlichen Entwicklung) fasst Einkommen, Bildung und Lebenserwartung zusammen (0 bis 1).",
          "Begriffe: Industrieländer, Schwellenländer (Brasilien, Indien, China), Entwicklungsländer / Länder des Globalen Südens. Der alte Begriff „Dritte Welt“ wird heute vermieden." ] },
        { h: "Ursachen von Armut", p: [
          "<b>Historisch</b>: Kolonialismus, einseitige Rohstoffwirtschaft. <b>Politisch</b>: Korruption, Kriege, schlechte Regierung. <b>Wirtschaftlich</b>: Schulden, ungerechte Handelsbedingungen (niedrige Rohstoffpreise). <b>Naturräumlich</b>: Dürren, Fluten, Krankheiten. <b>Sozial</b>: fehlende Bildung, schnelles Bevölkerungswachstum.",
          "<b>Absolute Armut</b>: weniger als ca. 2 US-Dollar am Tag (Weltbank-Grenze), über 700 Millionen Menschen. <b>Relative Armut</b>: deutlich weniger als der Durchschnitt des eigenen Landes – auch in Deutschland." ],
          beispiel: "Teufelskreis der Armut: wenig Einkommen → wenig Bildung und Gesundheit → wenig Produktivität → wenig Einkommen. Bildung durchbricht den Kreis am wirksamsten." },
        { h: "Wege aus der Armut", p: [
          "<b>Fairer Handel</b> (Fairtrade): garantierte Mindestpreise, keine Kinderarbeit, Prämien für Schulen und Brunnen – z. B. Kaffee, Kakao, Bananen. <b>Mikrokredite</b> für kleine Unternehmen. <b>Entwicklungszusammenarbeit</b>: Bildung, Gesundheit, Infrastruktur.",
          "Die <b>17 Nachhaltigkeitsziele der UN</b> (SDGs, bis 2030): u. a. keine Armut, kein Hunger, Bildung für alle, sauberes Wasser, Klimaschutz. Jeder Konsum bei uns hat Folgen anderswo – Schokolade, Kleidung, Handy." ] }
      ],
      merken: [
        "Indikatoren: BIP pro Kopf, Lebenserwartung, Kindersterblichkeit, Bildung. HDI fasst Einkommen, Bildung, Lebenserwartung zusammen.",
        "Absolute Armut: unter ca. 2 US-Dollar pro Tag. Relative Armut: deutlich unter dem Landesdurchschnitt.",
        "Ursachen: Kolonialismus, Korruption, Kriege, Schulden, Dürre, fehlende Bildung – Teufelskreis.",
        "Wege: Bildung, fairer Handel, Mikrokredite, 17 UN-Nachhaltigkeitsziele."
      ],
      aufgaben: [
        { typ: "mc", frage: "Was misst der HDI?", optionen: ["Einkommen, Bildung und Lebenserwartung zusammen", "nur die Wirtschaftsleistung", "die Fläche eines Landes", "die Anzahl der Autos"], richtig: 0, erklaerung: "Index der menschlichen Entwicklung, 0 bis 1." },
        { typ: "mc", frage: "Was bedeutet absolute Armut?", optionen: ["weniger als ca. 2 US-Dollar pro Tag zum Leben", "weniger Geld als die Nachbarn", "kein Auto besitzen", "keine Rente bekommen"], richtig: 0, erklaerung: "Grenze der Weltbank für extreme Armut." },
        { typ: "mc", frage: "Was ist ein Schwellenland?", optionen: ["ein Land auf dem Weg zum Industrieland, z. B. Brasilien oder Indien", "ein Land ohne Industrie", "ein sehr kleines Land", "ein Land in Europa"], richtig: 0, erklaerung: "Wirtschaft wächst schnell, aber große Unterschiede im Land." },
        { typ: "mc", frage: "Wie durchbricht man den Teufelskreis der Armut am wirksamsten?", optionen: ["durch Bildung", "durch mehr Kinder", "durch Rohstoffexport allein", "durch höhere Schulden"], richtig: 0, erklaerung: "Bildung → bessere Arbeit, Gesundheit, Einkommen." },
        { typ: "mc", frage: "Was garantiert fairer Handel den Bauern?", optionen: ["Mindestpreise und Prämien für Gemeinschaftsprojekte", "kostenlose Lieferung nach Europa", "staatliche Rente", "Steuerfreiheit"], richtig: 0, erklaerung: "Außerdem: keine ausbeuterische Kinderarbeit." },
        { typ: "mc", frage: "Welches ist KEIN Indikator für Entwicklung?", optionen: ["Anzahl der Fußballvereine", "Kindersterblichkeit", "Alphabetisierungsrate", "Lebenserwartung"], richtig: 0, erklaerung: "Fußballvereine sagen nichts über Entwicklung aus." },
        { typ: "mc", frage: "Wie viele Nachhaltigkeitsziele (SDGs) haben die Vereinten Nationen beschlossen?", optionen: ["17", "7", "50", "3"], richtig: 0, erklaerung: "17 Ziele bis 2030." },
        { typ: "tf", frage: "Relative Armut gibt es auch in reichen Ländern wie Deutschland.", richtig: true, erklaerung: "Wer deutlich weniger als der Durchschnitt hat, gilt als relativ arm." }
      ]
    }
  ]
};
