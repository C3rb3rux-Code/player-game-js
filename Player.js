import { c } from "./main.js";
import { myGameArea, tileSize } from "./GamePanel.js";
import { keyPressed, keyReleased } from "./keyHandler.js";

//Posicionamineto peg.
export let personajeX = 380;
export let personajeY = 259;
export let sizePegX = tileSize;
export let sizePegY = tileSize;
export let worldX = -300;
export let worldY = -300;
export const step = 30;

//pg Settings
let direction = "Down";
let speed = 25;
let spriteCounter = 0;
let spriteNum = 1;
let moveUp,
  moveDown,
  moveLeft,
  moveRight = true;

let imgPegUp1 = new Image();
let imgPegUp2 = new Image();
let imgPegDown1 = new Image();
let imgPegDown2 = new Image();
let imgPegLeft1 = new Image();
let imgPegLeft2 = new Image();
let imgPegRight1 = new Image();
let imgPegRight2 = new Image();
let imgPeg1 = new Image();
let imgPeg2 = new Image();

imgPegUp1.src = "Img/Sprite/pj_up1.png";
imgPegUp2.src = "Img/Sprite/pj_up2.png";
imgPegDown1.src = "Img/Sprite/pj_down1.png";
imgPegDown2.src = "Img/Sprite/pj_down2.png";
imgPegLeft1.src = "Img/Sprite/pj_left1.png";
imgPegLeft2.src = "Img/Sprite/pj_left2.png";
imgPegRight1.src = "Img/Sprite/pj_right1.png";
imgPegRight2.src = "Img/Sprite/pj_right2.png";

let char_direction;
//Canvas Images
const clearCanvas = () => {
  c.clearRect(0, 0, canvas.width, canvas.height); //Constante con funcion integrada
};

const mueveCanvas = () => {
  clearCanvas();
  myGameArea.repaint();
  imgPeg1.src = "Img/Sprite/pj_" + char_direction + "1.png";
  imgPeg2.src = "Img/Sprite/pj_" + char_direction + "2.png";
  spriteCounter++;
  if (spriteNum == 1) {
    c.drawImage(imgPeg1, sizePegX, sizePegY);
    spriteNum = 2;
  } else {
    c.drawImage(imgPeg2, sizePegX, sizePegY);
    spriteNum = 1;
  }
  console.log("X: " + worldX + " Y: " + worldY);
  console.log(spriteCounter);
};

export const update = (direction) => {
  document.onkeydown = (e) => {
    if ([moveUp, moveDown, moveLeft, moveRight].some((move) => move === true)) {
      if (e.key === "ArrowUp") {
        direction = "Up";
      } else if (e.key === "ArrowDown") {
        direction = "Down";
      } else if (e.key === "ArrowLeft") {
        direction = "Left";
      } else if (e.key === "ArrowRight") {
        direction = "Right";
      }
    }
    switch (direction) {
      case "Up":
        worldY += speed;
        char_direction = "up";
        mueveCanvas();
        break;
      case "Down":
        worldY -= speed;
        char_direction = "down";
        mueveCanvas();
        break;
      case "Left":
        worldX += speed;
        char_direction = "left";
        mueveCanvas();
        break;
      case "Right":
        worldX -= speed;
        char_direction = "right";
        mueveCanvas();
        break;
    }
  };
};
