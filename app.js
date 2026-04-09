/**
 * app.js
 * One Piece – Random Team Builder (2 Spieler)
 *
 * Regeln:
 *  - Es ist immer genau ein Spieler an der Reihe.
 *  - Nur der aktive Spieler darf eine Rolle auswählen.
 *  - Einmal vergebene Rollen sind gesperrt – kein Überschreiben möglich.
 *  - Nach jeder Zuweisung wechselt die Reihenfolge automatisch.
 *  - Gemeinsamer Pool: ein Charakter kann nur einem der beiden Spieler zugewiesen werden.
 *
 * Bildlogik:
 *  - characters.js bleibt die Primärliste.
 *  - character-image-sources.js ist die Zwischenschicht mit Wiki-Metadaten.
 *  - Bilder werden bei Bedarf über die MediaWiki-API des One Piece Wiki geladen.
 */

// ═══════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════

const state = {
  allCharacters: [],
  availableCharacters: [],  // gemeinsamer Pool
  currentCharacter: null,   // aktuell gezogener Charakter
  currentTurn: "player1",   // wer darf gerade zuweisen: "player1" | "player2"
  teams: {
    player1: { captain: null, viceCaptain: null, healer: null, tank: null, support: null, traitor: null },
    player2: { captain: null, viceCaptain: null, healer: null, tank: null, support: null, traitor: null },
  },
};

const TEAM_ROLES = ["captain", "viceCaptain", "healer", "tank", "support", "traitor"];

const IMAGE_API_BASE = "https://onepiece.fandom.com/api.php";
const IMAGE_CACHE = new Map();
let currentImageRequestToken = 0;

// ═══════════════════════════════════════════════════════════════
// DOM-REFERENZEN
// ═══════════════════════════════════════════════════════════════

const elBtnDraw       = document.getElementById("btn-draw");
const elBtnReset      = document.getElementById("btn-reset");
const elCard          = document.getElementById("character-card");
const elCharImage     = document.getElementById("char-image");
const elCharImageWrap = document.getElementById("char-image-wrap");
const elCharName      = document.getElementById("char-name");
const elCharRank      = document.getElementById("char-rank");
const elCharAlias     = document.getElementById("char-alias");
const elCharFaction   = document.getElementById("char-faction");
const elCharArc       = document.getElementById("char-arc");
const elStatus        = document.getElementById("status");
const elRoleSection   = document.getElementById("role-section");
const elTurnIndicator = document.getElementById("turn-indicator");
const elTeamWinnerBanner = document.getElementById("team-winner-banner");

const elRoleButtons   = document.querySelectorAll(".btn-role");

// Team-Slot-Werte: elTeamSlots[player][role] → <span>-Element
const elTeamSlots = {
  player1: {
    captain:     document.getElementById("team-p1-captain"),
    viceCaptain: document.getElementById("team-p1-viceCaptain"),
    healer:      document.getElementById("team-p1-healer"),
    tank:        document.getElementById("team-p1-tank"),
    support:     document.getElementById("team-p1-support"),
    traitor:     document.getElementById("team-p1-traitor"),
  },
  player2: {
    captain:     document.getElementById("team-p2-captain"),
    viceCaptain: document.getElementById("team-p2-viceCaptain"),
    healer:      document.getElementById("team-p2-healer"),
    tank:        document.getElementById("team-p2-tank"),
    support:     document.getElementById("team-p2-support"),
    traitor:     document.getElementById("team-p2-traitor"),
  },
};

// Team-Slot-Container (für "filled" / "locked"-Klasse)
const elSlotContainers = {
  player1: {
    captain:     document.getElementById("slot-p1-captain"),
    viceCaptain: document.getElementById("slot-p1-viceCaptain"),
    healer:      document.getElementById("slot-p1-healer"),
    tank:        document.getElementById("slot-p1-tank"),
    support:     document.getElementById("slot-p1-support"),
    traitor:     document.getElementById("slot-p1-traitor"),
  },
  player2: {
    captain:     document.getElementById("slot-p2-captain"),
    viceCaptain: document.getElementById("slot-p2-viceCaptain"),
    healer:      document.getElementById("slot-p2-healer"),
    tank:        document.getElementById("slot-p2-tank"),
    support:     document.getElementById("slot-p2-support"),
    traitor:     document.getElementById("slot-p2-traitor"),
  },
};

