window.K7_DATA = {
  id: "k7-kunst",
  fach: "Kunst",
  icon: "KU",
  untertitel: "Klasse 7 Gymnasium · Doppeljahrgang 7/8: Perspektive, Licht und Schatten, Farbe, Comic, Fotografie, Kunst im Kontext",
  stand: "November 2026",
  quelle: { titel: "Rahmenlehrplan Teil C Kunst (Jgst. 1–10), Kapitel 3.4 Doppeljahrgangsstufe 7/8", url: "https://bildungsserver.berlin-brandenburg.de/fileadmin/bbb/unterricht/rahmenlehrplaene/Rahmenlehrplanprojekt/amtliche_Fassung/Teil_C_Kunst_2015_11_10.pdf" },
  bloecke: [
    {
      id: "perspektive",
      titel: "Räumlich zeichnen: Perspektive",
      minuten: 10,
      themen: ["Fluchtpunkt", "Horizont", "Raumillusion"],
      lesen: [
        { h: "Raum auf der Fläche", p: [
          "Mittel, um auf einer Fläche Tiefe zu erzeugen: <b>Überschneidung</b> (Vorderes verdeckt Hinteres), <b>Größenunterschied</b> (Fernes ist kleiner), <b>Höhenlage</b> (Fernes liegt höher im Bild), <b>Farb- und Luftperspektive</b> (Fernes ist blasser, bläulicher, unschärfer), <b>Staffelung</b>." ] },
        { h: "Zentralperspektive", p: [
          "In der <b>Zentralperspektive</b> (Fluchtpunktperspektive) laufen alle in die Tiefe führenden Linien auf einen <b>Fluchtpunkt</b> auf der <b>Horizontlinie</b> (Augenhöhe) zu – wie Bahnschienen. Waagerechte und senkrechte Linien bleiben parallel.",
          "<b>Zwei-Fluchtpunkt-Perspektive</b> (Übereckperspektive): Man blickt auf eine Kante, die Linien laufen nach links und rechts auf zwei Fluchtpunkte zu. Liegt der Horizont hoch, sieht man von oben (Vogelperspektive), liegt er tief, von unten (Froschperspektive).",
          "Entwickelt in der Renaissance (Brunelleschi, Alberti, um 1420) – Vorher im Mittelalter: <b>Bedeutungsperspektive</b> (Wichtiges wird groß gezeichnet)." ],
          beispiel: "Straße zeichnen: Horizontlinie ziehen, Fluchtpunkt setzen, Straßenränder und Hauskanten zum Fluchtpunkt führen – fertig ist der Tiefensog." },
        { h: "Parallelperspektive", p: [
          "Für technische Zeichnungen: <b>Kavalierperspektive</b> – Vorderseite unverzerrt, Tiefenlinien schräg (45°) und verkürzt (halbe Länge), parallel. <b>Isometrie</b>: alle drei Achsen gleich lang, 30°-Winkel. Hier gibt es keinen Fluchtpunkt." ] }
      ],
      merken: [
        "Raumillusion: Überschneidung, Größe, Höhenlage, Luftperspektive (fern = blass, bläulich).",
        "Zentralperspektive: Tiefenlinien laufen auf einen Fluchtpunkt auf der Horizontlinie (Augenhöhe) zu.",
        "Hoher Horizont = Vogelperspektive, tiefer Horizont = Froschperspektive.",
        "Kavalierperspektive: Tiefenlinien parallel, 45°, halb so lang – kein Fluchtpunkt."
      ],
      aufgaben: [
        { typ: "mc", frage: "Wo liegt der Fluchtpunkt in der Zentralperspektive?", optionen: ["auf der Horizontlinie (Augenhöhe)", "immer in der Bildmitte unten", "am oberen Bildrand", "außerhalb des Bildes rechts"], richtig: 0, erklaerung: "Horizont = Augenhöhe des Betrachters." },
        { typ: "mc", frage: "Wie wirken ferne Berge in der Luftperspektive?", optionen: ["blasser und bläulicher", "kräftiger und wärmer", "schärfer", "größer"], richtig: 0, erklaerung: "Die Luft dazwischen schwächt Kontraste und Farben." },
        { typ: "mc", frage: "Ein Bild zeigt eine Stadt von hoch oben. Wo liegt die Horizontlinie?", optionen: ["hoch im Bild (Vogelperspektive)", "tief im Bild (Froschperspektive)", "es gibt keine", "genau in der Mitte"], richtig: 0, erklaerung: "Hoher Horizont = Blick von oben." },
        { typ: "mc", frage: "Was ist Bedeutungsperspektive?", optionen: ["Wichtige Personen werden größer dargestellt, unabhängig von der Entfernung", "Ferne Dinge sind kleiner", "Alle Linien laufen zum Fluchtpunkt", "Nur Farben zeigen die Tiefe"], richtig: 0, erklaerung: "Typisch für mittelalterliche Bilder." },
        { typ: "mc", frage: "Welches Mittel erzeugt KEINE Raumtiefe?", optionen: ["alle Figuren gleich groß nebeneinander", "Überschneidung", "Größenunterschied", "Staffelung"], richtig: 0, erklaerung: "Gleiche Größe und keine Überschneidung wirkt flach." },
        { typ: "mc", frage: "In der Kavalierperspektive werden die Tiefenlinien …", optionen: ["parallel, schräg (45°) und verkürzt gezeichnet", "zum Fluchtpunkt geführt", "senkrecht gezeichnet", "weggelassen"], richtig: 0, erklaerung: "Parallelperspektive ohne Fluchtpunkt." },
        { typ: "mc", frage: "In welcher Epoche wurde die Zentralperspektive entwickelt?", optionen: ["Renaissance", "Mittelalter", "Barock", "Romantik"], richtig: 0, erklaerung: "Um 1420 in Florenz (Brunelleschi)." },
        { typ: "input", frage: "Wie heißt der Punkt, auf den alle Tiefenlinien zulaufen?", antworten: ["Fluchtpunkt"], erklaerung: "Fluchtpunkt auf der Horizontlinie." }
      ]
    },
    {
      id: "licht-schatten",
      titel: "Licht, Schatten und Schraffur",
      minuten: 10,
      themen: ["Eigenschatten", "Schlagschatten", "Bleistifthärten"],
      lesen: [
        { h: "Plastisch zeichnen", p: [
          "Ein Körper wirkt plastisch durch Hell-Dunkel: <b>Lichtseite</b>, <b>Eigenschatten</b> (auf dem Körper selbst, von der Lichtquelle abgewandt), <b>Schlagschatten</b> (den der Körper auf den Boden/die Wand wirft), <b>Reflexlicht</b> (aufgehelltes Licht vom Boden am Schattenrand), <b>Glanzlicht</b> (hellster Punkt).",
          "Der Schlagschatten liegt immer auf der Seite, die vom Licht abgewandt ist, und wird mit flacherem Licht länger." ] },
        { h: "Techniken", p: [
          "<b>Schraffur</b>: parallele Striche; <b>Kreuzschraffur</b>: Striche in zwei Richtungen für dunklere Töne; <b>Verwischen</b> mit Finger oder Papierwischer für weiche Übergänge; <b>Punktieren</b>.",
          "<b>Bleistifthärten</b>: H = hart (hell, fein, für Vorzeichnungen; 2H, 4H), HB = mittel, B = weich (dunkel, für Schatten; 2B, 4B, 6B). Tinte, Kohle, Rötel für andere Wirkungen." ],
          beispiel: "Kugel zeichnen: Kreis, Lichtquelle festlegen, Glanzlicht frei lassen, Eigenschatten mit Schraffur verdichten, Reflexlicht am unteren Rand heller lassen, Schlagschatten als Ellipse auf dem Boden." },
        { h: "Komposition und Ausschnitt", p: [
          "<b>Bildausschnitt</b> bestimmen: Was ist drin, was bleibt draußen? <b>Bildaufbau</b>: Symmetrie (ruhig), Asymmetrie (spannend), <b>Drittelregel</b> (wichtige Elemente auf den Schnittpunkten der Drittel-Linien), Diagonale (Bewegung), Dreieckskomposition (Stabilität).",
          "<b>Verzerrung</b> und <b>Verfremdung</b> (Überhöhung, Karikatur) sind bewusste Gestaltungsmittel – z. B. in der Karikatur, bei Picasso oder im Surrealismus." ] }
      ],
      merken: [
        "Lichtseite, Eigenschatten, Schlagschatten, Reflexlicht, Glanzlicht.",
        "Schraffur, Kreuzschraffur, Verwischen; H = hart/hell, B = weich/dunkel.",
        "Schlagschatten liegt vom Licht abgewandt auf dem Untergrund.",
        "Komposition: Drittelregel, Diagonale (Bewegung), Symmetrie (Ruhe), Dreieck (Stabilität)."
      ],
      aufgaben: [
        { typ: "mc", frage: "Was ist der Schlagschatten?", optionen: ["der Schatten, den ein Körper auf Boden oder Wand wirft", "die dunkle Seite des Körpers selbst", "der hellste Punkt", "das aufgehellte Licht am Schattenrand"], richtig: 0, erklaerung: "Eigenschatten = auf dem Körper, Schlagschatten = auf dem Untergrund." },
        { typ: "mc", frage: "Welcher Bleistift ist am weichsten und dunkelsten?", optionen: ["6B", "2H", "HB", "4H"], richtig: 0, erklaerung: "B = weich (black), H = hart." },
        { typ: "mc", frage: "Wie erzeugt man mit Schraffur besonders dunkle Flächen?", optionen: ["Kreuzschraffur in mehreren Richtungen", "einzelne dünne Striche", "Striche weit auseinander", "mit Radiergummi"], richtig: 0, erklaerung: "Mehrere Lagen Striche verdichten den Ton." },
        { typ: "mc", frage: "Das Licht kommt von links oben. Wo liegt der Schlagschatten?", optionen: ["rechts unten", "links oben", "direkt unter dem Objekt mittig", "über dem Objekt"], richtig: 0, erklaerung: "Auf der vom Licht abgewandten Seite." },
        { typ: "mc", frage: "Was besagt die Drittelregel?", optionen: ["Wichtige Bildelemente liegen auf den Schnittpunkten der Drittel-Linien", "Das Bild hat drei Farben", "Das Motiv steht genau in der Mitte", "Ein Drittel des Bildes bleibt leer"], richtig: 0, erklaerung: "Wirkt spannender als die Mitte." },
        { typ: "mc", frage: "Welche Wirkung hat eine Diagonale im Bildaufbau?", optionen: ["Bewegung und Dynamik", "Ruhe und Ordnung", "Stabilität", "Langeweile"], richtig: 0, erklaerung: "Symmetrie beruhigt, Diagonalen bewegen." },
        { typ: "mc", frage: "Was ist das Glanzlicht?", optionen: ["die hellste Stelle, an der das Licht direkt reflektiert wird", "der Schatten auf dem Boden", "die dunkelste Stelle", "ein Fehler in der Zeichnung"], richtig: 0, erklaerung: "Bleibt beim Zeichnen oft weiß." },
        { typ: "mc", frage: "Wofür eignet sich ein harter Bleistift (2H)?", optionen: ["feine, helle Vorzeichnungen", "tiefe Schatten", "Verwischen", "Kohlezeichnung"], richtig: 0, erklaerung: "Hart = hell und fein." }
      ]
    },
    {
      id: "farbe",
      titel: "Farbe: Farbkreis, Kontraste, Wirkung",
      minuten: 10,
      themen: ["Itten", "Komplementärkontrast", "Farbwirkung"],
      lesen: [
        { h: "Der Farbkreis", p: [
          "<b>Grundfarben</b> (Primärfarben): Rot, Gelb, Blau – nicht mischbar. <b>Sekundärfarben</b> durch Mischen von zwei Grundfarben: Orange (Rot+Gelb), Grün (Gelb+Blau), Violett (Blau+Rot). <b>Tertiärfarben</b>: Grund- + Nachbar-Sekundärfarbe (z. B. Blaugrün). Der <b>Farbkreis nach Itten</b> ordnet sie im Kreis an.",
          "<b>Komplementärfarben</b> liegen sich im Kreis gegenüber: Rot–Grün, Gelb–Violett, Blau–Orange. Nebeneinander steigern sie sich (leuchten), gemischt ergeben sie Grau/Braun." ] },
        { h: "Farbkontraste", p: [
          "<b>Komplementärkontrast</b> (Rot neben Grün), <b>Hell-Dunkel-Kontrast</b>, <b>Kalt-Warm-Kontrast</b> (Blau/Grün kühl – Rot/Orange/Gelb warm), <b>Farbe-an-sich-Kontrast</b> (reine, kräftige Farben nebeneinander – Kinderbilder, Expressionismus), <b>Qualitätskontrast</b> (leuchtend neben trüb), <b>Quantitätskontrast</b> (viel neben wenig).",
          "<b>Farbwirkung</b>: Rot = Energie, Liebe, Gefahr; Blau = Ruhe, Ferne, Kälte; Gelb = Sonne, Freude, Warnung; Grün = Natur, Hoffnung; Schwarz = Trauer, Eleganz; Weiß = Reinheit. Wirkungen sind kulturell geprägt (Weiß ist in Asien Trauerfarbe)." ],
          beispiel: "Warme Farben kommen optisch nach vorn, kalte treten zurück – auch das erzeugt Raumtiefe." },
        { h: "Maltechniken", p: [
          "<b>Aquarell</b>: transparent, viel Wasser, hell zu dunkel, Weiß = Papier. <b>Acryl</b>: deckend, schnell trocknend, auf fast allem. <b>Gouache/Tempera</b>: deckend, matt. <b>Lasur</b> = dünne durchsichtige Schicht, <b>pastos</b> = dick aufgetragen (van Gogh). Pigmente sind die Farbteilchen, Bindemittel hält sie zusammen (Öl, Acrylharz, Gummi arabicum)." ] }
      ],
      merken: [
        "Grundfarben Rot, Gelb, Blau; Sekundärfarben Orange, Grün, Violett.",
        "Komplementär: Rot–Grün, Gelb–Violett, Blau–Orange – gegenüber im Farbkreis.",
        "Kontraste: Komplementär, Hell-Dunkel, Kalt-Warm, Farbe-an-sich, Qualität, Quantität.",
        "Aquarell transparent, Acryl deckend; Lasur dünn, pastos dick."
      ],
      aufgaben: [
        { typ: "input", frage: "Welche Farbe ist die Komplementärfarbe zu Rot?", antworten: ["Grün", "gruen"], erklaerung: "Rot–Grün liegen sich im Farbkreis gegenüber." },
        { typ: "mc", frage: "Welche Farbe entsteht aus Blau und Gelb?", optionen: ["Grün", "Orange", "Violett", "Braun"], richtig: 0, erklaerung: "Blau + Gelb = Grün (Sekundärfarbe)." },
        { typ: "mc", frage: "Welche Farben sind die drei Grundfarben?", optionen: ["Rot, Gelb, Blau", "Rot, Grün, Blau", "Orange, Grün, Violett", "Schwarz, Weiß, Grau"], richtig: 0, erklaerung: "Primärfarben der Malerei (RGB gilt für Licht/Bildschirm)." },
        { typ: "mc", frage: "Blau neben Orange – welcher Kontrast?", optionen: ["Komplementärkontrast", "Hell-Dunkel-Kontrast", "Quantitätskontrast", "Qualitätskontrast"], richtig: 0, erklaerung: "Beide liegen sich im Farbkreis gegenüber." },
        { typ: "mc", frage: "Welche Farben gelten als kalt?", optionen: ["Blau und Blaugrün", "Rot und Orange", "Gelb und Orange", "Rot und Gelb"], richtig: 0, erklaerung: "Kalt-Warm-Kontrast: Blau kühl, Rot/Orange warm." },
        { typ: "mc", frage: "Was ist typisch für Aquarellfarbe?", optionen: ["transparent, Weiß bleibt das Papier", "deckend und dick", "nur für Leinwand", "trocknet nie"], richtig: 0, erklaerung: "Lasierend von hell nach dunkel malen." },
        { typ: "mc", frage: "Was passiert, wenn man Komplementärfarben mischt?", optionen: ["es entsteht ein Grau- oder Braunton", "sie leuchten stärker", "es entsteht Weiß", "es entsteht eine neue Grundfarbe"], richtig: 0, erklaerung: "Nebeneinander leuchten sie, gemischt werden sie trüb." },
        { typ: "mc", frage: "Was bedeutet „pastos“?", optionen: ["dick und mit sichtbarem Pinselstrich aufgetragen", "dünn und durchsichtig", "mit Wasser verdünnt", "mit Bleistift vorgezeichnet"], richtig: 0, erklaerung: "z. B. bei van Gogh." }
      ]
    },
    {
      id: "comic-foto",
      titel: "Comic, Fotografie und Animation",
      minuten: 10,
      themen: ["Panel", "Kameraperspektive", "Bildbearbeitung"],
      lesen: [
        { h: "Comic", p: [
          "Bausteine: <b>Panel</b> (Einzelbild), <b>Rinne</b> (Zwischenraum), <b>Sprechblase</b>, <b>Denkblase</b>, <b>Textkasten</b> (Erzähler), <b>Onomatopoesie</b> (Lautmalerei: „BOOM“, „Klirr“), <b>Speedlines</b> (Bewegungslinien), Schweißtropfen für Aufregung.",
          "Erzählen in Bildern: Ein guter Comic variiert <b>Einstellungsgrößen</b> und lässt zwischen den Panels Zeit vergehen (der Leser füllt die Lücke). Stile: Franko-belgisch (Tim und Struppi, Asterix), US-Superhelden, Manga (von rechts nach links, große Augen), Graphic Novel." ] },
        { h: "Fotografie", p: [
          "<b>Einstellungsgrößen</b>: Totale (Umgebung), Halbtotale (ganze Person), Halbnah (bis zur Hüfte), Nah (Brustbild), Groß (Gesicht), Detail (Auge). <b>Kameraperspektive</b>: Normalsicht, Vogelperspektive (von oben – klein, hilflos), Froschperspektive (von unten – mächtig).",
          "<b>Gestaltung</b>: Bildausschnitt, Drittelregel, Licht (Gegenlicht, Seitenlicht), Schärfe und Unschärfe (Tiefenschärfe), Bewegung (Verwischung). Ein <b>Selfie</b> ist Selbstinszenierung – Blickwinkel, Filter und Ausschnitt steuern die Wirkung.",
          "<b>Bildbearbeitung</b> (Helligkeit, Kontrast, Freistellen, Montage) kann verändern und täuschen – Bilder sind keine Beweise. Persönlichkeitsrecht: Fotos von anderen nur mit Einverständnis veröffentlichen (Recht am eigenen Bild)." ],
          beispiel: "Froschperspektive auf einen Torwart = groß und stark; Vogelperspektive auf ein Kind = klein und verloren." },
        { h: "Animation und Film", p: [
          "Animation = viele Einzelbilder nacheinander (ab ca. 12 Bilder pro Sekunde wirkt Bewegung flüssig). Techniken: Daumenkino, Stop-Motion (Knete, Lego), Zeichentrick, digitale 2D/3D-Animation. <b>Storyboard</b>: Skizzen der Szenen vor dem Dreh.",
          "Filmsprache: Schnitt, Kamerafahrt, Zoom, Schwenk; Montage erzeugt Bedeutung (Kuleschow-Effekt)." ] }
      ],
      merken: [
        "Comic: Panel, Rinne, Sprechblase, Textkasten, Lautmalerei, Speedlines.",
        "Einstellungsgrößen: Totale – Halbtotale – Halbnah – Nah – Groß – Detail.",
        "Froschperspektive macht mächtig, Vogelperspektive klein.",
        "Bilder können bearbeitet sein; Recht am eigenen Bild beachten. Animation = Einzelbilder, Storyboard plant."
      ],
      aufgaben: [
        { typ: "mc", frage: "Wie heißt das Einzelbild eines Comics?", optionen: ["Panel", "Rinne", "Sprechblase", "Textkasten"], richtig: 0, erklaerung: "Panels werden durch die Rinne getrennt." },
        { typ: "mc", frage: "Welche Einstellungsgröße zeigt nur das Gesicht?", optionen: ["Groß", "Totale", "Halbnah", "Halbtotale"], richtig: 0, erklaerung: "Groß = Gesicht, Detail = z. B. nur das Auge." },
        { typ: "mc", frage: "Wie wirkt eine Person aus der Froschperspektive?", optionen: ["groß und mächtig", "klein und hilflos", "normal", "unscharf"], richtig: 0, erklaerung: "Blick von unten." },
        { typ: "mc", frage: "Was ist Onomatopoesie im Comic?", optionen: ["Lautmalerei wie „BOOM“ oder „Klirr“", "eine Denkblase", "der Erzählerkasten", "ein Zeichenstil"], richtig: 0, erklaerung: "Geräusche als Schrift." },
        { typ: "mc", frage: "Was ist ein Storyboard?", optionen: ["Skizzen der geplanten Szenen vor dem Dreh", "die Rückseite eines Comics", "ein Fotoalbum", "ein Filmplakat"], richtig: 0, erklaerung: "Planung von Film und Animation." },
        { typ: "mc", frage: "Darfst du ein Foto deines Mitschülers ohne seine Erlaubnis posten?", optionen: ["Nein – Recht am eigenen Bild", "Ja, wenn es lustig ist", "Ja, in der Klassengruppe immer", "Ja, wenn er nicht erkennbar lächelt"], richtig: 0, erklaerung: "Veröffentlichung nur mit Einverständnis." },
        { typ: "mc", frage: "In welche Richtung liest man einen japanischen Manga?", optionen: ["von rechts nach links", "von links nach rechts", "von unten nach oben", "beliebig"], richtig: 0, erklaerung: "Japanische Leserichtung." },
        { typ: "mc", frage: "Ab wie vielen Bildern pro Sekunde wirkt eine Animation ungefähr flüssig?", optionen: ["ab etwa 12", "ab 2", "ab 100", "ab 1"], richtig: 0, erklaerung: "Kino nutzt 24 Bilder pro Sekunde." }
      ]
    },
    {
      id: "kunstgeschichte",
      titel: "Kunst im Kontext: Epochen und Bildanalyse",
      minuten: 12,
      themen: ["Renaissance", "Impressionismus", "Expressionismus", "Bildbeschreibung"],
      lesen: [
        { h: "Epochen im Schnelldurchlauf", p: [
          "<b>Mittelalter</b>: religiöse Bilder, Goldgrund, Bedeutungsperspektive. <b>Renaissance</b> (15./16. Jh.): Zentralperspektive, Anatomie, Porträt – Leonardo da Vinci (Mona Lisa), Michelangelo (David, Sixtinische Kapelle), Albrecht Dürer (Nürnberg, Hase, Selbstporträts). <b>Barock</b> (17. Jh.): Bewegung, Hell-Dunkel-Dramatik – Rembrandt, Rubens, Caravaggio. <b>Romantik</b> (um 1800): Natur, Gefühl – Caspar David Friedrich (Wanderer über dem Nebelmeer).",
          "<b>Impressionismus</b> (ab 1870): Licht und Augenblick, sichtbare Pinselstriche, Malen im Freien – Monet (Seerosen), Renoir, Liebermann. <b>Expressionismus</b> (ab 1905): starke Farben, Verzerrung, Gefühl – „Die Brücke“ (Kirchner, Dresden/Berlin), „Der Blaue Reiter“ (Kandinsky, Marc – „Blaue Pferde“), Munch („Der Schrei“)." ] },
        { h: "Moderne und Gegenwart", p: [
          "<b>Kubismus</b> (Picasso, Braque): Zerlegen in geometrische Formen, mehrere Ansichten gleichzeitig. <b>Surrealismus</b> (Dalí, Magritte): Traum, Unlogik. <b>Abstrakte Kunst</b> (Kandinsky, Mondrian): keine Gegenstände mehr. <b>Pop Art</b> (Warhol, Lichtenstein): Alltag, Werbung, Comic, Serien. <b>Street Art</b> (Banksy), Installation, Performance, digitale Kunst.",
          "<b>Geltung, Macht und Repräsentation</b>: Herrscherporträts (Ludwig XIV.), Denkmäler, heute Markenlogos und Influencer-Inszenierung – Bilder zeigen Macht. <b>Zeichen und Symbole</b>: Piktogramme, Logos, Emojis – vereinfacht, eindeutig, wiedererkennbar." ] },
        { h: "Ein Bild analysieren", p: [
          "1. <b>Erster Eindruck</b> und Daten (Künstler, Titel, Jahr, Technik, Größe). 2. <b>Beschreibung</b>: Was ist zu sehen – Vordergrund, Mittelgrund, Hintergrund, Figuren, Gegenstände? 3. <b>Analyse</b> der Gestaltungsmittel: Komposition (Linien, Flächen, Blickführung), Farbe (Kontraste, Wirkung), Licht, Perspektive, Malweise. 4. <b>Deutung</b>: Was will das Bild aussagen? Wie wirkt es, und womit wird die Wirkung erzeugt? Bezug zur Epoche und zum Künstler.",
          "Immer Beobachtung und Deutung trennen und die Deutung am Bild belegen." ],
          beispiel: "„Die kalten Blautöne und die winzige Figur vor dem riesigen Nebelmeer lassen den Menschen klein und nachdenklich gegenüber der Natur wirken – typisch Romantik.“" }
      ],
      merken: [
        "Renaissance: Perspektive, da Vinci, Michelangelo, Dürer. Barock: Hell-Dunkel, Rembrandt. Romantik: Natur, C. D. Friedrich.",
        "Impressionismus: Licht und Augenblick (Monet). Expressionismus: starke Farben, Gefühl (Kirchner, Marc, Munch).",
        "Kubismus (Picasso), Surrealismus (Dalí), Pop Art (Warhol), Street Art (Banksy).",
        "Bildanalyse: Daten – Beschreibung – Analyse der Gestaltungsmittel – Deutung mit Belegen."
      ],
      aufgaben: [
        { typ: "mc", frage: "Wer malte die „Mona Lisa“?", optionen: ["Leonardo da Vinci", "Michelangelo", "Albrecht Dürer", "Claude Monet"], richtig: 0, erklaerung: "Um 1503–1506, Renaissance." },
        { typ: "mc", frage: "Was ist typisch für den Impressionismus?", optionen: ["flüchtige Lichtstimmungen, sichtbare Pinselstriche, Malen im Freien", "Goldgrund und religiöse Motive", "geometrische Zerlegung der Formen", "Traumbilder"], richtig: 0, erklaerung: "Monet, Renoir – der „Eindruck“ des Moments." },
        { typ: "mc", frage: "Welcher Künstler gehört zur Künstlergruppe „Die Brücke“?", optionen: ["Ernst Ludwig Kirchner", "Pablo Picasso", "Andy Warhol", "Salvador Dalí"], richtig: 0, erklaerung: "Expressionismus, gegründet 1905 in Dresden." },
        { typ: "mc", frage: "Für welche Richtung steht Pablo Picasso vor allem?", optionen: ["Kubismus", "Impressionismus", "Romantik", "Pop Art"], richtig: 0, erklaerung: "Formen aus mehreren Ansichten zusammengesetzt." },
        { typ: "mc", frage: "Welche Epoche nutzte Bilder, um die Macht von Herrschern zu zeigen?", optionen: ["Barock (Herrscherporträts wie Ludwig XIV.)", "Pop Art", "Street Art", "Impressionismus"], richtig: 0, erklaerung: "Repräsentation von Geltung und Macht." },
        { typ: "mc", frage: "Welcher Schritt kommt in der Bildanalyse ZUERST?", optionen: ["Beschreibung: Was ist zu sehen?", "Deutung: Was will das Bild sagen?", "Bewertung: Gefällt es mir?", "Vergleich mit anderen Bildern"], richtig: 0, erklaerung: "Erst beschreiben, dann analysieren, dann deuten." },
        { typ: "mc", frage: "Wer schuf „Der Schrei“?", optionen: ["Edvard Munch", "Franz Marc", "Caspar David Friedrich", "Rembrandt"], richtig: 0, erklaerung: "1893, Vorläufer des Expressionismus." },
        { typ: "mc", frage: "Pop Art (Warhol, Lichtenstein) nutzt vor allem …", optionen: ["Motive aus Alltag, Werbung und Comic", "religiöse Themen", "Landschaften im Nebel", "Traumwelten"], richtig: 0, erklaerung: "Suppendosen, Comicpunkte, Serienbilder." }
      ]
    }
  ]
};
