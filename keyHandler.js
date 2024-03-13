let upPressed,
  downPressed,
  leftPressed,
  rightPressed = false;

export function keyPressed(e) {
  document.onkeydown = (e) => {
    if (e.key === "ArrowUp") {
      upPressed = true;
    }
    if (e.key === "ArrowDown") {
      downPressed = true;
    }
    if (e.key === "ArrowLeft") {
      leftPressed = true;
    }
    if (e.key === "ArrowRight") {
      rightPressed = true;
    }
  };
};

export function keyReleased(e) {
  document.onkeyup = (e) => {
    if (e.key === "ArrowUp") {
        upPressed = false;
      }
      if (e.key === "ArrowDown") {
        downPressed = false;
      }
      if (e.key === "ArrowLeft") {
        leftPressed = false;
      }
      if (e.key === "ArrowRight") {
        rightPressed = false;
      }
  };
};
