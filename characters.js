/**
 * characters.js
 *
 * Zentrale Charakterliste für den One Piece Random Team Builder.
 * Aktuell: 203 Charaktere (48 Original + 155 aus PDF-Import, bereinigt um Duplikate)
 *
 * ──────────────────────────────────────────────────────────────
 * SO ERGÄNZT MAN NEUE CHARAKTERE:
 *
 *   Einfach ein neues Objekt am Ende des Arrays einfügen:
 *
 *   {
 *     id: "onepiece-XXXX",   // eindeutige ID (fortlaufend)
 *     name: "Charaktername", // Pflichtfeld
 *     alias: "",             // Beiname / Spitzname (optional)
 *     faction: "",           // Crew / Fraktion (optional)
 *     arc: "",               // Erster Arc / Zugehörigkeit (optional)
 *     image: "",             // Bild-URL (optional, kann leer bleiben)
 *     rank: "",              // z.B. "legendary" (optional)
 *     power: 0,               // Basis-Power 0-1000 (optional)
 *     roleBonuses: {},        // Rollen-Boni, z.B. { healer: 80, support: 40 } (optional)
 *     tags: []               // Stichworte wie "pirat", "marine", etc. (optional)
 *   }
 *
 * Fehlende optionale Felder können einfach als "" oder [] angegeben werden.
 * Die App crasht nicht, wenn Felder fehlen.
 * ──────────────────────────────────────────────────────────────
 */

