/**
 * character-image-sources.js
 *
 * Zwischenschicht für Charakterbilder im One Piece Random Team Builder.
 *
 * Strategie:
 * - Primärquelle: One Piece Wiki auf Fandom
 * - pageUrl zeigt auf die Charakterseite
 * - imageSelection='first-infobox-image' bedeutet: Nimm auf der Seite das erste Infobox-Bild
 * - Diese Datei speichert bewusst zunächst Quellseiten statt finaler Hotlink-Bild-URLs
 *
 * Hintergrund:
 * - Die Fandom-Charakterseiten stellen pro Figur direkt mehrere Infobox-Bilder bereit.
 * - Die Bilder liegen dort als static.wikia.nocookie.net Assets vor.
 * - Für private Nutzung ist das als Recherche-Zwischenschicht meist der pragmatischste Weg.
 *
 * Manuell verifizierte Sonderfälle:
 * - Coby -> Koby (Fandom uses the canonical English wiki title 'Koby'.)
 * - Bon Clay -> Bentham (Fandom uses the real name page 'Bentham'.)
 */

window.CHARACTER_IMAGE_SOURCES = {
  "onepiece-0001": {
    name: "Monkey D. Luffy",
    wikiTitle: "Monkey D. Luffy",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Monkey_D._Luffy",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0002": {
    name: "Roronoa Zoro",
    wikiTitle: "Roronoa Zoro",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Roronoa_Zoro",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0003": {
    name: "Nami",
    wikiTitle: "Nami",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Nami",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0004": {
    name: "Usopp",
    wikiTitle: "Usopp",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Usopp",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0005": {
    name: "Sanji",
    wikiTitle: "Sanji",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Sanji",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0006": {
    name: "Tony Tony Chopper",
    wikiTitle: "Tony Tony Chopper",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Tony_Tony_Chopper",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0007": {
    name: "Nico Robin",
    wikiTitle: "Nico Robin",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Nico_Robin",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0008": {
    name: "Franky",
    wikiTitle: "Franky",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Franky",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0009": {
    name: "Brook",
    wikiTitle: "Brook",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Brook",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0010": {
    name: "Buggy",
    wikiTitle: "Buggy",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Buggy",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0011": {
    name: "Cabaji",
    wikiTitle: "Cabaji",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Cabaji",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0012": {
    name: "Mohji",
    wikiTitle: "Mohji",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Mohji",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0013": {
    name: "Kuro",
    wikiTitle: "Kuro",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Kuro",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0014": {
    name: "Kaya",
    wikiTitle: "Kaya",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Kaya",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0015": {
    name: "Don Krieg",
    wikiTitle: "Don Krieg",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Don_Krieg",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0016": {
    name: "Gin",
    wikiTitle: "Gin",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Gin",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0017": {
    name: "Patty",
    wikiTitle: "Patty",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Patty",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0018": {
    name: "Carne",
    wikiTitle: "Carne",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Carne",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0019": {
    name: "Arlong",
    wikiTitle: "Arlong",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Arlong",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0020": {
    name: "Hatchan",
    wikiTitle: "Hatchan",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Hatchan",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0021": {
    name: "Smoker",
    wikiTitle: "Smoker",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Smoker",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0022": {
    name: "Tashigi",
    wikiTitle: "Tashigi",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Tashigi",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0023": {
    name: "Helmeppo",
    wikiTitle: "Helmeppo",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Helmeppo",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0024": {
    name: "Hina",
    wikiTitle: "Hina",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Hina",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0025": {
    name: "Fullbody",
    wikiTitle: "Fullbody",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Fullbody",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0026": {
    name: "Jango",
    wikiTitle: "Jango",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Jango",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0027": {
    name: "Alvida",
    wikiTitle: "Alvida",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Alvida",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0028": {
    name: "Mr. 9",
    wikiTitle: "Mr. 9",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Mr._9",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0029": {
    name: "Miss Monday",
    wikiTitle: "Miss Monday",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Miss_Monday",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0030": {
    name: "Igaram",
    wikiTitle: "Igaram",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Igaram",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0031": {
    name: "Wapol",
    wikiTitle: "Wapol",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Wapol",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0032": {
    name: "Dalton",
    wikiTitle: "Dalton",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Dalton",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0033": {
    name: "Pell",
    wikiTitle: "Pell",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Pell",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0034": {
    name: "Gedatsu",
    wikiTitle: "Gedatsu",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Gedatsu",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0035": {
    name: "Kumadori",
    wikiTitle: "Kumadori",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Kumadori",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0036": {
    name: "Fukuro",
    wikiTitle: "Fukuro",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Fukuro",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0037": {
    name: "Kalifa",
    wikiTitle: "Kalifa",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Kalifa",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0038": {
    name: "Nero",
    wikiTitle: "Nero",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Nero",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0039": {
    name: "Tom",
    wikiTitle: "Tom",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Tom",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0040": {
    name: "Kokoro",
    wikiTitle: "Kokoro",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Kokoro",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0041": {
    name: "Chimney",
    wikiTitle: "Chimney",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Chimney",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0042": {
    name: "Trafalgar D. Water Law",
    wikiTitle: "Trafalgar D. Water Law",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Trafalgar_D._Water_Law",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0043": {
    name: "Coby",
    wikiTitle: "Koby",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Koby",
    imageSelection: "first-infobox-image",
    confidence: "high",
    notes: "Fandom uses the canonical English wiki title 'Koby'."
  },
  "onepiece-0044": {
    name: "Shanks",
    wikiTitle: "Shanks",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Shanks",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0045": {
    name: "Dracule Mihawk",
    wikiTitle: "Dracule Mihawk",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Dracule_Mihawk",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0046": {
    name: "Crocodile",
    wikiTitle: "Crocodile",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Crocodile",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0047": {
    name: "Bon Clay",
    wikiTitle: "Bentham",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Bentham",
    imageSelection: "first-infobox-image",
    confidence: "high",
    notes: "Fandom uses the real name page 'Bentham'."
  },
  "onepiece-0048": {
    name: "Portgas D. Ace",
    wikiTitle: "Portgas D. Ace",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Portgas_D._Ace",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0049": {
    name: "Morgan",
    wikiTitle: "Morgan",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Morgan",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0050": {
    name: "Benn Beckman",
    wikiTitle: "Benn Beckman",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Benn_Beckman",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0051": {
    name: "Lucky Roux",
    wikiTitle: "Lucky Roux",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Lucky_Roux",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0052": {
    name: "Yasopp",
    wikiTitle: "Yasopp",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Yasopp",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0053": {
    name: "Makino",
    wikiTitle: "Makino",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Makino",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0054": {
    name: "Monkey D. Dragon",
    wikiTitle: "Monkey D. Dragon",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Monkey_D._Dragon",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0055": {
    name: "Gol D. Roger",
    wikiTitle: "Gol D. Roger",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Gol_D._Roger",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0056": {
    name: "Richie",
    wikiTitle: "Richie",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Richie",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0057": {
    name: "Sham",
    wikiTitle: "Sham",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Sham",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0058": {
    name: "Buchi",
    wikiTitle: "Buchi",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Buchi",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0059": {
    name: "Merry",
    wikiTitle: "Merry",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Merry",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0060": {
    name: "Zeff",
    wikiTitle: "Zeff",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Zeff",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0061": {
    name: "Pearl",
    wikiTitle: "Pearl",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Pearl",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0062": {
    name: "Kuroobi",
    wikiTitle: "Kuroobi",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Kuroobi",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0063": {
    name: "Chew",
    wikiTitle: "Chew",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Chew",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0064": {
    name: "Bellemere",
    wikiTitle: "Bellemere",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Bellemere",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0065": {
    name: "Nojiko",
    wikiTitle: "Nojiko",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Nojiko",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0066": {
    name: "Genzo",
    wikiTitle: "Genzo",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Genzo",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0067": {
    name: "Nezumi",
    wikiTitle: "Nezumi",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Nezumi",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0068": {
    name: "Crocus",
    wikiTitle: "Crocus",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Crocus",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0069": {
    name: "Laboon",
    wikiTitle: "Laboon",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Laboon",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0070": {
    name: "Nefertari Vivi",
    wikiTitle: "Nefertari Vivi",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Nefertari_Vivi",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0071": {
    name: "Karoo",
    wikiTitle: "Karoo",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Karoo",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0072": {
    name: "Mr. 3",
    wikiTitle: "Mr. 3",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Mr._3",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0073": {
    name: "Miss Goldenweek",
    wikiTitle: "Miss Goldenweek",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Miss_Goldenweek",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0074": {
    name: "Dorry",
    wikiTitle: "Dorry",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Dorry",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0075": {
    name: "Brogy",
    wikiTitle: "Brogy",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Brogy",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0076": {
    name: "Dr. Kureha",
    wikiTitle: "Dr. Kureha",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Dr._Kureha",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0077": {
    name: "Dr. Hiluluk",
    wikiTitle: "Dr. Hiluluk",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Dr._Hiluluk",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0078": {
    name: "Mr. 1",
    wikiTitle: "Mr. 1",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Mr._1",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0079": {
    name: "Miss Doublefinger",
    wikiTitle: "Miss Doublefinger",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Miss_Doublefinger",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0080": {
    name: "Mr. 4",
    wikiTitle: "Mr. 4",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Mr._4",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0081": {
    name: "Miss Merry Christmas",
    wikiTitle: "Miss Merry Christmas",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Miss_Merry_Christmas",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0082": {
    name: "Chaka",
    wikiTitle: "Chaka",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Chaka",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0083": {
    name: "Nefertari Cobra",
    wikiTitle: "Nefertari Cobra",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Nefertari_Cobra",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0084": {
    name: "Koza",
    wikiTitle: "Koza",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Koza",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0085": {
    name: "Toto",
    wikiTitle: "Toto",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Toto",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0086": {
    name: "Bellamy",
    wikiTitle: "Bellamy",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Bellamy",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0087": {
    name: "Sarquiss",
    wikiTitle: "Sarquiss",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Sarquiss",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0088": {
    name: "Marshall D. Teach",
    wikiTitle: "Marshall D. Teach",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Marshall_D._Teach",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0089": {
    name: "Jesus Burgess",
    wikiTitle: "Jesus Burgess",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Jesus_Burgess",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0090": {
    name: "Van Augur",
    wikiTitle: "Van Augur",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Van_Augur",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0091": {
    name: "Doc Q",
    wikiTitle: "Doc Q",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Doc_Q",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0092": {
    name: "Stronger",
    wikiTitle: "Stronger",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Stronger",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0093": {
    name: "Lafitte",
    wikiTitle: "Lafitte",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Lafitte",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0094": {
    name: "Sengoku",
    wikiTitle: "Sengoku",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Sengoku",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0095": {
    name: "Edward Newgate",
    wikiTitle: "Edward Newgate",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Edward_Newgate",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0096": {
    name: "Marco",
    wikiTitle: "Marco",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Marco",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0097": {
    name: "Mont Blanc Cricket",
    wikiTitle: "Mont Blanc Cricket",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Mont_Blanc_Cricket",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0098": {
    name: "Shoujou",
    wikiTitle: "Shoujou",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Shoujou",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0099": {
    name: "Enel",
    wikiTitle: "Enel",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Enel",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0100": {
    name: "Gan Fall",
    wikiTitle: "Gan Fall",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Gan_Fall",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0101": {
    name: "Pierre",
    wikiTitle: "Pierre",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Pierre",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0102": {
    name: "Wyper",
    wikiTitle: "Wyper",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Wyper",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0103": {
    name: "Conis",
    wikiTitle: "Conis",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Conis",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0104": {
    name: "Pagaya",
    wikiTitle: "Pagaya",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Pagaya",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0105": {
    name: "Aisa",
    wikiTitle: "Aisa",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Aisa",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0106": {
    name: "Satori",
    wikiTitle: "Satori",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Satori",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0107": {
    name: "Hotori",
    wikiTitle: "Hotori",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Hotori",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0108": {
    name: "Kotori",
    wikiTitle: "Kotori",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Kotori",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0109": {
    name: "Ohm",
    wikiTitle: "Ohm",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Ohm",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0110": {
    name: "Shura",
    wikiTitle: "Shura",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Shura",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0111": {
    name: "Nola",
    wikiTitle: "Nola",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Nola",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0112": {
    name: "Kalgara",
    wikiTitle: "Kalgara",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Kalgara",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0113": {
    name: "Mont Blanc Noland",
    wikiTitle: "Mont Blanc Noland",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Mont_Blanc_Noland",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0114": {
    name: "Foxy",
    wikiTitle: "Foxy",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Foxy",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0115": {
    name: "Porche",
    wikiTitle: "Porche",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Porche",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0116": {
    name: "Hamburg",
    wikiTitle: "Hamburg",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Hamburg",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0117": {
    name: "Tonjit",
    wikiTitle: "Tonjit",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Tonjit",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0118": {
    name: "Kuzan",
    wikiTitle: "Kuzan",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Kuzan",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0119": {
    name: "Iceburg",
    wikiTitle: "Iceburg",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Iceburg",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0120": {
    name: "Paulie",
    wikiTitle: "Paulie",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Paulie",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0121": {
    name: "Kaku",
    wikiTitle: "Kaku",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Kaku",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0122": {
    name: "Rob Lucci",
    wikiTitle: "Rob Lucci",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Rob_Lucci",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0123": {
    name: "Blueno",
    wikiTitle: "Blueno",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Blueno",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0124": {
    name: "Jabra",
    wikiTitle: "Jabra",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Jabra",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0125": {
    name: "Spandam",
    wikiTitle: "Spandam",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Spandam",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0126": {
    name: "Yokozuna",
    wikiTitle: "Yokozuna",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Yokozuna",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0127": {
    name: "Sakazuki",
    wikiTitle: "Sakazuki",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Sakazuki",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0128": {
    name: "Spandine",
    wikiTitle: "Spandine",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Spandine",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0129": {
    name: "Jaguar D. Saul",
    wikiTitle: "Jaguar D. Saul",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Jaguar_D._Saul",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0130": {
    name: "Monkey D. Garp",
    wikiTitle: "Monkey D. Garp",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Monkey_D._Garp",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0131": {
    name: "Basil Hawkins",
    wikiTitle: "Basil Hawkins",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Basil_Hawkins",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0132": {
    name: "Gecko Moria",
    wikiTitle: "Gecko Moria",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Gecko_Moria",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0133": {
    name: "Perona",
    wikiTitle: "Perona",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Perona",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0134": {
    name: "Absalom",
    wikiTitle: "Absalom",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Absalom",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0135": {
    name: "Dr. Hogback",
    wikiTitle: "Dr. Hogback",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Dr._Hogback",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0136": {
    name: "Oars",
    wikiTitle: "Oars",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Oars",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0137": {
    name: "Ryuma",
    wikiTitle: "Ryuma",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Ryuma",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0138": {
    name: "Lola",
    wikiTitle: "Lola",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Lola",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0139": {
    name: "Bartholomew Kuma",
    wikiTitle: "Bartholomew Kuma",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Bartholomew_Kuma",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0140": {
    name: "Emporio Ivankov",
    wikiTitle: "Emporio Ivankov",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Emporio_Ivankov",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0141": {
    name: "Jinbe",
    wikiTitle: "Jinbe",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Jinbe",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0142": {
    name: "Eustass Kid",
    wikiTitle: "Eustass Kid",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Eustass_Kid",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0143": {
    name: "Killer",
    wikiTitle: "Killer",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Killer",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0144": {
    name: "Capone Bege",
    wikiTitle: "Capone Bege",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Capone_Bege",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0145": {
    name: "Scratchmen Apoo",
    wikiTitle: "Scratchmen Apoo",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Scratchmen_Apoo",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0146": {
    name: "X Drake",
    wikiTitle: "X Drake",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/X_Drake",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0147": {
    name: "Jewelry Bonney",
    wikiTitle: "Jewelry Bonney",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Jewelry_Bonney",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0148": {
    name: "Urouge",
    wikiTitle: "Urouge",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Urouge",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0149": {
    name: "Silvers Rayleigh",
    wikiTitle: "Silvers Rayleigh",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Silvers_Rayleigh",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0150": {
    name: "Shakuyaku",
    wikiTitle: "Shakuyaku",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Shakuyaku",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0151": {
    name: "Duval",
    wikiTitle: "Duval",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Duval",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0152": {
    name: "Camie",
    wikiTitle: "Camie",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Camie",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0153": {
    name: "Pappag",
    wikiTitle: "Pappag",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Pappag",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0154": {
    name: "Sentomaru",
    wikiTitle: "Sentomaru",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Sentomaru",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0155": {
    name: "Borsalino",
    wikiTitle: "Borsalino",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Borsalino",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0156": {
    name: "Saint Charlos",
    wikiTitle: "Saint Charlos",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Saint_Charlos",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0157": {
    name: "Boa Hancock",
    wikiTitle: "Boa Hancock",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Boa_Hancock",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0158": {
    name: "Boa Sandersonia",
    wikiTitle: "Boa Sandersonia",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Boa_Sandersonia",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0159": {
    name: "Boa Marigold",
    wikiTitle: "Boa Marigold",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Boa_Marigold",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0160": {
    name: "Gloriosa",
    wikiTitle: "Gloriosa",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Gloriosa",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0161": {
    name: "Marguerite",
    wikiTitle: "Marguerite",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Marguerite",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0162": {
    name: "Magellan",
    wikiTitle: "Magellan",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Magellan",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0163": {
    name: "Hannyabal",
    wikiTitle: "Hannyabal",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Hannyabal",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0164": {
    name: "Shiryu",
    wikiTitle: "Shiryu",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Shiryu",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0165": {
    name: "Domino",
    wikiTitle: "Domino",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Domino",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0166": {
    name: "Sadi",
    wikiTitle: "Sadi",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Sadi",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0167": {
    name: "Inazuma",
    wikiTitle: "Inazuma",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Inazuma",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0168": {
    name: "Jozu",
    wikiTitle: "Jozu",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Jozu",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0169": {
    name: "Vista",
    wikiTitle: "Vista",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Vista",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0170": {
    name: "Donquixote Doflamingo",
    wikiTitle: "Donquixote Doflamingo",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Donquixote_Doflamingo",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0171": {
    name: "Curly Dadan",
    wikiTitle: "Curly Dadan",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Curly_Dadan",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0172": {
    name: "Sabo",
    wikiTitle: "Sabo",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Sabo",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0173": {
    name: "Caribou",
    wikiTitle: "Caribou",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Caribou",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0174": {
    name: "Coribou",
    wikiTitle: "Coribou",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Coribou",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0175": {
    name: "Demaro Black",
    wikiTitle: "Demaro Black",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Demaro_Black",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0176": {
    name: "Shirahoshi",
    wikiTitle: "Shirahoshi",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Shirahoshi",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0177": {
    name: "Neptune",
    wikiTitle: "Neptune",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Neptune",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0178": {
    name: "Fukaboshi",
    wikiTitle: "Fukaboshi",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Fukaboshi",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0179": {
    name: "Hody Jones",
    wikiTitle: "Hody Jones",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Hody_Jones",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0180": {
    name: "Vander Decken IX",
    wikiTitle: "Vander Decken IX",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Vander_Decken_IX",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0181": {
    name: "Fisher Tiger",
    wikiTitle: "Fisher Tiger",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Fisher_Tiger",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0182": {
    name: "Otohime",
    wikiTitle: "Otohime",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Otohime",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0183": {
    name: "Caesar Clown",
    wikiTitle: "Caesar Clown",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Caesar_Clown",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0184": {
    name: "Monet",
    wikiTitle: "Monet",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Monet",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0185": {
    name: "Vergo",
    wikiTitle: "Vergo",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Vergo",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0186": {
    name: "Kin'emon",
    wikiTitle: "Kin'emon",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Kin'emon",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0187": {
    name: "Kozuki Momonosuke",
    wikiTitle: "Kozuki Momonosuke",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Kozuki_Momonosuke",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0188": {
    name: "Issho",
    wikiTitle: "Issho",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Issho",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0189": {
    name: "Bartolomeo",
    wikiTitle: "Bartolomeo",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Bartolomeo",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0190": {
    name: "Cavendish",
    wikiTitle: "Cavendish",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Cavendish",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0191": {
    name: "Kyros",
    wikiTitle: "Kyros",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Kyros",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0192": {
    name: "Rebecca",
    wikiTitle: "Rebecca",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Rebecca",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0193": {
    name: "Trebol",
    wikiTitle: "Trebol",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Trebol",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0194": {
    name: "Pica",
    wikiTitle: "Pica",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Pica",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0195": {
    name: "Jack",
    wikiTitle: "Jack",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Jack",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0196": {
    name: "Charlotte Linlin",
    wikiTitle: "Charlotte Linlin",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Charlotte_Linlin",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0197": {
    name: "Charlotte Katakuri",
    wikiTitle: "Charlotte Katakuri",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Charlotte_Katakuri",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0198": {
    name: "Charlotte Pudding",
    wikiTitle: "Charlotte Pudding",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Charlotte_Pudding",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0199": {
    name: "Kaido",
    wikiTitle: "Kaido",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Kaido",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0200": {
    name: "Yamato",
    wikiTitle: "Yamato",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Yamato",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0201": {
    name: "King",
    wikiTitle: "King",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/King",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0202": {
    name: "Queen",
    wikiTitle: "Queen",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Queen",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
  "onepiece-0203": {
    name: "Dr. Vegapunk",
    wikiTitle: "Dr. Vegapunk",
    source: "onepiece-fandom",
    pageUrl: "https://onepiece.fandom.com/wiki/Dr._Vegapunk",
    imageSelection: "first-infobox-image",
    confidence: "medium",
    notes: ""
  },
};


window.CHARACTER_IMAGE_SOURCES = CHARACTER_IMAGE_SOURCES;