// Spalten-Container für aktiv/inaktiv-Styling
const elPlayerCols = {
  player1: document.getElementById("col-player1"),
  player2: document.getElementById("col-player2"),
};

const VALID_RANKS = new Set(["legendary", "epic", "elite", "advanced", "basic", "noob"]);
const LEGENDARY_RANK = "legendary";
const EPIC_RANK = "epic";
const ELITE_RANK = "elite";
const ADVANCED_RANK = "advanced";
const BASIC_RANK = "basic";
const NOOB_RANK = "noob";

const RANK_POWER_TARGETS = {
  [LEGENDARY_RANK]: { center: 930, spread: 75, min: 850, max: 1000 },
  [EPIC_RANK]: { center: 775, spread: 65, min: 700, max: 849 },
  [ELITE_RANK]: { center: 620, spread: 65, min: 550, max: 699 },
  [ADVANCED_RANK]: { center: 440, spread: 85, min: 350, max: 549 },
  [BASIC_RANK]: { center: 265, spread: 80, min: 180, max: 349 },
  [NOOB_RANK]: { center: 95, spread: 80, min: 0, max: 179 },
};

const MANUAL_RANK_OVERRIDES = new Map([
  ["onepiece-0154", ELITE_RANK],      // Sentomaru (letzte Angabe)
  ["onepiece-0184", BASIC_RANK],      // Monet
  ["onepiece-0183", ADVANCED_RANK],   // Caesar Clown
  ["onepiece-0072", BASIC_RANK],      // Mr. 3
  ["onepiece-0041", NOOB_RANK],       // Chimney
  ["onepiece-0162", ELITE_RANK],      // Magellan
  ["onepiece-0168", ELITE_RANK],      // Jozu
  ["onepiece-0149", LEGENDARY_RANK],  // Silvers Rayleigh
  ["onepiece-0189", ELITE_RANK],      // Bartolomeo
  ["onepiece-0122", ELITE_RANK],      // Rob Lucci
  ["onepiece-0078", ADVANCED_RANK],   // Mr. 1
  ["onepiece-0010", ADVANCED_RANK],   // Buggy
  ["onepiece-0043", ELITE_RANK],      // Coby
  ["onepiece-0049", BASIC_RANK],      // Morgan
  ["onepiece-0167", ADVANCED_RANK],   // Inazuma
  ["onepiece-0028", BASIC_RANK],      // Mr. 9
  ["onepiece-0185", ADVANCED_RANK],   // Vergo
  ["onepiece-0169", ELITE_RANK],      // Vista
  ["onepiece-0166", BASIC_RANK],      // Sadi
  ["onepiece-0170", EPIC_RANK],       // Donquixote Doflamingo
  ["onepiece-0052", ELITE_RANK],      // Yasopp
  ["onepiece-0195", ELITE_RANK],      // Jack
  ["onepiece-0131", ELITE_RANK],      // Basil Hawkins
  ["onepiece-0031", BASIC_RANK],      // Wapol
  ["onepiece-0203", ELITE_RANK],      // Dr. Vegapunk
  ["onepiece-0047", ADVANCED_RANK],   // Bon Clay
  ["onepiece-0157", EPIC_RANK],       // Boa Hancock
  ["onepiece-0046", ELITE_RANK],      // Crocodile
  ["onepiece-0163", BASIC_RANK],      // Hannyabal
  ["onepiece-0181", ELITE_RANK],      // Fisher Tiger
  ["onepiece-0088", LEGENDARY_RANK],  // Marshall D. Teach
  ["onepiece-0200", ELITE_RANK],      // Yamato
  ["onepiece-0074", ELITE_RANK],      // Dorry
  ["onepiece-0092", ELITE_RANK],      // Stronger
  ["onepiece-0140", ELITE_RANK],      // Emporio Ivankov
  ["onepiece-0089", ELITE_RANK],      // Jesus Burgess
  ["onepiece-0023", ADVANCED_RANK],   // Helmeppo
  ["onepiece-0187", ELITE_RANK],      // Kozuki Momonosuke
  ["onepiece-0077", BASIC_RANK],      // Dr. Hiluluk
  ["onepiece-0164", ELITE_RANK],      // Shiryu
  ["onepiece-0123", ADVANCED_RANK],   // Blueno
  ["onepiece-0126", BASIC_RANK],      // Yokozuna
  ["onepiece-0022", ADVANCED_RANK],   // Tashigi
  ["onepiece-0093", ADVANCED_RANK],   // Lafitte
  ["onepiece-0120", BASIC_RANK],      // Paulie
  ["onepiece-0059", BASIC_RANK],      // Merry
  ["onepiece-0033", BASIC_RANK],      // Pell
  ["onepiece-0051", ELITE_RANK],      // Lucky Roux
  ["onepiece-0099", ELITE_RANK],      // Enel
  ["onepiece-0076", BASIC_RANK],      // Dr. Kureha
]);

