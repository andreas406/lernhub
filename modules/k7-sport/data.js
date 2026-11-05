window.K7_DATA = {
  id: "k7-sport",
  fach: "Sport",
  icon: "SP",
  untertitel: "Klasse 7 Gymnasium · Sporttheorie zu den Bewegungsfeldern: Laufen/Springen/Werfen, Spielen, Turnen, Kämpfen, Gestalten, Schwimmen",
  stand: "November 2026",
  quelle: { titel: "Rahmenlehrplan Teil C Sport (Jgst. 1–10), Themenfelder 3.1–3.7", url: "https://bildungsserver.berlin-brandenburg.de/fileadmin/bbb/unterricht/rahmenlehrplaene/Rahmenlehrplanprojekt/amtliche_Fassung/Teil_C_Sport_2015_11_16.pdf" },
  bloecke: [
    {
      id: "training-koerper",
      titel: "Erwärmung, Körper und Trainingsgrundlagen",
      minuten: 12,
      themen: ["Aufwärmen", "Puls", "Ausdauer/Kraft/Schnelligkeit"],
      lesen: [
        { h: "Warum aufwärmen?", p: [
          "<b>Erwärmung</b> bereitet Körper und Kopf vor: Herz-Kreislauf hochfahren (Puls steigt), Muskeln werden wärmer und besser durchblutet, Gelenke produzieren mehr „Schmiere“ (Synovia), Konzentration steigt. Das senkt das <b>Verletzungsrisiko</b> und verbessert die Leistung.",
          "Aufbau: 1. allgemeine Erwärmung (Laufen, Spiele, 5–10 Min.), 2. Mobilisation (Gelenke kreisen), 3. spezielle Erwärmung für die Sportart (z. B. Passen, Sprünge), dynamisches Dehnen. Statisches Dehnen (lange halten) gehört eher ans Ende oder in eigene Einheiten.",
          "<b>Cool-down</b>: lockeres Auslaufen, Dehnen – hilft der Erholung." ] },
        { h: "Der Körper beim Sport", p: [
          "<b>Puls</b> = Herzschläge pro Minute: in Ruhe ca. 60–80 (bei Trainierten niedriger), unter Belastung bis zu 200 bei Jugendlichen (Faustformel Maximalpuls ≈ 220 − Alter). Messen: Handgelenk oder Hals, 15 Sekunden zählen und mal 4.",
          "<b>Muskeln</b> arbeiten paarweise: Beuger (Bizeps) und Strecker (Trizeps) – zieht einer, entspannt der andere. Muskelkater = kleine Risse in den Muskelfasern nach ungewohnter Belastung. <b>Energie</b>: Kohlenhydrate für schnelle Energie, Fette für lange Ausdauer; Trinken (Wasser) vor, während und nach dem Sport." ],
          beispiel: "Superkompensation: Belastung → Erholung → der Körper wird etwas leistungsfähiger als vorher. Ohne Erholung kein Fortschritt – Schlaf ist Training." },
        { h: "Konditionelle Fähigkeiten", p: [
          "<b>Ausdauer</b> (lange durchhalten – Laufen, Schwimmen), <b>Kraft</b> (Maximalkraft, Schnellkraft, Kraftausdauer), <b>Schnelligkeit</b> (Reaktion, Sprint), <b>Beweglichkeit</b> (Gelenkreichweite), <b>Koordination</b> (Gleichgewicht, Rhythmus, Reaktion, Orientierung, Differenzierung – Bewegungen genau steuern).",
          "<b>Trainingsprinzipien</b>: regelmäßig trainieren, Belastung langsam steigern, abwechseln, Pausen einplanen, auf den Körper hören (Schmerz ist ein Stoppsignal)." ] }
      ],
      merken: [
        "Erwärmung: allgemein → Mobilisation → speziell; senkt Verletzungsrisiko, steigert Leistung.",
        "Puls: Ruhe 60–80, Maximalpuls ≈ 220 − Alter; 15 s zählen × 4.",
        "Beuger und Strecker arbeiten als Paar; Muskelkater = Mikrorisse.",
        "Ausdauer, Kraft, Schnelligkeit, Beweglichkeit, Koordination; Prinzip: Belastung + Erholung = Superkompensation."
      ],
      aufgaben: [
        { typ: "mc", frage: "Was ist der wichtigste Grund fürs Aufwärmen?", optionen: ["Verletzungen vorbeugen und die Leistung verbessern", "Zeit totschlagen", "müde werden", "Muskelkater bekommen"], richtig: 0, erklaerung: "Warme Muskeln und bereite Gelenke reißen und verletzen sich seltener." },
        { typ: "input", frage: "Du zählst in 15 Sekunden 35 Pulsschläge. Wie hoch ist dein Puls pro Minute?", antworten: ["140"], numerisch: true, erklaerung: "35 × 4 = 140." },
        { typ: "mc", frage: "Welcher Muskel ist der Gegenspieler (Strecker) des Bizeps?", optionen: ["Trizeps", "Quadrizeps", "Deltamuskel", "Wadenmuskel"], richtig: 0, erklaerung: "Bizeps beugt, Trizeps streckt den Arm." },
        { typ: "mc", frage: "Was ist Muskelkater?", optionen: ["kleine Risse in den Muskelfasern nach ungewohnter Belastung", "Milchsäure im Muskel", "ein Muskelriss", "eine Entzündung der Sehne"], richtig: 0, erklaerung: "Heilt in wenigen Tagen; leichte Bewegung hilft." },
        { typ: "mc", frage: "Welche Fähigkeit trainiert ein 30-Minuten-Lauf vor allem?", optionen: ["Ausdauer", "Schnellkraft", "Beweglichkeit", "Reaktionsschnelligkeit"], richtig: 0, erklaerung: "Lange gleichmäßige Belastung = Ausdauer." },
        { typ: "mc", frage: "Was beschreibt die Superkompensation?", optionen: ["Nach Belastung und Erholung ist der Körper leistungsfähiger als vorher", "Mehr Training ist immer besser", "Muskeln wachsen während des Trainings", "Ohne Pausen wird man am schnellsten besser"], richtig: 0, erklaerung: "Erholung ist Teil des Trainings." },
        { typ: "mc", frage: "Wohin gehört langes statisches Dehnen am besten?", optionen: ["ans Ende oder in eigene Einheiten", "direkt vor dem Sprint", "mitten ins Spiel", "nie"], richtig: 0, erklaerung: "Vor der Belastung lieber dynamisch dehnen." },
        { typ: "mc", frage: "Welche Koordinationsfähigkeit braucht ein Torwart beim Elfmeter besonders?", optionen: ["Reaktionsfähigkeit", "Ausdauer", "Beweglichkeit der Hüfte", "Kraftausdauer"], richtig: 0, erklaerung: "Schnell auf einen Reiz reagieren." }
      ]
    },
    {
      id: "leichtathletik",
      titel: "Laufen, Springen, Werfen, Stoßen",
      minuten: 10,
      themen: ["Sprint", "Weitsprung", "Wurf"],
      lesen: [
        { h: "Laufen", p: [
          "<b>Sprint</b> (50/75/100 m): Tiefstart aus dem Startblock („Auf die Plätze – fertig – los“), kräftiger Armeinsatz, Knie hoch, auf dem Vorfuß laufen, bis hinter die Ziellinie durchlaufen. <b>Ausdauerlauf</b> (z. B. 12-Minuten-Lauf, 2000 m): gleichmäßiges Tempo, ruhige Atmung, nicht zu schnell starten.",
          "<b>Staffel</b>: Stabübergabe im Wechselraum (20 m), der Abnehmer läuft schon an; „Hopp“-Kommando." ] },
        { h: "Springen", p: [
          "<b>Weitsprung</b>: Anlauf mit steigendem Tempo, Absprung vom Balken mit einem Bein (vorletzter Schritt lang, letzter kurz), Flugphase (Hangsprung oder Schrittsprung), Landung mit beiden Füßen und nach vorn fallen lassen. Gemessen wird vom Balken bis zum hintersten Abdruck. Übertreten = ungültig.",
          "<b>Hochsprung</b>: Flop (rückwärts über die Latte, Anlauf im Bogen) oder Schersprung. Absprung mit dem lattenfernen Bein." ] },
        { h: "Werfen und Stoßen", p: [
          "<b>Schlagball/Ballwurf</b> (80 g / 200 g): Anlauf, Ball weit zurückführen (Bogenspannung), Stemmschritt, Wurf über die Schulter mit Schlagarm, Abwurfwinkel etwa 40°. <b>Kugelstoßen</b>: Kugel liegt am Hals, wird gestoßen (nicht geworfen!), Stoßen aus dem Ring, Angleiten oder Standstoß.",
          "Regeln: Wurfanlage nicht übertreten, Gerät muss im Sektor landen, Messung vom Aufprallpunkt. Sicherheit: nie in die Wurfrichtung laufen, Geräte nur auf Kommando holen." ],
          beispiel: "Merkhilfe Weitsprung: schnell – hoch – weit: schneller Anlauf, hoher Absprung, weite Landung." }
      ],
      merken: [
        "Sprint: Tiefstart, Vorfuß, Armeinsatz, bis hinter das Ziel laufen.",
        "Weitsprung: Anlauf – Absprung vom Balken (ein Bein) – Flug – Landung beidbeinig; Übertreten = ungültig.",
        "Wurf: Bogenspannung, Stemmschritt, Abwurfwinkel ca. 40°. Kugel wird gestoßen, nicht geworfen.",
        "Sicherheit: nie in die Wurfrichtung laufen."
      ],
      aufgaben: [
        { typ: "mc", frage: "Mit wie vielen Beinen springt man beim Weitsprung ab?", optionen: ["mit einem Bein", "mit beiden Beinen", "egal", "abwechselnd"], richtig: 0, erklaerung: "Einbeiniger Absprung vom Balken, beidbeinige Landung." },
        { typ: "mc", frage: "Wann ist ein Weitsprung ungültig?", optionen: ["wenn der Fuß beim Absprung über den Balken hinausragt (Übertreten)", "wenn man mit beiden Füßen landet", "wenn man den Anlauf zu schnell macht", "wenn man nach vorn fällt"], richtig: 0, erklaerung: "Übertreten = ungültiger Versuch." },
        { typ: "mc", frage: "Welcher Abwurfwinkel ist beim Ballwurf ungefähr ideal?", optionen: ["etwa 40°", "etwa 10°", "etwa 80°", "genau 90°"], richtig: 0, erklaerung: "Etwas unter 45° wegen des Luftwiderstands und der Abwurfhöhe." },
        { typ: "mc", frage: "Wie wird die Kugel beim Kugelstoßen bewegt?", optionen: ["gestoßen – aus der Halsposition heraus", "über Kopf geworfen", "geschleudert wie ein Diskus", "gerollt"], richtig: 0, erklaerung: "Werfen ist nicht erlaubt." },
        { typ: "mc", frage: "Was ist beim Sprintstart richtig?", optionen: ["Tiefstart, auf dem Vorfuß loslaufen, bis hinter die Ziellinie sprinten", "langsam starten und am Ende beschleunigen", "vor dem Ziel abbremsen", "mit den Armen stillhalten"], richtig: 0, erklaerung: "Explosiv starten, durchs Ziel laufen." },
        { typ: "mc", frage: "Wie lang ist der Wechselraum bei der Staffel?", optionen: ["20 m", "5 m", "50 m", "100 m"], richtig: 0, erklaerung: "Übergabe muss innerhalb von 20 m erfolgen." },
        { typ: "mc", frage: "Was ist beim 2000-m-Lauf sinnvoll?", optionen: ["gleichmäßiges Tempo, nicht zu schnell starten", "die ersten 400 m sprinten", "zwischendurch gehen", "die Luft anhalten"], richtig: 0, erklaerung: "Tempo einteilen, ruhig atmen." },
        { typ: "mc", frage: "Wichtigste Sicherheitsregel beim Werfen?", optionen: ["Nie in die Wurfrichtung laufen, Geräte nur auf Kommando holen", "Immer gleichzeitig werfen und holen", "Ohne Aufwärmen werfen", "Möglichst nah an den Werfer stellen"], richtig: 0, erklaerung: "Wurfgeräte können schwer verletzen." }
      ]
    },
    {
      id: "spiele",
      titel: "Sportspiele: Regeln, Taktik, Fairness",
      minuten: 12,
      themen: ["Fußball", "Basketball", "Volleyball", "Handball"],
      lesen: [
        { h: "Fußball", p: [
          "11 gegen 11 (Jugend 9er/7er), 2 × 45 Min. <b>Abseits</b>: Ein Spieler steht beim Abspiel näher zur gegnerischen Torlinie als der Ball und der vorletzte Gegenspieler – nur in der gegnerischen Hälfte, nicht bei Einwurf, Abstoß, Eckball. Fouls: Freistoß (direkt/indirekt), im Strafraum Elfmeter. Gelbe Karte = Verwarnung, Rote Karte = Platzverweis. Handspiel, wenn absichtlich oder Arm unnatürlich vergrößert.",
          "Positionen im 2-3-2-3 (9er): TW, IV+IV, LV–6–RV, 8+8, LA–9–RA. Taktik: Breite und Tiefe, Dreiecke bilden, Umschalten nach Ballgewinn/-verlust." ] },
        { h: "Basketball und Handball", p: [
          "<b>Basketball</b>: 5 gegen 5, Korb 3,05 m hoch; 2 Punkte, 3 Punkte (hinter der Dreierlinie), 1 Punkt Freiwurf. Regeln: <b>Schrittfehler</b> (mehr als 2 Schritte ohne Dribbling), <b>Doppeldribbling</b>, Foul (Körperkontakt), 24 Sekunden für einen Wurf, 3-Sekunden-Regel in der Zone. Techniken: Dribbling, Passen (Druckpass, Bodenpass), Positionswurf, Korbleger.",
          "<b>Handball</b>: 7 gegen 7, Tor 3 × 2 m, Torraum (6-m-Kreis) darf nur der Torwart betreten; 3 Schritte, 3 Sekunden Ball halten; Wurfarten: Schlagwurf, Sprungwurf; 7-m-Wurf nach Foul bei klarer Torchance; Zeitstrafe 2 Minuten." ] },
        { h: "Volleyball und Fairness", p: [
          "<b>Volleyball</b>: 6 gegen 6, Netz 2,43 m (Männer) / 2,24 m (Frauen), 3 Ballkontakte pro Seite, kein Fangen oder Werfen, Rally-Point-System bis 25 (2 Punkte Vorsprung), Techniken: oberes Zuspiel (Pritschen), unteres Zuspiel (Baggern), Aufschlag, Angriffsschlag, Block. Rotation im Uhrzeigersinn bei Aufschlagwechsel.",
          "<b>Fair Play</b>: Regeln einhalten, Schiedsrichterentscheidungen akzeptieren, Gegner respektieren, Verlieren können, keine Beleidigungen. <b>Taktik</b> allgemein: Überzahl schaffen, Räume besetzen, Angriff und Abwehr als Team." ],
          beispiel: "Spielfähigkeit = Technik + Taktik + Regelkenntnis + Fairness. Wer Regeln selbst festlegen und anpassen kann (z. B. bei Spielen in der Pause), zeigt Spielverständnis." }
      ],
      merken: [
        "Fußball: Abseits (näher zur Torlinie als Ball und vorletzter Gegner, nur in der gegnerischen Hälfte), Gelb/Rot, Elfmeter im Strafraum.",
        "Basketball: 2 Schritte, kein Doppeldribbling, Korb 3,05 m, 2/3 Punkte, Freiwurf 1.",
        "Handball: Torraum 6 m nur für den TW, 3 Schritte, 3 Sekunden, 7-m-Wurf. Volleyball: 3 Kontakte, Pritschen/Baggern, bis 25.",
        "Fair Play: Regeln, Respekt, Entscheidungen akzeptieren."
      ],
      aufgaben: [
        { typ: "mc", frage: "Wann steht ein Spieler im Abseits?", optionen: ["Beim Abspiel näher zur gegnerischen Torlinie als Ball und vorletzter Gegenspieler (in der gegnerischen Hälfte)", "Immer, wenn er hinter der Abwehr steht", "Wenn er beim Einwurf vor dem Ball steht", "Wenn er im Strafraum steht"], richtig: 0, erklaerung: "Kein Abseits bei Einwurf, Abstoß, Eckball." },
        { typ: "mc", frage: "Wie viele Schritte darf man im Basketball ohne Dribbling machen?", optionen: ["2", "3", "1", "beliebig viele"], richtig: 0, erklaerung: "Mehr = Schrittfehler." },
        { typ: "mc", frage: "Wie viele Ballkontakte hat eine Mannschaft im Volleyball maximal pro Seite?", optionen: ["3", "2", "4", "unbegrenzt"], richtig: 0, erklaerung: "Baggern – Pritschen – Angriff." },
        { typ: "mc", frage: "Wer darf im Handball den Torraum betreten?", optionen: ["nur der Torwart", "alle Verteidiger", "nur der Kreisläufer", "niemand"], richtig: 0, erklaerung: "6-m-Kreis = Torraum." },
        { typ: "mc", frage: "Was bedeutet die Gelbe Karte?", optionen: ["Verwarnung", "Platzverweis", "Elfmeter", "Zeitstrafe von 2 Minuten"], richtig: 0, erklaerung: "Zweimal Gelb = Gelb-Rot = Platzverweis." },
        { typ: "mc", frage: "Wie hoch hängt ein Basketballkorb?", optionen: ["3,05 m", "2,43 m", "2,00 m", "3,50 m"], richtig: 0, erklaerung: "3,05 m (10 Fuß)." },
        { typ: "mc", frage: "Was gehört zu Fair Play?", optionen: ["Schiedsrichterentscheidungen akzeptieren und den Gegner respektieren", "unbemerkt foulen", "den Schiedsrichter beschimpfen", "nur gewinnen wollen, egal wie"], richtig: 0, erklaerung: "Auch verlieren können gehört dazu." },
        { typ: "mc", frage: "Wie heißt das untere Zuspiel im Volleyball?", optionen: ["Baggern", "Pritschen", "Blocken", "Schmettern"], richtig: 0, erklaerung: "Baggern mit den Unterarmen, Pritschen über Kopf mit den Fingern." }
      ]
    },
    {
      id: "turnen-kaempfen-gestalten",
      titel: "Turnen, Kämpfen, Gestalten",
      minuten: 10,
      themen: ["Hilfestellung", "Ringen", "Rhythmus"],
      lesen: [
        { h: "Bewegen an Geräten", p: [
          "Boden: Rolle vorwärts/rückwärts, Handstand, Rad, Kopfstand. Geräte: Reck (Hüftaufschwung, Felgunterschwung), Barren (Stütz, Schwingen), Sprung (Hocke, Grätsche über Bock/Kasten), Balken (Gleichgewicht), Ringe, Trampolin (Minitrampolin).",
          "<b>Hilfestellung</b>: Helfer stehen nah am Gerät, greifen am Körperschwerpunkt (Oberarm/Hüfte), begleiten die Bewegung und lassen nicht zu früh los. <b>Sicherheit</b>: Matten richtig legen, Geräte prüfen, Schmuck ab, nur mit Erlaubnis turnen. Auch Parkour (Hindernisse überwinden) gehört zum Bewegungsfeld." ] },
        { h: "Kämpfen nach Regeln", p: [
          "Raufspiele und Zweikämpfe (Ringen, Judo-Elemente): Ziel ist <b>Kräftemessen mit Respekt</b> – nicht Verletzen. Rituale: Begrüßung (Verbeugung), Stopp-Signal („Stopp“/Abklopfen beendet sofort), Schutz des Partners. Verboten: Schlagen, Treten, Würgen, Griffe ins Gesicht. Faire Paarung nach Gewicht und Kraft. Judo-Grundsätze: Fallschule (sicher fallen lernen), Siegen durch Nachgeben." ] },
        { h: "Bewegungsfolgen gestalten", p: [
          "Gymnastik, Tanz, Bewegungskünste (Jonglieren, Akrobatik): Bewegungen zu <b>Musik und Rhythmus</b> gestalten – Takt zählen (8er-Zählzeiten), Raumwege, Ebenen (hoch/tief), Tempo, Synchronität in der Gruppe.",
          "Eine Choreografie bauen: Thema wählen – Elemente sammeln – Reihenfolge festlegen – Übergänge – üben – präsentieren. Bewertet werden Ausführung, Kreativität, Zusammenspiel. Auch Pyramiden in der Partnerakrobatik: untere Position stabil (Bank), Belastung nur auf Becken und Schultergürtel, nie auf die Wirbelsäulenmitte." ] }
      ],
      merken: [
        "Hilfestellung: nah am Gerät, Griff am Schwerpunkt, Bewegung begleiten, nicht zu früh loslassen.",
        "Kämpfen nach Regeln: Stopp-Signal gilt sofort, keine Schläge/Tritte/Würgegriffe, faire Paarung.",
        "Gestalten: Takt (8er), Raumwege, Ebenen, Tempo, Synchronität; Choreografie planen und üben.",
        "Akrobatik: Belastung nur auf Becken und Schultergürtel."
      ],
      aufgaben: [
        { typ: "mc", frage: "Wo greift der Helfer bei der Hilfestellung?", optionen: ["nahe am Körperschwerpunkt (Hüfte, Oberarm)", "an den Händen", "an den Füßen", "an den Haaren"], richtig: 0, erklaerung: "So kann er die Bewegung sicher führen." },
        { typ: "mc", frage: "Was passiert beim Ringen, wenn der Partner „Stopp“ sagt oder abklopft?", optionen: ["Der Kampf wird sofort beendet", "Man kämpft weiter bis zur Schiedsrichterentscheidung", "Man hat verloren", "Nichts"], richtig: 0, erklaerung: "Das Stopp-Signal gilt immer und sofort." },
        { typ: "mc", frage: "Welche Griffe sind beim Kämpfen nach Regeln verboten?", optionen: ["Würgen, Schlagen, Treten, Griffe ins Gesicht", "Umklammern des Oberkörpers", "Festhalten am Arm", "Zu-Boden-Bringen"], richtig: 0, erklaerung: "Kräftemessen ja, Verletzen nein." },
        { typ: "mc", frage: "In welcher Zähleinheit werden Tanz-Choreografien meist gezählt?", optionen: ["in 8er-Zählzeiten", "in 3er", "in 5er", "in 10er"], richtig: 0, erklaerung: "„5, 6, 7, 8 – und los“." },
        { typ: "mc", frage: "Wo darf man in der Partnerakrobatik den Partner belasten?", optionen: ["auf Becken und Schultergürtel", "auf der Mitte der Wirbelsäule", "auf dem Nacken", "auf den Knien von hinten"], richtig: 0, erklaerung: "Wirbelsäule nie direkt belasten." },
        { typ: "mc", frage: "Was ist der erste Schritt beim Bauen einer Choreografie?", optionen: ["Thema wählen und Elemente sammeln", "sofort vorführen", "Musik ausschalten", "Noten lernen"], richtig: 0, erklaerung: "Planen – üben – präsentieren." },
        { typ: "mc", frage: "Was gehört zur Sicherheit beim Geräteturnen?", optionen: ["Matten richtig legen, Geräte prüfen, Schmuck ablegen", "Schneller turnen als die anderen", "Ohne Aufwärmen starten", "Geräte selbst umbauen ohne Lehrer"], richtig: 0, erklaerung: "Sicherheit geht vor." },
        { typ: "mc", frage: "Was lernt man in der Fallschule?", optionen: ["sicher zu fallen, ohne sich zu verletzen", "andere zu Fall zu bringen", "hoch zu springen", "schnell zu laufen"], richtig: 0, erklaerung: "Grundlage im Judo und Ringen." }
      ]
    },
    {
      id: "schwimmen-ersthilfe",
      titel: "Schwimmen, Fahren und Erste Hilfe",
      minuten: 10,
      themen: ["Baderegeln", "Schwimmtechniken", "Notruf"],
      lesen: [
        { h: "Bewegen im Wasser", p: [
          "Techniken: <b>Brust</b> (Arm- und Beinzug mit Gleitphase), <b>Kraul</b> (Wechselzug, Beinschlag, Atmung zur Seite), <b>Rücken</b>, <b>Delfin</b>. Start vom Block, Wende, Tauchen, Rettungsschwimmen (Abschleppgriffe).",
          "<b>Baderegeln</b>: nie überhitzt ins Wasser, nicht mit vollem Magen, nur springen, wo es tief genug und frei ist, nicht in unbekannte Gewässer springen, bei Gewitter raus, Nichtschwimmer nur im flachen Bereich, niemanden untertauchen. Abzeichen: Seepferdchen, Bronze, Silber, Gold.",
          "<b>Fahren, Rollen, Gleiten</b>: Inliner, Skateboard, Ski, Schlittschuh – Schutzausrüstung (Helm, Protektoren), Bremsen lernen, Rücksicht auf andere." ] },
        { h: "Erste Hilfe beim Sport", p: [
          "<b>Notruf 112</b>: Wo? Was? Wie viele Verletzte? Welche Verletzungen? Warten auf Rückfragen. Bei Bewusstlosigkeit mit Atmung: <b>stabile Seitenlage</b>. Ohne Atmung: Herzdruckmassage (100–120 pro Minute, 5–6 cm tief) und Beatmung 30:2.",
          "<b>PECH-Regel</b> bei Verstauchung, Zerrung, Prellung: <b>P</b>ause, <b>E</b>is (kühlen, nicht direkt auf die Haut), <b>C</b>ompression (Druckverband), <b>H</b>ochlagern. Bei Nasenbluten: Kopf nach vorn, Nasenflügel zusammendrücken. Bei Hitze: Schatten, trinken, kühlen." ],
          beispiel: "Umgeknickt beim Fußball: sofort raus, Kühlpack in ein Tuch, Fuß hoch – und am nächsten Tag prüfen, ob ein Arzt nötig ist (starke Schwellung, nicht belastbar)." },
        { h: "Gesund bleiben", p: [
          "Schlaf (Jugendliche 9 Stunden), ausgewogene Ernährung, genug trinken, Pausen, keine Schmerzmittel um weiterzuspielen, Verletzungen ausheilen lassen. Doping ist Betrug und gesundheitsschädlich. Bewegung stärkt auch Konzentration und Stimmung." ] }
      ],
      merken: [
        "Baderegeln: nicht überhitzt, nicht mit vollem Magen, nur ins freie, tiefe Wasser springen, bei Gewitter raus.",
        "Notruf 112: Wo – Was – Wie viele – Welche Verletzungen – Warten.",
        "Bewusstlos mit Atmung: stabile Seitenlage. Ohne Atmung: Herzdruckmassage 30:2.",
        "PECH: Pause, Eis, Compression, Hochlagern."
      ],
      aufgaben: [
        { typ: "input", frage: "Welche Nummer hat der Notruf in Deutschland und Europa?", antworten: ["112"], numerisch: true, erklaerung: "112 für Rettungsdienst und Feuerwehr." },
        { typ: "mc", frage: "Wofür steht das E in der PECH-Regel?", optionen: ["Eis (kühlen)", "Erholung", "Erwärmen", "Einreiben"], richtig: 0, erklaerung: "Pause – Eis – Compression – Hochlagern." },
        { typ: "mc", frage: "Eine Person ist bewusstlos, atmet aber. Was tust du?", optionen: ["stabile Seitenlage und Notruf", "Herzdruckmassage", "Wasser ins Gesicht", "aufsetzen und festhalten"], richtig: 0, erklaerung: "Atemwege frei halten, Notruf absetzen." },
        { typ: "mc", frage: "Welche Baderegel ist richtig?", optionen: ["Nur springen, wo das Wasser tief genug und frei ist", "Bei Gewitter schnell noch eine Bahn schwimmen", "Direkt nach dem Essen schwimmen gehen", "Überhitzt ins kalte Wasser springen"], richtig: 0, erklaerung: "Unbekannte Gewässer sind gefährlich (Steine, Untiefen)." },
        { typ: "mc", frage: "Bei welcher Schwimmtechnik atmet man zur Seite?", optionen: ["Kraul", "Brust", "Rücken", "Delfin"], richtig: 0, erklaerung: "Kraul: Kopf zur Seite drehen, wenn der Arm aus dem Wasser kommt." },
        { typ: "mc", frage: "Was machst du bei Nasenbluten?", optionen: ["Kopf nach vorn, Nasenflügel zusammendrücken", "Kopf in den Nacken legen", "hinlegen und abwarten", "Nase ausschnauben"], richtig: 0, erklaerung: "Kopf nach vorn, damit kein Blut in den Rachen läuft." },
        { typ: "mc", frage: "Welches Verhältnis gilt bei Herzdruckmassage und Beatmung?", optionen: ["30 : 2", "15 : 1", "10 : 10", "5 : 5"], richtig: 0, erklaerung: "30 Kompressionen, 2 Beatmungen." },
        { typ: "mc", frage: "Wie viel Schlaf brauchen Jugendliche etwa?", optionen: ["etwa 9 Stunden", "5 Stunden", "12 Stunden", "6 Stunden"], richtig: 0, erklaerung: "Schlaf ist Erholung – und damit Training." }
      ]
    }
  ]
};
