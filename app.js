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
    player1: { captain: null, viceCaptain: null, healer: null, tank: null },
    player2: { captain: null, viceCaptain: null, healer: null, tank: null },
  },
};

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
const elCharAlias     = document.getElementById("char-alias");
const elCharFaction   = document.getElementById("char-faction");
const elCharArc       = document.getElementById("char-arc");
const elStatus        = document.getElementById("status");
const elRoleSection   = document.getElementById("role-section");
const elTurnIndicator = document.getElementById("turn-indicator");

const elRoleButtons   = document.querySelectorAll(".btn-role");

// Team-Slot-Werte: elTeamSlots[player][role] → <span>-Element
const elTeamSlots = {
  player1: {
    captain:     document.getElementById("team-p1-captain"),
    viceCaptain: document.getElementById("team-p1-viceCaptain"),
    healer:      document.getElementById("team-p1-healer"),
    tank:        document.getElementById("team-p1-tank"),
  },
  player2: {
    captain:     document.getElementById("team-p2-captain"),
    viceCaptain: document.getElementById("team-p2-viceCaptain"),
    healer:      document.getElementById("team-p2-healer"),
    tank:        document.getElementById("team-p2-tank"),
  },
};

// Team-Slot-Container (für "filled" / "locked"-Klasse)
const elSlotContainers = {
  player1: {
    captain:     document.getElementById("slot-p1-captain"),
    viceCaptain: document.getElementById("slot-p1-viceCaptain"),
    healer:      document.getElementById("slot-p1-healer"),
    tank:        document.getElementById("slot-p1-tank"),
  },
  player2: {
    captain:     document.getElementById("slot-p2-captain"),
    viceCaptain: document.getElementById("slot-p2-viceCaptain"),
    healer:      document.getElementById("slot-p2-healer"),
    tank:        document.getElementById("slot-p2-tank"),
  },
};

// Spalten-Container für aktiv/inaktiv-Styling
const elPlayerCols = {
  player1: document.getElementById("col-player1"),
  player2: document.getElementById("col-player2"),
};

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
  showStatus(`„${state.currentCharacter.name}" gezogen.`);
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
 * @param {string} role   - "captain" | "viceCaptain" | "healer" | "tank"
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
  showStatus(`„${state.currentCharacter.name}" → ${playerLabel} als ${roleLabel}.`);

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
    player1: { captain: null, viceCaptain: null, healer: null, tank: null },
    player2: { captain: null, viceCaptain: null, healer: null, tank: null },
  };

  renderCurrentCharacter();
  elRoleSection.classList.add("hidden");
  renderTeams();
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
    resetImagePresentation();
    return;
  }

  elCard.classList.remove("hidden");
  elCharName.textContent = char.name || "Unbekannt";
  setMeta(elCharAlias,   char.alias   ? `„${char.alias}"`  : "");
  setMeta(elCharFaction, char.faction ? char.faction        : "");
  setMeta(elCharArc,     char.arc     ? `Arc: ${char.arc}` : "");

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
    ["captain", "viceCaptain", "healer", "tank"].forEach((role) => {
      const char      = state.teams[player][role];
      const el        = elTeamSlots[player][role];
      const container = elSlotContainers[player][role];

      if (char) {
        el.textContent = char.name;
        el.classList.remove("empty");
        container.classList.add("filled");
      } else {
        el.textContent = "–";
        el.classList.add("empty");
        container.classList.remove("filled");
      }
    });
  });
}

// ═══════════════════════════════════════════════════════════════
// BILD-FUNKTIONEN
// ═══════════════════════════════════════════════════════════════

function enrichCharacter(char) {
  const sourceMeta = getImageSourceMeta(char.id);
  return {
    ...char,
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
  elCharImageWrap.classList.add("no-image");
}

// ═══════════════════════════════════════════════════════════════
// HILFSFUNKTIONEN
// ═══════════════════════════════════════════════════════════════

function setMeta(el, text) {
  el.textContent   = text;
  el.style.display = text ? "" : "none";
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
  };
  return labels[role] || role;
}

// ═══════════════════════════════════════════════════════════════
// START
// ═══════════════════════════════════════════════════════════════

init();
