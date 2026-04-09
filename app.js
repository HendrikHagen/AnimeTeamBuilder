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
  jokerAvailable: {
    player1: true,
    player2: true,
  },
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
const elJokerButtons = {
  player1: document.getElementById("btn-joker-player1"),
  player2: document.getElementById("btn-joker-player2"),
};

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

// ═══════════════════════════════════════════════════════════════
// INITIALISIERUNG
// ═══════════════════════════════════════════════════════════════

function init() {
  if (!Array.isArray(CHARACTERS) || CHARACTERS.length === 0) {
    showStatus("Fehler: Keine Charakterdaten gefunden. Bitte characters.js prüfen.");
    elBtnDraw.disabled = true;
    return;
  }

  try {
    state.allCharacters = CHARACTERS.map(enrichCharacter);
  } catch (error) {
    console.error("Fehler beim Laden der Charakterdaten:", error);
    showStatus(`Fehler in characters.js: ${error.message}`);
    elBtnDraw.disabled = true;
    return;
  }

  resetRound(/* silent */ true);

  elBtnDraw.addEventListener("click", drawRandomCharacter);
  elBtnReset.addEventListener("click", () => resetRound());

  elRoleButtons.forEach((btn) => {
    btn.addEventListener("click", () => assignRole(btn.dataset.player, btn.dataset.role));
  });

  Object.entries(elJokerButtons).forEach(([player, button]) => {
    if (!button) return;
    button.addEventListener("click", () => useJoker(player));
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
  if (isRoundComplete()) {
    showStatus("Die Runde ist beendet. Bitte zuerst zurücksetzen.");
    updateDrawButtonState();
    return;
  }

  if (state.currentCharacter) {
    showStatus("Bitte zuerst eine Rolle auswählen oder den Joker einsetzen.");
    return;
  }

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
  updateDrawButtonState();
  const rankPrefix = `[${formatRank(state.currentCharacter.rank).toUpperCase()}] `;
  showStatus(`${rankPrefix}„${state.currentCharacter.name}" gezogen.`);
}

function useJoker(player) {
  if (player !== state.currentTurn) {
    showStatus(`Bitte warten – ${getPlayerLabel(state.currentTurn)} ist dran.`);
    return;
  }

  if (!state.currentCharacter) {
    showStatus("Du kannst den Joker erst nach einem Draw einsetzen.");
    return;
  }

  if (!state.jokerAvailable[player]) {
    showStatus(`${getPlayerLabel(player)} hat den Joker bereits genutzt.`);
    return;
  }

  const previousCharacterId = state.currentCharacter.id;
  const nextCharacter = pickRandomCharacterFromPool(previousCharacterId);

  if (!nextCharacter) {
    showStatus("Kein alternativer Charakter für den Joker verfügbar.");
    return;
  }

  state.jokerAvailable[player] = false;
  state.currentCharacter = nextCharacter;

  renderCurrentCharacter();
  renderRoleSection();
  updateDrawButtonState();

  const rankPrefix = `[${formatRank(nextCharacter.rank).toUpperCase()}] `;
  showStatus(`${getPlayerLabel(player)} setzt den Joker ein: ${rankPrefix}„${nextCharacter.name}".`);
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

  // State aufräumen
  state.currentCharacter = null;
  renderCurrentCharacter();
  elRoleSection.classList.add("hidden");
  renderTeams();

  updateDrawButtonState();
}

/**
 * Setzt die gesamte Runde zurück. Spieler 1 beginnt wieder.
 *
 * @param {boolean} [silent=false]
 */
function resetRound(silent = false) {
  state.currentCharacter    = null;
  state.currentTurn         = "player1";
  state.jokerAvailable = {
    player1: true,
    player2: true,
  };
  state.availableCharacters = [...state.allCharacters];
  state.teams = {
    player1: { captain: null, viceCaptain: null, healer: null, tank: null, support: null, traitor: null },
    player2: { captain: null, viceCaptain: null, healer: null, tank: null, support: null, traitor: null },
  };

  renderCurrentCharacter();
  elRoleSection.classList.add("hidden");
  renderTeams();
  renderEvaluation();
  updateDrawButtonState();

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

  ["player1", "player2"].forEach((player) => {
    const jokerBtn = elJokerButtons[player];
    if (!jokerBtn) return;

    const isActivePlayer = player === active;
    const hasCurrentCharacter = Boolean(state.currentCharacter);
    const hasJoker = Boolean(state.jokerAvailable[player]);
    const canRerollToDifferentChar = state.availableCharacters.length > 1;
    const isUsable = isActivePlayer && hasCurrentCharacter && hasJoker && canRerollToDifferentChar;

    jokerBtn.disabled = !isUsable;
    jokerBtn.textContent = hasJoker ? "Joker einsetzen (1)" : "Joker verbraucht";
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

function pickRandomCharacterFromPool(excludeCharacterId = "") {
  const pool = state.availableCharacters;
  if (pool.length === 0) return null;

  const candidates = excludeCharacterId && pool.length > 1
    ? pool.filter((char) => char.id !== excludeCharacterId)
    : pool;

  if (candidates.length === 0) return null;
  const index = Math.floor(Math.random() * candidates.length);
  return candidates[index];
}

function updateDrawButtonState() {
  const roundIsComplete = isRoundComplete();
  const hasOpenCharacter = Boolean(state.currentCharacter);
  const hasPoolEntries = state.availableCharacters.length > 0;
  elBtnDraw.disabled = roundIsComplete || hasOpenCharacter || !hasPoolEntries;
}

function isRoundComplete() {
  return isTeamComplete("player1") && isTeamComplete("player2");
}

// ═══════════════════════════════════════════════════════════════
// BILD-FUNKTIONEN
// ═══════════════════════════════════════════════════════════════

function enrichCharacter(char) {
  const sourceMeta = getImageSourceMeta(char.id);
  return {
    ...char,
    rank: normalizeCharacterRank(char),
    power: requireExplicitCharacterPower(char),
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

function normalizeCharacterRank(char) {
  const explicitRank = typeof char.rank === "string" ? char.rank.trim().toLowerCase() : "";
  if (VALID_RANKS.has(explicitRank)) {
    return explicitRank;
  }

  throw new Error(`Ungültiger oder fehlender Rank für ${char.name || char.id || "unbekannten Charakter"}.`);
}

function requireExplicitCharacterPower(char) {
  const explicitPower = Number(char.power);
  if (Number.isFinite(explicitPower)) {
    return clampPower(explicitPower);
  }

  throw new Error(`Fehlende oder ungültige Power für ${char.name || char.id || "unbekannten Charakter"}.`);
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