const LEGENDARY_CHARACTER_IDS = new Set([
  "onepiece-0001", // Monkey D. Luffy
  "onepiece-0044", // Shanks
  "onepiece-0045", // Dracule Mihawk
  "onepiece-0054", // Monkey D. Dragon
  "onepiece-0055", // Gol D. Roger
  "onepiece-0094", // Sengoku
  "onepiece-0095", // Edward Newgate
  "onepiece-0130", // Monkey D. Garp
  "onepiece-0196", // Charlotte Linlin
  "onepiece-0199", // Kaido
]);

const EPIC_CHARACTER_IDS = new Set([
  "onepiece-0002", // Roronoa Zoro
  "onepiece-0005", // Sanji
  "onepiece-0037", // Rob Lucci
  "onepiece-0042", // Trafalgar Law
  "onepiece-0048", // Portgas D. Ace
  "onepiece-0050", // Silvers Rayleigh
  "onepiece-0059", // Arlong
  "onepiece-0077", // Donquixote Doflamingo
  "onepiece-0096", // Marco
  "onepiece-0121", // Aokiji
  "onepiece-0123", // Kizaru
  "onepiece-0126", // Akainu
  "onepiece-0141", // Boa Hancock
  "onepiece-0139", // Bartholomew Kuma
  "onepiece-0142", // Eustass Kid
  "onepiece-0146", // X Drake
  "onepiece-0172", // Sabo
  "onepiece-0193", // Admiral Fujitora
  "onepiece-0197", // Charlotte Katakuri
  "onepiece-0201", // King
]);

const ELITE_CHARACTER_IDS = new Set([
  "onepiece-0003", // Nami
  "onepiece-0004", // Usopp
  "onepiece-0006", // Tony Tony Chopper
  "onepiece-0007", // Nico Robin
  "onepiece-0008", // Franky
  "onepiece-0009", // Brook
  "onepiece-0041", // Enel
  "onepiece-0047", // Nico Robin (2. Eintrag)
  "onepiece-0049", // Smoker
  "onepiece-0050", // Tashigi
  "onepiece-0143", // Killer
  "onepiece-0144", // Capone Bege
  "onepiece-0145", // Scratchmen Apoo
]);

const ADVANCED_CHARACTER_IDS = new Set([
  "onepiece-0136", // Oars (vorher "Standard" gewünscht)
  "onepiece-0186", // Kin'emon (vorher "Standard" gewünscht)
  "onepiece-0195", // Jack
  "onepiece-0200", // Yamato
]);

const BASIC_CHARACTER_IDS = new Set([
  "onepiece-0011", // Cabaji
  "onepiece-0012", // Mohji
  "onepiece-0023", // Helmeppo
  "onepiece-0051", // Makino
  "onepiece-0052", // Woop Slap
  "onepiece-0171", // Curly Dadan
  "onepiece-0198", // Charlotte Pudding
]);

const NOOB_CHARACTER_IDS = new Set([
  "onepiece-0014", // Kaya
  "onepiece-0017", // Patty
  "onepiece-0018", // Carne
  "onepiece-0032", // Dalton
  "onepiece-0051", // Makino
  "onepiece-0052", // Woop Slap
  "onepiece-0053", // Curly Dadan
  "onepiece-0056", // Richie
  "onepiece-0067", // Oimo
  "onepiece-0068", // Kashii
  "onepiece-0116", // Kokoro
  "onepiece-0161", // Haredas
  "onepiece-0198", // Charlotte Pudding
]);

// ═══════════════════════════════════════════════════════════════
// INITIALISIERUNG
// ═══════════════════════════════════════════════════════════════

