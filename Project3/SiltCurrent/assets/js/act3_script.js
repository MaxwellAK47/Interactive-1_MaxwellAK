// =============================================
// 1. SCENES
//
//   text    - the paragraph shown to the player
//   image   - which image to display
//   choices - the buttons the player can click
//             each choice needs a label and a next (the scene it leads to)
//
// To add a new scene: copy one of these blocks, give it a new name,
// and make sure at least one choice in another scene points to it.
// =============================================
// Load Found Memories
const savedMemories = JSON.parse(localStorage.getItem("foundMemories")) || [];

const savedCount = parseInt(localStorage.getItem("foundCount")) || 0;

console.log(savedMemories);
console.log("Total Memories:", savedCount);

// =============================================
// 1. Scenes
// =============================================
const scenes = {
  // Scene 1:
  scene1: {
    text: "You awake lying on the grass, you see Max looking over you </br></br>Yo You awake?",
    image: "TheView",
    size: "small",
    choices: [{ label: "Yeah", next: "scene2", sound: "Pressed" }],
  },
  // Scene 2:
  scene2: {
    text: "Good, well right now the game is unfinished as I have not added the other endings, atleast yet.",
    image: "TheNarrator",
    size: "huge",
    choices: [{ label: "Wait What?", next: "scene3", sound: "Pressed" }],
  },
  // Scene 3:
  scene3: {
    text: "If I found the time I might finish the endings and interactions especially the ascii as they take alot of time to make.",
    image: "TheNarrator",
    size: "huge",
    choices: [{ label: "Yerp", next: "Restart", sound: "Pressed" }],
  },
  // Restart:
  Restart: {
    text: "Well Thats it I hope you enjoyed the game.",
    image: "TheNarrator",
    size: "huge",
    choices: [
      { label: "Back to Scene 1", next: "scene1", sound: "Boom" },
      { label: "Back to Act 1", next: "ACT1.html", sound: "Boom" },
    ],
  },
};
// =============================================
// 2. SELECTED ELEMENTS
// =============================================

const story = document.querySelector("#story");
const choicesEl = document.querySelector("#choices");
const ascii = document.querySelector("#ascii");
const reset = document.querySelector("#reset");
const mutebtn = document.querySelector("#mute-button");
const BG_Audio = document.querySelector("#background_audio");

//SFX
const sound = {
  Hover: new Audio("assets/audio/ui_button_mouseover.ogg"),
  Pressed: new Audio("assets/audio/ui_button_pressed.ogg"),
  Raise: new Audio("assets/audio/ui_reputation_raise.ogg"),
  Drop: new Audio("assets/audio/ui_reputation_drop.ogg"),
  Boom: new Audio("assets/audio/VineBoom.mp3"),
};
//Ascii Sizes
const asciiSizes = {
  small: "ascii-small",
  medium: "ascii-medium",
  large: "ascii-large",
  huge: "ascii-huge",
};

// Track simple game state here.
function setAsciiSize(size = "medium") {
  ascii.classList.remove(...Object.values(asciiSizes));
  ascii.classList.add(asciiSizes[size] || asciiSizes.medium);
}
// =============================================
// 3. GO TO SCENE
// This runs every time the player clicks a choice.
// =============================================

function goToScene(name) {
  // --- Look up the scene ---
  const scene = scenes[name];

  let storyText = scene.text;

  // --- Update the page ---
  story.innerHTML = storyText;
  ascii.textContent = asciiArt[scene.image];
  setAsciiSize(scene.size);

  // Remove the old buttons
  choicesEl.innerHTML = "";

  // Create a button for each choice in this scene
  for (let i = 0; i < scene.choices.length; i++) {
    const choice = scene.choices[i];

    const btn = document.createElement("p");
    btn.className = "choice";
    btn.textContent = choice.label;

    // On Hover
    btn.addEventListener("mouseenter", () => {
      sound.Hover.currentTime = 0;
      sound.Hover.play();
    });
    // On Click
    btn.addEventListener("click", function () {
      if (choice.sound && sound[choice.sound]) {
        sound[choice.sound].currentTime = 0;
        sound[choice.sound].play();
      }

      if (choice.next.endsWith(".html")) {
        window.location.href = choice.next;
      } else {
        goToScene(choice.next);
      }
    });

    choicesEl.appendChild(btn);
  }

  // restart if there are no choices
  if (scene.choices.length === 0) {
    reset.style.display = "block";
  } else {
    reset.style.display = "none";
  }
}
// =============================================
// RESTART
// =============================================

reset.addEventListener("click", function () {
  goToScene("scene1");
});

// =============================================
// Mute Button
// =============================================
let isMuted = false;
function toggleMute() {
  isMuted = !isMuted;

  BG_Audio.muted = isMuted;

  // update button text
  mutebtn.textContent = isMuted
    ? "Press 'M' to Enable Music"
    : "Press 'M' to Mute Music";
}
mutebtn.addEventListener("mouseenter", () => {
  sound.Hover.currentTime = 0;
  sound.Hover.play();
});
mutebtn.addEventListener("click", () => {
  sound.Pressed.currentTime = 0;
  sound.Pressed.play();
  toggleMute();
});
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "m") {
    sound.Pressed.currentTime = 0;
    sound.Pressed.play();
    toggleMute();
  }
});
document.addEventListener(
  "click",
  () => {
    BG_Audio.muted = false;
    BG_Audio.play().catch((e) => {
      console.log("Audio play failed:", e);
    });
  },
  { once: true },
);
// =============================================
// INITIALIZE WITH FIRST SCENE
// =============================================
goToScene("scene1");
