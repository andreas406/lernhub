window.K7_DATA = {
  id: "k7-biologie",
  fach: "Biologie",
  icon: "BI",
  untertitel: "Klasse 7 Gymnasium · Rahmenlehrplan Berlin-Brandenburg, Themenfelder 3.1–3.4 (Doppeljahrgang 7/8)",
  stand: "November 2026",
  quelle: { titel: "Rahmenlehrplan Teil C Biologie (Jgst. 7–10), Themenfelder 3.1 Zelle, 3.2 Lebensräume, 3.3 Stoffwechsel, 3.4 Sexualität", url: "https://bildungsserver.berlin-brandenburg.de/fileadmin/bbb/unterricht/rahmenlehrplaene/Rahmenlehrplanprojekt/amtliche_Fassung/Teil_C_Biologie_2015_11_10.pdf" },
  bloecke: [
    {
      id: "zelle",
      titel: "Die Zelle – kleinste Einheit des Lebens",
      minuten: 12,
      themen: ["Zellbestandteile", "Pflanzen- vs. Tierzelle", "Mikroskop"],
      lesen: [
        { h: "Kennzeichen des Lebendigen", p: [
          "Lebewesen haben gemeinsame Merkmale: <b>Stoffwechsel</b> (Nahrung aufnehmen, Energie gewinnen), <b>Wachstum</b>, <b>Bewegung</b>, <b>Reizbarkeit</b> (auf die Umwelt reagieren), <b>Fortpflanzung</b> und sie bestehen aus <b>Zellen</b>. Ein Stein hat nichts davon, ein Baum alles." ] },
        { h: "Aufbau der Zelle", p: [
          "<b>Zellmembran</b>: Hülle, kontrolliert, was rein- und rausgeht. <b>Zellplasma</b> (Cytoplasma): Flüssigkeit, in der alles schwimmt. <b>Zellkern</b>: Steuerzentrale mit der Erbinformation (DNA). <b>Mitochondrien</b>: „Kraftwerke“ – gewinnen Energie aus Zucker (Zellatmung).",
          "<b>Nur Pflanzenzellen</b> haben: eine feste <b>Zellwand</b> (aus Cellulose, gibt Stabilität), <b>Chloroplasten</b> (grün, hier läuft die Fotosynthese) und eine große <b>Vakuole</b> (Speicher für Wasser und Stoffe).",
          "Zellen mit echtem Zellkern heißen <b>eukaryotisch</b> (Pflanzen, Tiere, Pilze). Bakterien haben keinen Zellkern (prokaryotisch)." ],
          beispiel: "Tierzelle: Membran, Plasma, Kern, Mitochondrien. Pflanzenzelle: zusätzlich Zellwand, Chloroplasten, Vakuole." },
        { h: "Vom Kleinen zum Großen", p: [
          "Viele gleichartige Zellen bilden ein <b>Gewebe</b> (z. B. Muskelgewebe). Mehrere Gewebe bilden ein <b>Organ</b> (Herz). Organe bilden ein <b>Organsystem</b> (Kreislaufsystem). Alles zusammen ist der <b>Organismus</b>.",
          "Beim <b>Mikroskopieren</b>: Objekt auf den Objektträger, Deckglas drauf, mit kleinster Vergrößerung beginnen, scharf stellen. Gesamtvergrößerung = Okular × Objektiv (10 × 40 = 400-fach)." ] }
      ],
      merken: [
        "Kennzeichen des Lebendigen: Stoffwechsel, Wachstum, Bewegung, Reizbarkeit, Fortpflanzung, Zellaufbau.",
        "Jede Zelle: Membran, Plasma, Kern, Mitochondrien. Pflanzenzelle zusätzlich: Zellwand, Chloroplasten, Vakuole.",
        "Zellkern = Steuerzentrale, Mitochondrien = Kraftwerke, Chloroplasten = Fotosynthese.",
        "Zelle → Gewebe → Organ → Organsystem → Organismus."
      ],
      aufgaben: [
        { typ: "mc", frage: "Welcher Zellbestandteil kommt NUR in Pflanzenzellen vor?", optionen: ["Chloroplast", "Zellkern", "Mitochondrium", "Zellmembran"], richtig: 0, erklaerung: "Chloroplasten (Fotosynthese), Zellwand und große Vakuole gibt es nur in Pflanzenzellen." },
        { typ: "mc", frage: "Welche Aufgabe haben die Mitochondrien?", optionen: ["Energiegewinnung (Zellatmung)", "Speicherung der Erbinformation", "Fotosynthese", "Stabilität der Zelle"], richtig: 0, erklaerung: "Mitochondrien sind die „Kraftwerke“ der Zelle." },
        { typ: "input", frage: "Wie heißt die Steuerzentrale der Zelle, die die Erbinformation enthält?", antworten: ["Zellkern", "Kern", "Nukleus"], erklaerung: "Der Zellkern enthält die DNA." },
        { typ: "mc", frage: "Richtige Reihenfolge vom Kleinen zum Großen?", optionen: ["Zelle – Gewebe – Organ – Organismus", "Gewebe – Zelle – Organ – Organismus", "Zelle – Organ – Gewebe – Organismus", "Organ – Gewebe – Zelle – Organismus"], richtig: 0, erklaerung: "Zellen bilden Gewebe, Gewebe bilden Organe." },
        { typ: "input", frage: "Okular 10× und Objektiv 40×: Wie stark vergrößert das Mikroskop insgesamt? (Zahl)", antworten: ["400", "400-fach", "400x"], numerisch: true, erklaerung: "10 × 40 = 400-fach." },
        { typ: "tf", frage: "Bakterien haben einen echten Zellkern.", richtig: false, erklaerung: "Bakterien sind prokaryotisch – ohne Zellkern." },
        { typ: "mc", frage: "Was ist KEIN Kennzeichen des Lebendigen?", optionen: ["aus Metall bestehen", "Stoffwechsel", "Reizbarkeit", "Fortpflanzung"], richtig: 0, erklaerung: "Lebewesen bestehen aus Zellen, nicht aus Metall." },
        { typ: "mc", frage: "Welche Aufgabe hat die Zellwand?", optionen: ["Sie gibt der Pflanzenzelle Form und Stabilität", "Sie gewinnt Energie", "Sie steuert die Zelle", "Sie speichert Wasser"], richtig: 0, erklaerung: "Die feste Zellwand aus Cellulose stützt die Pflanzenzelle." }
      ]
    },
    {
      id: "oekosystem",
      titel: "Lebensräume und Ökosysteme",
      minuten: 12,
      themen: ["Umweltfaktoren", "Nahrungsnetz", "Fotosynthese"],
      lesen: [
        { h: "Was ist ein Ökosystem?", p: [
          "Ein <b>Ökosystem</b> besteht aus dem Lebensraum (<b>Biotop</b>, z. B. Teich, Wald) und der Lebensgemeinschaft (<b>Biozönose</b>: alle Lebewesen darin). Beides beeinflusst sich gegenseitig.",
          "<b>Abiotische Umweltfaktoren</b> (unbelebt): Licht, Temperatur, Wasser, Boden, Wind. <b>Biotische Umweltfaktoren</b> (belebt): andere Lebewesen – Konkurrenz, Fressfeinde, Partner." ] },
        { h: "Nahrungsbeziehungen", p: [
          "<b>Produzenten</b> (Pflanzen) stellen mit Fotosynthese Zucker her. <b>Konsumenten</b> fressen: 1. Ordnung = Pflanzenfresser (Hase), 2. Ordnung = Fleischfresser (Fuchs). <b>Destruenten</b> (Pilze, Bakterien, Regenwürmer) zersetzen tote Reste zu Mineralstoffen – der <b>Stoffkreislauf</b> schließt sich.",
          "Eine <b>Nahrungskette</b> ist eine Linie (Gras → Hase → Fuchs), ein <b>Nahrungsnetz</b> zeigt alle Verknüpfungen. Mit jeder Stufe geht Energie verloren (nur ca. 10 % werden weitergegeben) – deshalb gibt es viel mehr Pflanzen als Raubtiere." ],
          beispiel: "Beziehungen: Symbiose (beide profitieren – Biene und Blüte), Parasitismus (einer profitiert, der andere wird geschädigt – Zecke und Hund), Konkurrenz (Kampf um dieselbe Ressource)." },
        { h: "Fotosynthese", p: [
          "In den Chloroplasten: <b>Kohlenstoffdioxid + Wasser → (Licht) → Traubenzucker + Sauerstoff</b>. Die Pflanze speichert so Lichtenergie in Zucker und gibt Sauerstoff ab.",
          "<b>Zellatmung</b> ist das Gegenteil (bei allen Lebewesen, in den Mitochondrien): Traubenzucker + Sauerstoff → Kohlenstoffdioxid + Wasser + Energie.",
          "<b>Nachhaltigkeit</b> heißt, Ökosysteme so zu nutzen, dass sie auch für künftige Generationen erhalten bleiben." ] }
      ],
      merken: [
        "Ökosystem = Biotop (Lebensraum) + Biozönose (Lebensgemeinschaft).",
        "Abiotisch: Licht, Temperatur, Wasser, Boden. Biotisch: andere Lebewesen.",
        "Produzenten → Konsumenten → Destruenten (Stoffkreislauf).",
        "Fotosynthese: CO₂ + H₂O → (Licht) → Zucker + O₂. Zellatmung ist die Umkehrung."
      ],
      aufgaben: [
        { typ: "mc", frage: "Welcher Umweltfaktor ist abiotisch?", optionen: ["Temperatur", "Fressfeind", "Konkurrent", "Parasit"], richtig: 0, erklaerung: "Abiotisch = unbelebt: Licht, Temperatur, Wasser, Boden." },
        { typ: "mc", frage: "Regenwürmer, Pilze und Bakterien, die tote Reste zersetzen, nennt man …", optionen: ["Destruenten", "Produzenten", "Konsumenten", "Parasiten"], richtig: 0, erklaerung: "Destruenten schließen den Stoffkreislauf." },
        { typ: "mc", frage: "Gras → Hase → Fuchs: Was ist der Hase?", optionen: ["Konsument 1. Ordnung", "Produzent", "Konsument 2. Ordnung", "Destruent"], richtig: 0, erklaerung: "Pflanzenfresser = Konsument 1. Ordnung." },
        { typ: "mc", frage: "Welche Stoffe braucht die Pflanze für die Fotosynthese?", optionen: ["Kohlenstoffdioxid, Wasser und Licht", "Sauerstoff und Zucker", "Stickstoff und Wärme", "Traubenzucker und Wasser"], richtig: 0, erklaerung: "CO₂ + H₂O + Lichtenergie → Zucker + O₂." },
        { typ: "input", frage: "Welches Gas gibt die Pflanze bei der Fotosynthese ab?", antworten: ["Sauerstoff", "O2", "O₂"], erklaerung: "Sauerstoff – lebenswichtig für alle Tiere." },
        { typ: "mc", frage: "Biene und Blüte: Beide profitieren. Wie heißt diese Beziehung?", optionen: ["Symbiose", "Parasitismus", "Konkurrenz", "Räuber-Beute"], richtig: 0, erklaerung: "Symbiose = beide haben einen Vorteil." },
        { typ: "tf", frage: "In einer Nahrungskette wird fast die gesamte Energie an die nächste Stufe weitergegeben.", richtig: false, erklaerung: "Nur etwa 10 % – der Rest geht als Wärme und Bewegung verloren." },
        { typ: "mc", frage: "Wo in der Zelle findet die Zellatmung statt?", optionen: ["in den Mitochondrien", "in den Chloroplasten", "im Zellkern", "in der Vakuole"], richtig: 0, erklaerung: "Mitochondrien = Kraftwerke." }
      ]
    },
    {
      id: "ernaehrung-verdauung",
      titel: "Ernährung und Verdauung",
      minuten: 12,
      themen: ["Nährstoffe", "Enzyme", "Verdauungsorgane"],
      lesen: [
        { h: "Die Nährstoffe", p: [
          "<b>Kohlenhydrate</b> (Zucker, Stärke – Brot, Nudeln, Kartoffeln): schnelle Energie. <b>Fette</b> (Öl, Butter, Nüsse): Energiespeicher, Schutz. <b>Eiweiße/Proteine</b> (Fleisch, Fisch, Eier, Hülsenfrüchte): Baustoff für Muskeln und Zellen.",
          "Dazu: <b>Vitamine</b> und <b>Mineralstoffe</b> (z. B. Calcium für Knochen, Eisen fürs Blut), <b>Ballaststoffe</b> (regen die Verdauung an) und <b>Wasser</b>. Die <b>Ernährungspyramide</b> zeigt: viel Wasser, Gemüse und Obst, Getreide – wenig Süßes und Fettiges.",
          "<b>Nachweise</b>: Stärke mit Iod-Kaliumiodid-Lösung (blau-schwarz), Fett mit der Fettfleckprobe (durchscheinender Fleck), Traubenzucker mit Teststreifen." ] },
        { h: "Der Weg der Nahrung", p: [
          "<b>Mund</b>: Zähne zerkleinern, Speichel enthält das Enzym Amylase (spaltet Stärke – Brot schmeckt nach langem Kauen süß). <b>Speiseröhre</b>: transportiert durch Muskelbewegung. <b>Magen</b>: Magensäure tötet Keime, Enzym Pepsin beginnt den Eiweißabbau.",
          "<b>Dünndarm</b>: Hier wird das meiste verdaut (mit Hilfe von Galle aus der Leber und Enzymen aus der Bauchspeicheldrüse) und über die <b>Darmzotten</b> ins Blut aufgenommen (riesige Oberfläche!). <b>Dickdarm</b>: entzieht Wasser. <b>Enddarm</b>: Ausscheidung." ],
          beispiel: "Enzyme arbeiten nach dem <b>Schlüssel-Schloss-Prinzip</b>: Jedes Enzym passt nur zu einem bestimmten Nährstoff – Amylase spaltet nur Stärke, nicht Fett." },
        { h: "Warum verdauen?", p: [
          "Große Nährstoff-Moleküle (Stärke, Eiweiß, Fett) passen nicht durch die Darmwand. Enzyme zerlegen sie in kleine Bausteine: Stärke → Traubenzucker, Eiweiß → Aminosäuren, Fett → Fettsäuren und Glycerin. Die kleinen Bausteine gehen ins Blut und zu allen Zellen.",
          "Energie wird in <b>Kilojoule (kJ)</b> oder Kilokalorien angegeben. Wer mehr Energie aufnimmt als verbraucht, nimmt zu." ] }
      ],
      merken: [
        "Kohlenhydrate = Energie, Fette = Energiespeicher, Eiweiße = Baustoff.",
        "Stärkenachweis: Iodlösung wird blau-schwarz. Fettnachweis: Fettfleckprobe.",
        "Mund → Speiseröhre → Magen → Dünndarm (Aufnahme ins Blut, Darmzotten) → Dickdarm (Wasser) → Enddarm.",
        "Enzyme spalten Nährstoffe nach dem Schlüssel-Schloss-Prinzip."
      ],
      aufgaben: [
        { typ: "mc", frage: "Welcher Nährstoff ist vor allem Baustoff für Muskeln?", optionen: ["Eiweiß", "Kohlenhydrate", "Fett", "Ballaststoffe"], richtig: 0, erklaerung: "Proteine sind Baustoffe." },
        { typ: "mc", frage: "Womit weist man Stärke nach?", optionen: ["Iod-Kaliumiodid-Lösung (blau-schwarz)", "Fettfleckprobe", "Kalkwasser", "Rotkohlsaft"], richtig: 0, erklaerung: "Stärke + Iodlösung = blau-schwarze Färbung." },
        { typ: "mc", frage: "In welchem Organ wird der größte Teil der Nährstoffe ins Blut aufgenommen?", optionen: ["Dünndarm", "Magen", "Dickdarm", "Speiseröhre"], richtig: 0, erklaerung: "Der Dünndarm hat durch Darmzotten eine riesige Oberfläche." },
        { typ: "mc", frage: "Warum schmeckt Brot nach langem Kauen süß?", optionen: ["Das Enzym Amylase im Speichel spaltet Stärke zu Zucker", "Im Brot ist versteckter Zucker", "Die Zähne setzen Zucker frei", "Speichel ist süß"], richtig: 0, erklaerung: "Amylase beginnt die Stärkeverdauung schon im Mund." },
        { typ: "input", frage: "Welches Organ entzieht dem Nahrungsbrei das Wasser?", antworten: ["Dickdarm", "der Dickdarm"], erklaerung: "Der Dickdarm entzieht Wasser." },
        { typ: "mc", frage: "Was beschreibt das Schlüssel-Schloss-Prinzip?", optionen: ["Jedes Enzym passt nur zu einem bestimmten Stoff", "Der Magen schließt sich nach dem Essen", "Zähne passen genau aufeinander", "Nährstoffe schließen die Darmwand"], richtig: 0, erklaerung: "Enzym (Schlüssel) passt nur zu seinem Substrat (Schloss)." },
        { typ: "mc", frage: "In welche Bausteine wird Eiweiß zerlegt?", optionen: ["Aminosäuren", "Traubenzucker", "Fettsäuren", "Vitamine"], richtig: 0, erklaerung: "Eiweiß → Aminosäuren; Stärke → Traubenzucker; Fett → Fettsäuren + Glycerin." },
        { typ: "mc", frage: "Welche Aufgabe hat die Magensäure?", optionen: ["Keime abtöten und Eiweißverdauung unterstützen", "Fett nachweisen", "Wasser entziehen", "Stärke süß machen"], richtig: 0, erklaerung: "Salzsäure im Magen tötet Bakterien; Pepsin spaltet Eiweiß." }
      ]
    },
    {
      id: "blut-atmung",
      titel: "Blut, Herz-Kreislauf und Atmung",
      minuten: 12,
      themen: ["Blutbestandteile", "Blutkreislauf", "Lunge"],
      lesen: [
        { h: "Das Blut", p: [
          "Ein Erwachsener hat 5–6 Liter Blut. Es besteht aus <b>Blutplasma</b> (Flüssigkeit, transportiert Nährstoffe) und Blutzellen: <b>rote Blutkörperchen</b> (transportieren Sauerstoff mit dem roten Farbstoff Hämoglobin), <b>weiße Blutkörperchen</b> (Abwehr von Krankheitserregern), <b>Blutplättchen</b> (Blutgerinnung, Wundverschluss).",
          "<b>Blutgruppen</b> (AB0-System): A, B, AB und 0. Bei einer Transfusion müssen sie passen, sonst verklumpt das Blut (Antigen-Antikörper-Reaktion). Blutgruppe 0 ist Universalspender, AB Universalempfänger. Dazu kommt der Rhesusfaktor (+/−)." ] },
        { h: "Herz und Kreislauf", p: [
          "Das <b>Herz</b> ist ein Muskel mit zwei Hälften und je einem Vorhof und einer Kammer. Es pumpt etwa 70-mal pro Minute (Puls).",
          "<b>Körperkreislauf</b>: linke Kammer → Aorta → Arterien → Kapillaren (Stoffaustausch im Gewebe) → Venen → rechter Vorhof. <b>Lungenkreislauf</b>: rechte Kammer → Lunge (Sauerstoff aufnehmen) → linker Vorhof.",
          "<b>Arterien</b> führen vom Herzen weg (dicke Wand, Blutdruck), <b>Venen</b> zum Herzen hin (Venenklappen verhindern Rückfluss), <b>Kapillaren</b> sind haarfein – hier findet der Austausch statt." ],
          beispiel: "Merkhilfe: Arterie = Ab vom Herzen. Vene = zum Herzen." },
        { h: "Die Atmung", p: [
          "Weg der Luft: Nase/Mund → Rachen → Luftröhre → Bronchien → Bronchiolen → <b>Lungenbläschen (Alveolen)</b>. Dort geht Sauerstoff ins Blut und Kohlenstoffdioxid aus dem Blut in die Luft – durch <b>Diffusion</b> (Teilchen wandern von hoher zu niedriger Konzentration).",
          "Die Millionen Lungenbläschen haben zusammen eine Oberfläche von etwa 100 m². <b>Einatmen</b>: Zwerchfell spannt sich und senkt sich, Rippen heben sich, der Brustraum wird größer, Luft strömt ein. <b>Ausatmen</b>: umgekehrt.",
          "Bei Anstrengung steigen Puls und Atemfrequenz, weil die Muskeln mehr Sauerstoff brauchen. Rauchen schädigt Lungenbläschen und Gefäße." ] }
      ],
      merken: [
        "Rote Blutkörperchen = Sauerstofftransport (Hämoglobin), weiße = Abwehr, Blutplättchen = Gerinnung.",
        "Arterien vom Herzen weg, Venen zum Herzen hin, Kapillaren für den Austausch.",
        "Körperkreislauf (linke Kammer → Körper) und Lungenkreislauf (rechte Kammer → Lunge).",
        "Gasaustausch in den Lungenbläschen durch Diffusion; Zwerchfell steuert das Einatmen."
      ],
      aufgaben: [
        { typ: "mc", frage: "Welche Blutzellen transportieren Sauerstoff?", optionen: ["rote Blutkörperchen", "weiße Blutkörperchen", "Blutplättchen", "Blutplasma"], richtig: 0, erklaerung: "Rote Blutkörperchen mit Hämoglobin binden Sauerstoff." },
        { typ: "mc", frage: "Welche Aufgabe haben die Blutplättchen?", optionen: ["Blutgerinnung / Wundverschluss", "Sauerstofftransport", "Abwehr von Krankheitserregern", "Nährstofftransport"], richtig: 0, erklaerung: "Blutplättchen verschließen Wunden." },
        { typ: "mc", frage: "Blutgefäße, die vom Herzen wegführen, heißen …", optionen: ["Arterien", "Venen", "Kapillaren", "Lymphgefäße"], richtig: 0, erklaerung: "Arterie = Ab vom Herzen." },
        { typ: "input", frage: "Wie heißen die winzigen Bläschen in der Lunge, in denen der Gasaustausch stattfindet?", antworten: ["Lungenbläschen", "Alveolen", "Alveole"], erklaerung: "Lungenbläschen = Alveolen." },
        { typ: "mc", frage: "Welche Blutgruppe gilt als Universalspender?", optionen: ["0", "AB", "A", "B"], richtig: 0, erklaerung: "Blutgruppe 0 hat keine Antigene A oder B auf den roten Blutkörperchen." },
        { typ: "mc", frage: "Was passiert beim Einatmen mit dem Zwerchfell?", optionen: ["Es spannt sich an und senkt sich", "Es entspannt sich und wölbt sich nach oben", "Es bewegt sich nicht", "Es schließt die Luftröhre"], richtig: 0, erklaerung: "Zwerchfell senkt sich → Brustraum größer → Luft strömt ein." },
        { typ: "mc", frage: "Wohin pumpt die rechte Herzkammer das Blut?", optionen: ["in die Lunge", "in den Körper", "in die linke Kammer", "in die Leber"], richtig: 0, erklaerung: "Rechte Kammer → Lungenkreislauf." },
        { typ: "mc", frage: "Wie gelangt Sauerstoff aus den Lungenbläschen ins Blut?", optionen: ["durch Diffusion", "durch Pumpen des Herzens", "durch Muskelkraft", "durch Enzyme"], richtig: 0, erklaerung: "Diffusion: Teilchen wandern von hoher zu niedriger Konzentration." }
      ]
    },
    {
      id: "pubertaet-fortpflanzung",
      titel: "Pubertät, Fortpflanzung und Entwicklung",
      minuten: 12,
      themen: ["Hormone", "Geschlechtsorgane", "Zyklus", "Schwangerschaft"],
      lesen: [
        { h: "Pubertät", p: [
          "In der Pubertät (etwa 10–16 Jahre) verändert sich der Körper, gesteuert durch <b>Hormone</b> – Botenstoffe im Blut. Bei Jungen vor allem <b>Testosteron</b> (Hoden): Stimmbruch, Bartwuchs, Muskeln, erster Samenerguss. Bei Mädchen <b>Östrogen</b> (Eierstöcke): Brustwachstum, erste Regelblutung (Menarche).",
          "Bei allen: Wachstumsschub, Körperbehaarung, Schweiß und Pickel, Stimmungsschwankungen. Jeder entwickelt sich in seinem Tempo – früher oder später ist beides normal." ] },
        { h: "Geschlechtsorgane und Zyklus", p: [
          "<b>Mann</b>: Hoden bilden Spermien (Samenzellen) und Testosteron; Samenleiter, Prostata, Penis. <b>Frau</b>: Eierstöcke bilden Eizellen und Hormone; Eileiter, Gebärmutter, Scheide (Vagina).",
          "<b>Menstruationszyklus</b> (ca. 28 Tage): Eine Eizelle reift, <b>Eisprung</b> etwa am 14. Tag, die Eizelle wandert durch den Eileiter. Wird sie nicht befruchtet, wird die Gebärmutterschleimhaut abgestoßen = <b>Regelblutung</b> (Menstruation)." ] },
        { h: "Befruchtung, Schwangerschaft, Verhütung", p: [
          "<b>Befruchtung</b>: Spermium und Eizelle verschmelzen im Eileiter zur <b>Zygote</b>. Diese nistet sich in der Gebärmutter ein, wird zum Embryo (bis 8. Woche), dann zum Fetus. Versorgung über <b>Plazenta</b> (Mutterkuchen) und Nabelschnur. Nach etwa 9 Monaten (40 Wochen) die Geburt.",
          "<b>Verhütung</b>: Kondom (schützt auch vor sexuell übertragbaren Krankheiten), Pille (Hormone verhindern den Eisprung), Spirale u. a. Nur das Kondom schützt vor Infektionen.",
          "<b>Sexuelle Selbstbestimmung</b>: Jeder entscheidet selbst über seinen Körper. Nein heißt Nein. Es ist normal, verschieden zu sein – auch bei sexueller Orientierung und Geschlechtsidentität." ] }
      ],
      merken: [
        "Pubertät wird von Hormonen gesteuert: Testosteron (Hoden), Östrogen (Eierstöcke).",
        "Zyklus ca. 28 Tage, Eisprung etwa am 14. Tag, ohne Befruchtung Regelblutung.",
        "Befruchtung im Eileiter → Zygote → Embryo → Fetus; Versorgung über Plazenta.",
        "Kondom schützt als einziges Verhütungsmittel auch vor Infektionen. Nein heißt Nein."
      ],
      aufgaben: [
        { typ: "mc", frage: "Welches Hormon steuert vor allem die Pubertät bei Jungen?", optionen: ["Testosteron", "Östrogen", "Insulin", "Adrenalin"], richtig: 0, erklaerung: "Testosteron wird in den Hoden gebildet." },
        { typ: "mc", frage: "Wo werden Eizellen gebildet?", optionen: ["in den Eierstöcken", "in der Gebärmutter", "im Eileiter", "in der Scheide"], richtig: 0, erklaerung: "Eierstöcke bilden Eizellen und Hormone." },
        { typ: "mc", frage: "Wo findet die Befruchtung normalerweise statt?", optionen: ["im Eileiter", "in der Gebärmutter", "im Eierstock", "in der Scheide"], richtig: 0, erklaerung: "Spermium und Eizelle treffen sich im Eileiter." },
        { typ: "input", frage: "Wie heißt die befruchtete Eizelle?", antworten: ["Zygote"], erklaerung: "Zygote = verschmolzene Ei- und Samenzelle." },
        { typ: "mc", frage: "Etwa an welchem Tag des Zyklus findet der Eisprung statt?", optionen: ["um den 14. Tag", "am 1. Tag", "am 28. Tag", "am 7. Tag"], richtig: 0, erklaerung: "Ungefähr in der Mitte des 28-Tage-Zyklus." },
        { typ: "mc", frage: "Welches Verhütungsmittel schützt auch vor sexuell übertragbaren Krankheiten?", optionen: ["Kondom", "Pille", "Spirale", "Temperaturmethode"], richtig: 0, erklaerung: "Nur das Kondom schützt vor Infektionen." },
        { typ: "mc", frage: "Worüber wird das ungeborene Kind mit Nährstoffen und Sauerstoff versorgt?", optionen: ["über Plazenta und Nabelschnur", "über den eigenen Mund", "über die Eileiter", "über die Lunge der Mutter direkt"], richtig: 0, erklaerung: "Die Plazenta verbindet den Blutkreislauf von Mutter und Kind." },
        { typ: "tf", frage: "Hormone sind Botenstoffe, die über das Blut im Körper verteilt werden.", richtig: true, erklaerung: "Hormone werden von Drüsen ins Blut abgegeben und wirken an anderen Orten." }
      ]
    },
    {
      id: "arbeitsweisen",
      titel: "Naturwissenschaftlich arbeiten",
      minuten: 8,
      themen: ["Experiment", "Variablen", "Protokoll"],
      lesen: [
        { h: "Der Weg zur Erkenntnis", p: [
          "1. <b>Beobachtung</b> und Frage (Warum welkt die Pflanze?). 2. <b>Hypothese</b> = begründete Vermutung (Sie bekommt zu wenig Licht). 3. <b>Experiment</b> planen und durchführen. 4. <b>Auswertung</b>: Hypothese bestätigt oder widerlegt? 5. Schlussfolgerung – und oft eine neue Frage." ] },
        { h: "Ein gutes Experiment", p: [
          "Es wird nur <b>eine Variable</b> verändert (z. B. Licht), alles andere bleibt gleich (Wasser, Temperatur, Erde). Dazu gehört ein <b>Kontrollansatz</b>, bei dem nichts verändert wird – nur so kann man vergleichen.",
          "Mehrfach wiederholen, Messwerte in einer <b>Tabelle</b> notieren, als <b>Diagramm</b> darstellen." ] },
        { h: "Das Versuchsprotokoll", p: [
          "Aufbau: <b>Fragestellung</b> – <b>Hypothese</b> – <b>Material</b> – <b>Durchführung</b> (Skizze!) – <b>Beobachtung</b> (nur was man sieht, misst) – <b>Auswertung/Deutung</b> (Erklärung) – <b>Fehlerbetrachtung</b>.",
          "Beobachtung und Deutung sauber trennen: „Die Flüssigkeit färbt sich blau“ (Beobachtung) – „also enthält die Probe Stärke“ (Deutung)." ] }
      ],
      merken: [
        "Beobachtung → Hypothese → Experiment → Auswertung → Schlussfolgerung.",
        "Nur eine Variable verändern, Kontrollansatz nicht vergessen.",
        "Protokoll: Frage, Hypothese, Material, Durchführung, Beobachtung, Deutung.",
        "Beobachtung (was ich sehe) und Deutung (was es bedeutet) trennen."
      ],
      aufgaben: [
        { typ: "mc", frage: "Was ist eine Hypothese?", optionen: ["eine begründete Vermutung, die man überprüfen kann", "ein bewiesenes Gesetz", "das Ergebnis eines Experiments", "eine Beobachtung"], richtig: 0, erklaerung: "Die Hypothese wird im Experiment geprüft." },
        { typ: "mc", frage: "Du willst prüfen, ob Kresse im Dunkeln wächst. Was muss bei beiden Ansätzen gleich sein?", optionen: ["Wasser, Erde, Temperatur – nur das Licht ist anders", "Gar nichts", "Nur die Wassermenge", "Nur die Anzahl der Samen"], richtig: 0, erklaerung: "Nur eine Variable (Licht) wird verändert." },
        { typ: "mc", frage: "„Die Lösung wird blau-schwarz.“ – Das ist eine …", optionen: ["Beobachtung", "Deutung", "Hypothese", "Fehlerbetrachtung"], richtig: 0, erklaerung: "Beobachtung = das, was man sieht. Die Deutung wäre: „Es ist Stärke enthalten.“" },
        { typ: "mc", frage: "Wozu dient der Kontrollansatz?", optionen: ["zum Vergleichen: was passiert ohne Veränderung?", "um den Versuch schneller zu machen", "um zwei Variablen gleichzeitig zu testen", "um Material zu sparen"], richtig: 0, erklaerung: "Ohne Kontrolle kann man die Wirkung der Variable nicht erkennen." },
        { typ: "input", frage: "Wie heißt der Teil des Protokolls, in dem man erklärt, was die Beobachtung bedeutet?", antworten: ["Deutung", "Auswertung", "Auswertung/Deutung"], erklaerung: "Deutung (Auswertung) = Erklärung der Beobachtung." },
        { typ: "tf", frage: "Ein Experiment sollte man nur einmal durchführen, damit es schneller geht.", richtig: false, erklaerung: "Wiederholungen machen das Ergebnis verlässlicher." }
      ]
    }
  ]
};