function init() {
  if (!Array.isArray(CHARACTERS) || CHARACTERS.length === 0) {
    showStatus("Fehler: Keine Charakterdaten gefunden. Bitte characters.js prüfen.");
    elBtnDraw.disabled = true;
    return;
  }

  state.allCharacters = CHARACTERS.map(enrichCharacter);
  resetRound(/* silent */ true);

  elBtnDraw.addEventListener("click", drawRandomCharacter);
  elBtnReset.addEventListener("click", () => resetRound());

  elRoleButtons.forEach((btn) => {
    btn.addEventListener("click", () => assignRole(btn.dataset.player, btn.dataset.role));
  });
}

// ═══════════════════════════════════════════════════════════════
// KERN-FUNKTIONEN
// ═══════════════════════════════════════════════════════════════

/**
 * Zieht einen zufälligen Charakter aus dem gemeinsamen Pool.
 *
 * DUPLIKAT-SPERRE: Bereits zugewiesene Charaktere (beider Spieler) sind
 * aus `availableCharacters` entfernt.
 * → Sperre deaktivieren: `const pool = state.allCharacters;`
 */
function drawRandomCharacter() {
  const pool = state.availableCharacters; // ← Duplikat-Sperre aktiv

  if (pool.length === 0) {
    showStatus("Keine Charaktere mehr verfügbar – bitte Runde zurücksetzen.");
    elBtnDraw.disabled = true;
    return;
  }

  const index = Math.floor(Math.random() * pool.length);
  state.currentCharacter = pool[index];

  renderCurrentCharacter();
  elRoleSection.classList.remove("hidden");
  renderRoleSection();
  const rankPrefix = `[${formatRank(state.currentCharacter.rank).toUpperCase()}] `;
  showStatus(`${rankPrefix}„${state.currentCharacter.name}" gezogen.`);
}

/**
 * Weist den aktuell gezogenen Charakter dem aktiven Spieler in der gewählten Rolle zu.
 *
 * Regeln:
 *  - Nur der aktive Spieler (state.currentTurn) darf zuweisen.
 *  - Eine bereits belegte Rolle ist gesperrt und kann nicht überschrieben werden.
 *  - Nach erfolgreicher Zuweisung wechselt der Zug.
 *
 * @param {string} player - "player1" | "player2"
 * @param {string} role   - "captain" | "viceCaptain" | "healer" | "tank" | "support" | "traitor"
 */
function assignRole(player, role) {
  if (!state.currentCharacter) {
    showStatus("Zuerst einen Charakter ziehen!");
    return;
  }

  // Falscher Spieler klickt – ignorieren
  if (player !== state.currentTurn) {
    showStatus(`Bitte warten – ${getPlayerLabel(state.currentTurn)} ist dran.`);
    return;
  }

  // Rolle bereits vergeben → gesperrt
  if (state.teams[player][role] !== null) {
    showStatus(`Diese Rolle ist bereits vergeben und gesperrt.`);
    return;
  }

  // Charakter zuweisen
  state.teams[player][role] = state.currentCharacter;

  // Charakter aus dem gemeinsamen Pool entfernen
  state.availableCharacters = state.availableCharacters.filter(
    (c) => c.id !== state.currentCharacter.id
  );

  const playerLabel = getPlayerLabel(player);
  const roleLabel   = getRoleLabel(role);
  const rankLabel = formatRank(state.currentCharacter.rank).toUpperCase();
  showStatus(`[${rankLabel}] „${state.currentCharacter.name}" → ${playerLabel} als ${roleLabel}.`);

  // Zug wechseln
  state.currentTurn = player === "player1" ? "player2" : "player1";

  // Staat aufräumen
  state.currentCharacter = null;
  renderCurrentCharacter();
  elRoleSection.classList.add("hidden");
  renderTeams();

  elBtnDraw.disabled = state.availableCharacters.length === 0;
}

/**
 * Setzt die gesamte Runde zurück. Spieler 1 beginnt wieder.
 *
 * @param {boolean} [silent=false]
 */
