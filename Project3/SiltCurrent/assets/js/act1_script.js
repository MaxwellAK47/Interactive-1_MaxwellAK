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

const scenes = {
  // Intro
  Cover: {
    Title: "Title_Spread",
    text: "",
    image: "Cover",
    size: "medium",
    choices: [{ label: "Start Game", next: "Intro_A", sound: "Pressed" }],
  },
  // Title Page + Background Here?
  Intro_A: {
    text: "",
    image: "Intro_A",
    size: "Intro",
    choices: [{ label: "Continue", next: "Intro_B", sound: "Pressed" }],
  },
  // Title Page + Background Here?
  Intro_B: {
    text: "",
    image: "Intro_B",
    size: "Intro",
    choices: [{ label: "Continue", next: "scene1", sound: "Pressed" }],
  },
  // Scene 1:
  scene1: {
    text: "You climb the top of this mountain overlooking the city, everything seems so small and far away from here. </br>You noticed a stranger siting by himself, looking out at the city, What do you do?",
    image: "TheView",
    size: "small",
    choices: [
      { label: "Approach the stranger.", next: "scene2", sound: "Pressed" },
      { label: "Ignore them", next: "Ignore", sound: "Drop" },
    ],
  },
  // Ignore Ending:
  Ignore: {
    text: "You ignore the stranger, how disapointing. ",
    size: "large",
    image: "TenYears",
    choices: [
      { label: " lets try this again", next: "scene1", sound: "Pressed" },
    ],
  },

  // Scene 2:
  scene2: {
    text: "The stranger looks like thier just blankly stare towards the city lights they haven't noticed you, yet. What do you say?",
    size: "small",
    image: "TheView",
    choices: [
      { label: "Hello", next: "scene3", sound: "Raise" },
      { label: "Sup", next: "scene_2sar", sound: "Success" },
    ],
  },
  // Scene 2-Sarcastic
  scene_2sar: {
    text: "They turn to look at you 'Sup, come on sit down you must be tired after the hike' He gestures for you to sit down.",
    size: "huge",
    image: "TheNarrator",
    choices: [
      { label: "Why are you up here?", next: "scene4", sound: "Pressed" },
      {
        label: "You bid him farewell, turning back to the city.",
        next: "scene1",
        sound: "Drop",
      },
    ],
  },
  // Scene 3:
  scene3: {
    text: "They turn to look at you 'Oh hey didn't expect to see someone up here, especially at this time.'",
    size: "huge",
    image: "TheNarrator",
    choices: [
      { label: "Why are you up here?", next: "scene4", sound: "Pressed" },
      {
        label: "You greet him and introduce yourself.",
        next: "scene_3intro",
        sound: "Raised",
      },
      { label: "...", next: "scene_3mute", sound: "Boom" },
    ],
  },
  // Scene 3-Intro
  scene_3intro: {
    text: "'Woah, that's a really *ahem* unique name…!? I haven't come across that one before… Well nice to meet you my names Maxwell but you can call me Max.'",
    size: "huge",
    image: "TheNarrator",
    choices: [
      { label: "Why are you up here Max?", next: "scene4", sound: "Pressed" },
      {
        label: "You bid him farewell, turning back to the city.",
        next: "scene1",
        sound: "Boom",
      },
    ],
  },
  // Scene 3-Mute:
  scene_3mute: {
    text: "'Hmm not the talkative type are you? Well that doesn't matter your still welcome here.' he gestures you to sit down anyway.",
    size: "huge",
    image: "TheNarrator",
    choices: [
      { label: "So... Why are you up here?", next: "scene4", sound: "Pressed" },
      {
        label: "Walk away to look back at the city.",
        next: "scene1",
        sound: "Boom",
      },
    ],
  },
  // Scene 4
  scene4: {
    text: "'Hmm well because I enjoy the view from up here especially at this whem when It's quiet and I can see whole city.' With a smile, he gestures for you to sit down.",
    size: "huge",
    image: "TheNarrator",
    choices: [
      {
        label: "You sit down on a nearby rock.",
        next: "scene5",
        sound: "Pressed",
      },
      {
        label: "No thanks. You bid him farewell, turning back to the city.",
        next: "scene1",
        sound: "Boom",
      },
    ],
  },
  // Scene 5-Questioning
  scene5: {
    text: "The rock does not feel good at all to sit on but it'll do for now. What do you ask him?",
    size: "huge",
    image: "TheNarrator",
    choices: [
      { label: "So ... Whats your story", next: "scene5A", sound: "Pressed" },
      {
        label: "Why are you up here, especially at this time?",
        next: "scene5B",
        sound: "Pressed",
      },
    ],
  },
  // Scene 5-Q-A
  scene5A: {
    text: "'I come up here often to reflect: more specifically on my home'</br> He looks towards the city in introspective reflection.",
    size: "huge",
    image: "TheNarrator",
    choices: [{ label: "Continue", next: "scene6", sound: "Pressed" }],
  },
  // Scene 5-Q-B
  scene5B: {
    text: "'Hmm well I enjoy it up here. It's quiet and I can see the city, well mostly for the quiet solitude but seeing you up here is a surprise.'He looks briefly towards you then looks back towards the city. He seems deep in reflection, about what though?",
    size: "huge",
    image: "TheNarrator",
    choices: [{ label: "Continue", next: "scene6", sound: "Pressed" }],
  },
  // Scene 6
  scene6: {
    text: "He turns to look at you 'So, why are you here?'",
    size: "huge",
    image: "TheNarrator",
    choices: [
      {
        label: "I was just curious of the night time city lights",
        next: "scene6A",
        sound: "Pressed",
      },
      {
        label: "I wanted a break from the city",
        next: "scene6B",
        sound: "Pressed",
      },
      {
        label: "I... Don't really know, I guess I felt like it",
        next: "scene6C",
        sound: "Pressed",
      },
      {
        label: "...",
        next: "scene6D",
        sound: "Pressed",
      },
    ],
  },
  // Scene 6A Curious
  scene6A: {
    text: "He pauses before laughing 'Ha I guess you just like to sight see then, well let me tell you my reason for being up here. Because its not as simple as just 'Looking at lights'",
    size: "huge",
    image: "TheNarrator",
    choices: [{ label: "Continue", next: "scene7", sound: "Pressed" }],
  },
  // Scene 6B Tried
  scene6B: {
    text: "'Don't we all, well let me tell you why I'm up here' He sits there blankly staring out into the city",
    size: "huge",
    image: "TheNarrator",
    choices: [{ label: "Continue", next: "scene7", sound: "Pressed" }],
  },
  // Scene 6C Honest
  scene6C: {
    text: "'Well I guess you don't have an answer for it yet, maybe you'll find out soon enough, as for I 'He stares at you",
    size: "huge",
    image: "TheNarrator",
    choices: [{ label: "Continue", next: "scene7", sound: "Pressed" }],
  },
  // Scene 6D Silence
  scene6D: {
    text: "'So you don't have an answer yet? Well let me tell you mine' He stretches his arms behind his head which makes a cracking sound",
    size: "huge",
    image: "TheNarrator",
    choices: [{ label: "Continue", next: "scene7", sound: "Pressed" }],
  },
  // Scene 7 Narration
  scene7: {
    text: "I like to come up here to reflect on my past, more specifically my grandparents home. As ever since I was a wee baby boy </br></br>*He almost laughs while saying this* </br></br>My Mother every once and a while would take me to visit them. They live pretty close by so it doesn't take long to get to them. Let me see if I can give you something to work with",
    size: "huge",
    image: "TheNarrator",
    choices: [{ label: "TO ACT 2", next: "act2.html" }],
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
const GameTitle = document.querySelector("#GameTitle");

//SFX
const sound = {
  Hover: new Audio("assets/audio/ui_button_mouseover.ogg"),
  Pressed: new Audio("assets/audio/ui_button_pressed.ogg"),
  Success: new Audio("assets/audio/ui_char_level_up.ogg"),
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
  Intro: "ascii-Intro",
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
  ascii.innerHTML = asciiArt[scene.image];
  GameTitle.textContent = asciiArt[scene.Title] || "";
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
goToScene("Cover");
