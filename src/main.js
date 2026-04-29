import { createGame } from "./game.js";
import { levels } from "./data/levels/index.js";

const ui = {
  mainMenu: document.querySelector("#main-menu"),
  gameScreen: document.querySelector("#game-screen"),
  levelGrid: document.querySelector("#level-grid"),
  menuPlayButton: document.querySelector("#menu-play-button"),
  canvas: document.querySelector("#game-canvas"),
  livesValue: document.querySelector("#lives-value"),
  goldValue: document.querySelector("#gold-value"),
  playerLevelButton: document.querySelector("#player-level-button"),
  playerLevelValue: document.querySelector("#player-level-value"),
  playerXpBar: document.querySelector("#player-xp-bar"),
  levelNameValue: document.querySelector("#level-name-value"),
  waveValue: document.querySelector("#wave-value"),
  killsValue: document.querySelector("#kills-value"),
  speedControl: document.querySelector("#speed-control"),
  gearButton: document.querySelector("#gear-button"),
  timeStopButton: document.querySelector("#time-stop-button"),
  timeStopStatus: document.querySelector("#time-stop-status"),
  weaponBar: document.querySelector("#weapon-bar"),
  pauseModal: document.querySelector("#pause-modal"),
  resumeButton: document.querySelector("#resume-button"),
  restartButton: document.querySelector("#restart-button"),
  changeLevelButton: document.querySelector("#change-level-button"),
  resultModal: document.querySelector("#result-modal"),
  resultTitle: document.querySelector("#result-title"),
  resultCopy: document.querySelector("#result-copy"),
  resultRestartButton: document.querySelector("#result-restart-button"),
  resultLevelsButton: document.querySelector("#result-levels-button"),
};

createGame({ ui, levels });