const CHARACTERS = [

  // ════════════════════════════════════════════════════════════
  // STROHHUTBANDE
  // ════════════════════════════════════════════════════════════
  {
    id: "onepiece-0001",
    name: "Monkey D. Luffy",
    alias: "Strohhut",
    faction: "Strohhutbande",
    arc: "Romance Dawn",
    image: "",
    power: 940,
    roleBonuses: { captain: 45 },
    tags: ["pirat", "kapitän", "hauptcharakter"],
    rank: "legendary"
  },
  {
    id: "onepiece-0002",
    name: "Roronoa Zoro",
    alias: "Piraten-Jäger Zoro",
    faction: "Strohhutbande",
    arc: "Romance Dawn",
    image: "",
    tags: ["pirat", "schwertkämpfer", "hauptcharakter"]
  },
  {
    id: "onepiece-0003",
    name: "Nami",
    alias: "Katzen-Diebin",
    faction: "Strohhutbande",
    arc: "Orange Town",
    image: "",
    tags: ["pirat", "navigatorin", "hauptcharakter"]
  },
  {
    id: "onepiece-0004",
    name: "Usopp",
    alias: "Sogeking",
    faction: "Strohhutbande",
    arc: "Syrup Village",
    image: "",
    tags: ["pirat", "schütze", "hauptcharakter"]
  },
  {
    id: "onepiece-0005",
    name: "Sanji",
    alias: "Schwarzbein",
    faction: "Strohhutbande",
    arc: "Baratie",
    image: "",
    tags: ["pirat", "koch", "hauptcharakter"]
  },
  {
    id: "onepiece-0006",
    name: "Tony Tony Chopper",
    alias: "Baumwolle",
    faction: "Strohhutbande",
    arc: "Drum Island",
    image: "",
    power: 620,
    roleBonuses: { healer: 120, support: 95 },
    tags: ["pirat", "arzt", "hauptcharakter"]
  },
  {
    id: "onepiece-0007",
    name: "Nico Robin",
    alias: "Dämonenkind",
    faction: "Strohhutbande",
    arc: "Arabasta",
    image: "",
    tags: ["pirat", "archäologin", "hauptcharakter"]
  },
  {
    id: "onepiece-0008",
    name: "Franky",
    alias: "Cyborg Franky",
    faction: "Strohhutbande",
    arc: "Water Seven",
    image: "",
    tags: ["pirat", "schreiner", "hauptcharakter"]
  },
  {
    id: "onepiece-0009",
    name: "Brook",
    alias: "Soul King",
    faction: "Strohhutbande",
    arc: "Thriller Bark",
    image: "",
    tags: ["pirat", "musiker", "hauptcharakter"]
  },

  // ════════════════════════════════════════════════════════════
  // BUGGY-PIRATEN
  // ════════════════════════════════════════════════════════════
  {
    id: "onepiece-0010",
    name: "Buggy",
    alias: "Buggy der Clown",
    faction: "Buggy-Piraten",
    arc: "Orange Town",
    image: "",
    roleBonuses: { traitor: 80, support: 20 },
    tags: ["pirat", "kapitän"]
  },
  {
    id: "onepiece-0011",
    name: "Cabaji",
    alias: "",
    faction: "Buggy-Piraten",
    arc: "Orange Town",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0012",
    name: "Mohji",
    alias: "",
    faction: "Buggy-Piraten",
    arc: "Orange Town",
    image: "",
    tags: ["pirat"]
  },

  // ════════════════════════════════════════════════════════════
  // SCHWARZKATZEN-PIRATEN (KURO)
  // ════════════════════════════════════════════════════════════
  {
    id: "onepiece-0013",
    name: "Kuro",
    alias: "Kuro der Listige",
    faction: "Schwarzkatzen-Piraten",
    arc: "Syrup Village",
    image: "",
    tags: ["pirat", "kapitän"]
  },
  {
    id: "onepiece-0014",
    name: "Kaya",
    alias: "",
    faction: "Syrup Village",
    arc: "Syrup Village",
    image: "",
    tags: ["zivilist"]
  },

  // ════════════════════════════════════════════════════════════
  // KRIEG-PIRATEN / BARATIE
  // ════════════════════════════════════════════════════════════
  {
    id: "onepiece-0015",
    name: "Don Krieg",
    alias: "",
    faction: "Krieg-Piraten",
    arc: "Baratie",
    image: "",
    tags: ["pirat", "kapitän"]
  },
  {
    id: "onepiece-0016",
    name: "Gin",
    alias: "Kampf-Gin",
    faction: "Krieg-Piraten",
    arc: "Baratie",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0017",
    name: "Patty",
    alias: "",
    faction: "Baratie",
    arc: "Baratie",
    image: "",
    tags: ["koch"]
  },
  {
    id: "onepiece-0018",
    name: "Carne",
    alias: "",
    faction: "Baratie",
    arc: "Baratie",
    image: "",
    tags: ["koch"]
  },

  // ════════════════════════════════════════════════════════════
  // ARLONG-PIRATEN
  // ════════════════════════════════════════════════════════════
  {
    id: "onepiece-0019",
    name: "Arlong",
    alias: "Sägen-Arlong",
    faction: "Arlong-Piraten",
    arc: "Arlong Park",
    image: "",
    tags: ["pirat", "kapitän", "fischmensch"]
  },
  {
    id: "onepiece-0020",
    name: "Hatchan",
    alias: "Hachi",
    faction: "Arlong-Piraten",
    arc: "Arlong Park",
    image: "",
    tags: ["pirat", "fischmensch"]
  },

  // ════════════════════════════════════════════════════════════
  // MARINE
  // ════════════════════════════════════════════════════════════
  {
    id: "onepiece-0021",
    name: "Smoker",
    alias: "Der Weisse Jäger",
    faction: "Marine",
    arc: "Loguetown",
    image: "",
    tags: ["marine"]
  },
  {
    id: "onepiece-0022",
    name: "Tashigi",
    alias: "",
    faction: "Marine",
    arc: "Loguetown",
    image: "",
    tags: ["marine"]
  },
  {
    id: "onepiece-0023",
    name: "Helmeppo",
    alias: "",
    faction: "Marine",
    arc: "Romance Dawn",
    image: "",
    tags: ["marine"]
  },
  {
    id: "onepiece-0024",
    name: "Hina",
    alias: "Schwarzkäfig Hina",
    faction: "Marine",
    arc: "Arabasta",
    image: "",
    tags: ["marine"]
  },
  {
    id: "onepiece-0025",
    name: "Fullbody",
    alias: "",
    faction: "Marine",
    arc: "Baratie",
    image: "",
    tags: ["marine"]
  },
  {
    id: "onepiece-0026",
    name: "Jango",
    alias: "",
    faction: "Marine",
    arc: "Syrup Village",
    image: "",
    tags: ["marine", "ehemals-pirat"]
  },

  // ════════════════════════════════════════════════════════════
  // ALVIDA
  // ════════════════════════════════════════════════════════════
  {
    id: "onepiece-0027",
    name: "Alvida",
    alias: "Eiserne Schläger-Alvida",
    faction: "Alvida-Piraten",
    arc: "Romance Dawn",
    image: "",
    tags: ["pirat", "kapitän"]
  },

  // ════════════════════════════════════════════════════════════
  // BAROQUE WORKS
  // ════════════════════════════════════════════════════════════
  {
    id: "onepiece-0028",
    name: "Mr. 9",
    alias: "",
    faction: "Baroque Works",
    arc: "Reverse Mountain",
    image: "",
    tags: ["baroque-works"]
  },
  {
    id: "onepiece-0029",
    name: "Miss Monday",
    alias: "",
    faction: "Baroque Works",
    arc: "Whisky Peak",
    image: "",
    tags: ["baroque-works"]
  },
  {
    id: "onepiece-0030",
    name: "Igaram",
    alias: "Mr. 8",
    faction: "Königreich Arabasta",
    arc: "Whisky Peak",
    image: "",
    tags: ["baroque-works", "geheimagent"]
  },

  // ════════════════════════════════════════════════════════════
  // DRUM ISLAND
  // ════════════════════════════════════════════════════════════
  {
    id: "onepiece-0031",
    name: "Wapol",
    alias: "",
    faction: "Drum-Königreich",
    arc: "Drum Island",
    image: "",
    tags: ["pirat", "ehemals-könig"]
  },
  {
    id: "onepiece-0032",
    name: "Dalton",
    alias: "",
    faction: "Drum Island",
    arc: "Drum Island",
    image: "",
    tags: ["zivilist", "soldat"]
  },

  // ════════════════════════════════════════════════════════════
  // ARABASTA
  // ════════════════════════════════════════════════════════════
  {
    id: "onepiece-0033",
    name: "Pell",
    alias: "Pell der Falke",
    faction: "Königreich Arabasta",
    arc: "Arabasta",
    image: "",
    tags: ["soldat"]
  },

  // ════════════════════════════════════════════════════════════
  // SKYPIEA
  // ════════════════════════════════════════════════════════════
  {
    id: "onepiece-0034",
    name: "Gedatsu",
    alias: "",
    faction: "Enels Priester",
    arc: "Skypiea",
    image: "",
    tags: ["skypiea"]
  },

  // ════════════════════════════════════════════════════════════
  // CP9 / WATER SEVEN
  // ════════════════════════════════════════════════════════════
  {
    id: "onepiece-0035",
    name: "Kumadori",
    alias: "",
    faction: "CP9",
    arc: "Enies Lobby",
    image: "",
    tags: ["cp9", "weltregierung"]
  },
  {
    id: "onepiece-0036",
    name: "Fukuro",
    alias: "",
    faction: "CP9",
    arc: "Enies Lobby",
    image: "",
    tags: ["cp9", "weltregierung"]
  },
  {
    id: "onepiece-0037",
    name: "Kalifa",
    alias: "",
    faction: "CP9",
    arc: "Enies Lobby",
    image: "",
    tags: ["cp9", "weltregierung"]
  },
  {
    id: "onepiece-0038",
    name: "Nero",
    alias: "",
    faction: "CP9",
    arc: "Enies Lobby",
    image: "",
    tags: ["cp9", "weltregierung"]
  },
  {
    id: "onepiece-0039",
    name: "Tom",
    alias: "",
    faction: "Water Seven",
    arc: "Water Seven",
    image: "",
    tags: ["zivilist", "schiffsbauer", "fischmensch"]
  },
  {
    id: "onepiece-0040",
    name: "Kokoro",
    alias: "",
    faction: "Water Seven",
    arc: "Water Seven",
    image: "",
    tags: ["zivilist"]
  },
  {
    id: "onepiece-0041",
    name: "Chimney",
    alias: "",
    faction: "Water Seven",
    arc: "Water Seven",
    image: "",
    tags: ["zivilist"]
  },

  // ════════════════════════════════════════════════════════════
  // HEART-PIRATEN
  // ════════════════════════════════════════════════════════════
  {
    id: "onepiece-0042",
    name: "Trafalgar D. Water Law",
    alias: "Herzchirurg",
    faction: "Heart-Piraten",
    arc: "Sabaody Archipel",
    image: "",
    power: 790,
    roleBonuses: { healer: 85, support: 45 },
    tags: ["pirat", "kapitän", "supernovae"]
  },

  // ════════════════════════════════════════════════════════════
  // WEITERE WICHTIGE CHARAKTERE (Originallist)
  // ════════════════════════════════════════════════════════════
  {
    id: "onepiece-0043",
    name: "Coby",
    alias: "",
    faction: "Marine",
    arc: "Romance Dawn",
    image: "",
    tags: ["marine", "ehemals-pirat"]
  },
  {
    id: "onepiece-0044",
    name: "Shanks",
    alias: "Rotarm Shanks",
    faction: "Rothaar-Piraten",
    arc: "Romance Dawn",
    image: "",
    tags: ["pirat", "kapitän", "yonkou"],
    rank: "legendary"
  },
  {
    id: "onepiece-0045",
    name: "Dracule Mihawk",
    alias: "Falkenauge",
    faction: "Sieben Samurai der Meere",
    arc: "Baratie",
    image: "",
    tags: ["pirat", "sieben-samurai"],
    rank: "legendary"
  },
  {
    id: "onepiece-0046",
    name: "Crocodile",
    alias: "Sir Crocodile / Mr. 0",
    faction: "Baroque Works",
    arc: "Arabasta",
    image: "",
    tags: ["pirat", "sieben-samurai", "baroque-works"]
  },
  {
    id: "onepiece-0047",
    name: "Bon Clay",
    alias: "Mr. 2 / Bentham",
    faction: "Baroque Works",
    arc: "Arabasta",
    image: "",
    tags: ["baroque-works"]
  },
  {
    id: "onepiece-0048",
    name: "Portgas D. Ace",
    alias: "Feuer-Faust Ace",
    faction: "Whitebeard-Piraten",
    arc: "Arabasta",
    image: "",
    tags: ["pirat", "kapitän"]
  },

  // ════════════════════════════════════════════════════════════
  // PDF-IMPORT: EAST BLUE SAGA – NEUE CHARAKTERE
  // ════════════════════════════════════════════════════════════
  {
    id: "onepiece-0049",
    name: "Morgan",
    alias: "Axe-Hand Morgan",
    faction: "Marine",
    arc: "Romance Dawn",
    image: "",
    tags: ["marine"]
  },
  {
    id: "onepiece-0050",
    name: "Benn Beckman",
    alias: "",
    faction: "Rothaar-Piraten",
    arc: "Romance Dawn",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0051",
    name: "Lucky Roux",
    alias: "",
    faction: "Rothaar-Piraten",
    arc: "Romance Dawn",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0052",
    name: "Yasopp",
    alias: "",
    faction: "Rothaar-Piraten",
    arc: "Romance Dawn",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0053",
    name: "Makino",
    alias: "",
    faction: "Foosha Village",
    arc: "Romance Dawn",
    image: "",
    tags: ["zivilist"]
  },
  {
    id: "onepiece-0054",
    name: "Monkey D. Dragon",
    alias: "",
    faction: "Revolutionsarmee",
    arc: "Loguetown",
    image: "",
    tags: ["revolution"],
    rank: "legendary"
  },
  {
    id: "onepiece-0055",
    name: "Gol D. Roger",
    alias: "Piratenkönig",
    faction: "Roger-Piraten",
    arc: "Romance Dawn",
    image: "",
    tags: ["pirat", "kapitän", "legende"],
    rank: "legendary"
  },
  {
    id: "onepiece-0056",
    name: "Richie",
    alias: "",
    faction: "Buggy-Piraten",
    arc: "Orange Town",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0057",
    name: "Sham",
    alias: "",
    faction: "Schwarzkatzen-Piraten",
    arc: "Syrup Village",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0058",
    name: "Buchi",
    alias: "",
    faction: "Schwarzkatzen-Piraten",
    arc: "Syrup Village",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0059",
    name: "Merry",
    alias: "",
    faction: "Syrup Village",
    arc: "Syrup Village",
    image: "",
    tags: ["zivilist"]
  },
  {
    id: "onepiece-0060",
    name: "Zeff",
    alias: "Rotfuß Zeff",
    faction: "Baratie",
    arc: "Baratie",
    image: "",
    tags: ["pirat", "koch"]
  },
  {
    id: "onepiece-0061",
    name: "Pearl",
    alias: "",
    faction: "Krieg-Piraten",
    arc: "Baratie",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0062",
    name: "Kuroobi",
    alias: "",
    faction: "Arlong-Piraten",
    arc: "Arlong Park",
    image: "",
    tags: ["pirat", "fischmensch"]
  },
  {
    id: "onepiece-0063",
    name: "Chew",
    alias: "",
    faction: "Arlong-Piraten",
    arc: "Arlong Park",
    image: "",
    tags: ["pirat", "fischmensch"]
  },
  {
    id: "onepiece-0064",
    name: "Bellemere",
    alias: "",
    faction: "Cocoyashi Village",
    arc: "Arlong Park",
    image: "",
    tags: ["zivilist", "ehemals-marine"]
  },
  {
    id: "onepiece-0065",
    name: "Nojiko",
    alias: "",
    faction: "Cocoyashi Village",
    arc: "Arlong Park",
    image: "",
    tags: ["zivilist"]
  },
  {
    id: "onepiece-0066",
    name: "Genzo",
    alias: "",
    faction: "Cocoyashi Village",
    arc: "Arlong Park",
    image: "",
    tags: ["zivilist"]
  },
  {
    id: "onepiece-0067",
    name: "Nezumi",
    alias: "",
    faction: "Marine",
    arc: "Arlong Park",
    image: "",
    tags: ["marine"]
  },

  // ════════════════════════════════════════════════════════════
  // PDF-IMPORT: ARABASTA SAGA
  // ════════════════════════════════════════════════════════════
  {
    id: "onepiece-0068",
    name: "Crocus",
    alias: "",
    faction: "Leuchtturm von Reverse Mountain",
    arc: "Reverse Mountain",
    image: "",
    tags: ["zivilist"]
  },
  {
    id: "onepiece-0069",
    name: "Laboon",
    alias: "",
    faction: "Rumbar-Piraten",
    arc: "Reverse Mountain",
    image: "",
    tags: ["tier"]
  },
  {
    id: "onepiece-0070",
    name: "Nefertari Vivi",
    alias: "Prinzessin Vivi / Miss Wednesday",
    faction: "Königreich Arabasta",
    arc: "Whisky Peak",
    image: "",
    tags: ["royalität", "baroque-works"]
  },
  {
    id: "onepiece-0071",
    name: "Karoo",
    alias: "",
    faction: "Königreich Arabasta",
    arc: "Whisky Peak",
    image: "",
    tags: ["tier"]
  },
  {
    id: "onepiece-0072",
    name: "Mr. 3",
    alias: "Galdino",
    faction: "Baroque Works",
    arc: "Little Garden",
    image: "",
    tags: ["baroque-works"]
  },
  {
    id: "onepiece-0073",
    name: "Miss Goldenweek",
    alias: "Marianne",
    faction: "Baroque Works",
    arc: "Little Garden",
    image: "",
    tags: ["baroque-works"]
  },
  {
    id: "onepiece-0074",
    name: "Dorry",
    alias: "",
    faction: "Riesenpiraten",
    arc: "Little Garden",
    image: "",
    tags: ["pirat", "riese"]
  },
  {
    id: "onepiece-0075",
    name: "Brogy",
    alias: "",
    faction: "Riesenpiraten",
    arc: "Little Garden",
    image: "",
    tags: ["pirat", "riese"]
  },
  {
    id: "onepiece-0076",
    name: "Dr. Kureha",
    alias: "",
    faction: "Drum Kingdom",
    arc: "Drum Island",
    image: "",
    tags: ["zivilist", "arzt"]
  },
  {
    id: "onepiece-0077",
    name: "Dr. Hiluluk",
    alias: "",
    faction: "Drum Kingdom",
    arc: "Drum Island",
    image: "",
    tags: ["zivilist", "arzt"]
  },
  {
    id: "onepiece-0078",
    name: "Mr. 1",
    alias: "Daz Bones",
    faction: "Baroque Works",
    arc: "Arabasta",
    image: "",
    tags: ["baroque-works"]
  },
  {
    id: "onepiece-0079",
    name: "Miss Doublefinger",
    alias: "Zala",
    faction: "Baroque Works",
    arc: "Arabasta",
    image: "",
    tags: ["baroque-works"]
  },
  {
    id: "onepiece-0080",
    name: "Mr. 4",
    alias: "",
    faction: "Baroque Works",
    arc: "Arabasta",
    image: "",
    tags: ["baroque-works"]
  },
  {
    id: "onepiece-0081",
    name: "Miss Merry Christmas",
    alias: "",
    faction: "Baroque Works",
    arc: "Arabasta",
    image: "",
    tags: ["baroque-works"]
  },
  {
    id: "onepiece-0082",
    name: "Chaka",
    alias: "",
    faction: "Königreich Arabasta",
    arc: "Arabasta",
    image: "",
    tags: ["soldat"]
  },
  {
    id: "onepiece-0083",
    name: "Nefertari Cobra",
    alias: "König Cobra",
    faction: "Königreich Arabasta",
    arc: "Arabasta",
    image: "",
    tags: ["royalität"]
  },
  {
    id: "onepiece-0084",
    name: "Koza",
    alias: "",
    faction: "Rebellen von Arabasta",
    arc: "Arabasta",
    image: "",
    tags: ["zivilist"]
  },
  {
    id: "onepiece-0085",
    name: "Toto",
    alias: "",
    faction: "Königreich Arabasta",
    arc: "Arabasta",
    image: "",
    tags: ["zivilist"]
  },

  // ════════════════════════════════════════════════════════════
  // PDF-IMPORT: SKY ISLAND SAGA
  // ════════════════════════════════════════════════════════════
  {
    id: "onepiece-0086",
    name: "Bellamy",
    alias: "",
    faction: "Bellamy-Piraten",
    arc: "Jaya",
    image: "",
    tags: ["pirat", "kapitän"]
  },
  {
    id: "onepiece-0087",
    name: "Sarquiss",
    alias: "",
    faction: "Bellamy-Piraten",
    arc: "Jaya",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0088",
    name: "Marshall D. Teach",
    alias: "Blackbeard",
    faction: "Blackbeard-Piraten",
    arc: "Jaya",
    image: "",
    tags: ["pirat", "kapitän", "yonkou"]
  },
  {
    id: "onepiece-0089",
    name: "Jesus Burgess",
    alias: "",
    faction: "Blackbeard-Piraten",
    arc: "Jaya",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0090",
    name: "Van Augur",
    alias: "",
    faction: "Blackbeard-Piraten",
    arc: "Jaya",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0091",
    name: "Doc Q",
    alias: "",
    faction: "Blackbeard-Piraten",
    arc: "Jaya",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0092",
    name: "Stronger",
    alias: "",
    faction: "Blackbeard-Piraten",
    arc: "Jaya",
    image: "",
    tags: ["pirat", "tier"]
  },
  {
    id: "onepiece-0093",
    name: "Lafitte",
    alias: "",
    faction: "Blackbeard-Piraten",
    arc: "Jaya",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0094",
    name: "Sengoku",
    alias: "Sengoku der Buddha",
    faction: "Marine",
    arc: "Jaya",
    image: "",
    power: 930,
    roleBonuses: { captain: 55 },
    tags: ["marine", "admiral"],
    rank: "legendary"
  },
  {
    id: "onepiece-0095",
    name: "Edward Newgate",
    alias: "Whitebeard",
    faction: "Whitebeard-Piraten",
    arc: "Jaya",
    image: "",
    power: 975,
    roleBonuses: { captain: 80, tank: 45 },
    tags: ["pirat", "kapitän", "yonkou", "legende"],
    rank: "legendary"
  },
  {
    id: "onepiece-0096",
    name: "Marco",
    alias: "Der Phönix",
    faction: "Whitebeard-Piraten",
    arc: "Jaya",
    image: "",
    roleBonuses: { healer: 95, support: 35 },
    tags: ["pirat"]
  },
  {
    id: "onepiece-0097",
    name: "Mont Blanc Cricket",
    alias: "",
    faction: "Saruyama-Allianz",
    arc: "Jaya",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0098",
    name: "Shoujou",
    alias: "",
    faction: "Saruyama-Allianz",
    arc: "Jaya",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0099",
    name: "Enel",
    alias: "Eneru",
    faction: "Skypiea / Gottes Armee",
    arc: "Skypiea",
    image: "",
    tags: ["skypiea", "antagonist"]
  },
  {
    id: "onepiece-0100",
    name: "Gan Fall",
    alias: "",
    faction: "Skypiea",
    arc: "Skypiea",
    image: "",
    tags: ["skypiea"]
  },
  {
    id: "onepiece-0101",
    name: "Pierre",
    alias: "",
    faction: "Skypiea",
    arc: "Skypiea",
    image: "",
    tags: ["skypiea", "tier"]
  },
  {
    id: "onepiece-0102",
    name: "Wyper",
    alias: "",
    faction: "Shandia",
    arc: "Skypiea",
    image: "",
    tags: ["skypiea", "krieger"]
  },
  {
    id: "onepiece-0103",
    name: "Conis",
    alias: "",
    faction: "Skypiea",
    arc: "Skypiea",
    image: "",
    tags: ["skypiea", "zivilist"]
  },
  {
    id: "onepiece-0104",
    name: "Pagaya",
    alias: "",
    faction: "Skypiea",
    arc: "Skypiea",
    image: "",
    tags: ["skypiea", "zivilist"]
  },
  {
    id: "onepiece-0105",
    name: "Aisa",
    alias: "",
    faction: "Shandia",
    arc: "Skypiea",
    image: "",
    tags: ["skypiea", "krieger"]
  },
  {
    id: "onepiece-0106",
    name: "Satori",
    alias: "",
    faction: "Enels Priester",
    arc: "Skypiea",
    image: "",
    tags: ["skypiea"]
  },
  {
    id: "onepiece-0107",
    name: "Hotori",
    alias: "",
    faction: "Enels Priester",
    arc: "Skypiea",
    image: "",
    tags: ["skypiea"]
  },
  {
    id: "onepiece-0108",
    name: "Kotori",
    alias: "",
    faction: "Enels Priester",
    arc: "Skypiea",
    image: "",
    tags: ["skypiea"]
  },
  {
    id: "onepiece-0109",
    name: "Ohm",
    alias: "",
    faction: "Enels Priester",
    arc: "Skypiea",
    image: "",
    tags: ["skypiea"]
  },
  {
    id: "onepiece-0110",
    name: "Shura",
    alias: "",
    faction: "Enels Priester",
    arc: "Skypiea",
    image: "",
    tags: ["skypiea"]
  },
  {
    id: "onepiece-0111",
    name: "Nola",
    alias: "",
    faction: "Skypiea",
    arc: "Skypiea",
    image: "",
    tags: ["skypiea", "tier"]
  },
  {
    id: "onepiece-0112",
    name: "Kalgara",
    alias: "",
    faction: "Shandia",
    arc: "Skypiea",
    image: "",
    tags: ["skypiea", "krieger", "historie"]
  },
  {
    id: "onepiece-0113",
    name: "Mont Blanc Noland",
    alias: "",
    faction: "Königreich Lvneel",
    arc: "Skypiea",
    image: "",
    tags: ["legende", "historie"]
  },

  // ════════════════════════════════════════════════════════════
  // PDF-IMPORT: WATER 7 SAGA
  // ════════════════════════════════════════════════════════════
  {
    id: "onepiece-0114",
    name: "Foxy",
    alias: "Silver Fox",
    faction: "Foxy-Piraten",
    arc: "Long Ring Long Land",
    image: "",
    tags: ["pirat", "kapitän"]
  },
  {
    id: "onepiece-0115",
    name: "Porche",
    alias: "",
    faction: "Foxy-Piraten",
    arc: "Long Ring Long Land",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0116",
    name: "Hamburg",
    alias: "",
    faction: "Foxy-Piraten",
    arc: "Long Ring Long Land",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0117",
    name: "Tonjit",
    alias: "",
    faction: "Long Ring Long Land",
    arc: "Long Ring Long Land",
    image: "",
    tags: ["zivilist"]
  },
  {
    id: "onepiece-0118",
    name: "Kuzan",
    alias: "Aokiji",
    faction: "Marine",
    arc: "Long Ring Long Land",
    image: "",
    tags: ["marine", "admiral"]
  },
  {
    id: "onepiece-0119",
    name: "Iceburg",
    alias: "",
    faction: "Galley-La Company",
    arc: "Water Seven",
    image: "",
    tags: ["zivilist", "schiffsbauer"]
  },
  {
    id: "onepiece-0120",
    name: "Paulie",
    alias: "",
    faction: "Galley-La Company",
    arc: "Water Seven",
    image: "",
    tags: ["zivilist", "schiffsbauer"]
  },
  {
    id: "onepiece-0121",
    name: "Kaku",
    alias: "",
    faction: "CP9",
    arc: "Water Seven",
    image: "",
    tags: ["cp9", "weltregierung"]
  },
  {
    id: "onepiece-0122",
    name: "Rob Lucci",
    alias: "",
    faction: "CP9 / CP0",
    arc: "Water Seven",
    image: "",
    tags: ["cp9", "weltregierung"]
  },
  {
    id: "onepiece-0123",
    name: "Blueno",
    alias: "",
    faction: "CP9",
    arc: "Water Seven",
    image: "",
    tags: ["cp9", "weltregierung"]
  },
  {
    id: "onepiece-0124",
    name: "Jabra",
    alias: "",
    faction: "CP9",
    arc: "Water Seven",
    image: "",
    tags: ["cp9", "weltregierung"]
  },
  {
    id: "onepiece-0125",
    name: "Spandam",
    alias: "",
    faction: "CP9",
    arc: "Water Seven",
    image: "",
    tags: ["cp9", "weltregierung"]
  },
  {
    id: "onepiece-0126",
    name: "Yokozuna",
    alias: "",
    faction: "Water Seven",
    arc: "Water Seven",
    image: "",
    tags: ["tier", "zivilist"]
  },
  {
    id: "onepiece-0127",
    name: "Sakazuki",
    alias: "Akainu",
    faction: "Marine",
    arc: "Enies Lobby",
    image: "",
    tags: ["marine", "admiral"]
  },
  {
    id: "onepiece-0128",
    name: "Spandine",
    alias: "",
    faction: "CP9",
    arc: "Enies Lobby",
    image: "",
    tags: ["cp9", "weltregierung"]
  },
  {
    id: "onepiece-0129",
    name: "Jaguar D. Saul",
    alias: "",
    faction: "Marine",
    arc: "Enies Lobby",
    image: "",
    tags: ["marine", "riese"]
  },
  {
    id: "onepiece-0130",
    name: "Monkey D. Garp",
    alias: "Garp der Faust",
    faction: "Marine",
    arc: "Post-Enies Lobby",
    image: "",
    tags: ["marine", "legende"],
    rank: "legendary"
  },

  // ════════════════════════════════════════════════════════════
  // PDF-IMPORT: SUMMIT WAR SAGA
  // ════════════════════════════════════════════════════════════
  {
    id: "onepiece-0131",
    name: "Basil Hawkins",
    alias: "",
    faction: "Hawkins-Piraten",
    arc: "Sabaody Archipel",
    image: "",
    tags: ["pirat", "kapitän", "supernovae"]
  },
  {
    id: "onepiece-0132",
    name: "Gecko Moria",
    alias: "",
    faction: "Thriller Bark / Sieben Samurai",
    arc: "Thriller Bark",
    image: "",
    tags: ["pirat", "kapitän", "sieben-samurai"]
  },
  {
    id: "onepiece-0133",
    name: "Perona",
    alias: "",
    faction: "Thriller Bark",
    arc: "Thriller Bark",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0134",
    name: "Absalom",
    alias: "",
    faction: "Thriller Bark",
    arc: "Thriller Bark",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0135",
    name: "Dr. Hogback",
    alias: "",
    faction: "Thriller Bark",
    arc: "Thriller Bark",
    image: "",
    tags: ["pirat", "arzt"]
  },
  {
    id: "onepiece-0136",
    name: "Oars",
    alias: "Oars der Kontinentenverschlinger",
    faction: "Thriller Bark",
    arc: "Thriller Bark",
    image: "",
    tags: ["thriller-bark", "riese"]
  },
  {
    id: "onepiece-0137",
    name: "Ryuma",
    alias: "",
    faction: "Thriller Bark",
    arc: "Thriller Bark",
    image: "",
    tags: ["thriller-bark", "legende"]
  },
  {
    id: "onepiece-0138",
    name: "Lola",
    alias: "",
    faction: "Rolling Pirates",
    arc: "Thriller Bark",
    image: "",
    tags: ["pirat", "kapitän"]
  },
  {
    id: "onepiece-0139",
    name: "Bartholomew Kuma",
    alias: "Tyrant Kuma",
    faction: "Revolutionsarmee / Sieben Samurai",
    arc: "Thriller Bark",
    image: "",
    tags: ["revolution", "sieben-samurai"]
  },
  {
    id: "onepiece-0140",
    name: "Emporio Ivankov",
    alias: "",
    faction: "Revolutionsarmee",
    arc: "Impel Down",
    image: "",
    tags: ["revolution"]
  },
  {
    id: "onepiece-0141",
    name: "Jinbe",
    alias: "First Son of the Sea",
    faction: "Strohhutbande",
    arc: "Impel Down",
    image: "",
    tags: ["pirat", "fischmensch", "hauptcharakter"]
  },
  {
    id: "onepiece-0142",
    name: "Eustass Kid",
    alias: "",
    faction: "Kid-Piraten",
    arc: "Sabaody Archipel",
    image: "",
    tags: ["pirat", "kapitän", "supernovae"]
  },
  {
    id: "onepiece-0143",
    name: "Killer",
    alias: "",
    faction: "Kid-Piraten",
    arc: "Sabaody Archipel",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0144",
    name: "Capone Bege",
    alias: "",
    faction: "Fire Tank-Piraten",
    arc: "Sabaody Archipel",
    image: "",
    tags: ["pirat", "kapitän", "supernovae"]
  },
  {
    id: "onepiece-0145",
    name: "Scratchmen Apoo",
    alias: "",
    faction: "On Air-Piraten",
    arc: "Sabaody Archipel",
    image: "",
    tags: ["pirat", "kapitän", "supernovae"]
  },
  {
    id: "onepiece-0146",
    name: "X Drake",
    alias: "",
    faction: "Drake-Piraten / SWORD",
    arc: "Sabaody Archipel",
    image: "",
    tags: ["pirat", "kapitän", "supernovae", "marine"]
  },
  {
    id: "onepiece-0147",
    name: "Jewelry Bonney",
    alias: "",
    faction: "Bonney-Piraten",
    arc: "Sabaody Archipel",
    image: "",
    tags: ["pirat", "kapitän", "supernovae"]
  },
  {
    id: "onepiece-0148",
    name: "Urouge",
    alias: "Mad Monk",
    faction: "Fallen Monk-Piraten",
    arc: "Sabaody Archipel",
    image: "",
    tags: ["pirat", "kapitän", "supernovae"]
  },
  {
    id: "onepiece-0149",
    name: "Silvers Rayleigh",
    alias: "Dark King",
    faction: "Roger-Piraten",
    arc: "Sabaody Archipel",
    image: "",
    power: 930,
    roleBonuses: { viceCaptain: 90 },
    tags: ["pirat", "legende"]
  },
  {
    id: "onepiece-0150",
    name: "Shakuyaku",
    alias: "Shakky",
    faction: "Sabaody",
    arc: "Sabaody Archipel",
    image: "",
    tags: ["zivilist"]
  },
  {
    id: "onepiece-0151",
    name: "Duval",
    alias: "",
    faction: "Flying Fish Riders",
    arc: "Sabaody Archipel",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0152",
    name: "Camie",
    alias: "",
    faction: "Ryugu Kingdom",
    arc: "Sabaody Archipel",
    image: "",
    tags: ["zivilist", "meerjungfrau"]
  },
  {
    id: "onepiece-0153",
    name: "Pappag",
    alias: "",
    faction: "Sabaody",
    arc: "Sabaody Archipel",
    image: "",
    tags: ["zivilist"]
  },
  {
    id: "onepiece-0154",
    name: "Sentomaru",
    alias: "",
    faction: "Marine / Vegapunk-Wachtruppe",
    arc: "Sabaody Archipel",
    image: "",
    tags: ["marine"]
  },
  {
    id: "onepiece-0155",
    name: "Borsalino",
    alias: "Kizaru",
    faction: "Marine",
    arc: "Sabaody Archipel",
    image: "",
    tags: ["marine", "admiral"]
  },
  {
    id: "onepiece-0156",
    name: "Saint Charlos",
    alias: "",
    faction: "Weltaristokraten",
    arc: "Sabaody Archipel",
    image: "",
    tags: ["weltaristokraten"]
  },
  {
    id: "onepiece-0157",
    name: "Boa Hancock",
    alias: "Piratenkaiserin",
    faction: "Kuja-Piraten",
    arc: "Amazon Lily",
    image: "",
    power: 805,
    roleBonuses: { captain: 45, support: 25 },
    tags: ["pirat", "kapitän", "sieben-samurai", "kuja"]
  },
  {
    id: "onepiece-0158",
    name: "Boa Sandersonia",
    alias: "",
    faction: "Kuja-Piraten",
    arc: "Amazon Lily",
    image: "",
    tags: ["pirat", "kuja"]
  },
  {
    id: "onepiece-0159",
    name: "Boa Marigold",
    alias: "",
    faction: "Kuja-Piraten",
    arc: "Amazon Lily",
    image: "",
    tags: ["pirat", "kuja"]
  },
  {
    id: "onepiece-0160",
    name: "Gloriosa",
    alias: "Elder Nyon",
    faction: "Amazon Lily",
    arc: "Amazon Lily",
    image: "",
    tags: ["kuja"]
  },
  {
    id: "onepiece-0161",
    name: "Marguerite",
    alias: "",
    faction: "Kuja",
    arc: "Amazon Lily",
    image: "",
    tags: ["kuja"]
  },
  {
    id: "onepiece-0162",
    name: "Magellan",
    alias: "",
    faction: "Impel Down",
    arc: "Impel Down",
    image: "",
    roleBonuses: { tank: 90 },
    tags: ["wächter"]
  },
  {
    id: "onepiece-0163",
    name: "Hannyabal",
    alias: "",
    faction: "Impel Down",
    arc: "Impel Down",
    image: "",
    tags: ["wächter"]
  },
  {
    id: "onepiece-0164",
    name: "Shiryu",
    alias: "",
    faction: "Blackbeard-Piraten",
    arc: "Impel Down",
    image: "",
    tags: ["pirat", "ehemals-wächter"]
  },
  {
    id: "onepiece-0165",
    name: "Domino",
    alias: "",
    faction: "Impel Down",
    arc: "Impel Down",
    image: "",
    tags: ["wächter"]
  },
  {
    id: "onepiece-0166",
    name: "Sadi",
    alias: "Sadi-chan",
    faction: "Impel Down",
    arc: "Impel Down",
    image: "",
    tags: ["wächter"]
  },
  {
    id: "onepiece-0167",
    name: "Inazuma",
    alias: "",
    faction: "Revolutionsarmee",
    arc: "Impel Down",
    image: "",
    tags: ["revolution"]
  },
  {
    id: "onepiece-0168",
    name: "Jozu",
    alias: "",
    faction: "Whitebeard-Piraten",
    arc: "Marineford",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0169",
    name: "Vista",
    alias: "",
    faction: "Whitebeard-Piraten",
    arc: "Marineford",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0170",
    name: "Donquixote Doflamingo",
    alias: "Heavenly Demon",
    faction: "Donquixote-Piraten / Sieben Samurai",
    arc: "Marineford",
    image: "",
    tags: ["pirat", "kapitän", "sieben-samurai"]
  },
  {
    id: "onepiece-0171",
    name: "Curly Dadan",
    alias: "",
    faction: "Dadan-Familie",
    arc: "Post-War",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0172",
    name: "Sabo",
    alias: "",
    faction: "Revolutionsarmee",
    arc: "Post-War",
    image: "",
    tags: ["revolution"]
  },

  // ════════════════════════════════════════════════════════════
  // PDF-IMPORT: FISH-MAN ISLAND SAGA
  // ════════════════════════════════════════════════════════════
  {
    id: "onepiece-0173",
    name: "Caribou",
    alias: "",
    faction: "Caribou-Piraten",
    arc: "Return to Sabaody",
    image: "",
    tags: ["pirat", "kapitän"]
  },
  {
    id: "onepiece-0174",
    name: "Coribou",
    alias: "",
    faction: "Caribou-Piraten",
    arc: "Return to Sabaody",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0175",
    name: "Demaro Black",
    alias: "",
    faction: "Fake Straw Hat Pirates",
    arc: "Return to Sabaody",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0176",
    name: "Shirahoshi",
    alias: "Meerjungfrauen-Prinzessin",
    faction: "Ryugu Kingdom",
    arc: "Fish-Man Island",
    image: "",
    tags: ["royalität", "meerjungfrau"]
  },
  {
    id: "onepiece-0177",
    name: "Neptune",
    alias: "König Neptune",
    faction: "Ryugu Kingdom",
    arc: "Fish-Man Island",
    image: "",
    tags: ["royalität", "fischmensch"]
  },
  {
    id: "onepiece-0178",
    name: "Fukaboshi",
    alias: "",
    faction: "Ryugu Kingdom",
    arc: "Fish-Man Island",
    image: "",
    tags: ["royalität", "fischmensch"]
  },
  {
    id: "onepiece-0179",
    name: "Hody Jones",
    alias: "",
    faction: "New Fish-Man Pirates",
    arc: "Fish-Man Island",
    image: "",
    tags: ["pirat", "kapitän", "fischmensch"]
  },
  {
    id: "onepiece-0180",
    name: "Vander Decken IX",
    alias: "",
    faction: "Flying Pirates",
    arc: "Fish-Man Island",
    image: "",
    tags: ["pirat", "kapitän"]
  },
  {
    id: "onepiece-0181",
    name: "Fisher Tiger",
    alias: "",
    faction: "Sun Pirates",
    arc: "Fish-Man Island",
    image: "",
    tags: ["pirat", "kapitän", "fischmensch", "legende"]
  },
  {
    id: "onepiece-0182",
    name: "Otohime",
    alias: "",
    faction: "Ryugu Kingdom",
    arc: "Fish-Man Island",
    image: "",
    tags: ["royalität", "meerjungfrau", "legende"]
  },

  // ════════════════════════════════════════════════════════════
  // PDF-IMPORT: DRESSROSA SAGA
  // ════════════════════════════════════════════════════════════
  {
    id: "onepiece-0183",
    name: "Caesar Clown",
    alias: "",
    faction: "Wissenschaftler / Donquixote",
    arc: "Punk Hazard",
    image: "",
    tags: ["antagonist"]
  },
  {
    id: "onepiece-0184",
    name: "Monet",
    alias: "",
    faction: "Donquixote-Familie",
    arc: "Punk Hazard",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0185",
    name: "Vergo",
    alias: "",
    faction: "Donquixote-Familie",
    arc: "Punk Hazard",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0186",
    name: "Kin'emon",
    alias: "",
    faction: "Wano-Samurai / Kozuki",
    arc: "Punk Hazard",
    image: "",
    tags: ["samurai", "wano"]
  },
  {
    id: "onepiece-0187",
    name: "Kozuki Momonosuke",
    alias: "",
    faction: "Kozuki-Clan",
    arc: "Punk Hazard",
    image: "",
    tags: ["royalität", "wano"]
  },
  {
    id: "onepiece-0188",
    name: "Issho",
    alias: "Fujitora",
    faction: "Marine",
    arc: "Dressrosa",
    image: "",
    tags: ["marine", "admiral"]
  },
  {
    id: "onepiece-0189",
    name: "Bartolomeo",
    alias: "",
    faction: "Barto Club / Strohhut-Großflotte",
    arc: "Dressrosa",
    image: "",
    tags: ["pirat", "kapitän"]
  },
  {
    id: "onepiece-0190",
    name: "Cavendish",
    alias: "",
    faction: "Beautiful Pirates / Strohhut-Großflotte",
    arc: "Dressrosa",
    image: "",
    tags: ["pirat", "kapitän"]
  },
  {
    id: "onepiece-0191",
    name: "Kyros",
    alias: "",
    faction: "Dressrosa",
    arc: "Dressrosa",
    image: "",
    tags: ["zivilist", "krieger"]
  },
  {
    id: "onepiece-0192",
    name: "Rebecca",
    alias: "",
    faction: "Dressrosa",
    arc: "Dressrosa",
    image: "",
    tags: ["zivilist", "krieger"]
  },
  {
    id: "onepiece-0193",
    name: "Trebol",
    alias: "",
    faction: "Donquixote-Familie",
    arc: "Dressrosa",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0194",
    name: "Pica",
    alias: "",
    faction: "Donquixote-Familie",
    arc: "Dressrosa",
    image: "",
    tags: ["pirat"]
  },

  // ════════════════════════════════════════════════════════════
  // PDF-IMPORT: WHOLE CAKE ISLAND / WANO SAGA
  // ════════════════════════════════════════════════════════════
  {
    id: "onepiece-0195",
    name: "Jack",
    alias: "",
    faction: "Beasts Pirates",
    arc: "Zou",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0196",
    name: "Charlotte Linlin",
    alias: "Big Mom",
    faction: "Big Mom Pirates",
    arc: "Whole Cake Island",
    image: "",
    tags: ["pirat", "kapitän", "yonkou"],
    rank: "legendary"
  },
  {
    id: "onepiece-0197",
    name: "Charlotte Katakuri",
    alias: "",
    faction: "Big Mom Pirates",
    arc: "Whole Cake Island",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0198",
    name: "Charlotte Pudding",
    alias: "",
    faction: "Big Mom Pirates",
    arc: "Whole Cake Island",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0199",
    name: "Kaido",
    alias: "König der Bestien",
    faction: "Beasts Pirates",
    arc: "Wano Country",
    image: "",
    roleBonuses: { tank: 65, captain: 35 },
    tags: ["pirat", "kapitän", "yonkou"],
    rank: "legendary"
  },
  {
    id: "onepiece-0200",
    name: "Yamato",
    alias: "",
    faction: "Wano / Verbündete",
    arc: "Wano Country",
    image: "",
    roleBonuses: { tank: 65, support: 25 },
    tags: ["wano"]
  },
  {
    id: "onepiece-0201",
    name: "King",
    alias: "",
    faction: "Beasts Pirates",
    arc: "Wano Country",
    image: "",
    tags: ["pirat"]
  },
  {
    id: "onepiece-0202",
    name: "Queen",
    alias: "",
    faction: "Beasts Pirates",
    arc: "Wano Country",
    image: "",
    tags: ["pirat"]
  },

  // ════════════════════════════════════════════════════════════
  // PDF-IMPORT: FINAL SAGA
  // ════════════════════════════════════════════════════════════
  {
    id: "onepiece-0203",
    name: "Dr. Vegapunk",
    alias: "Stella",
    faction: "SSG / Weltregierung",
    arc: "Egghead",
    image: "",
    power: 640,
    roleBonuses: { support: 130, healer: 35 },
    tags: ["wissenschaftler", "weltregierung"]
  },

  // ── HIER WEITERE CHARAKTERE EINFÜGEN ─────────────────────
  // Einfach weitere Objekte nach dem gleichen Schema ergänzen.
  // Nächste freie ID: onepiece-0204
];
