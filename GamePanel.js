import { c, canvas } from "./main.js";
import { worldX, worldY } from "./Player.js";
//Screeen settings
const originalTileSize = 16;
const scale = 3;
export const tileSize = originalTileSize * scale;
const maxScreenCol = 16;
const maxScreenRow = 12;
export const secMilisec = 10000000;
export const FPS = 60;

const image = new Image();
image.src = "./Mapa/Mapa.png";

let imgPegDown1 = new Image();
imgPegDown1.src = "Img/Sprite/pj_down1.png";

export let myGameArea = {
  start: () => {
    canvas.width = tileSize * maxScreenCol;
    canvas.height = tileSize * maxScreenRow;
    initializeCanvas();
  },
  repaint: () => {
    initializeCanvas();
    image.onload(worldX, worldY);
  },
};

const initializeCanvas = () => {
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);
  image.onload = () => {
    c.drawImage(image, worldX, worldY);
  };
};
