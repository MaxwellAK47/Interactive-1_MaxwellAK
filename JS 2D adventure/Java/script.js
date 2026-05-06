//alert("test");
const STEP_SIZE = 25;
const Sprint_Size = 50;
const START_X = 200; //Left and Right
const START_Y = 200; // Top and Bottom
const box = document.querySelector(".box");
const circle = document.querySelector(".circle");
const xPosText = document.querySelector("#x-pos");
const yPosText = document.querySelector("#y-pos");
const story = document.querySelector(".story");
let xPos = START_X;
let yPos = START_Y;
let hasMoved = false;

xPosText.textContent = xPos;
yPosText.textContent = yPos;

//Move Plauyer
function movePlayer() {
  box.style.left = `${xPos}px`;
  box.style.top = `${yPos}px`;
  xPosText.textContent = xPos;
  yPosText.textContent = yPos;
}
//Update scene Funciton
function updateScene() {
  box.style.backgroundColor = "black";

  if (!hasMoved) {
    return;
  }

  story.textContent = "";

  const TopLeftBoundryX = window.innerWidth / 2;
  const TopLeftBoundryY = window.innerHeight / 2;

  if (xPos <= TopLeftBoundryX && yPos <= TopLeftBoundryY) {
    story.innerHTML =
      "Chapter one:<br /><i>Of the Nature of Flatland</i><br /><br />I call our world Flatland…Imagine a vast sheet of paper on which straight lines, triangles, squares, pentagons, hexagons, and other figures move freely about, yet without the power of rising above or sinking below the surface. Such is the condition of the inhabitants of Flatland.";
  }
  if (xPos >= 300 && xPos <= 450 && yPos >= 300 && yPos <= 450) {
    box.style.backgroundColor = "yellow";
    story.innerHTML =
      "Chapter Two:<br /><i>Of the Climate and Houses in Flatland</i><br /><br />At this period, square houses were still everywhere permitted, though discouraged by a special tax. But, about three centuries afterwards, the Law decided that in all towns containing a population above ten thousand, the angle of a Pentagon was the smallest house-angle that could be allowed consistently with the public safety.";
  }
  if (xPos >= 750 && xPos <= 850 && yPos >= 250 && yPos <= 350) {
    box.style.backgroundColor = "yellow";
    story.innerHTML =
      "Chapter Three:<br /><i>Concerning the Inhabitants of Flatland</i><br /><br />A true Circle in Flatland is not really a circle, but a Polygon with so many sides and angles that it cannot be distinguished from a circle by the eye.";
  }
}

//Controls
document.addEventListener("keydown", (event) => {
  let key = event.key;
  if (event.key.length === 1) {
    key = event.key.toLowerCase();
  }

  if (key === "ArrowLeft" || key === "a") {
    xPos -= STEP_SIZE;
    console.log(key);
  }
  if (key === "ArrowRight" || key === "d") {
    xPos += STEP_SIZE;
    console.log(key);
  }
  if (key === "ArrowUp" || key === "w") {
    yPos -= STEP_SIZE;
    console.log(key);
  }
  if (key === "ArrowDown" || key === "s") {
    yPos += STEP_SIZE;
    console.log(key);
  }
  hasMoved = true;
  movePlayer();
  updateScene();
});
// console.logkey();
movePlayer();
updateScene();
