window.K7_DATA = {
  id: "k7-musik",
  fach: "Musik",
  icon: "MU",
  untertitel: "Klasse 7 Gymnasium · Themenfelder: Grundlagen, Form und Gestaltung, Gattungen und Genres, Wirkung und Funktion, kultureller Kontext",
  stand: "November 2026",
  quelle: { titel: "Rahmenlehrplan Teil C Musik (Jgst. 1–10), Themenfelder 3.1–3.5, Inhalte Jgst. 7–10", url: "https://bildungsserver.berlin-brandenburg.de/fileadmin/bbb/unterricht/rahmenlehrplaene/Rahmenlehrplanprojekt/amtliche_Fassung/Teil_C_Musik_2015_11_16.pdf" },
  bloecke: [
    {
      id: "notation",
      titel: "Noten, Rhythmus und Tempo",
      minuten: 12,
      themen: ["Violinschlüssel", "Notenwerte", "Taktarten"],
      lesen: [
        { h: "Tonhöhen lesen", p: [
          "Noten stehen auf fünf <b>Notenlinien</b>. Der <b>Violinschlüssel</b> (G-Schlüssel) legt fest: Die zweite Linie von unten ist das g'. Linien von unten: <b>e – g – h – d – f</b> (Merkspruch: „Es Geht Hurtig Durch Fleiß“), Zwischenräume: <b>f – a – c – e</b> („FACE“). Darunter mit Hilfslinie: c' (das eingestrichene c).",
          "Der <b>Bassschlüssel</b> (F-Schlüssel) wird für tiefe Stimmen und die linke Hand am Klavier genutzt: Linien g – h – d – f – a, Zwischenräume a – c – e – g.",
          "<b>Vorzeichen</b>: # (Kreuz) erhöht um einen Halbton (f → fis), b erniedrigt (h → b, e → es), das Auflösungszeichen hebt es auf. Die Stammtöne: c d e f g a h c." ] },
        { h: "Notenwerte und Takt", p: [
          "<b>Ganze</b> (4 Schläge) – <b>Halbe</b> (2) – <b>Viertel</b> (1) – <b>Achtel</b> (½) – <b>Sechzehntel</b> (¼). Ein <b>Punkt</b> hinter der Note verlängert sie um die Hälfte (punktierte Halbe = 3 Schläge). Pausen haben dieselben Werte.",
          "Die <b>Taktart</b> steht am Anfang: 4/4 (vier Viertel pro Takt), 3/4 (Walzer), 2/4 (Marsch), 6/8. Die erste Zählzeit ist betont. Eine <b>Synkope</b> verschiebt die Betonung auf eine unbetonte Zählzeit – typisch für Pop, Jazz, Latin. Ein <b>Auftakt</b> ist ein unvollständiger erster Takt." ],
          beispiel: "Im 4/4-Takt passen: eine Ganze, oder zwei Halbe, oder Viertel + Viertel + Halbe, oder acht Achtel." },
        { h: "Tempo und Dynamik", p: [
          "<b>Tempo</b> (italienisch): largo (sehr langsam), adagio (langsam), andante (gehend), moderato (mäßig), allegro (schnell), presto (sehr schnell). Metronomangabe: ♩ = 120 heißt 120 Viertel pro Minute. ritardando = langsamer werden, accelerando = schneller werden.",
          "<b>Dynamik</b>: pp (pianissimo, sehr leise), p (piano, leise), mp, mf, f (forte, laut), ff (fortissimo, sehr laut); crescendo = lauter werden, decrescendo/diminuendo = leiser werden. <b>Artikulation</b>: legato (gebunden), staccato (kurz, abgestoßen)." ] }
      ],
      merken: [
        "Violinschlüssel: Linien e g h d f, Zwischenräume f a c e; # erhöht, b erniedrigt.",
        "Ganze 4 – Halbe 2 – Viertel 1 – Achtel ½; Punkt = plus die Hälfte.",
        "Taktarten 4/4, 3/4, 2/4, 6/8; Synkope = Betonung verschoben.",
        "Tempo: largo – adagio – andante – moderato – allegro – presto. Dynamik: pp p mp mf f ff."
      ],
      aufgaben: [
        { typ: "mc", frage: "Welche Töne liegen im Violinschlüssel auf den fünf Linien (von unten)?", optionen: ["e g h d f", "f a c e g", "c d e f g", "g h d f a"], richtig: 0, erklaerung: "„Es Geht Hurtig Durch Fleiß“." },
        { typ: "input", frage: "Wie viele Schläge dauert eine punktierte Halbe?", antworten: ["3", "drei"], numerisch: true, erklaerung: "2 + 1 = 3 Schläge." },
        { typ: "mc", frage: "Welches Tempo ist schneller?", optionen: ["allegro", "adagio", "andante", "largo"], richtig: 0, erklaerung: "allegro = schnell; largo ist am langsamsten." },
        { typ: "mc", frage: "Was bewirkt ein Kreuz (#) vor einer Note?", optionen: ["erhöht um einen Halbton", "erniedrigt um einen Halbton", "verdoppelt den Notenwert", "macht die Note lauter"], richtig: 0, erklaerung: "f wird zu fis." },
        { typ: "mc", frage: "Wie viele Achtel passen in einen 3/4-Takt?", optionen: ["6", "3", "4", "8"], richtig: 0, erklaerung: "3 Viertel = 6 Achtel." },
        { typ: "input", frage: "Was bedeutet „crescendo“?", antworten: ["lauter werden", "lauter werdend", "lauter", "allmählich lauter werden"], erklaerung: "crescendo = anschwellend, lauter werden." },
        { typ: "mc", frage: "Was ist eine Synkope?", optionen: ["eine Betonung auf einer eigentlich unbetonten Zählzeit", "ein sehr langsames Tempo", "eine Pause von einem Takt", "ein Vorzeichen"], richtig: 0, erklaerung: "Typisch für Pop, Jazz, Reggae." },
        { typ: "mc", frage: "Was bedeutet „pp“?", optionen: ["pianissimo – sehr leise", "piano – leise", "fortissimo – sehr laut", "presto – sehr schnell"], richtig: 0, erklaerung: "pp = pianissimo." }
      ]
    },
    {
      id: "intervalle-dreiklaenge",
      titel: "Intervalle, Tonleitern, Dur und Moll",
      minuten: 12,
      themen: ["Halbtonschritte", "Dreiklang", "Kadenz"],
      lesen: [
        { h: "Tonleitern", p: [
          "Eine <b>Dur-Tonleiter</b> hat die Schrittfolge <b>Ganz – Ganz – Halb – Ganz – Ganz – Ganz – Halb</b> (Halbtonschritte zwischen 3./4. und 7./8. Ton). C-Dur: c d e f g a h c – ohne Vorzeichen. G-Dur hat ein # (fis), F-Dur ein b.",
          "<b>Moll</b> klingt dunkler/trauriger: Halbtonschritte zwischen 2./3. und 5./6. Ton (natürliches Moll). a-Moll: a h c d e f g a – ebenfalls ohne Vorzeichen; es ist die <b>Paralleltonart</b> zu C-Dur (gleiche Vorzeichen, Grundton eine kleine Terz tiefer).",
          "<b>Tonart bestimmen</b>: Vorzeichen zählen (0 → C-Dur/a-Moll, 1 # → G-Dur/e-Moll, 2 # → D-Dur/h-Moll, 1 b → F-Dur/d-Moll, 2 b → B-Dur/g-Moll) und schauen, mit welchem Ton das Stück endet." ] },
        { h: "Intervalle", p: [
          "Ein <b>Intervall</b> ist der Abstand zwischen zwei Tönen, gezählt nach Stufen: Prime (1, gleicher Ton), Sekunde (2), Terz (3), Quarte (4), Quinte (5), Sexte (6), Septime (7), Oktave (8).",
          "Große/kleine Terz unterscheiden Dur und Moll: c–e = große Terz (4 Halbtöne), c–es = kleine Terz (3 Halbtöne). Merkhilfen: Quarte = Anfang von „Oh Tannenbaum“ (o–Tan), Quinte = „Morgen kommt der Weihnachtsmann“ (Mor–gen), Oktave = „Somewhere over the rainbow“." ],
          beispiel: "c–g = Quinte (5 Stufen: c d e f g). c–c' = Oktave. e–g = kleine Terz." },
        { h: "Dreiklänge und Kadenz", p: [
          "Ein <b>Dreiklang</b> besteht aus Grundton, Terz und Quinte. <b>Dur-Dreiklang</b>: große Terz + kleine Terz (c–e–g). <b>Moll-Dreiklang</b>: kleine Terz + große Terz (a–c–e). In Dur klingt es hell, in Moll dunkel.",
          "Die <b>einfache Kadenz</b> sind die drei Hauptdreiklänge einer Tonart: <b>Tonika</b> (I. Stufe, Ruhe, „zu Hause“), <b>Subdominante</b> (IV. Stufe, Entfernung), <b>Dominante</b> (V. Stufe, Spannung, will zur Tonika zurück). In C-Dur: C – F – G – C. Mit diesen drei Akkorden lassen sich unzählige Lieder begleiten." ] }
      ],
      merken: [
        "Dur: Halbtonschritte 3–4 und 7–8. C-Dur ohne Vorzeichen, a-Moll ist die Paralleltonart.",
        "Intervalle: Prime, Sekunde, Terz, Quarte, Quinte, Sexte, Septime, Oktave.",
        "Dur-Dreiklang = große + kleine Terz; Moll = kleine + große Terz.",
        "Kadenz: Tonika (I) – Subdominante (IV) – Dominante (V) – Tonika; in C-Dur: C – F – G – C."
      ],
      aufgaben: [
        { typ: "input", frage: "Wie heißt das Intervall c–g? (5 Stufen)", antworten: ["Quinte"], erklaerung: "c d e f g = 5 Stufen = Quinte." },
        { typ: "mc", frage: "Welche Töne bilden den C-Dur-Dreiklang?", optionen: ["c – e – g", "c – d – e", "c – f – a", "c – es – g"], richtig: 0, erklaerung: "Grundton, große Terz, Quinte." },
        { typ: "mc", frage: "Zwischen welchen Tönen liegen in C-Dur die Halbtonschritte?", optionen: ["e–f und h–c", "c–d und g–a", "d–e und a–h", "f–g und e–f"], richtig: 0, erklaerung: "3.–4. und 7.–8. Stufe." },
        { typ: "mc", frage: "Welche Tonart hat ein Kreuz (fis) als Vorzeichen?", optionen: ["G-Dur", "F-Dur", "C-Dur", "D-Dur"], richtig: 0, erklaerung: "G-Dur: fis. D-Dur hätte fis und cis." },
        { typ: "mc", frage: "Die Paralleltonart zu C-Dur ist …", optionen: ["a-Moll", "c-Moll", "e-Moll", "G-Dur"], richtig: 0, erklaerung: "Gleiche Vorzeichen, Grundton eine kleine Terz tiefer." },
        { typ: "mc", frage: "Welche Stufe erzeugt in der Kadenz Spannung und will zur Tonika zurück?", optionen: ["Dominante (V)", "Subdominante (IV)", "Tonika (I)", "Sekunde (II)"], richtig: 0, erklaerung: "Dominante → Tonika = Auflösung." },
        { typ: "mc", frage: "Wie viele Halbtöne hat eine große Terz?", optionen: ["4", "3", "5", "2"], richtig: 0, erklaerung: "c–e = 4 Halbtöne; kleine Terz c–es = 3." },
        { typ: "mc", frage: "Was unterscheidet einen Moll-Dreiklang vom Dur-Dreiklang?", optionen: ["Die Terz über dem Grundton ist klein statt groß", "Er hat vier Töne", "Die Quinte fehlt", "Er ist lauter"], richtig: 0, erklaerung: "a–c–e: kleine Terz unten, große Terz oben." }
      ]
    },
    {
      id: "form-gestaltung",
      titel: "Form und Gestaltung: Motiv, Variation, Songform",
      minuten: 10,
      themen: ["Motiv", "Rondo", "Strophe/Refrain"],
      lesen: [
        { h: "Motiv und Thema", p: [
          "Ein <b>Motiv</b> ist der kleinste musikalische Baustein mit Wiedererkennungswert (Beethovens 5.: „ta-ta-ta-taaa“). Ein <b>Thema</b> ist eine längere, abgeschlossene Melodie. Motive werden <b>verarbeitet</b>: Wiederholung, Sequenz (auf anderer Tonhöhe), Umkehrung (gespiegelt), Vergrößerung/Verkleinerung der Notenwerte, Krebs (rückwärts).",
          "<b>Thema und Variationen</b>: Ein Thema wird mehrfach verändert wiederholt – Rhythmus, Tonart (Dur → Moll), Verzierungen, Tempo (z. B. Mozarts Variationen über „Ah vous dirai-je, Maman“ – die Melodie von „Morgen kommt der Weihnachtsmann“)." ] },
        { h: "Formtypen", p: [
          "<b>Liedform</b>: A–B–A (dreiteilig). <b>Rondo</b>: A–B–A–C–A – der Refrain A kehrt immer wieder. <b>Kanon</b>: dieselbe Melodie setzt versetzt ein. <b>Suite</b>: Folge von Tänzen (Barock). <b>Fuge</b>: ein Thema wandert durch mehrere Stimmen (Bach). <b>Sonatenhauptsatzform</b>: Exposition (zwei Themen) – Durchführung – Reprise.",
          "<b>Songform</b> im Pop: Intro – Strophe (Verse) – Pre-Chorus – <b>Refrain</b> (Chorus) – Strophe – Refrain – <b>Bridge</b> (Kontrast) – Refrain – Outro. Der Refrain trägt den Titel und den <b>Hook</b> (Ohrwurm-Moment)." ],
          beispiel: "Hörst du dieselbe Melodie nach jedem anderen Teil wieder, ist es ein Rondo oder ein Song mit Refrain." },
        { h: "Satzweisen und Bearbeitung", p: [
          "<b>Homophonie</b>: eine Hauptstimme, die anderen begleiten (Lied mit Akkorden). <b>Polyphonie</b>: mehrere gleichberechtigte Stimmen (Kanon, Fuge). Begleitmodelle: Akkorde, Arpeggio (gebrochener Akkord), Bassline.",
          "<b>Original und Bearbeitung</b>: Cover (neue Interpretation), Remix (digital neu zusammengesetzt), Sample (Ausschnitt in neuem Song). Urheberrecht: Wer ein Werk nutzt, braucht Erlaubnis; 70 Jahre nach dem Tod des Urhebers wird es gemeinfrei." ] }
      ],
      merken: [
        "Motiv = kleinster Baustein; Verarbeitung durch Wiederholung, Sequenz, Umkehrung, Vergrößerung.",
        "Formen: A–B–A, Rondo A–B–A–C–A, Kanon, Variationen, Fuge, Sonatenhauptsatzform.",
        "Songform: Intro – Verse – Chorus – Verse – Chorus – Bridge – Chorus – Outro.",
        "Homophonie = Melodie + Begleitung; Polyphonie = mehrere gleichberechtigte Stimmen."
      ],
      aufgaben: [
        { typ: "mc", frage: "Welche Form hat A–B–A–C–A?", optionen: ["Rondo", "Kanon", "Fuge", "Liedform"], richtig: 0, erklaerung: "Der Teil A kehrt wie ein Refrain wieder." },
        { typ: "mc", frage: "Was ist eine Sequenz in der Motivverarbeitung?", optionen: ["Wiederholung des Motivs auf anderer Tonhöhe", "Spiegelung des Motivs", "Motiv rückwärts", "Motiv doppelt so langsam"], richtig: 0, erklaerung: "Gleiche Gestalt, versetzt nach oben oder unten." },
        { typ: "mc", frage: "Welcher Teil eines Popsongs bildet den Kontrast vor dem letzten Refrain?", optionen: ["Bridge", "Intro", "Verse", "Outro"], richtig: 0, erklaerung: "Die Bridge bringt etwas Neues, oft eine andere Harmonie." },
        { typ: "mc", frage: "Was ist ein Kanon?", optionen: ["Dieselbe Melodie setzt in mehreren Stimmen zeitversetzt ein", "Eine Melodie mit Akkordbegleitung", "Eine Folge von Tänzen", "Ein Lied ohne Refrain"], richtig: 0, erklaerung: "z. B. „Bruder Jakob“." },
        { typ: "mc", frage: "Homophonie bedeutet …", optionen: ["eine Hauptstimme wird von den anderen begleitet", "mehrere gleichberechtigte Stimmen", "nur eine einzige Stimme", "alle singen verschiedene Lieder"], richtig: 0, erklaerung: "Polyphonie = gleichberechtigte Stimmen." },
        { typ: "mc", frage: "Was ist ein Cover?", optionen: ["eine neue Interpretation eines bestehenden Songs durch andere Musiker", "das Albumbild", "ein Instrument", "ein Teil der Sonatenform"], richtig: 0, erklaerung: "Coverversion = Neueinspielung." },
        { typ: "mc", frage: "Welche drei Teile hat die Sonatenhauptsatzform?", optionen: ["Exposition – Durchführung – Reprise", "Intro – Chorus – Outro", "A – B – C", "Strophe – Refrain – Bridge"], richtig: 0, erklaerung: "Themen vorstellen – verarbeiten – wiederholen." },
        { typ: "mc", frage: "Wie lange nach dem Tod eines Komponisten ist seine Musik urheberrechtlich geschützt?", optionen: ["70 Jahre", "10 Jahre", "für immer", "bis zur Veröffentlichung"], richtig: 0, erklaerung: "Danach ist das Werk gemeinfrei." }
      ]
    },
    {
      id: "epochen",
      titel: "Epochen und Gattungen: Barock bis Romantik",
      minuten: 12,
      themen: ["Barock", "Klassik", "Romantik", "Orchester"],
      lesen: [
        { h: "Barock (ca. 1600–1750)", p: [
          "Prunkvoll, verziert, <b>Generalbass</b> (Cembalo + Bass), <b>Terrassendynamik</b> (laut/leise im Wechsel ohne Übergang), Polyphonie. Komponisten: <b>Johann Sebastian Bach</b> (Fugen, Brandenburgische Konzerte, Weihnachtsoratorium), <b>Georg Friedrich Händel</b> (Wassermusik, Messias), <b>Antonio Vivaldi</b> (Die vier Jahreszeiten).",
          "Gattungen: <b>Concerto grosso</b> (kleine Gruppe gegen Orchester), Solokonzert, Suite, Fuge, <b>Oper</b> entsteht um 1600 in Italien (Monteverdi), Oratorium (geistlich, ohne Bühne)." ] },
        { h: "Klassik (ca. 1750–1820)", p: [
          "Klar, ausgewogen, Melodie mit Begleitung (Homophonie), <b>Sonatenhauptsatzform</b>. Wiener Klassik: <b>Joseph Haydn</b> („Vater der Sinfonie“), <b>Wolfgang Amadeus Mozart</b> (Zauberflöte, Kleine Nachtmusik), <b>Ludwig van Beethoven</b> (9 Sinfonien, „Ode an die Freude“ = Europahymne).",
          "Gattungen: <b>Sinfonie</b> (Orchesterwerk, meist 4 Sätze), Streichquartett, Sonate, Solokonzert. Das klassische <b>Orchester</b>: Streicher (Violine, Viola, Cello, Kontrabass), Holzbläser (Flöte, Oboe, Klarinette, Fagott), Blechbläser (Horn, Trompete, Posaune, Tuba), Schlagwerk (Pauke)." ],
          beispiel: "Instrumentenfamilien: Streich-, Holzblas-, Blechblas-, Schlag- und Tasteninstrumente; die Stimmlagen: Sopran, Alt, Tenor, Bass." },
        { h: "Romantik (ca. 1820–1900)", p: [
          "Gefühl, Natur, Sehnsucht, Nacht – große Orchester, freie Formen, <b>Programmmusik</b> (Musik erzählt eine Geschichte oder malt ein Bild: Smetanas „Moldau“, Berlioz' „Symphonie fantastique“), <b>Kunstlied</b> (Franz Schubert: „Erlkönig“, „Forelle“), <b>Sinfonische Dichtung</b>.",
          "Komponisten: Schubert, Robert und Clara Schumann, Chopin (Klavier), Brahms, Richard Wagner (Opern), Tschaikowski (Nussknacker, Schwanensee), Verdi (Oper).",
          "Zeitleiste: Mittelalter (Gregorianik) – Renaissance – Barock – Klassik – Romantik – 20. Jahrhundert (Jazz, Pop, Neue Musik, Filmmusik)." ] }
      ],
      merken: [
        "Barock 1600–1750: Bach, Händel, Vivaldi; Generalbass, Fuge, Concerto grosso, Terrassendynamik.",
        "Klassik 1750–1820: Haydn, Mozart, Beethoven; Sinfonie, Sonatenhauptsatzform, klare Melodie.",
        "Romantik 1820–1900: Schubert, Schumann, Chopin, Wagner, Tschaikowski; Gefühl, Programmmusik, Kunstlied.",
        "Orchester: Streicher, Holzbläser, Blechbläser, Schlagwerk."
      ],
      aufgaben: [
        { typ: "mc", frage: "Welcher Komponist gehört zum Barock?", optionen: ["Johann Sebastian Bach", "Ludwig van Beethoven", "Franz Schubert", "Richard Wagner"], richtig: 0, erklaerung: "Bach (1685–1750) ist der bekannteste Barockkomponist." },
        { typ: "mc", frage: "Welche drei Komponisten bilden die Wiener Klassik?", optionen: ["Haydn, Mozart, Beethoven", "Bach, Händel, Vivaldi", "Schubert, Schumann, Chopin", "Wagner, Verdi, Puccini"], richtig: 0, erklaerung: "Alle drei wirkten in Wien." },
        { typ: "mc", frage: "Was ist Programmmusik?", optionen: ["Instrumentalmusik, die eine Geschichte oder ein Bild darstellt", "Musik aus dem Fernsehprogramm", "Musik nach festem Ablaufplan", "Musik ohne Melodie"], richtig: 0, erklaerung: "z. B. Smetanas „Die Moldau“." },
        { typ: "mc", frage: "Zu welcher Instrumentengruppe gehört die Klarinette?", optionen: ["Holzbläser", "Blechbläser", "Streicher", "Schlagwerk"], richtig: 0, erklaerung: "Holzbläser: Flöte, Oboe, Klarinette, Fagott." },
        { typ: "mc", frage: "Wessen „Ode an die Freude“ ist die Europahymne?", optionen: ["Beethoven", "Mozart", "Bach", "Haydn"], richtig: 0, erklaerung: "Aus der 9. Sinfonie." },
        { typ: "mc", frage: "Welche Gattung entstand um 1600 in Italien?", optionen: ["die Oper", "das Musical", "der Jazz", "die Sinfonie"], richtig: 0, erklaerung: "Monteverdi gilt als Begründer der Oper." },
        { typ: "mc", frage: "Was ist typisch für die Musik der Romantik?", optionen: ["Gefühl, Natur, Sehnsucht, große Orchester", "strenge Fugen mit Generalbass", "Terrassendynamik", "elektronische Klänge"], richtig: 0, erklaerung: "Ausdruck steht über der Form." },
        { typ: "mc", frage: "Richtige zeitliche Reihenfolge?", optionen: ["Barock – Klassik – Romantik", "Klassik – Barock – Romantik", "Romantik – Barock – Klassik", "Barock – Romantik – Klassik"], richtig: 0, erklaerung: "1600–1750, 1750–1820, 1820–1900." }
      ]
    },
    {
      id: "pop-jazz",
      titel: "Pop, Rock, Jazz und Musik der Welt",
      minuten: 10,
      themen: ["Blues", "Jazz", "Rock'n'Roll", "Hip-Hop"],
      lesen: [
        { h: "Vom Blues zum Jazz", p: [
          "Der <b>Blues</b> entstand Ende des 19. Jahrhunderts unter Afroamerikanern in den USA: 12-taktiges Schema, Blue Notes, Call and Response. Daraus wuchs um 1900 in New Orleans der <b>Jazz</b>: <b>Improvisation</b>, Swing-Rhythmus, Synkopen, Bläser (Trompete, Saxofon), Louis Armstrong, Duke Ellington, Ella Fitzgerald. Stile: New Orleans, Swing (Big Bands), Bebop, Cool Jazz." ] },
        { h: "Rock und Pop", p: [
          "1950er: <b>Rock'n'Roll</b> (Elvis Presley, Chuck Berry) aus Blues und Country. 1960er: <b>Beatles</b>, Rolling Stones, Beat. 1970er: Hardrock, Punk, Disco. 1980er: Synthie-Pop, Michael Jackson, Madonna. 1990er: Grunge, Techno, Boygroups. Ab 2000: R&B, Elektro, Streaming.",
          "<b>Hip-Hop</b> entsteht in den 1970ern in der Bronx (New York): Rap (Sprechgesang), DJing, Breakdance, Graffiti. Heute weltweit die meistgehörte Musik. Typische Bandbesetzung: Gesang, Gitarre, Bass, Schlagzeug, Keyboard." ],
          beispiel: "Musik als Industriezweig: Labels, Streaming, Charts, Konzerte. Künstler verdienen heute vor allem mit Konzerten und Merchandise, weniger mit Streaming." },
        { h: "Musik der Welt und Musik im Alltag", p: [
          "<b>Weltmusik</b>: Flamenco (Spanien), Samba und Bossa Nova (Brasilien), Reggae (Jamaika, Bob Marley), afrikanische Trommelmusik, indische Ragas (Sitar), Balkan-Brass. Globalisierung mischt Stile (K-Pop, Latin Pop, Afrobeats).",
          "<b>Funktionale Musik</b>: Filmmusik (Leitmotiv, Spannung, Stimmung – John Williams, Hans Zimmer), Werbung (Jingles), Nationalhymnen, religiöse Musik, politische Musik und Protestsongs, Tanzmusik. Musik kann manipulieren – darum bewusst hören: Welche Wirkung soll erzeugt werden?" ] }
      ],
      merken: [
        "Blues → Jazz (New Orleans, um 1900): Improvisation, Swing, Synkopen. Louis Armstrong.",
        "Rock'n'Roll 1950er (Elvis), Beatles 1960er, Hip-Hop ab 1970er Bronx (Rap, DJing, Breakdance, Graffiti).",
        "Weltmusik: Reggae (Jamaika), Samba (Brasilien), Flamenco (Spanien).",
        "Filmmusik arbeitet mit Leitmotiven und Stimmungen; Musik wirkt – bewusst hören."
      ],
      aufgaben: [
        { typ: "mc", frage: "Was ist das wichtigste Merkmal des Jazz?", optionen: ["Improvisation", "feste Notentexte", "Generalbass", "Terrassendynamik"], richtig: 0, erklaerung: "Jazzmusiker erfinden Melodien im Moment." },
        { typ: "mc", frage: "Wo entstand der Jazz?", optionen: ["New Orleans, USA", "London", "Wien", "Rio de Janeiro"], richtig: 0, erklaerung: "Um 1900 in New Orleans." },
        { typ: "mc", frage: "Aus welchen Elementen besteht die Hip-Hop-Kultur?", optionen: ["Rap, DJing, Breakdance, Graffiti", "Gesang, Tanz, Theater, Malerei", "Gitarre, Bass, Schlagzeug, Keyboard", "Blues, Jazz, Rock, Pop"], richtig: 0, erklaerung: "Die vier Säulen des Hip-Hop." },
        { typ: "mc", frage: "Welcher Musiker steht für den Rock'n'Roll der 1950er?", optionen: ["Elvis Presley", "Johann Sebastian Bach", "Bob Marley", "Eminem"], richtig: 0, erklaerung: "„King of Rock'n'Roll“." },
        { typ: "mc", frage: "Aus welchem Land kommt der Reggae?", optionen: ["Jamaika", "Brasilien", "Spanien", "Indien"], richtig: 0, erklaerung: "Bob Marley machte ihn weltweit bekannt." },
        { typ: "mc", frage: "Was ist ein Leitmotiv in der Filmmusik?", optionen: ["eine Melodie, die immer wieder für eine Figur oder Idee steht", "die Titelmusik", "ein Instrument", "der Abspann"], richtig: 0, erklaerung: "z. B. das Hai-Motiv in „Der weiße Hai“." },
        { typ: "mc", frage: "Wie viele Takte hat das klassische Blues-Schema?", optionen: ["12", "8", "16", "4"], richtig: 0, erklaerung: "12-Takt-Blues." },
        { typ: "mc", frage: "Was bedeutet „Call and Response“?", optionen: ["Ruf und Antwort zwischen Sänger und Gruppe oder Instrumenten", "ein Telefonanruf", "eine Pause im Song", "lauter und leiser werden"], richtig: 0, erklaerung: "Wurzeln in afrikanischer Musik und Gospel." }
      ]
    }
  ]
};
