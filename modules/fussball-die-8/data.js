window.K7_DATA = {
  id: "fussball-die-8",
  fach: "Die 8 im Fußball",
  icon: "8",
  untertitel: "Richard · Hertha BSC U13 · Nr. 13 · linke 8 und LV im 2-3-2-3 – aus deinem Saison-Journal und dem Film „Die 8 im Fußball“",
  stand: "Saison 2026/27",
  quelle: { titel: "Film „Die 8 im Fußball“ und Saison-Journal Richard 2026/27 (Familie Grimm, nach dem DFB-Stützpunkt-Journal)", url: "https://claude.ai/artifact/LQR9csj3Ewmoq13uYThZck" },
  bloecke: [
    {
      id: "raeume-system",
      titel: "Räume und System: Spuren, Drittel, Zonen, 2-3-2-3",
      minuten: 10,
      themen: ["Halbspur", "Weiße Zone", "Ebenen"],
      lesen: [
        { h: "Fünf Spuren", p: [
          "Das Feld ist in fünf Längsbahnen geteilt: zwei <b>Flügelspuren</b> ganz außen, zwei <b>Halbspuren</b> und die <b>zentrale Spur</b> in der Mitte. Sagt dein Trainer „Bleib in deiner Halbspur“, meint er genau diese Bahn." ] },
        { h: "Drei Drittel", p: [
          "<b>Hinteres Drittel</b>: vor unserem Tor – hier wird verteidigt und das Spiel eröffnet. <b>Mittleres Drittel</b>: hier wird der Ball nach vorn getragen. <b>Vorderes Drittel</b>: hier entstehen Chancen und Tore." ] },
        { h: "Zonen vor dem Tor", p: [
          "<b>Golden Zone</b> ist der Raum direkt vor dem Tor – von hier fallen die meisten Tore. <b>Assist Zone</b> liegt links und rechts daneben: von hier kommen die Vorlagen. Die <b>Red Zone</b> ist der Raum vor dem Strafraum: Beim Gegner ist sie unser Ziel, vor unserem Tor beginnt dort die Gefahr – hier wird kompromisslos verteidigt. Der Strafraum heißt auch <b>Box</b>.",
          "<b>Weiße Zone</b>: der freie Raum zwischen zwei gegnerischen Linien, zum Beispiel zwischen gegnerischem Mittelfeld und Abwehr. Wer sich dort anbietet, hat Zeit, den Ball offen anzunehmen und aufzudrehen – und der Gegner weiß nicht, wer ihn decken soll." ] },
        { h: "Unser System: 2-3-2-3", p: [
          "Im 9er-Fußball stehen vor dem Torwart vier <b>Ebenen</b>, von hinten nach vorn: <b>IV + IV</b> (die 4 und die 5 – das Fundament), <b>LV + 6 + RV</b> (3, 6, 2), <b>8 + 8</b> (die Verbinder zwischen hinten und vorn), <b>LA + 9 + RA</b> (11, 9, 7). Die Zahlen sind Systemnummern, nicht deine Trikotnummer.",
          "<b>Und wo bin ich?</b> Als linke 8 stehst du in der linken Halbspur auf der Ebene 8+8 – zwischen LV+6+RV hinter dir und LA+9+RA vor dir. Als LV (die 3) stehst du eine Ebene tiefer in der linken Flügelspur, direkt vor dem linken IV. Deine wichtigsten Nachbarn: der LV und die 6 hinter dir, der LA und die 9 vor dir, die rechte 8 neben dir. Mit ihnen bildest du Dreiecke – so hat die Person am Ball immer zwei Lösungen." ] }
      ],
      merken: [
        "Fünf Spuren: Flügel – Halbspur – Zentrum – Halbspur – Flügel. Deine: die linke Halbspur.",
        "Golden Zone = vor dem Tor, Assist Zone = daneben, Red Zone = vor dem Strafraum.",
        "Weiße Zone = freier Raum zwischen zwei gegnerischen Linien – dort anbieten.",
        "2-3-2-3: IV+IV · LV+6+RV · 8+8 · LA+9+RA. Du: linke 8 (oder LV, die 3)."
      ],
      aufgaben: [
        { typ: "mc", frage: "In welcher Spur steht die linke 8?", optionen: ["in der linken Halbspur", "in der linken Flügelspur", "in der zentralen Spur", "in der rechten Halbspur"], richtig: 0, erklaerung: "Halbspur zwischen Flügel und Zentrum." },
        { typ: "mc", frage: "Was ist die Weiße Zone?", optionen: ["der freie Raum zwischen zwei gegnerischen Linien", "der Strafraum", "die Flügelspur", "der Raum hinter dem eigenen Tor"], richtig: 0, erklaerung: "Dort hast du Zeit zum Aufdrehen." },
        { typ: "mc", frage: "Aus welcher Zone kommen die meisten Vorlagen?", optionen: ["Assist Zone", "Golden Zone", "Red Zone", "Flügelspur"], richtig: 0, erklaerung: "Links und rechts neben der Golden Zone." },
        { typ: "mc", frage: "Welche Ebene liegt im 2-3-2-3 direkt hinter den beiden Achtern?", optionen: ["LV + 6 + RV", "IV + IV", "LA + 9 + RA", "der Torwart"], richtig: 0, erklaerung: "Von hinten: IV+IV, LV+6+RV, 8+8, LA+9+RA." },
        { typ: "mc", frage: "Welche Systemnummer hat der linke Verteidiger?", optionen: ["3", "2", "6", "11"], richtig: 0, erklaerung: "LV = 3, RV = 2, Sechser = 6, LA = 11." },
        { typ: "mc", frage: "Wo wird in der Red Zone vor dem eigenen Tor gespielt?", optionen: ["kompromisslos verteidigt", "in Ruhe aufgebaut", "gedribbelt", "flach nach vorn gepasst"], richtig: 0, erklaerung: "Vor dem eigenen Strafraum beginnt die Gefahr." },
        { typ: "mc", frage: "Warum bildet man Dreiecke?", optionen: ["Damit die Person am Ball immer zwei Lösungen hat", "Weil es schöner aussieht", "Damit alle auf einer Linie stehen", "Um das Abseits aufzuheben"], richtig: 0, erklaerung: "Nie auf einer Linie stehen – immer im Dreieck." },
        { typ: "input", frage: "Wie heißt der Raum direkt vor dem Tor, aus dem die meisten Tore fallen? (… Zone)", antworten: ["Golden Zone", "Golden", "goldene zone"], erklaerung: "Golden Zone." }
      ]
    },
    {
      id: "meine-rolle",
      titel: "Meine Rolle: die linke 8 (und der LV)",
      minuten: 10,
      themen: ["Verbinder", "mit Ball", "gegen den Ball"],
      lesen: [
        { h: "Die übergeordnete Aufgabe", p: [
          "Die linke 8 ist der <b>Verbinder</b>. Mit Ball verbindet sie den Aufbau mit dem Angriff: Sie holt den Ball von LV und 6 und bringt ihn zu LA und 9. Gegen den Ball schließt sie die linke Halbspur und schützt die Mitte vor der eigenen Abwehr. Kurz: Ohne dich kommt der Ball nicht sauber von hinten nach vorn – und ohne dich ist die Mitte offen." ] },
        { h: "Mit Ball", p: [
          "Du bist die Anspielstation zwischen den Linien. Du holst den Ball aus der Abwehr ab, drehst auf und bringst ihn zu LA und 9 – mit einem Pass, einem Dribbling oder einem Lauf in die Lücke. <b>Genauigkeit vor Schärfe</b>: lieber der genaue Pass als der harte." ] },
        { h: "Gegen den Ball", p: [
          "Ballverlust? Sofort entschlossen und kompromisslos den Ball angreifen – <b>drei Sekunden alles geben</b>. Klappt das nicht: Sprint zurück in die linke Halbspur und die Mitte zumachen. Ist der Ball weit weg auf rechts, rückst du zur Mitte ein." ] },
        { h: "In den drei Dritteln", p: [
          "<b>Hinten</b>: geordnet verteidigen, anspielbar sein und den öffnenden Pass spielen. Du bist die erste Lösung für IV, LV und 6. <b>Mitte</b>: zwischen den Linien anbieten – in der weißen Zone –, aufdrehen und das Spiel nach vorn tragen. <b>Vorne</b>: mit Mut ins 1 gegen 1 und ins Kombinationsspiel, zielstrebig zum Abschluss. Der 8er-Lauf in die Assist Zone ist deine Waffe vor dem Tor." ],
          beispiel: "Und als LV (die 3)? Bei der Spieleröffnung machst du dich breit und wirst vom IV oder TW angespielt. Mit Ball bildest du mit 8 und LA das Dreieck am Flügel und hinterläufst, sobald die 8 den Ball hat. Gegen den Ball sichert dich der linke IV ab, wenn du rausgehst – ballfern rückst du ein und schließt die Mitte." }
      ],
      merken: [
        "Die 8 ist der Verbinder: Ball von LV und 6 holen, zu LA und 9 bringen.",
        "Genauigkeit vor Schärfe.",
        "Nach Ballverlust: drei Sekunden Gegenpressing – sonst zurück in die Halbspur, Mitte zu.",
        "Als LV: breit machen, Dreieck mit 8 und LA, hinterlaufen; ballfern einrücken."
      ],
      aufgaben: [
        { typ: "mc", frage: "Was ist die wichtigste Aufgabe der linken 8 mit Ball?", optionen: ["Den Ball aus dem Aufbau holen und zu LA und 9 bringen", "Nur die Abwehr absichern", "Immer den weiten Ball schlagen", "Auf dem Flügel bleiben"], richtig: 0, erklaerung: "Verbinder zwischen Aufbau und Angriff." },
        { typ: "mc", frage: "Ballverlust – was zuerst?", optionen: ["Sofort den Ball angreifen, drei Sekunden alles geben", "Zurück ins eigene Tor laufen", "Auf den Schiedsrichter warten", "Den Mitspieler kritisieren"], richtig: 0, erklaerung: "Gegenpressing direkt nach dem Verlust – der Gegner ist noch unsortiert." },
        { typ: "mc", frage: "Das Gegenpressing klappt nicht. Was jetzt?", optionen: ["Sprint zurück in die linke Halbspur, Mitte zumachen", "Weiter vorn warten", "Zum Flügel laufen", "Stehen bleiben"], richtig: 0, erklaerung: "Zurück bis auf Ballhöhe, erst dann wieder nach außen schauen." },
        { typ: "mc", frage: "„Genauigkeit vor Schärfe“ bedeutet:", optionen: ["Lieber den genauen als den harten Pass spielen", "Immer so hart wie möglich schießen", "Nur kurze Pässe spielen", "Nie nach vorn passen"], richtig: 0, erklaerung: "Die Vorlage vor dem Tor ist ein Pass, kein Schuss." },
        { typ: "mc", frage: "Der Ball ist weit weg auf der rechten Seite. Was macht die linke 8?", optionen: ["Zur Mitte einrücken", "Auf dem linken Flügel bleiben", "Nach vorn sprinten", "Zum Torwart zurücklaufen"], richtig: 0, erklaerung: "Ballfern einrücken und die Mitte helfen." },
        { typ: "mc", frage: "Was ist deine Waffe im vorderen Drittel?", optionen: ["Der 8er-Lauf in die Assist Zone", "Der Rückpass zum Torwart", "Die Grätsche", "Der lange Einwurf"], richtig: 0, erklaerung: "Aus der Halbspur durch die Lücke in die Assist Zone." },
        { typ: "mc", frage: "Als LV: Wer sichert dich ab, wenn du rausgehst?", optionen: ["der linke IV", "der Torwart", "die rechte 8", "der RA"], richtig: 0, erklaerung: "Der linke IV steht schräg hinter dir." },
        { typ: "mc", frage: "Welche Mitspieler sind hinten deine ersten Anspielpartner?", optionen: ["IV, LV und 6", "LA und 9", "RA und die rechte 8", "nur der Torwart"], richtig: 0, erklaerung: "Du bist ihre erste Lösung nach vorn." }
      ]
    },
    {
      id: "situationen",
      titel: "Meine Situationen: sechs Szenen aus jedem Spiel",
      minuten: 12,
      themen: ["Umschauen", "Weiße Zone", "Dreieck", "8er-Lauf"],
      lesen: [
        { h: "Umschauen – scannen", p: [
          "Bevor der Ball kommt: zweimal über die Schulter. Wo steht der Gegner, wo ist Platz? <b>So klappt es:</b> Mach es zur Gewohnheit: Ball ist unterwegs zu dir → Kopf dreht sich. Dann weißt du schon vor der Annahme, ob du aufdrehen kannst oder klatschen lassen musst." ] },
        { h: "Weiße Zone – anbieten", p: [
          "Zwischen die gegnerischen Linien, in der linken Halbspur. Den Ball vom Flügel holen und aufdrehen. <b>So klappt es:</b> Du erkennst sie daran, dass zwischen gegnerischem Mittelfeld und Abwehr Platz ist und dich dort niemand deckt. Dann: hin, Ball fordern, offen annehmen." ] },
        { h: "Am Flügel – Dreieck", p: [
          "Mit LV und LA ein Dreieck bilden. Den Ball annehmen und den hinterlaufenden LV schicken. <b>So klappt es:</b> Du, LV und LA stehen nie auf einer Linie, sondern im Dreieck. Sobald du den Ball hast, startet der LV außen vorbei – Pass in den Lauf. Als LV bist du derjenige, der hinterläuft." ] },
        { h: "8er-Lauf – Lücke", p: [
          "Aus der Halbspur durch die Lücke in die Assist Zone. Dann quer in die Goal Zone. Genauigkeit vor Schärfe. <b>So klappt es:</b> Der Moment ist da, wenn unser Flügel den Ball hat und die gegnerische Abwehr zum Ball schaut. Dann startest du. Der Pass vor dem Tor ist eine Vorlage – genau, nicht hart." ] },
        { h: "Ball weit weg – einrücken", p: [
          "Ist der Ball rechts, rückt die linke 8 ein. So hilft sie in der Mitte und holt sich den zweiten Ball am Strafraum. <b>So klappt es:</b> Faustregel: Ball auf der anderen Seite → du schiebst zur Mitte, bleibst aber auf Höhe deiner Halbspur. Abgewehrte Bälle am Strafraum gehören dir." ] },
        { h: "Ball weg? – angreifen", p: [
          "Sofort entschlossen und kompromisslos den Ball angreifen. Klappt das nicht: zurück und die Mitte zumachen. <b>So klappt es:</b> Erst Gegenpressing: direkt nach dem Verlust ist der Gegner noch unsortiert. Kommst du nicht hin, dann Sprint zurück bis auf Ballhöhe – erst dann wieder nach außen schauen." ],
          beispiel: "Zum Merken: Halbspur halten · Umschauen · Weiße Zone · Dreieck am Flügel · 8er-Lauf · Ballfern einrücken · Ball angreifen" }
      ],
      merken: [
        "Umschauen: Ball unterwegs zu dir → zweimal über die Schulter.",
        "Weiße Zone: hin, Ball fordern, offen annehmen, aufdrehen.",
        "Dreieck am Flügel: nie auf einer Linie; LV hinterläuft, Pass in den Lauf.",
        "8er-Lauf, wenn der Flügel den Ball hat und die Abwehr zum Ball schaut; ballfern einrücken; nach Verlust angreifen."
      ],
      aufgaben: [
        { typ: "mc", frage: "Wann drehst du den Kopf zum Scannen?", optionen: ["Während der Ball zu dir unterwegs ist – zweimal über die Schulter", "Erst nach der Ballannahme", "Nur bei Standards", "Wenn der Trainer ruft"], richtig: 0, erklaerung: "Dann weißt du vor der Annahme, ob du aufdrehen kannst." },
        { typ: "mc", frage: "Woran erkennst du die Weiße Zone?", optionen: ["Zwischen gegnerischem Mittelfeld und Abwehr ist Platz und niemand deckt dich", "Der Rasen ist dort heller", "Der Torwart zeigt hin", "Sie liegt immer am Flügel"], richtig: 0, erklaerung: "Dann: hin, Ball fordern, offen annehmen." },
        { typ: "mc", frage: "Du hast am Flügel den Ball, der LV startet außen vorbei. Was tust du?", optionen: ["Pass in seinen Lauf", "Ball festhalten und warten", "Zurück zum IV", "Hoch in die Mitte flanken"], richtig: 0, erklaerung: "Hinterlaufen schafft kurz ein 2 gegen 1." },
        { typ: "mc", frage: "Wann ist der Moment für den 8er-Lauf?", optionen: ["Wenn unser Flügel den Ball hat und die gegnerische Abwehr zum Ball schaut", "Wenn unser Torwart den Ball hat", "Direkt nach dem Anstoß", "Wenn der Gegner einen Eckball hat"], richtig: 0, erklaerung: "Dann startest du durch die Lücke in die Assist Zone." },
        { typ: "mc", frage: "Der Ball ist auf rechts, du bist die linke 8. Wo stehst du?", optionen: ["Eingerückt zur Mitte, auf Höhe meiner Halbspur – bereit für den zweiten Ball", "Ganz außen auf dem linken Flügel", "Im gegnerischen Strafraum", "Neben dem eigenen Torwart"], richtig: 0, erklaerung: "Abgewehrte Bälle am Strafraum gehören dir." },
        { typ: "mc", frage: "Du hast vorher nicht gescannt und spürst einen Gegner im Rücken. Was ist richtig?", optionen: ["Klatschen lassen – direkt zurück zum Passgeber", "Aufdrehen und hoffen", "Den Ball stoppen und stehen bleiben", "Nach hinten weglaufen"], richtig: 0, erklaerung: "Sicher statt riskant – dann wieder freilaufen." },
        { typ: "mc", frage: "Wie lange gibst du nach Ballverlust alles im Gegenpressing?", optionen: ["etwa drei Sekunden", "eine Minute", "bis zum Abpfiff", "gar nicht, ich warte hinten"], richtig: 0, erklaerung: "Direkt nach dem Verlust ist der Gegner unsortiert." },
        { typ: "input", frage: "Wie heißt der Pass, den die 8 nach dem 8er-Lauf quer in die Goal Zone spielt? (eine …)", antworten: ["Vorlage", "eine Vorlage"], erklaerung: "Eine Vorlage – genau, nicht hart." }
      ]
    },
    {
      id: "attribute",
      titel: "Meine Attribute – und wie ich sie übe",
      minuten: 10,
      themen: ["Wahrnehmung", "Entscheidungen", "Erster Kontakt", "Mut"],
      lesen: [
        { h: "Drei im Kopf", p: [
          "<b>Wahrnehmung</b>: Vor jedem Ballkontakt umschauen. Du weißt schon vorher, wo Gegner und Mitspieler stehen. <i>So übst du es:</i> Im Training bei jeder Passübung zweimal schauen, bevor der Ball kommt – auch wenn kein Gegner da ist.",
          "<b>Spielverständnis</b>: Räume erkennen: Wo ist die weiße Zone, wo die Lücke, wann lohnt sich der Lauf? <i>So übst du es:</i> Spiele anschauen und nur auf die Achter achten: Wann starten sie, wann warten sie?",
          "<b>Entscheidungen</b>: Schnell und sicher entscheiden. Genauigkeit vor Schärfe. <i>So übst du es:</i> Vor der Annahme schon wissen, was du machst. Im Zweifel die einfache Lösung – der nächste Mitspieler." ] },
        { h: "Drei am Ball und im Lauf", p: [
          "<b>Erster Kontakt</b>: Offen annehmen und aufdrehen, mit beiden Füßen und auch dann, wenn ein Gegner drückt. <i>So übst du es:</i> Wand oder Partner: Ball annehmen und mit dem ersten Kontakt in die Richtung legen, in die du spielen willst. Beide Füße.",
          "<b>Laufstärke</b>: Box to Box: immer wieder vor in die Assist Zone und zurück in die eigene Halbspur. <i>So übst du es:</i> Nach jedem Pass weiterlaufen, nie stehen bleiben. Ausdauer kommt vom Spielen, nicht vom Rundenlaufen.",
          "<b>Mut und Biss</b>: Mit Ball Mut und Risiko im 1 gegen 1. Gegen den Ball entschlossen und kompromisslos. <i>So übst du es:</i> Im Training bewusst einmal pro Übung das Dribbling suchen – auch wenn es schiefgehen kann." ],
          beispiel: "Skill-Karte: Pass und Annahme mit links unter Tempo · rechter Fuß · Flanke aus dem Lauf · Dribbling am Flügel · Sprint über 20–30 m auch in der 70. Minute · Rückwärtsbewegung nach Ballverlust · Hinterlaufen · Spiel über den Dritten · 1 gegen 1 defensiv nach außen lenken · Mut nach Fehlern · Kommunikation laut und klar." }
      ],
      merken: [
        "Wahrnehmung: zweimal schauen, bevor der Ball kommt – bei jeder Übung.",
        "Erster Kontakt: in die Spielrichtung legen, beide Füße.",
        "Laufstärke: nach jedem Pass weiterlaufen, Box to Box.",
        "Mut: einmal pro Übung bewusst das Dribbling suchen."
      ],
      aufgaben: [
        { typ: "mc", frage: "Wie übst du Wahrnehmung im Training?", optionen: ["Bei jeder Passübung zweimal schauen, bevor der Ball kommt", "Nur im Spiel schauen", "Auf den Ball starren", "Den Trainer fragen, wo der Gegner ist"], richtig: 0, erklaerung: "Auch ohne Gegner – damit es Gewohnheit wird." },
        { typ: "mc", frage: "Was heißt „offen annehmen“?", optionen: ["Den Ball mit dem ersten Kontakt in die Richtung legen, in die ich spielen will", "Den Ball stoppen und liegen lassen", "Den Ball mit dem Rücken zum Feld annehmen", "Den Ball direkt zurückspielen"], richtig: 0, erklaerung: "Aufdrehen beginnt mit dem ersten Kontakt." },
        { typ: "mc", frage: "Du bist unsicher, welcher Pass richtig ist. Welche Regel gilt?", optionen: ["Die einfache Lösung – der nächste Mitspieler", "Der weiteste Pass", "Der härteste Pass", "Warten, bis der Gegner kommt"], richtig: 0, erklaerung: "Schnell und sicher entscheiden." },
        { typ: "mc", frage: "Woher kommt Laufstärke laut deinem Journal?", optionen: ["Vom Spielen – nach jedem Pass weiterlaufen", "Vom Rundenlaufen", "Vom Stehenbleiben nach dem Pass", "Vom Dehnen"], richtig: 0, erklaerung: "Box to Box: vor in die Assist Zone, zurück in die Halbspur." },
        { typ: "mc", frage: "Wie übst du Mut und Biss?", optionen: ["Einmal pro Übung bewusst das Dribbling suchen, auch wenn es schiefgehen kann", "Nie dribbeln, um keinen Fehler zu machen", "Nur passen", "Nur grätschen"], richtig: 0, erklaerung: "Risiko im 1 gegen 1 gehört zur 8." },
        { typ: "mc", frage: "Worauf achtest du, wenn du Spiele anschaust, um dein Spielverständnis zu schulen?", optionen: ["Nur auf die Achter: Wann starten sie, wann warten sie?", "Nur auf den Ball", "Nur auf die Tore", "Auf den Schiedsrichter"], richtig: 0, erklaerung: "Räume und Momente erkennen." },
        { typ: "mc", frage: "Welcher Skill gehört zum 1 gegen 1 gegen den Ball?", optionen: ["Den Gegner nach außen lenken", "Den Gegner in die Mitte lassen", "Sofort grätschen", "Den Ball anschauen, nicht den Gegner"], richtig: 0, erklaerung: "Nach außen ist der Weg zum Tor länger." },
        { typ: "mc", frage: "Mit welchem Fuß solltest du laut Skill-Karte zusätzlich üben?", optionen: ["mit dem rechten (schwächerer Fuß)", "nur mit links", "mit keinem", "nur mit dem Kopf"], richtig: 0, erklaerung: "Links ist dein Vorteil – rechts macht dich unberechenbar." }
      ]
    },
    {
      id: "fussballsprache",
      titel: "Meine Fußballsprache und die Trainer-Rufe",
      minuten: 12,
      themen: ["Hinterlaufen", "Spiel über den Dritten", "Rufe"],
      lesen: [
        { h: "Sechs Begriffe für deine Position", p: [
          "<b>Hinterlaufen</b> (Überzahl schaffen): Du läufst außen an deinem ballführenden Mitspieler vorbei und bietest dich für einen Pass in den Lauf an. So entsteht kurz ein 2 gegen 1. Als LV deine wichtigste Offensivaktion. Als 8 bist du der, der den Pass in den Lauf spielt.",
          "<b>Absetzen</b> (anspielbar werden): Löse dich ein paar Schritte vom Gegner. Zwei, drei Schritte weg vom Gegner reichen – erst weg, dann Ball fordern.",
          "<b>Vororientierung und offene Stellung</b> (scannen): Schau dich kurz um, bevor der Ball kommt. Stell dich leicht seitlich, damit du Ball, Gegner und Spielfeld im Blick hast. Als 8 entscheidend: Nur wer vorher schaut, kann aufdrehen.",
          "<b>Spiel über den Dritten</b> (frei laufen): Du spielst den Ball nicht direkt zur Person, die frei werden soll, sondern über einen Mitspieler dazwischen. Typisch: LV → 8 → LA. Du bist oft der Dritte in der Mitte.",
          "<b>Klatschen lassen</b> (sicher): Wenn Druck im Rücken ist: Spiele den Ball direkt zurück zum Passgeber. Danach läufst du dich wieder frei.",
          "<b>Dreieck bilden und Anker</b> (anbieten): Drei Spieler bilden ein Dreieck. So hat die Person am Ball zwei Lösungen. Ein Anker ist eine sichere Rückspielstation. Als LV bist du oft der Anker für den Flügel, als 8 die Spitze des Dreiecks." ] },
        { h: "Trainer-Rufe – und was sie heißen", p: [
          "<b>Offen!</b> Du hast Platz – aufdrehen, nach vorn schauen. · <b>Schick!</b> Spiel den Pass in die Tiefe, jetzt. · <b>Durch!</b> Lass den Ball durch, hinter dir ist jemand frei. · <b>Kurz!</b> Komm entgegen, biete dich kurz an. · <b>Tief!</b> Lauf in die Tiefe, hinter die Abwehr. · <b>Scan!</b> Umschauen, bevor der Ball kommt. · <b>Klatsch!</b> Direkt zurück zum Passgeber. · <b>Quer!</b> Spiel den Ball zur Seite. · <b>Hinterlaufen!</b> Außen vorbei, Pass kommt in den Lauf. · <b>Schieben!</b> Alle gemeinsam zum Ball verschieben." ],
          beispiel: "Gute Spieler wollen verstehen: Wenn ein Wort unklar ist – nachfragen." }
      ],
      merken: [
        "Hinterlaufen = außen vorbei, Pass in den Lauf, 2 gegen 1.",
        "Spiel über den Dritten: LV → 8 → LA – du bist oft der Dritte.",
        "Druck im Rücken? Klatschen lassen, dann wieder freilaufen.",
        "Offen! = aufdrehen · Schick! = Tiefenpass · Durch! = Ball durchlassen · Klatsch! = zurück · Schieben! = gemeinsam zum Ball."
      ],
      aufgaben: [
        { typ: "mc", frage: "Dein Trainer ruft „Durch!“. Was tust du?", optionen: ["Den Ball durchlassen – hinter mir ist jemand frei", "Durch die Abwehr dribbeln", "Den Ball durch die Beine spielen", "Durchatmen"], richtig: 0, erklaerung: "Durch! = Ball passieren lassen." },
        { typ: "mc", frage: "„Offen!“ bedeutet:", optionen: ["Du hast Platz – aufdrehen, nach vorn schauen", "Das Tor ist offen – schießen", "Die Abwehr ist offen – zurücklaufen", "Der Mund soll offen sein"], richtig: 0, erklaerung: "Zeit zum Aufdrehen." },
        { typ: "mc", frage: "„Klatsch!“ bedeutet:", optionen: ["Direkt zurück zum Passgeber", "In die Hände klatschen", "Den Ball hart schießen", "Zum Flügel passen"], richtig: 0, erklaerung: "Sichere Lösung bei Druck im Rücken." },
        { typ: "mc", frage: "Was ist „Spiel über den Dritten“?", optionen: ["Der Ball geht über einen Mitspieler dazwischen zu dem, der frei werden soll", "Der dritte Pass muss ein Torschuss sein", "Drei Spieler dribbeln nacheinander", "Der Ball wird dreimal geklatscht"], richtig: 0, erklaerung: "Typisch: LV → 8 → LA." },
        { typ: "mc", frage: "Was heißt „Hinterlaufen“?", optionen: ["Außen am ballführenden Mitspieler vorbeilaufen und den Pass in den Lauf fordern", "Hinter dem Gegner herlaufen", "Zurück zum eigenen Tor laufen", "Hinter dem Torwart stehen"], richtig: 0, erklaerung: "Schafft kurz ein 2 gegen 1." },
        { typ: "mc", frage: "Was ist ein Anker?", optionen: ["Eine sichere Rückspielstation", "Der Kapitän", "Der Stürmer", "Der Eckfahnenpfosten"], richtig: 0, erklaerung: "Als LV oft der Anker für den Flügel." },
        { typ: "mc", frage: "„Schieben!“ bedeutet:", optionen: ["Alle gemeinsam zum Ball verschieben", "Den Gegner wegschubsen", "Den Ball nach vorn schieben", "Die Abwehr nach hinten schieben"], richtig: 0, erklaerung: "Die Mannschaft bewegt sich als Block." },
        { typ: "mc", frage: "Wie viele Schritte reichen beim Absetzen?", optionen: ["zwei, drei Schritte weg vom Gegner – dann Ball fordern", "zehn Meter", "gar keine", "einmal um den Gegner herum"], richtig: 0, erklaerung: "Erst weg, dann Ball fordern." }
      ]
    },
    {
      id: "stark-im-kopf",
      titel: "Stark im Kopf: Tools, Einfluss, Ziele",
      minuten: 10,
      themen: ["Kopfkino", "Mut-Satz", "Lernzone", "Einflussbereich"],
      lesen: [
        { h: "Vier Kopf-Tools", p: [
          "<b>Kopfkino</b>: Vor dem Spiel ein kurzes Video deiner gelungenen Aktion im Kopf – Platz, Ball, Fuß, Ergebnis. Zum Beispiel: Wie du hinterläufst, die Hereingabe mit links perfekt kommt und der Stürmer sie verwertet. Augen zu, 30 Sekunden, drei Aktionen. Am besten in der Bahn.",
          "<b>Mut-Satz</b>: Ein kurzer Satz nach einem Fehler – immer derselbe. „Nächste Aktion.“ oder „Weiter geht's.“ Er stoppt das Grübeln.",
          "<b>Routine</b>: Fester Ablauf vor Spiel und Training – gleiche Reihenfolge beim Anziehen, gleiches Lied, gleiche Schritte beim Aufwärmen. Drei kleine Schritte, fünf Spiele lang durchziehen.",
          "<b>Atmen</b>: Vier Sekunden ein, vier Sekunden aus, dreimal. Puls runter, Kopf klar. Niemand merkt es." ] },
        { h: "Mein Einflussbereich", p: [
          "<b>Innen (100 % bei mir)</b>: Vorbereitung, Reaktion nach einem Fehler, Kommunikation, Tasche am Abend vorher packen, pünktlich am Treffpunkt sein, Atmung, Körpersprache, mein Team anfeuern, Schienbeinschoner einpacken. <b>Mitte (teilweise)</b>: Aufstellung, Spielausgang, ob der Pass ankommt, Tempo der Gegner. <b>Außen (0 %)</b>: Wetter, Schiedsrichter, Zuschauer, S-Bahn-Verspätung.",
          "Energie gehört nach innen. Vor jedem Spiel eine Sache aus dem inneren Kreis wählen – das ist dein Fokus." ] },
        { h: "Ziele – so geht's", p: [
          "Ein gutes Ziel ist <b>heute machbar</b>, <b>genau beschrieben</b>, <b>trainierbar</b>, <b>etwas herausfordernd</b> und <b>überprüfbar</b> (Skala 0–10). Wunsch: „Ich will Stammspieler werden“ – das entscheidet der Trainer. Ziel: „Vor jedem Ballkontakt zweimal über die Schulter schauen und die erste Aktion nach vorn spielen“ – das liegt zu 100 % bei dir.",
          "<b>Lernzone</b>: Komfort-Zone (kann ich schon – zu leicht), Lern-Zone (schwer, aber machbar – genau richtig), Zu-viel-Zone (nur Frust – kleiner machen). Fünf Stationen: Mini-Ziel wählen – probieren – Feedback holen – dranbleiben – Fortschritt merken." ],
          beispiel: "Zielbeispiele: Als LV in jedem Spiel mindestens dreimal hinterlaufen und eine Hereingabe mit links bringen. Als 8er vor jedem Ballkontakt zweimal über die Schulter schauen. Für beide: nach Ballverlust sofort den Ball angreifen." }
      ],
      merken: [
        "Kopfkino 30 Sekunden, Mut-Satz nach Fehlern, Routine vor dem Spiel, Atmen 4–4 dreimal.",
        "Energie nach innen: Was liegt zu 100 % bei mir? Wetter und Schiri loslassen.",
        "Gutes Ziel: heute machbar, genau, trainierbar, herausfordernd, überprüfbar – über mein Tun, nicht über Tore.",
        "Lern-Zone: schwer, aber machbar. Zu viel? Kleiner machen."
      ],
      aufgaben: [
        { typ: "mc", frage: "Was ist ein Mut-Satz?", optionen: ["Ein kurzer, immer gleicher Satz nach einem Fehler, der das Grübeln stoppt", "Ein Schlachtruf der Mannschaft", "Ein Satz des Trainers in der Kabine", "Ein Motto auf dem Trikot"], richtig: 0, erklaerung: "z. B. „Nächste Aktion.“" },
        { typ: "mc", frage: "Welche Sache liegt zu 100 % bei dir?", optionen: ["Tasche am Abend vorher packen", "die Aufstellung", "das Wetter", "die Entscheidungen des Schiedsrichters"], richtig: 0, erklaerung: "Innerer Kreis = volle Kontrolle." },
        { typ: "mc", frage: "In welchen Bereich gehört „S-Bahn-Verspätung“?", optionen: ["kein Einfluss (0 %) – loslassen", "100 % bei mir", "teilweise", "in alle drei"], richtig: 0, erklaerung: "Darüber ärgern kostet Kraft – früh losfahren liegt aber bei dir." },
        { typ: "mc", frage: "Welches ist ein ZIEL und kein Wunsch?", optionen: ["In jedem Spiel mindestens dreimal hinterlaufen", "Stammspieler werden", "Ein Tor schießen", "Das Spiel gewinnen"], richtig: 0, erklaerung: "Ziele drehen sich um dein Tun, nicht um Ergebnisse." },
        { typ: "mc", frage: "Wie atmest du im hektischen Moment?", optionen: ["Vier Sekunden ein, vier aus, dreimal", "So schnell wie möglich", "Luft anhalten", "Nur durch den Mund hecheln"], richtig: 0, erklaerung: "Puls runter, Kopf klar." },
        { typ: "mc", frage: "Deine Aufgabe fühlt sich nur nach Frust an. In welcher Zone bist du?", optionen: ["Zu-viel-Zone – Aufgabe kleiner machen", "Lern-Zone – weiter so", "Komfort-Zone – schwerer machen", "Gar keiner"], richtig: 0, erklaerung: "Kleiner machen, bis es in die Lern-Zone passt." },
        { typ: "mc", frage: "Wann und wie lange machst du Kopfkino?", optionen: ["Vor dem Spiel, Augen zu, 30 Sekunden, drei Aktionen – z. B. in der Bahn", "In der Halbzeit, zehn Minuten", "Nach dem Spiel, eine Stunde", "Während des Spiels"], richtig: 0, erklaerung: "Kurz und konkret." },
        { typ: "mc", frage: "Was ist der erste Schritt durch die Lernzone?", optionen: ["Ein Mini-Ziel wählen, klein genug, um heute anzufangen", "Feedback holen", "Fortschritt aufschreiben", "Aufgeben, wenn es nicht klappt"], richtig: 0, erklaerung: "Mini-Ziel – probieren – Feedback – dranbleiben – Fortschritt merken." }
      ]
    }
  ]
};