function resetRound(silent = false) {
  state.currentCharacter    = null;
  state.currentTurn         = "player1";
  state.availableCharacters = [...state.allCharacters];
  state.teams = {
    player1: { captain: null, viceCaptain: null, healer: null, tank: null, support: null, traitor: null },
    player2: { captain: null, viceCaptain: null, healer: null, tank: null, support: null, traitor: null },
  };

  renderCurrentCharacter();
  elRoleSection.classList.add("hidden");
  renderTeams();
  renderEvaluation();
  elBtnDraw.disabled = false;

  if (!silent) showStatus("Runde zurückgesetzt – Spieler 1 beginnt.");
}

// ═══════════════════════════════════════════════════════════════
// RENDER-FUNKTIONEN
// ═══════════════════════════════════════════════════════════════

/**
 * Aktualisiert die Charakter-Karte.
 */
function renderCurrentCharacter() {
  const char = state.currentCharacter;
  const requestToken = ++currentImageRequestToken;

  if (!char) {
    elCard.classList.add("hidden");
    setRankClasses(elCard, "");
    setRankClasses(elCharName, "");
    setRankClasses(elCharRank, "");
    elCharRank.textContent = "";
    elCharRank.style.display = "none";
    setRankClasses(elCharImageWrap, "");
    resetImagePresentation();
    return;
  }

  elCard.classList.remove("hidden");
  setRankClasses(elCard, char.rank);
  elCharName.textContent = char.name || "Unbekannt";
  setRankClasses(elCharName, char.rank);
  setMeta(elCharRank, `Rang: ${formatRank(char.rank)}`);
  setRankClasses(elCharRank, char.rank);
  setMeta(elCharAlias,   char.alias   ? `„${char.alias}"`  : "");
  setMeta(elCharFaction, char.faction ? char.faction        : "");
  setMeta(elCharArc,     char.arc     ? `Arc: ${char.arc}` : "");
  setRankClasses(elCharImageWrap, char.rank);

  renderCharacterImage(char, requestToken);
}

/**
 * Aktualisiert den Rollenwahl-Bereich:
 *  - Turn-Indikator zeigt wer dran ist
 *  - Inaktive Spieler-Spalte ist ausgegraut
 *  - Bereits vergebene Rollen des aktiven Spielers sind gesperrt (disabled + "locked"-Klasse)
 */
function renderRoleSection() {
  const active   = state.currentTurn;
  const inactive = active === "player1" ? "player2" : "player1";

  // Turn-Indikator
  elTurnIndicator.textContent = `${getPlayerLabel(active)} wählt die Rolle:`;
  elTurnIndicator.dataset.player = active;

  // Spalten aktiv/inaktiv markieren
  elPlayerCols[active].classList.remove("col-inactive");
  elPlayerCols[inactive].classList.add("col-inactive");

  // Buttons aktualisieren
  elRoleButtons.forEach((btn) => {
    const btnPlayer = btn.dataset.player;
    const btnRole   = btn.dataset.role;

    if (btnPlayer === inactive) {
      // Inaktiver Spieler: alle Buttons gesperrt
      btn.disabled = true;
      btn.classList.remove("locked");
    } else {
      // Aktiver Spieler: Rolle gesperrt wenn bereits vergeben
      const isLocked = state.teams[active][btnRole] !== null;
      btn.disabled = isLocked;
      btn.classList.toggle("locked", isLocked);
    }
  });
}

/**
 * Aktualisiert beide Team-Bereiche.
 */
function renderTeams() {
  ["player1", "player2"].forEach((player) => {
    TEAM_ROLES.forEach((role) => {
      const char      = state.teams[player][role];
      const el        = elTeamSlots[player][role];
      const container = elSlotContainers[player][role];

      if (char) {
        const rankSymbol = getRankSymbol(char.rank);
        el.textContent = rankSymbol ? `${char.name} ${rankSymbol}` : char.name;
        el.classList.remove("empty");
        setRankClasses(el, char.rank);
        container.classList.add("filled");
        setRankClasses(container, char.rank);
      } else {
        el.textContent = "–";
        el.classList.add("empty");
        setRankClasses(el, "");
        container.classList.remove("filled");
        setRankClasses(container, "");
      }
    });
  });

  renderEvaluation();
}

// ═══════════════════════════════════════════════════════════════
// BILD-FUNKTIONEN
// ═══════════════════════════════════════════════════════════════

