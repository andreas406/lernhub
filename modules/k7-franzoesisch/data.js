window.K7_DATA = {
  id: "k7-franzoesisch",
  fach: "Französisch",
  icon: "FR",
  untertitel: "Klasse 7 Gymnasium · 2. Fremdsprache, 1. Lernjahr · Rahmenlehrplan Moderne Fremdsprachen",
  stand: "November 2026",
  quelle: { titel: "Rahmenlehrplan Teil C Moderne Fremdsprachen (2025), Themenfeld 3.1 Individuum und Lebenswelt", url: "https://bildungsserver.berlin-brandenburg.de/fileadmin/bbb/unterricht/rahmenlehrplaene/Rahmenlehrplanprojekt/amtliche_Fassung/Teil_C_Mod_Fremdsprachen_2025_01_28.pdf" },
  hinweis: "Die Lektionsvokabeln aus deinem Buch kommen über „Aktuell“ dazu. Bei Eingaben zählen Akzente mit – tippe sie am besten mit (é, è, ç).",
  bloecke: [
    {
      id: "salutations",
      titel: "Se présenter – sich vorstellen",
      minuten: 10,
      themen: ["Begrüßung", "je m'appelle", "Zahlen 1–20"],
      lesen: [
        { h: "Begrüßen und verabschieden", p: [
          "<b>Bonjour</b> (Guten Tag), <b>Salut</b> (Hallo/Tschüss, unter Freunden), <b>Bonsoir</b> (Guten Abend), <b>Au revoir</b> (Auf Wiedersehen), <b>À bientôt</b> (Bis bald), <b>À demain</b> (Bis morgen).",
          "<b>Ça va ?</b> – Wie geht's? <b>Ça va bien, merci.</b> – Gut, danke. <b>Et toi ?</b> – Und dir? Höflich: <b>Comment allez-vous ?</b>" ] },
        { h: "Sich vorstellen", p: [
          "<b>Je m'appelle</b> Anton. (Ich heiße …) – <b>Tu t'appelles comment ?</b> (Wie heißt du?) – <b>J'ai 12 ans.</b> (Ich bin 12 – wörtlich: ich HABE 12 Jahre!) – <b>J'habite à Potsdam.</b> (Ich wohne in …) – <b>Je suis allemand / allemande.</b>",
          "<b>Voici</b> mon frère. (Das ist mein Bruder.) <b>C'est</b> Richard. <b>Il s'appelle</b> … / <b>Elle s'appelle</b> …" ],
          beispiel: "Salut ! Je m'appelle Richard. J'ai 12 ans et j'habite à Potsdam. J'aime le foot." },
        { h: "Die Zahlen bis 20", p: [
          "0 zéro, 1 un, 2 deux, 3 trois, 4 quatre, 5 cinq, 6 six, 7 sept, 8 huit, 9 neuf, 10 dix, 11 onze, 12 douze, 13 treize, 14 quatorze, 15 quinze, 16 seize, 17 dix-sept, 18 dix-huit, 19 dix-neuf, 20 vingt.",
          "Weiter: 21 vingt et un, 22 vingt-deux, 30 trente, 40 quarante, 50 cinquante, 60 soixante, 70 soixante-dix (60+10), 80 quatre-vingts (4×20), 90 quatre-vingt-dix, 100 cent." ] }
      ],
      merken: [
        "Bonjour / Salut / Au revoir / À bientôt.",
        "Je m'appelle … · J'ai 12 ans (avoir!) · J'habite à …",
        "Ça va ? – Ça va bien, merci. Et toi ?",
        "11 onze, 12 douze, 13 treize, 14 quatorze, 15 quinze, 16 seize, 20 vingt."
      ],
      aufgaben: [
        { typ: "input", frage: "Wie sagt man „Ich heiße Anton“? (Je … Anton)", antworten: ["Je m'appelle Anton", "je m'appelle anton", "Je m’appelle Anton"], erklaerung: "Je m'appelle Anton." },
        { typ: "mc", frage: "„Ich bin 12 Jahre alt.“ heißt auf Französisch:", optionen: ["J'ai douze ans.", "Je suis douze ans.", "J'ai douze années.", "Je suis douze."], richtig: 0, erklaerung: "Alter mit avoir: J'ai douze ans." },
        { typ: "input", frage: "Was heißt „quinze“?", antworten: ["15", "fünfzehn"], erklaerung: "quinze = 15." },
        { typ: "input", frage: "Schreibe die Zahl 12 auf Französisch.", antworten: ["douze"], erklaerung: "douze." },
        { typ: "mc", frage: "„Bis morgen!“ heißt:", optionen: ["À demain !", "À bientôt !", "Bonsoir !", "Au revoir !"], richtig: 0, erklaerung: "demain = morgen." },
        { typ: "mc", frage: "Wie antwortet man auf „Ça va ?“", optionen: ["Ça va bien, merci.", "Je m'appelle Léa.", "J'ai dix ans.", "Au revoir."], richtig: 0, erklaerung: "Ça va bien, merci. Et toi ?" },
        { typ: "mc", frage: "„J'habite à Potsdam.“ bedeutet:", optionen: ["Ich wohne in Potsdam.", "Ich komme aus Potsdam.", "Ich mag Potsdam.", "Ich fahre nach Potsdam."], richtig: 0, erklaerung: "habiter = wohnen." },
        { typ: "input", frage: "Schreibe die Zahl 17 auf Französisch.", antworten: ["dix-sept", "dix sept"], erklaerung: "17 = dix-sept (10 + 7)." }
      ]
    },
    {
      id: "articles-nouns",
      titel: "Artikel, Nomen und Plural",
      minuten: 10,
      themen: ["le/la/les", "un/une/des", "Plural -s"],
      lesen: [
        { h: "Bestimmter und unbestimmter Artikel", p: [
          "Jedes Nomen ist <b>männlich</b> (masculin) oder <b>weiblich</b> (féminin) – lerne den Artikel immer mit!",
          "Bestimmt: <b>le</b> garçon (der Junge), <b>la</b> fille (das Mädchen), <b>l'</b>ami / <b>l'</b>école (vor Vokal und stummem h), Plural <b>les</b> amis.",
          "Unbestimmt: <b>un</b> livre (ein Buch), <b>une</b> table (ein Tisch), Plural <b>des</b> livres (Bücher – im Deutschen oft ohne Artikel)." ],
          beispiel: "le père, la mère, les parents · un frère, une sœur, des enfants" },
        { h: "Plural", p: [
          "Meist <b>-s</b> anhängen (wird nicht gesprochen!): un chat → des chats. Nomen auf -s, -x, -z bleiben gleich: le bus → les bus. Nomen auf -eau/-eu: <b>-x</b>: un bateau → des bateaux, un jeu → des jeux. -al → -aux: un animal → des animaux." ] },
        { h: "Possessivbegleiter", p: [
          "<b>mon / ma / mes</b> (mein), <b>ton / ta / tes</b> (dein), <b>son / sa / ses</b> (sein/ihr). mon vor männlichen Nomen UND vor weiblichen Nomen mit Vokal: mon père, ma mère, mon amie, mes parents.",
          "<b>notre / nos</b> (unser), <b>votre / vos</b> (euer/Ihr), <b>leur / leurs</b> (ihr, mehrere Besitzer)." ],
          beispiel: "C'est ma sœur et son chien. Voici mes amis." }
      ],
      merken: [
        "le (m), la (f), l' (vor Vokal), les (Plural). un, une, des.",
        "Plural meist -s (stumm). -eau/-eu → -x, -al → -aux.",
        "mon/ma/mes, ton/ta/tes, son/sa/ses – mon auch vor weiblichem Nomen mit Vokal (mon amie).",
        "Artikel immer mit dem Nomen lernen!"
      ],
      aufgaben: [
        { typ: "mc", frage: "___ fille (das Mädchen)", optionen: ["la", "le", "les", "l'"], richtig: 0, erklaerung: "fille ist weiblich → la." },
        { typ: "mc", frage: "___ école (die Schule)", optionen: ["l'", "la", "le", "un"], richtig: 0, erklaerung: "Vor Vokal: l'école (école ist weiblich)." },
        { typ: "input", frage: "Plural von „un bateau“: des ___", antworten: ["bateaux"], erklaerung: "-eau → -eaux." },
        { typ: "input", frage: "Plural von „un animal“: des ___", antworten: ["animaux"], erklaerung: "-al → -aux." },
        { typ: "mc", frage: "„mein Freund“ (männlich) heißt:", optionen: ["mon ami", "ma ami", "mes ami", "ton ami"], richtig: 0, erklaerung: "ami ist männlich → mon." },
        { typ: "mc", frage: "„meine Freundin“ heißt:", optionen: ["mon amie", "ma amie", "mes amie", "ma ami"], richtig: 0, erklaerung: "amie beginnt mit Vokal → mon amie (nicht ma)." },
        { typ: "mc", frage: "„ihre Eltern“ (von einem Mädchen) heißt:", optionen: ["ses parents", "sa parents", "son parents", "leurs parents"], richtig: 0, erklaerung: "Plural → ses; son/sa/ses für EINEN Besitzer." },
        { typ: "mc", frage: "Welcher unbestimmte Artikel passt zu „table“ (weiblich)?", optionen: ["une", "un", "des", "la"], richtig: 0, erklaerung: "une table." }
      ]
    },
    {
      id: "etre-avoir-er",
      titel: "être, avoir und die Verben auf -er",
      minuten: 12,
      themen: ["être", "avoir", "-er-Verben", "Verneinung"],
      lesen: [
        { h: "être (sein) und avoir (haben)", p: [
          "<b>être</b>: je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont.",
          "<b>avoir</b>: j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont.",
          "Beide sind unregelmäßig und kommen ständig vor – auswendig lernen! „Je suis fatigué.“ „Tu as un chien ?“ „Nous avons faim.“ (Wir haben Hunger.)" ] },
        { h: "Verben auf -er", p: [
          "Die meisten Verben enden auf <b>-er</b> (parler, habiter, aimer, jouer, regarder, écouter). Stamm = Infinitiv ohne -er, dann die Endungen: <b>-e, -es, -e, -ons, -ez, -ent</b>.",
          "parler: je parl<b>e</b>, tu parl<b>es</b>, il parl<b>e</b>, nous parl<b>ons</b>, vous parl<b>ez</b>, ils parl<b>ent</b>. Die Endungen -e, -es, -ent sind stumm – man hört bei je/tu/il/ils dasselbe!",
          "Vor Vokal: je → j': j'aime, j'habite." ],
          beispiel: "Nous jouons au foot. Vous regardez la télé. Elles écoutent de la musique." },
        { h: "Verneinung", p: [
          "<b>ne … pas</b> umklammert das Verb: Je <u>ne</u> parle <u>pas</u> anglais. Vor Vokal: <b>n'</b>: Je <u>n'</u>aime <u>pas</u> le sport. Il <u>n'</u>est <u>pas</u> là.",
          "Nach Verneinung wird un/une/des zu <b>de</b>: J'ai un chien. → Je n'ai pas <u>de</u> chien." ] }
      ],
      merken: [
        "être: suis, es, est, sommes, êtes, sont. avoir: ai, as, a, avons, avez, ont.",
        "-er-Verben: -e, -es, -e, -ons, -ez, -ent (Stamm = Infinitiv ohne -er).",
        "Verneinung: ne … pas um das Verb; n' vor Vokal.",
        "Nach ne … pas: un/une/des → de (pas de chien)."
      ],
      aufgaben: [
        { typ: "input", frage: "Ergänze: Nous ___ (être) à Paris.", antworten: ["sommes"], erklaerung: "nous sommes." },
        { typ: "input", frage: "Ergänze: Ils ___ (avoir) un chat.", antworten: ["ont"], erklaerung: "ils ont." },
        { typ: "input", frage: "Ergänze: Vous ___ (parler) français ?", antworten: ["parlez"], erklaerung: "vous → -ez: parlez." },
        { typ: "input", frage: "Ergänze: Tu ___ (aimer) le foot ?", antworten: ["aimes"], erklaerung: "tu → -es: aimes." },
        { typ: "mc", frage: "Verneine: „J'ai un vélo.“", optionen: ["Je n'ai pas de vélo.", "Je n'ai pas un vélo.", "Je ne ai pas de vélo.", "Je ai pas un vélo."], richtig: 0, erklaerung: "n' vor Vokal, un → de nach Verneinung." },
        { typ: "mc", frage: "„Wir spielen Fußball.“ heißt:", optionen: ["Nous jouons au foot.", "Nous jouez au foot.", "Nous joue au foot.", "Nous jouent au foot."], richtig: 0, erklaerung: "nous → -ons." },
        { typ: "mc", frage: "Welche Form ist richtig? „Elle ___ allemande.“", optionen: ["est", "es", "a", "sont"], richtig: 0, erklaerung: "elle est." },
        { typ: "mc", frage: "„Ich wohne nicht in Berlin.“ heißt:", optionen: ["Je n'habite pas à Berlin.", "Je ne habite pas à Berlin.", "Je habite ne pas à Berlin.", "Je n'habite à Berlin pas."], richtig: 0, erklaerung: "n' vor dem Vokal von habite, pas direkt nach dem Verb." }
      ]
    },
    {
      id: "questions-aller-faire",
      titel: "Fragen stellen, aller und faire",
      minuten: 12,
      themen: ["est-ce que", "Fragewörter", "aller", "faire", "à/de + Artikel"],
      lesen: [
        { h: "Drei Arten zu fragen", p: [
          "1. <b>Intonation</b> (nur die Stimme hebt sich): Tu aimes le foot ? 2. <b>Est-ce que</b> vorn anhängen: Est-ce que tu aimes le foot ? 3. <b>Inversion</b> (eher schriftlich): Aimes-tu le foot ?",
          "<b>Fragewörter</b>: <b>qui</b> (wer), <b>que / qu'est-ce que</b> (was), <b>où</b> (wo), <b>quand</b> (wann), <b>comment</b> (wie), <b>pourquoi</b> (warum), <b>combien</b> (wie viel), <b>quel / quelle</b> (welcher/welche)." ],
          beispiel: "Où est-ce que tu habites ? – Qu'est-ce que tu fais ? – Pourquoi ? – Parce que … (weil)" },
        { h: "aller und faire", p: [
          "<b>aller</b> (gehen, fahren): je vais, tu vas, il va, nous allons, vous allez, ils vont. <b>faire</b> (machen): je fais, tu fais, il fait, nous faisons, vous faites, ils font.",
          "<b>Futur proche</b> (nahe Zukunft) = aller + Infinitiv: Je <u>vais manger</u>. (Ich werde gleich essen.) Nous <u>allons jouer</u> au foot." ] },
        { h: "à und de mit Artikel", p: [
          "<b>à + le = au</b>, <b>à + les = aux</b>: Je vais <u>au</u> cinéma. Il joue <u>aux</u> cartes. (à la / à l' bleiben.)",
          "<b>de + le = du</b>, <b>de + les = des</b>: le livre <u>du</u> prof, la maison <u>des</u> voisins. (de la / de l' bleiben.)",
          "Sport mit <b>jouer à</b> (jouer au foot, au tennis), Instrument mit <b>jouer de</b> (jouer de la guitare, du piano). <b>faire du / de la</b> + Sport: faire du vélo, faire de la natation." ] }
      ],
      merken: [
        "Fragen: Intonation, est-ce que, Inversion. Fragewörter: qui, que, où, quand, comment, pourquoi, combien.",
        "aller: vais, vas, va, allons, allez, vont. faire: fais, fais, fait, faisons, faites, font.",
        "Futur proche: aller + Infinitiv (je vais manger).",
        "à + le = au, à + les = aux; de + le = du, de + les = des."
      ],
      aufgaben: [
        { typ: "mc", frage: "„Wo wohnst du?“ heißt:", optionen: ["Où est-ce que tu habites ?", "Quand est-ce que tu habites ?", "Qui est-ce que tu habites ?", "Comment est-ce que tu habites ?"], richtig: 0, erklaerung: "où = wo." },
        { typ: "input", frage: "Ergänze: Nous ___ (aller) à l'école.", antworten: ["allons"], erklaerung: "nous allons." },
        { typ: "input", frage: "Ergänze: Vous ___ (faire) du sport ?", antworten: ["faites"], erklaerung: "vous faites (unregelmäßig!)." },
        { typ: "mc", frage: "„Ich werde gleich schlafen.“ (futur proche)", optionen: ["Je vais dormir.", "Je dors.", "Je fais dormir.", "Je suis dormir."], richtig: 0, erklaerung: "aller + Infinitiv." },
        { typ: "mc", frage: "Je vais ___ cinéma. (à + le)", optionen: ["au", "à le", "aux", "du"], richtig: 0, erklaerung: "à + le = au." },
        { typ: "mc", frage: "C'est le vélo ___ voisins. (de + les)", optionen: ["des", "de les", "du", "aux"], richtig: 0, erklaerung: "de + les = des." },
        { typ: "mc", frage: "„Er spielt Gitarre.“ heißt:", optionen: ["Il joue de la guitare.", "Il joue à la guitare.", "Il joue la guitare.", "Il fait à la guitare."], richtig: 0, erklaerung: "Instrument: jouer de. Sport: jouer à." },
        { typ: "mc", frage: "Welches Fragewort passt? „___ est-ce que tu pleures ?“ – „Parce que je suis triste.“", optionen: ["Pourquoi", "Où", "Quand", "Combien"], richtig: 0, erklaerung: "Antwort mit „parce que“ → Frage mit „pourquoi“." }
      ]
    },
    {
      id: "famille-ecole-heure",
      titel: "Familie, Schule und Uhrzeit",
      minuten: 10,
      themen: ["la famille", "l'école", "Quelle heure est-il ?"],
      lesen: [
        { h: "La famille", p: [
          "le père (Vater), la mère (Mutter), les parents, le frère (Bruder), la sœur (Schwester), le grand-père, la grand-mère, les grands-parents, l'oncle (Onkel), la tante (Tante), le cousin / la cousine, le fils (Sohn), la fille (Tochter/Mädchen), le chien (Hund), le chat (Katze).",
          "J'ai un frère. Il s'appelle Richard. Il a douze ans. Mon père s'appelle Andreas." ] },
        { h: "L'école", p: [
          "le collège (Schule Kl. 6–9 in Frankreich), la classe, le prof / la prof, l'élève (Schüler/in), le cours (Unterrichtsstunde), la salle de classe, le cahier (Heft), le livre, le stylo (Kuli), le crayon (Bleistift), la trousse (Mäppchen), le sac à dos (Rucksack), l'emploi du temps (Stundenplan).",
          "Fächer: les maths, le français, l'anglais, l'allemand, l'histoire, la géo, les sciences, le sport (l'EPS), la musique, le dessin (Kunst).",
          "Wochentage: lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche. „Le lundi, j'ai sport.“" ] },
        { h: "Quelle heure est-il ?", p: [
          "<b>Il est</b> huit heures. (Es ist 8 Uhr.) Il est huit heures <b>et quart</b> (8:15), huit heures <b>et demie</b> (8:30), neuf heures <b>moins le quart</b> (8:45), huit heures <b>dix</b> (8:10), neuf heures <b>moins cinq</b> (8:55).",
          "Il est <b>midi</b> (12 Uhr mittags), <b>minuit</b> (Mitternacht). Nachmittags: deux heures de l'après-midi. „À quelle heure … ?“ – „À sept heures.“" ],
          beispiel: "Le cours de maths commence à huit heures et quart. Je rentre à la maison à quatre heures et demie." }
      ],
      merken: [
        "le père, la mère, le frère, la sœur, les grands-parents.",
        "le cahier, le stylo, la trousse, l'emploi du temps; les maths, le français, l'anglais.",
        "Il est … heures. et quart (:15), et demie (:30), moins le quart (:45).",
        "midi = 12 Uhr mittags, minuit = Mitternacht."
      ],
      aufgaben: [
        { typ: "input", frage: "Was heißt „die Schwester“ auf Französisch? (mit Artikel)", antworten: ["la sœur", "la soeur"], erklaerung: "la sœur." },
        { typ: "input", frage: "Was heißt „le cahier“?", antworten: ["Heft", "das Heft"], erklaerung: "le cahier = das Heft." },
        { typ: "mc", frage: "„Es ist halb neun.“ heißt:", optionen: ["Il est huit heures et demie.", "Il est neuf heures et demie.", "Il est huit heures et quart.", "Il est neuf heures moins le quart."], richtig: 0, erklaerung: "halb neun = 8:30 = huit heures et demie." },
        { typ: "mc", frage: "„Il est neuf heures moins le quart.“ – Wie spät ist es?", optionen: ["8:45", "9:15", "9:45", "8:15"], richtig: 0, erklaerung: "neun Uhr minus Viertel = 8:45." },
        { typ: "input", frage: "Welcher Wochentag ist „mercredi“?", antworten: ["Mittwoch"], erklaerung: "mercredi = Mittwoch." },
        { typ: "mc", frage: "„Die Großeltern“ heißt:", optionen: ["les grands-parents", "les grand-pères", "les parents grands", "les oncles"], richtig: 0, erklaerung: "les grands-parents." },
        { typ: "mc", frage: "Welches Wort bedeutet „Stundenplan“?", optionen: ["l'emploi du temps", "la salle de classe", "le sac à dos", "la trousse"], richtig: 0, erklaerung: "l'emploi du temps." },
        { typ: "mc", frage: "„Il est midi.“ bedeutet:", optionen: ["Es ist 12 Uhr mittags.", "Es ist Mitternacht.", "Es ist Mittag-Essen-Zeit vorbei.", "Es ist 10 Uhr."], richtig: 0, erklaerung: "midi = Mittag (12 Uhr), minuit = Mitternacht." }
      ]
    },
    {
      id: "passe-compose-imperatif",
      titel: "Imperativ, Adjektive und passé composé",
      minuten: 12,
      themen: ["Imperativ", "Adjektiv-Angleichung", "passé composé"],
      lesen: [
        { h: "Der Imperativ", p: [
          "Befehle und Bitten: Die Formen von tu, nous, vous ohne Pronomen. Bei -er-Verben fällt bei tu das -s weg: <b>Regarde !</b> (Schau!), <b>Regardons !</b> (Lasst uns schauen!), <b>Regardez !</b> (Schaut!).",
          "Verneint: Ne parle pas ! Ne regardez pas la télé !" ] },
        { h: "Adjektive", p: [
          "Adjektive richten sich nach dem Nomen: weiblich <b>+e</b>, Plural <b>+s</b>: un ami allemand, une amie allemand<b>e</b>, des amis allemand<b>s</b>, des amies allemand<b>es</b>. Endet das Adjektiv schon auf -e, bleibt es im Femininum gleich (jeune, rouge).",
          "Die meisten Adjektive stehen <b>nach</b> dem Nomen (une voiture rouge). Einige kurze stehen davor: grand, petit, jeune, bon, beau, nouveau (un petit chien, une grande maison).",
          "Farben: rouge, bleu(e), vert(e), jaune, noir(e), blanc/blanche, gris(e)." ] },
        { h: "Passé composé (erste Schritte)", p: [
          "Die Vergangenheit: <b>avoir</b> (meistens) + <b>participe passé</b>. Bei -er-Verben endet das Partizip auf <b>-é</b>: parler → parl<b>é</b>. J'<u>ai parlé</u>, tu as parlé, il a parlé, nous avons parlé, vous avez parlé, ils ont parlé.",
          "Unregelmäßige Partizipien: faire → <b>fait</b>, avoir → <b>eu</b>, être → <b>été</b>, voir → <b>vu</b>, prendre → <b>pris</b>.",
          "Bewegungsverben wie aller, venir, arriver, partir, rester bilden das passé composé mit <b>être</b>, das Partizip wird angeglichen: Je <u>suis allé</u> (m) / Je <u>suis allée</u> (f) au cinéma. Elles sont arrivées." ],
          beispiel: "Hier, j'ai joué au foot et je suis rentré à six heures. Nous avons mangé une pizza." }
      ],
      merken: [
        "Imperativ: tu-/nous-/vous-Form ohne Pronomen; bei -er-Verben tu ohne -s (Regarde !).",
        "Adjektiv: weiblich +e, Plural +s; meist NACH dem Nomen (petit/grand/jeune/bon davor).",
        "Passé composé: avoir + Partizip (-er → -é). fait, eu, été, vu, pris.",
        "aller, venir, arriver, partir, rester: mit être, Partizip angleichen (elle est allée)."
      ],
      aufgaben: [
        { typ: "mc", frage: "„Hört zu!“ (vous) heißt:", optionen: ["Écoutez !", "Écoute !", "Écoutons !", "Vous écoutez !"], richtig: 0, erklaerung: "vous-Form ohne Pronomen." },
        { typ: "mc", frage: "„Schau!“ (tu) heißt:", optionen: ["Regarde !", "Regardes !", "Regardez !", "Tu regarde !"], richtig: 0, erklaerung: "Bei -er-Verben fällt das -s der tu-Form weg." },
        { typ: "mc", frage: "une voiture ___ (grün)", optionen: ["verte", "vert", "verts", "vertes"], richtig: 0, erklaerung: "voiture ist weiblich Singular → verte." },
        { typ: "mc", frage: "Wo steht das Adjektiv? „ein rotes Fahrrad“", optionen: ["un vélo rouge", "un rouge vélo", "un vélo rouges", "une rouge vélo"], richtig: 0, erklaerung: "Farben stehen nach dem Nomen." },
        { typ: "input", frage: "Ergänze: Hier, nous ___ (manger) une pizza. (passé composé, zwei Wörter)", antworten: ["avons mangé", "avons mange"], erklaerung: "nous avons mangé." },
        { typ: "input", frage: "Partizip (participe passé) von „faire“?", antworten: ["fait"], erklaerung: "faire → fait." },
        { typ: "mc", frage: "„Sie (Marie) ist ins Kino gegangen.“ heißt:", optionen: ["Elle est allée au cinéma.", "Elle a allé au cinéma.", "Elle est allé au cinéma.", "Elle a allée au cinéma."], richtig: 0, erklaerung: "aller mit être, Partizip weiblich: allée." },
        { typ: "mc", frage: "„un ___ chien“ (klein)", optionen: ["petit", "petite", "petits", "petites"], richtig: 0, erklaerung: "chien männlich Singular → petit (steht vor dem Nomen)." }
      ]
    }
  ]
};
