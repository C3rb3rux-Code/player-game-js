import { update, worldX, worldY } from "./Player.js";
import { myGameArea, secMilisec, FPS } from "./GamePanel.js";

export let canvas = document.getElementById("canvas");
export let c = canvas.getContext("2d");

function startGame() {
  myGameArea.repaint();
  update(worldX, worldY);
}

myGameArea.start();
startGame();
setInterval(() => {
  update();
}, secMilisec / FPS);