function enrichCharacter(char) {
  const sourceMeta = getImageSourceMeta(char.id);
  const rank = evaluateCharacterRank(char);
  return {
    ...char,
    rank,
    power: normalizeCharacterPower(char, rank),
    roleBonuses: normalizeRoleBonuses(char.roleBonuses),
    image: char.image || "",
    imageSourceMeta: sourceMeta,
  };
}

function getImageSourceMeta(characterId) {
  if (typeof CHARACTER_IMAGE_SOURCES !== "object" || CHARACTER_IMAGE_SOURCES === null) {
    return null;
  }
  return window.CHARACTER_IMAGE_SOURCES[characterId] || null;
}

async function renderCharacterImage(char, requestToken) {
  if (char.image) {
    applyImage(char.image, char.name);
    return;
  }

  setImageLoadingState();

  try {
    const imageUrl = await resolveCharacterImage(char);

    if (requestToken !== currentImageRequestToken) return;

    if (imageUrl) {
      char.image = imageUrl;
      applyImage(imageUrl, char.name);
      return;
    }
  } catch (error) {
    console.warn(`Bild für ${char.name} konnte nicht geladen werden:`, error);
  }

  if (requestToken !== currentImageRequestToken) return;
  resetImagePresentation();
}

async function resolveCharacterImage(char) {
  if (char.image) return char.image;
  if (IMAGE_CACHE.has(char.id)) return IMAGE_CACHE.get(char.id);

  const sourceMeta = char.imageSourceMeta;
  if (!sourceMeta?.wikiTitle) {
    IMAGE_CACHE.set(char.id, "");
    return "";
  }

  const apiUrl = buildPageImageApiUrl(sourceMeta.wikiTitle);
  const response = await fetch(apiUrl, { mode: "cors", cache: "force-cache" });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const data = await response.json();
  const imageUrl = extractImageUrlFromApiResponse(data);
  IMAGE_CACHE.set(char.id, imageUrl || "");
  return imageUrl || "";
}

function buildPageImageApiUrl(wikiTitle) {
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    prop: "pageimages",
    piprop: "original",
    redirects: "1",
    titles: wikiTitle,
    origin: "*",
  });

  return `${IMAGE_API_BASE}?${params.toString()}`;
}

function extractImageUrlFromApiResponse(data) {
  const pages = data?.query?.pages;
  if (!pages || typeof pages !== "object") return "";

  for (const page of Object.values(pages)) {
    const originalSource = page?.original?.source;
    if (typeof originalSource === "string" && originalSource.length > 0) {
      return originalSource;
    }

    const thumbnailSource = page?.thumbnail?.source;
    if (typeof thumbnailSource === "string" && thumbnailSource.length > 0) {
      return thumbnailSource;
    }
  }

  return "";
}

function setImageLoadingState() {
  elCharImage.src = "";
  elCharImage.alt = "";
  elCharImage.style.display = "none";
  elCharImageWrap.classList.add("no-image", "is-loading");
}

function applyImage(src, alt) {
  elCharImage.src = src;
  elCharImage.alt = alt || "";
  elCharImage.style.display = "block";
  elCharImageWrap.classList.remove("no-image", "is-loading");
}

function resetImagePresentation() {
  elCharImage.src = "";
  elCharImage.alt = "";
  elCharImage.style.display = "none";
  elCharImageWrap.classList.remove("is-loading");
  setRankClasses(elCharImageWrap, "");
  elCharImageWrap.classList.add("no-image");
}

// ═══════════════════════════════════════════════════════════════
// HILFSFUNKTIONEN
// ═══════════════════════════════════════════════════════════════

function setMeta(el, text) {
  el.textContent   = text;
  el.style.display = text ? "" : "none";
}

function normalizeCharacterPower(char, rank) {
  const explicitPower = Number(char.power);
  if (Number.isFinite(explicitPower)) {
    return clampPower(explicitPower);
  }

  const target = RANK_POWER_TARGETS[rank] || RANK_POWER_TARGETS[BASIC_RANK];
  const seed = deterministicSeedFromString(char.id || char.name || "");
  const offsetSpan = target.spread * 2 + 1;
  const offset = (seed % offsetSpan) - target.spread;
  return clampPower(Math.max(target.min, Math.min(target.max, target.center + offset)));
}

