window.K7_DATA = {
  id: "k7-informatik",
  fach: "Informatik",
  icon: "IF",
  untertitel: "Klasse 7 Gymnasium · Themenfelder: Informatiksysteme, vernetzte Systeme, Information und Daten, algorithmisches Problemlösen",
  stand: "November 2026",
  hinweis: "Informatik steht in Brandenburg nicht in der Pflicht-Stundentafel des Gymnasiums – viele Schulen bieten es als Wahl- oder Profilunterricht an. Die Grundlagen hier passen zu jedem Einstieg.",
  quelle: { titel: "Rahmenlehrplan Teil C Informatik (Jgst. 7–10), Themenfelder 3.1–3.5", url: "https://bildungsserver.berlin-brandenburg.de/fileadmin/bbb/unterricht/rahmenlehrplaene/Rahmenlehrplanprojekt/amtliche_Fassung/Teil_C_Informatik_2015_11_10.pdf" },
  bloecke: [
    {
      id: "informatiksysteme",
      titel: "Informatiksysteme: EVA, Hardware, Software, Dateien",
      minuten: 10,
      themen: ["EVA-Prinzip", "Hardware/Software", "Dateien ordnen"],
      lesen: [
        { h: "Das EVA-Prinzip", p: [
          "Jedes Informatiksystem arbeitet nach <b>Eingabe – Verarbeitung – Ausgabe</b>: Eingabe (Tastatur, Maus, Touchscreen, Mikrofon, Kamera, Sensoren) → Verarbeitung (Prozessor/CPU mit Arbeitsspeicher/RAM) → Ausgabe (Bildschirm, Lautsprecher, Drucker, Motor). Dazu <b>Speicher</b> (Festplatte/SSD, Speicherkarte, Cloud).",
          "<b>Hardware</b> = alles, was man anfassen kann. <b>Software</b> = Programme: <b>Betriebssystem</b> (Windows, macOS, Linux, Android, iOS) verwaltet Hardware und Programme; <b>Anwendungssoftware</b> (Textverarbeitung, Browser, Spiele, Apps)." ] },
        { h: "Dateien und Ordner", p: [
          "Dateien haben Namen und <b>Endungen</b>: .docx/.odt (Text), .xlsx (Tabelle), .pptx (Präsentation), .pdf, .jpg/.png (Bild), .mp3 (Audio), .mp4 (Video), .zip (gepackt), .html (Webseite). Struktur: Ordner → Unterordner → Datei, der <b>Pfad</b> beschreibt den Ort (Dokumente/Schule/Mathe/Test.pdf).",
          "Sinnvolle Namen: Fach_Thema_Datum (Mathe_Prozent_2026-11-05.pdf). <b>Speichergrößen</b>: 8 Bit = 1 Byte; 1 KB ≈ 1000 Byte, 1 MB ≈ 1000 KB, 1 GB ≈ 1000 MB, 1 TB ≈ 1000 GB. Ein Foto ≈ 3 MB, ein Film ≈ 2 GB." ],
          beispiel: "Datensicherheit: regelmäßig sichern (Backup, 3-2-1-Regel: 3 Kopien, 2 Medien, 1 außer Haus), Updates installieren, starke Passwörter, Bildschirm sperren." },
        { h: "Standardsoftware", p: [
          "<b>Textverarbeitung</b>: Formatvorlagen (Überschrift 1, 2), Absätze, Aufzählungen, Seitenzahlen, Rechtschreibprüfung, Tabellen, Bilder einfügen; normgerechter Brief (DIN 5008). <b>Präsentation</b>: wenig Text pro Folie, große Schrift, Bilder, Notizen – frei sprechen. <b>Tabellenkalkulation</b>: Zellen (A1), Formeln beginnen mit =, SUMME(), MITTELWERT(), Diagramme. Browser: Tabs, Lesezeichen, Verlauf, privates Fenster.",
          "<b>Hilfesysteme</b> nutzen: F1, Hilfe-Menü, Suchbegriffe wie „Word Seitenzahlen einfügen“." ] }
      ],
      merken: [
        "EVA: Eingabe – Verarbeitung (CPU, RAM) – Ausgabe; plus Speicher.",
        "Hardware = anfassbar; Software = Betriebssystem + Anwendungen.",
        "Dateiendungen kennen; Pfad = Ort; Namen nach System (Fach_Thema_Datum).",
        "8 Bit = 1 Byte; KB → MB → GB → TB (je × 1000). Backup nach der 3-2-1-Regel."
      ],
      aufgaben: [
        { typ: "mc", frage: "Wofür steht EVA?", optionen: ["Eingabe – Verarbeitung – Ausgabe", "Energie – Verbrauch – Ausfall", "Einschalten – Verbinden – Anmelden", "Editor – Viewer – App"], richtig: 0, erklaerung: "Grundprinzip jedes Computers." },
        { typ: "mc", frage: "Was ist ein Beispiel für Hardware?", optionen: ["Tastatur", "Browser", "Betriebssystem", "Textverarbeitung"], richtig: 0, erklaerung: "Hardware kann man anfassen." },
        { typ: "mc", frage: "Welches Programm verwaltet Hardware und andere Programme?", optionen: ["das Betriebssystem", "der Browser", "die Textverarbeitung", "das Antivirenprogramm"], richtig: 0, erklaerung: "Windows, macOS, Linux, Android, iOS." },
        { typ: "input", frage: "Wie viele Bit sind ein Byte?", antworten: ["8", "acht"], numerisch: true, erklaerung: "8 Bit = 1 Byte." },
        { typ: "mc", frage: "Welche Dateiendung gehört zu einem Bild?", optionen: [".jpg", ".docx", ".mp3", ".xlsx"], richtig: 0, erklaerung: ".jpg/.png = Bild, .mp3 = Audio, .docx = Text." },
        { typ: "input", frage: "Wie viele MB sind ungefähr 2 GB?", antworten: ["2000"], numerisch: true, erklaerung: "1 GB ≈ 1000 MB." },
        { typ: "mc", frage: "Womit beginnt eine Formel in der Tabellenkalkulation?", optionen: ["mit =", "mit +", "mit #", "mit einem Leerzeichen"], richtig: 0, erklaerung: "z. B. =SUMME(A1:A5)." },
        { typ: "mc", frage: "Was besagt die 3-2-1-Regel für Backups?", optionen: ["3 Kopien, auf 2 verschiedenen Medien, 1 davon außer Haus", "3-mal täglich speichern", "3 Passwörter, 2 Geräte, 1 Nutzer", "3 Ordner, 2 Dateien, 1 Cloud"], richtig: 0, erklaerung: "So überlebt ein Backup auch Diebstahl oder Brand." }
      ]
    },
    {
      id: "internet",
      titel: "Vernetzte Systeme: Internet, Suche, Datenschutz",
      minuten: 12,
      themen: ["Client/Server", "Suchmaschinen", "Passwörter", "Urheberrecht"],
      lesen: [
        { h: "Wie das Internet funktioniert", p: [
          "Das <b>Internet</b> ist ein Netz aus Netzen. Dein Gerät (<b>Client</b>) fragt einen <b>Server</b> nach einer Seite; Daten reisen in <b>Paketen</b> über Router. Jedes Gerät hat eine <b>IP-Adresse</b>; das <b>DNS</b> übersetzt Namen (www.schule.de) in IP-Adressen. <b>URL</b>: https://www.beispiel.de/seite – https bedeutet verschlüsselt (Schloss-Symbol).",
          "<b>WWW</b> (Webseiten) ist nur ein Dienst des Internets – andere: E-Mail, Messenger, Streaming, Online-Spiele. <b>WLAN</b> verbindet drahtlos mit dem Router, <b>LAN</b> per Kabel." ] },
        { h: "Suchen und prüfen", p: [
          "<b>Suchmaschinen</b> durchsuchen einen Index, nicht das ganze Netz; die Reihenfolge wird von Algorithmen (und Werbung) bestimmt. Besser suchen: mehrere Begriffe, Anführungszeichen für genaue Phrasen, Minus für Ausschluss, site: für eine bestimmte Seite.",
          "<b>Glaubwürdigkeit prüfen</b>: Wer ist der Autor (Impressum)? Wann veröffentlicht? Quellen angegeben? Werbung oder Information? Stimmen andere Quellen überein? Wikipedia ist ein Einstieg – Belege prüfen. <b>Plagiat</b> = fremde Texte als eigene ausgeben; Quellen immer angeben." ],
          beispiel: "Phishing erkennen: fremde Absenderadresse, Druck („sofort handeln!“), Links auf seltsame Domains, Rechtschreibfehler, Bitte um Passwort – nie klicken, Erwachsene fragen." },
        { h: "Sicher und fair im Netz", p: [
          "<b>Passwörter</b>: lang (mindestens 12 Zeichen), Passphrase („Anton!spielt8Tore“), für jeden Dienst ein anderes, nie weitergeben, Zwei-Faktor-Authentifizierung. <b>Datenschutz</b>: nur nötige Daten angeben, Standort aus, Profile privat, DSGVO gibt Rechte. <b>Schadprogramme</b>: Viren, Trojaner, Ransomware – Updates, nichts Unbekanntes installieren.",
          "<b>Netiquette</b>: höflich, keine Großbuchstaben-Schreierei, nichts posten, was man nicht auch sagen würde; <b>Cybermobbing</b> ist strafbar. <b>Urheberrecht</b>: Bilder, Musik, Texte gehören ihren Urhebern – nutzen nur mit Erlaubnis oder freier Lizenz (Creative Commons, CC); <b>Recht am eigenen Bild</b>: Fotos anderer nur mit Zustimmung. Illegale Kopien und Streams sind verboten." ] }
      ],
      merken: [
        "Client fragt Server; Datenpakete; IP-Adresse; DNS übersetzt Namen; https = verschlüsselt.",
        "Suchen: genaue Phrasen in Anführungszeichen; Quellen prüfen (Autor, Datum, Belege, Absicht).",
        "Passwort: lang, einzigartig, geheim; Zwei-Faktor; Phishing erkennen.",
        "Urheberrecht und Recht am eigenen Bild beachten; Netiquette; Quellen angeben (kein Plagiat)."
      ],
      aufgaben: [
        { typ: "mc", frage: "Was macht das DNS?", optionen: ["Es übersetzt Domainnamen in IP-Adressen", "Es verschlüsselt E-Mails", "Es speichert Passwörter", "Es verbindet WLAN mit dem Router"], richtig: 0, erklaerung: "Telefonbuch des Internets." },
        { typ: "mc", frage: "Woran erkennst du eine verschlüsselte Verbindung?", optionen: ["https und Schloss-Symbol", "www am Anfang", ".de am Ende", "einer bunten Seite"], richtig: 0, erklaerung: "http ohne s ist unverschlüsselt." },
        { typ: "mc", frage: "Welches Passwort ist am sichersten?", optionen: ["Potsdam!Fussball8Tore2026", "123456", "anton", "passwort1"], richtig: 0, erklaerung: "Lang, gemischt, als Passphrase merkbar." },
        { typ: "mc", frage: "Eine E-Mail fordert dich auf, sofort dein Passwort auf einer verlinkten Seite einzugeben. Was ist das wahrscheinlich?", optionen: ["Phishing – nicht klicken", "eine normale Sicherheitsabfrage", "ein Gewinnspiel", "ein Update"], richtig: 0, erklaerung: "Seriöse Anbieter fragen nie per Mail nach Passwörtern." },
        { typ: "mc", frage: "Wie suchst du nach dem genauen Satz „Tag der offenen Tür“?", optionen: ["in Anführungszeichen setzen", "alle Wörter großschreiben", "ein Minus davorsetzen", "site: davor schreiben"], richtig: 0, erklaerung: "Anführungszeichen = exakte Phrase." },
        { typ: "mc", frage: "Darfst du ein Bild aus dem Internet einfach in dein Referat kopieren?", optionen: ["Nur mit Erlaubnis oder freier Lizenz (z. B. CC) und mit Quellenangabe", "Ja, alles im Netz ist frei", "Ja, wenn es klein ist", "Nein, niemals, auch nicht mit Lizenz"], richtig: 0, erklaerung: "Urheberrecht gilt auch online." },
        { typ: "mc", frage: "Was ist ein Plagiat?", optionen: ["fremde Texte oder Ideen als eigene ausgeben", "ein Rechtschreibfehler", "ein Computervirus", "eine Suchmaschine"], richtig: 0, erklaerung: "Quellen angeben, Zitate kennzeichnen." },
        { typ: "mc", frage: "Was prüfst du, um die Glaubwürdigkeit einer Webseite einzuschätzen?", optionen: ["Autor/Impressum, Datum, Belege, Vergleich mit anderen Quellen", "Anzahl der Bilder", "Farbe des Logos", "Länge der URL"], richtig: 0, erklaerung: "Quellenkritik." }
      ]
    },
    {
      id: "daten-codierung",
      titel: "Information und Daten: Binärzahlen und Codes",
      minuten: 12,
      themen: ["Dualsystem", "ASCII", "Sender-Empfänger"],
      lesen: [
        { h: "Daten, Information, Nachricht", p: [
          "<b>Daten</b> sind Zeichen (0 und 1, Buchstaben, Zahlen). <b>Information</b> entsteht, wenn Daten eine Bedeutung bekommen (23 → 23 °C). Eine <b>Nachricht</b> wird vom <b>Sender</b> codiert, über einen Kanal übertragen und vom <b>Empfänger</b> decodiert (Sender-Empfänger-Modell). Störungen auf dem Kanal verfälschen Daten – deshalb Prüfsummen.",
          "Computer kennen nur zwei Zustände: Strom an/aus = <b>1/0</b> = ein <b>Bit</b>. Alles – Text, Bild, Ton – wird in Bits codiert." ] },
        { h: "Das Dualsystem", p: [
          "Im <b>Dezimalsystem</b> haben die Stellen die Werte 1, 10, 100, 1000. Im <b>Dualsystem</b> (Binärsystem) 1, 2, 4, 8, 16, 32, 64, 128. Die Dualzahl 1011 bedeutet: 1·8 + 0·4 + 1·2 + 1·1 = <b>11</b>.",
          "Dezimal → dual: Zahl immer durch 2 teilen, Reste von unten nach oben lesen. 13 : 2 = 6 R1, 6 : 2 = 3 R0, 3 : 2 = 1 R1, 1 : 2 = 0 R1 → <b>1101</b>. Mit 8 Bit (1 Byte) kann man 256 Werte darstellen (0–255).",
          "Addieren: 0+0=0, 0+1=1, 1+1=10 (Übertrag!). 101 + 11 = 1000 (5 + 3 = 8)." ],
          beispiel: "Zweierpotenzen auswendig: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024." },
        { h: "Codes", p: [
          "<b>ASCII</b>: 128 Zeichen mit 7 Bit, z. B. A = 65, a = 97, Leerzeichen = 32. <b>Unicode</b> (UTF-8) deckt alle Schriften und Emojis ab. Bilder: Raster aus <b>Pixeln</b>, jeder Pixel mit Farbwert (RGB, je 0–255); Auflösung z. B. 1920 × 1080.",
          "<b>Strichcode</b> (EAN) und <b>QR-Code</b> codieren Zahlen und Texte für Scanner. <b>Verschlüsselung</b>: Caesar-Code verschiebt Buchstaben (A → D bei Verschiebung 3), <b>Komprimierung</b> macht Dateien kleiner (ZIP, JPG). <b>Datensicherheit</b>: Prüfziffern (z. B. letzte Ziffer beim EAN) erkennen Tippfehler." ] }
      ],
      merken: [
        "Daten + Bedeutung = Information; Sender codiert, Empfänger decodiert.",
        "Dualsystem: Stellenwerte 1, 2, 4, 8, 16, 32, 64, 128. 1011 = 11.",
        "8 Bit = 1 Byte = 256 Werte (0–255). Dezimal → dual: durch 2 teilen, Reste rückwärts.",
        "ASCII (A = 65), Unicode für alles, Pixel mit RGB-Werten, Caesar-Verschlüsselung."
      ],
      aufgaben: [
        { typ: "input", frage: "Welche Dezimalzahl ist die Dualzahl 1010?", antworten: ["10"], numerisch: true, erklaerung: "8 + 2 = 10." },
        { typ: "input", frage: "Schreibe die Zahl 6 im Dualsystem.", antworten: ["110", "0110"], erklaerung: "4 + 2 = 110." },
        { typ: "input", frage: "Welche Dezimalzahl ist 11111111 (8 Einsen)?", antworten: ["255"], numerisch: true, erklaerung: "128+64+32+16+8+4+2+1 = 255 – der größte Wert eines Bytes." },
        { typ: "mc", frage: "Wie viele verschiedene Werte kann ein Byte darstellen?", optionen: ["256", "8", "100", "1024"], richtig: 0, erklaerung: "2⁸ = 256 (0 bis 255)." },
        { typ: "mc", frage: "Was ist der Unterschied zwischen Daten und Information?", optionen: ["Information = Daten mit Bedeutung", "Daten sind immer Zahlen, Information immer Text", "Es gibt keinen Unterschied", "Information ist größer als Daten"], richtig: 0, erklaerung: "23 ist ein Datum; „23 °C draußen“ ist Information." },
        { typ: "input", frage: "Caesar-Code mit Verschiebung 3: Aus „A“ wird „D“. Was wird aus „H“?", antworten: ["K", "k"], erklaerung: "H → I → J → K." },
        { typ: "mc", frage: "Wie groß ist in Bit das Ergebnis von 101 + 11 (dual)?", optionen: ["1000", "112", "111", "1010"], richtig: 0, erklaerung: "5 + 3 = 8 = 1000." },
        { typ: "mc", frage: "Wozu dient eine Prüfziffer, z. B. beim Strichcode?", optionen: ["Fehler beim Einlesen oder Tippen erkennen", "den Preis speichern", "das Produkt verschlüsseln", "das Herstellungsdatum anzeigen"], richtig: 0, erklaerung: "Datensicherheit bei der Übertragung." }
      ]
    },
    {
      id: "algorithmen",
      titel: "Algorithmen und erste Programme",
      minuten: 12,
      themen: ["Sequenz", "Schleife", "Verzweigung", "Variable"],
      lesen: [
        { h: "Was ein Algorithmus ist", p: [
          "Ein <b>Algorithmus</b> ist eine eindeutige, endliche Folge von Anweisungen, die ein Problem löst – wie ein Rezept oder eine Bastelanleitung. Eigenschaften: <b>eindeutig</b> (jeder Schritt klar), <b>ausführbar</b>, <b>endlich</b> (hört auf), <b>allgemein</b> (für alle Eingaben des Problems).",
          "Darstellung: als Text (Pseudocode), <b>Flussdiagramm</b> (Rechteck = Anweisung, Raute = Entscheidung, Pfeile = Ablauf) oder Struktogramm." ] },
        { h: "Die drei Grundstrukturen", p: [
          "<b>Sequenz</b>: Schritte nacheinander. <b>Verzweigung</b> (wenn – dann – sonst): „Wenn es regnet, nimm den Schirm, sonst die Sonnenbrille.“ <b>Schleife</b> (Wiederholung): „Wiederhole 10-mal: Schritt vorwärts“ (Zählschleife) oder „Solange der Ball nicht im Tor ist: schieße“ (bedingte Schleife).",
          "<b>Variablen</b> sind benannte Speicherplätze: punkte = 0; punkte = punkte + 1. <b>Prozeduren/Funktionen</b> fassen Schritte unter einem Namen zusammen (z. B. „zeichneQuadrat“) und können wiederverwendet werden." ],
          beispiel: "Scratch/Blockprogrammierung: „wenn grüne Flagge angeklickt – wiederhole 4-mal – gehe 100 Schritte – drehe dich um 90 Grad“ zeichnet ein Quadrat. Dieselbe Idee in Python: for i in range(4): forward(100); left(90)" },
        { h: "Fehler finden und Objekte", p: [
          "Programmieren heißt auch Testen: Ein <b>Bug</b> ist ein Fehler; <b>Debugging</b> = Fehler suchen, indem man das Programm Schritt für Schritt nachvollzieht (Trace-Tabelle: Werte der Variablen notieren).",
          "<b>Objektorientierung</b>: Ein Objekt (z. B. die Figur in Scratch) hat <b>Eigenschaften</b> (Position, Farbe, Größe) und <b>Methoden</b> (gehe, drehe, sage). Mini-Welten wie Robot Karol oder Kara zeigen das anschaulich: Karol hat die Eigenschaft Blickrichtung und die Methoden Schritt, LinksDrehen, Hinlegen." ] }
      ],
      merken: [
        "Algorithmus = eindeutige, endliche Anweisungsfolge; Darstellung als Flussdiagramm oder Pseudocode.",
        "Grundstrukturen: Sequenz, Verzweigung (wenn–dann–sonst), Schleife (wiederhole).",
        "Variable = benannter Speicher; Funktion = wiederverwendbarer Baustein.",
        "Objekt = Eigenschaften + Methoden. Debugging = Fehler Schritt für Schritt suchen."
      ],
      aufgaben: [
        { typ: "mc", frage: "Welche Eigenschaft muss ein Algorithmus haben?", optionen: ["eindeutig und endlich", "lang und kompliziert", "nur für Computer verständlich", "immer in Englisch"], richtig: 0, erklaerung: "Auch ein Rezept ist ein Algorithmus." },
        { typ: "mc", frage: "„Wiederhole 5-mal: hüpfe“ – welche Grundstruktur?", optionen: ["Schleife", "Verzweigung", "Sequenz", "Variable"], richtig: 0, erklaerung: "Zählschleife." },
        { typ: "mc", frage: "„Wenn Punkte > 10, dann sage Gewonnen, sonst sage Weiter“ – welche Struktur?", optionen: ["Verzweigung", "Schleife", "Sequenz", "Prozedur"], richtig: 0, erklaerung: "wenn – dann – sonst." },
        { typ: "input", frage: "punkte = 3; punkte = punkte + 4; punkte = punkte * 2. Welchen Wert hat punkte am Ende?", antworten: ["14"], numerisch: true, erklaerung: "(3 + 4) · 2 = 14." },
        { typ: "mc", frage: "Welches Symbol steht im Flussdiagramm für eine Entscheidung?", optionen: ["Raute", "Rechteck", "Kreis", "Pfeil"], richtig: 0, erklaerung: "Raute = Ja/Nein-Frage." },
        { typ: "mc", frage: "Wie oft dreht sich die Figur bei „wiederhole 4-mal: gehe 100, drehe 90°“ insgesamt?", optionen: ["4-mal um 90° = 360°", "1-mal", "90-mal", "100-mal"], richtig: 0, erklaerung: "Ein Quadrat, am Ende zeigt sie wieder in die Startrichtung." },
        { typ: "mc", frage: "Was ist Debugging?", optionen: ["Fehler im Programm suchen und beheben", "ein Programm löschen", "ein Programm schneller machen", "Käfer im Computer entfernen"], richtig: 0, erklaerung: "„Bug“ = Fehler." },
        { typ: "mc", frage: "Was sind Methoden eines Objekts?", optionen: ["Dinge, die das Objekt tun kann (z. B. gehe, drehe)", "seine Farbe und Größe", "sein Name", "sein Speicherplatz"], richtig: 0, erklaerung: "Eigenschaften = Zustand, Methoden = Verhalten." }
      ]
    }
  ]
};