function normalizeRoleBonuses(rawBonuses) {
  const normalized = {};
  if (!rawBonuses || typeof rawBonuses !== "object") return normalized;

  TEAM_ROLES.forEach((role) => {
    const value = Number(rawBonuses[role]);
    if (Number.isFinite(value) && value !== 0) {
      normalized[role] = Math.trunc(value);
    }
  });

  return normalized;
}

function deterministicSeedFromString(input) {
  const text = String(input || "");
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = ((hash << 5) - hash + text.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function clampPower(value) {
  const clamped = Math.max(0, Math.min(1000, Math.round(value)));
  return clamped;
}

function getEffectiveRolePower(char, role) {
  if (!char) return 0;
  const basePower = Number.isFinite(Number(char.power)) ? Number(char.power) : 0;
  const roleBonus = Number(char.roleBonuses?.[role]) || 0;
  return clampPower(basePower + roleBonus);
}

function isTeamComplete(player) {
  return TEAM_ROLES.every((role) => state.teams[player][role] !== null);
}

function renderEvaluation() {
  // Vor jeder Neuberechnung alte Markierungen zurücksetzen.
  ["player1", "player2"].forEach((player) => {
    TEAM_ROLES.forEach((role) => {
      elSlotContainers[player][role].classList.remove("lost-role");
      elTeamSlots[player][role].classList.remove("lost-role");
    });
  });

  const p1Complete = isTeamComplete("player1");
  const p2Complete = isTeamComplete("player2");

  if (!p1Complete || !p2Complete) {
    elTeamWinnerBanner.textContent = "";
    elTeamWinnerBanner.classList.add("hidden");
    elTeamWinnerBanner.classList.remove("winner-p1", "winner-p2", "winner-tie");
    return;
  }

  let player1RoleWins = 0;
  let player2RoleWins = 0;

  TEAM_ROLES.forEach((role) => {
    const p1Char = state.teams.player1[role];
    const p2Char = state.teams.player2[role];
    const p1Power = getEffectiveRolePower(p1Char, role);
    const p2Power = getEffectiveRolePower(p2Char, role);
    const isTraitorRole = role === "traitor";

    const player1WinsRole = isTraitorRole ? p1Power < p2Power : p1Power > p2Power;
    const player2WinsRole = isTraitorRole ? p2Power < p1Power : p2Power > p1Power;

    if (player1WinsRole) {
      player1RoleWins += 1;
      elSlotContainers.player2[role].classList.add("lost-role");
      elTeamSlots.player2[role].classList.add("lost-role");
    } else if (player2WinsRole) {
      player2RoleWins += 1;
      elSlotContainers.player1[role].classList.add("lost-role");
      elTeamSlots.player1[role].classList.add("lost-role");
    }

  });

  let overallWinnerText = "Unentschieden";
  let overallWinnerClass = "winner-tie";
  if (player1RoleWins > player2RoleWins) {
    overallWinnerText = `Spieler 1 gewinnt (${player1RoleWins}:${player2RoleWins})`;
    overallWinnerClass = "winner-p1";
  } else if (player2RoleWins > player1RoleWins) {
    overallWinnerText = `Spieler 2 gewinnt (${player2RoleWins}:${player1RoleWins})`;
    overallWinnerClass = "winner-p2";
  }

  elTeamWinnerBanner.textContent = `Ergebnis: ${overallWinnerText}`;
  elTeamWinnerBanner.classList.remove("hidden", "winner-p1", "winner-p2", "winner-tie");
  elTeamWinnerBanner.classList.add(overallWinnerClass);
}

function setRankClasses(el, rank) {
  el.classList.remove(
    "rank-legendary",
    "rank-epic",
    "rank-elite",
    "rank-advanced",
    "rank-basic",
    "rank-noob"
  );
  if (VALID_RANKS.has(rank)) {
    el.classList.add(`rank-${rank}`);
  }
}

function formatRank(rank) {
  if (!rank) return "";
  const labels = {
    [LEGENDARY_RANK]: "Legendary",
    [EPIC_RANK]: "Epic",
    [ELITE_RANK]: "Elite",
    [ADVANCED_RANK]: "Advanced",
    [BASIC_RANK]: "Basic",
    [NOOB_RANK]: "Noob",
  };
  return labels[rank] || rank.charAt(0).toUpperCase() + rank.slice(1);
}

function getRankSymbol(rank) {
  const symbols = {
    [LEGENDARY_RANK]: "★",
    [EPIC_RANK]: "✦",
    [ELITE_RANK]: "◆",
    [ADVANCED_RANK]: "▣",
    [BASIC_RANK]: "•",
    [NOOB_RANK]: "☠",
  };
  return symbols[rank] || "";
}

function evaluateCharacterRank(char) {
  const explicitRank = typeof char.rank === "string" ? char.rank.trim().toLowerCase() : "";
  if (VALID_RANKS.has(explicitRank)) {
    return explicitRank;
  }

  if (MANUAL_RANK_OVERRIDES.has(char.id)) {
    return MANUAL_RANK_OVERRIDES.get(char.id);
  }

  if (LEGENDARY_CHARACTER_IDS.has(char.id)) return LEGENDARY_RANK;
  if (EPIC_CHARACTER_IDS.has(char.id)) return EPIC_RANK;
  if (ELITE_CHARACTER_IDS.has(char.id)) return ELITE_RANK;
  if (ADVANCED_CHARACTER_IDS.has(char.id)) return ADVANCED_RANK;
  if (BASIC_CHARACTER_IDS.has(char.id)) return BASIC_RANK;
  if (NOOB_CHARACTER_IDS.has(char.id)) return NOOB_RANK;

  const tags = Array.isArray(char.tags)
    ? new Set(char.tags.map((tag) => String(tag).toLowerCase()))
    : new Set();

  const faction = String(char.faction || "").toLowerCase();
  const alias = String(char.alias || "").toLowerCase();

  let score = 0;

  if (tags.has("yonkou")) score += 6;
  if (tags.has("admiral")) score += 5;
  if (tags.has("legende")) score += 5;
  if (tags.has("kapitän")) score += 3;
  if (tags.has("sieben-samurai")) score += 3;
  if (tags.has("supernovae")) score += 2;
  if (tags.has("hauptcharakter")) score += 2;
  if (tags.has("cp9")) score += 1;
  if (tags.has("revolution")) score += 3;
  if (tags.has("marine")) score += 1;
  if (tags.has("weltregierung")) score += 1;
  if (tags.has("samurai")) score += 2;
  if (tags.has("wano")) score += 1;
  if (tags.has("royalität")) score += 1;
  if (tags.has("riese")) score += 1;

  if (faction.includes("roger")) score += 3;
  if (faction.includes("whitebeard")) score += 3;
  if (faction.includes("beasts pirates")) score += 2;
  if (faction.includes("big mom")) score += 2;
  if (faction.includes("marine") && tags.has("admiral")) score += 2;

  if (alias.includes("piratenkönig") || alias.includes("buddha")) score += 3;
  if (alias.includes("whitebeard") || alias.includes("könig der bestien")) score += 2;

  // Schwächere Kategorien bekommen Minuspunkte und landen häufiger bei "noob".
  if (tags.has("zivilist")) score -= 3;
  if (tags.has("kind")) score -= 3;
  if (tags.has("tier")) score -= 2;
  if (tags.has("koch") && !tags.has("pirat")) score -= 1;
  if (tags.size === 0) score -= 1;

  if (score >= 8) return EPIC_RANK;
  if (score >= 6) return ELITE_RANK;
  if (score >= 4) return ADVANCED_RANK;
  if (score >= 1) return BASIC_RANK;
  if (score <= 0) return NOOB_RANK;
  return BASIC_RANK;
}

let statusTimer = null;

function showStatus(msg) {
  if (statusTimer) {
    clearTimeout(statusTimer);
    elStatus.classList.remove("fade");
  }
  elStatus.textContent = msg;
  statusTimer = setTimeout(() => {
    elStatus.classList.add("fade");
    statusTimer = null;
  }, 3000);
}

function getPlayerLabel(player) {
  return player === "player1" ? "Spieler 1" : "Spieler 2";
}

function getRoleLabel(role) {
  const labels = {
    captain:     "Kapitän",
    viceCaptain: "Vize-Kapitän",
    healer:      "Heiler",
    tank:        "Tank",
    support:     "Support",
    traitor:     "Verräter",
  };
  return labels[role] || role;
}

// ═══════════════════════════════════════════════════════════════
// START
// ═══════════════════════════════════════════════════════════════

init();
