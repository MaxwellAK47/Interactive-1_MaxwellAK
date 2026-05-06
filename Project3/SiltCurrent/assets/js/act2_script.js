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
  // =============================================
  // Intro Sequence
  // =============================================
  // Scene 1A:
  scene1A: {
    text: "</br>You Fall Into a deep slumber seeing the picture that of a old home that Max is describeing. </br> </br>You see yourself waking up sitting in the passenger seat in a minivan it drives through a gate guarded by someone.</br></br> I never quite got a good look at the mans face.",
    image: "TheSign",
    size: "huge",
    choices: [{ label: "Continue", next: "scene1B", sound: "Pressed" }],
  },
  // Scene 1B:
  scene1B: {
    text: "</br>The car drives through a winding corrdor of narrow streets it barely fits as it turns right then left stoping infront of the blurry memory of a house.",
    image: "TheSign",
    size: "huge",
    choices: [{ label: "Continue", next: "scene1C", sound: "Pressed" }],
  },
  // Scene 1C:
  scene1C: {
    text: "</br>'They moved out of this home a couple of years ago but they still own the building.</br> I wonder why? well that doesn't matter.'",
    image: "TheSign",
    size: "huge",
    choices: [{ label: "Continue", next: "Front", sound: "Pressed" }],
  },
  // =============================================
  // The Outside the House.
  // =============================================

  // Scene Front Of House:
  Front: {
    text: "</br>'It looks alot blurry than I remember but it will do I'll try to help describe a image of the house to you.'</br> </br>To your right is the way out and infront of you is the house's gate so where to?.",
    size: "small",
    map: "Front",
    image: "Front",
    choices: [
      {
        label: "To the front gate of house",
        next: "FrontGate",
        sound: "Pressed",
      },
      {
        label: "To The Exit",
        next: "ExitGate",
        sound: "Pressed",
      },
    ],
  },
  // FrontGate:
  FrontGate: {
    text: "</br>'The gate is a bit heavy but it should be unlocked, useally theres someone to keep watch here but no one's guarding this home anymore.'",
    size: "small",
    map: "Gate",
    image: "Front",
    choices: [
      { label: "Through the gates", next: "OutsideGarrage", sound: "Pressed" },
      {
        label: "Back To the front",
        next: "Front",
        sound: "Pressed",
      },
    ],
  },
  // Outside Garrage:
  OutsideGarrage: {
    text: "If I remember correctly there are several ways in.</br> </br>To your left is a side door.</br>To the right of that door is the indoor Garrage.</br>To your right is the front door </br>To the right is also the courtyard.</br></br>So where to?",
    size: "PH",
    image: "PH",
    map: "OutGarrage",
    choices: [
      { label: "The Side door", next: "SideHallway", sound: "Pressed" },
      { label: "The Garrage", next: "Garrage", sound: "Pressed" },
      { label: "The Front Door", next: "FrontDoor", sound: "Pressed" },
      { label: "The Courtyard", next: "Courtyard", sound: "Pressed" },
      {
        label: "Out the Front Gate",
        next: "FrontGate",
        sound: "Pressed",
      },
    ],
  },
  // CourtYard:
  Courtyard: {
    text: "This is the courtyard where its covered by a variety of potted plants. </br> I don't remember what they look like so just imagine whatever plant you want, as there were practically every plant you can think off here.",
    image: "PH",
    map: "Courtyard",
    choices: [
      {
        label: "Through the other garrage",
        next: "OpenAirGarrage",
        sound: "Pressed",
      },
      {
        label: "Look at the first floor plants",
        next: "FirstFloorPlantsA",
        sound: "Pressed",
      },
      {
        label: "Outside The Garrage",
        next: "OutsideGarrage",
        sound: "Pressed",
      },
    ],
  },
  // Open Air Garrage:
  OpenAirGarrage: {
    text: "Oh this area of the house it just leads to another gate, we never really used it so its just empty maybe theres a car here sometimes.",
    image: "PH",
    map: "OpenAirGarrage",
    choices: [
      { label: "To the Other Entrace", next: "SideRoom", sound: "Pressed" },
      { label: "To the Courtyard", next: "Courtyard", sound: "Pressed" },
    ],
  },
  // =============================================
  // 1st Floor
  // =============================================
  // Side Hallway:
  SideHallway: {
    text: "In front of you is to the laundry room and to the right side is the garrage.</br>There is also the front of the house.</br></br> 'I rarely ever been here so my memories of this area of the house is so blurry.",
    size: "PH",
    image: "PH",
    map: "SideHallway",
    choices: [
      { label: "To the Laundry Room", next: "Laundry", sound: "Pressed" },
      { label: "To the Garrage", next: "Garrage", sound: "Pressed" },
      { label: "Back outside", next: "OutsideGarrage", sound: "Pressed" },
    ],
  },
  // Garrage:
  Garrage: {
    text: "You see a door to the a hallway to your left side, you see the vauge image of a car infront of you.</br></br>What do you do?",
    size: "PH",
    image: "PH",
    map: "Garrage",
    choices: [
      {
        label: "That car, whats it doing there",
        next: "Car_A",
        sound: "Raise",
      },
      { label: "To the Side Hallway", next: "SideHallway", sound: "Pressed" },
      {
        label: "Outside The Garrage",
        next: "OutsideGarrage",
        sound: "Pressed",
      },
    ],
  },
  // Car Scene A:
  Car_A: {
    text: "Oh that? its the family car, I don't remember what it looks like but I remember it looks like a luxury van from nissan I think.",
    size: "huge",
    image: "TheNarrator",
    choices: [
      {
        label: "Continue",
        next: "Car_B",
        sound: "Pressed",
      },
    ],
  },
  // Car Scene B:
  Car_B: {
    text: "I never really seen them used it before atleast while I was here and they had so many that they all amalgimate into whatever this is.",
    size: "huge",
    image: "TheNarrator",
    choices: [
      {
        label: "Weird",
        next: "Car_C",
        sound: "Pressed",
      },
    ],
  },
  // Car Scene C:
  Car_C: {
    text: "I know right lets just leave it alone, it has seen better days.",
    size: "huge",
    image: "TheNarrator",
    choices: [
      {
        label: "Alright then.",
        next: "Garrage",
        sound: "FoundIT",
      },
    ],
  },
  // Laundry:
  Laundry: {
    text: "The laundry room, I don't remeber if they used a washing machine or just hang dryed the clothes but I do remember something important was in here. </br></br> To your left is the Other Stairs to the 2nd floor </br></br> To your right is the kitchen </br></br> And right behind you is the hallway to the garrage and outside.",
    image: "PH",
    map: "Laundry",
    choices: [
      { label: "To the 2nd Floor", next: "OtherStairs", sound: "Pressed" },
      { label: "To the Kitchen", next: "Kitchen", sound: "Pressed" },
      { label: "Back to the Hallway", next: "SideHallway", sound: "Pressed" },
    ],
  },
  // Kitchen:
  Kitchen: {
    text: "Ah the house's kitchen, I remember that it was always busy here no matter what. </br></br> Its old but it still works but I did remember they redid it a long time ago, probally when I was really young since I have two distince images of this kitchen. </br> My Grandma would allways cook for me and my family when we visit her, as she'd allways cook a fine Ox tail stew.",
    image: "Kitchen",
    size: "small",
    map: "Kitchen",
    choices: [
      { label: "To the Laundry Room", next: "Laundry", sound: "Pressed" },
      { label: "To the Kitchen Bar", next: "Bar", sound: "Pressed" },
    ],
  },
  // Bar:
  Bar: {
    text: "Despite being basically a indoor bar I never saw anyone drink here, But I remember seeing my family just generally hang around here espeically the couch in front.",
    image: "DiningRoom",
    size: "small",
    map: "Bar",
    choices: [
      { label: "To the Dining Room", next: "DiningRoom", sound: "Pressed" },
      { label: "To the Kitchen", next: "Kitchen", sound: "Pressed" },
      { label: "To the Bathroom", next: "FirstBathroom", sound: "Pressed" },
    ],
  },
  // Dining Room:
  DiningRoom: {
    text: "The dineing room, ah a place where when its lunch or dinner where everyone gathers to eat.<br/></br> My Grandma makes a fine Ox tail soup I allways look forward to eating it.",
    size: "small",
    image: "DiningRoom",
    map: "DiningRoom",
    choices: [
      { label: "To the Fridge", next: "FridgeA", sound: "Pressed" },
      { label: "To the Bar", next: "Bar", sound: "Pressed" },
      { label: "To the Living Room", next: "LivingRoom", sound: "Pressed" },
    ],
  },
  // 1st Floor Bathroom:
  FirstBathroom: {
    text: "What a weird looking bathroom, its very small and compact, I'm unsure what that body of water is doing there to be honest.",
    image: "First_Bath_R",
    map: "FirstBathroom",
    choices: [
      { label: "The Weird Looking tub", next: "TubA", sound: "Pressed" },
      { label: "To the Bar ", next: "Bar", sound: "Pressed" },
    ],
  },
  // The Tub A:
  TubA: {
    text: "Oh that I'm not really sure whats that for, I remember allways seeing it full of water every time I used this bathroom.</br> Perhaps its just a bathtub? never really saw anyone used it.",
    image: "PH",
    choices: [{ label: "Continue", next: "TubB", sound: "Pressed" }],
  },
  // Front Door:
  FrontDoor: {
    text: "Infront of you is the front door it a wooden door and has a metal brace in front, it should be unlocked </br></br> To your left is my uncles artifical fish pond.",
    size: "PH",
    image: "PH",
    map: "FrontDoor",
    choices: [
      { label: "A fish pond?", next: "FishPond_A", sound: "Raise" },
      { label: "Go Inside", next: "LivingRoom", sound: "Pressed" },
      { label: "Go Outside", next: "OutsideGarrage", sound: "Pressed" },
    ],
  },
  // Fish Pond A
  FishPond_A: {
    text: "Yeah a fish pond, It's empty now cause I can't really remmeber what kind of fishes were here, If I remember correctly they were random fish he probally fished in the pacific ocean. </br></br> He brought the fish with him when they moved out to a new house. I they have thier own tank inside the house this time.",
    size: "huge",
    image: "TheNarrator",
    map: "FrontDoor",
    choices: [
      { label: "Wow, thats cool", next: "FishPond_B", sound: "Pressed" },
    ],
  },
  // Fish Pond B
  FishPond_B: {
    text: "I remeber disitnctly watching the fish some would go close and look at me to see.",
    size: "huge",
    image: "TheNarrator",
    map: "FrontDoor",
    choices: [
      { label: "Wow, thats cool", next: "FishPond_C", sound: "Pressed" },
    ],
  },
  // Fish Pond C
  FishPond_C: {
    text: "Well lets go back to exploreing the house I think I'm getting closer to remembering this place.",
    size: "huge",
    image: "TheNarrator",
    map: "FrontDoor",
    choices: [{ label: "Alright Then", next: "FrontDoor", sound: "FoundIT" }],
  },
  // Side Room:
  SideRoom: {
    text: "The side room, I never really saw anyone hang around here. The only time someone would be here would be to check on the family dogs in their metal cages.",
    size: "small",
    image: "SideRoom",
    map: "SideRoom",
    choices: [
      {
        label: "Dogs?",
        next: "Dogs_A",
        sound: "Raise",
      },
      {
        label: "to the open air garrage",
        next: "OpenAirGarrage",
        sound: "Pressed",
      },
      { label: "to the front of the stairs", next: "Stairs", sound: "Pressed" },
      { label: "to the Living Room", next: "LivingRoom", sound: "Pressed" },
    ],
  },
  // Dogs_A:
  Dogs_A: {
    text: "Yeah, they usually sleep around here, the family would open the cages and let the dogs walk around the home. </br></br> I distinctly remember when we were younger my older sister would go a pet the dogs. </br> My little brother was both scared and alergic to thier fur so he didn't really go here often.",
    size: "huge",
    image: "TheNarrator",
    choices: [
      {
        label: "Thats unfortunate",
        next: "Dogs_B",
        sound: "Pressed",
      },
    ],
  },
  // Dogs_B
  Dogs_B: {
    text: "My brother likes dogs funny enough, he loves germain shepards.</br></br> My sister would like a big and small dog I don't remember what specific breed she wants though.</br></br> I would like to own a pet dog and cat one day, like a Shiba Inu and a Orange Tabby Cat ",
    size: "huge",
    image: "TheNarrator",
    choices: [{ label: "Thats Cool", next: "Dogs_C", sound: "Pressed" }],
  },
  // Dogs_C
  Dogs_C: {
    text: "So what kind of pet would you like? </br></br> A dog or cat>",
    size: "huge",
    image: "TheNarrator",
    choices: [
      { label: "Dog", next: "Dogs_Dog", sound: "Raise" },
      { label: "Cat", next: "Dogs_Cat", sound: "Raise" },
      { label: "Neither", next: "Dogs_Neither", sound: "Drop" },
    ],
  },
  // Dogs_Dog
  Dogs_Dog: {
    text: "Thats Nice can't go wrong with a dog the classic pet, lets keep exploreing this house then..",
    size: "huge",
    image: "TheNarrator",
    choices: [{ label: "Alrighty Then", next: "SideRoom", sound: "FoundIT" }],
  },
  // Dogs_Cat
  Dogs_Dog: {
    text: "Oh a cat enjoyer thats prety nice, lets keep exploreing this house then.",
    size: "huge",
    image: "TheNarrator",
    choices: [{ label: "Alrighty Then", next: "SideRoom", sound: "FoundIT" }],
  },
  // Dogs_Neither
  Dogs_Neither: {
    text: "Awww, well that was worth the try, lets keep exploreing this house then.",
    size: "huge",
    image: "TheNarrator",
    choices: [{ label: "Alrighty Then", next: "SideRoom", sound: "FoundIT" }],
  },
  // First Floor Plants A
  FirstFloorPlantsA: {
    text: "Ah these plants my grandparents love to garden as hobby I don't remember the specific plants they had but I think they were chinese.",
    image: "PH",
    choices: [
      { label: "Continue", next: "FirstFloorPlantsB", sound: "Pressed" },
    ],
  },
  // Living Room:
  LivingRoom: {
    text: "Oh its the living room, its a place that the family likes to hang out at, pretty open space so the kids would run around here. </br></br> Next to the front door is a shoe rack. </br></br> Your left is the side room where the family dogs are and the stairs to the 2nd floor. </br></br>Infront of you is a exercise machine, plastic kids bike. And a family photo.</br></br>To your right is the dining room</br></br>So where to?",
    image: "LivingRoom",
    size: "small",
    map: "LivingRoom",
    choices: [
      {
        label: "What are those exercise machines doign over there?",
        next: "Execercise_A",
        sound: "Raise",
      },
      {
        label: "That photo over the couch? who is that?",
        next: "Photo_A",
        sound: "Raise",
      },
      { label: "To the Side Room", next: "SideRoom", sound: "Pressed" },
      { label: "To the Dining Room", next: "DiningRoom", sound: "Pressed" },
      {
        label: "To the 1st Floor Bedroom",
        next: "FirstBedroom",
        sound: "Pressed",
      },
      { label: "To the 2nd Floor Stairs", next: "Stairs", sound: "Pressed" },
      { label: "Out The Front Door", next: "FrontDoor", sound: "Pressed" },
    ],
  },
  // Execercise Equipment A
  Execercise_A: {
    text: "Oh these execercise machines I allways remeber hanging out here with my little brother just seeing how fast we can cycle on these bike machines.",
    size: "huge",
    image: "TheNarrator",
    choices: [{ label: "Continue", next: "Execercise_B", sound: "Pressed" }],
  },
  // Execercise Equipment B
  Execercise_B: {
    text: "Its stupid I know but it was fun, do you think it was stupid?",
    size: "huge",
    image: "TheNarrator",
    choices: [
      { label: "Yeah", next: "Execercise_B_A", sound: "Drop" },
      { label: "Nah", next: "Execercise_B_B", sound: "Raise" },
    ],
  },
  // Execercise Equipment B-A
  Execercise_B_A: {
    text: "Well, I guess so, oh well I was a bit dumber when I was younger then, lets keep lookinging around.",
    size: "huge",
    image: "TheNarrator",
    choices: [{ label: "Yep", next: "LivingRoom", sound: "FoundIT" }],
  },
  // Execercise Equipment B-B
  Execercise_B_A: {
    text: "Oh? really well kids are allways gonna be kids I guess, well it was fun though,lets keep lookinging around.",
    size: "huge",
    image: "TheNarrator",
    choices: [{ label: "Yep", next: "LivingRoom", sound: "FoundIT" }],
  },
  // 1st Floor Bedroom:
  FirstBedroom: {
    text: "Wellcome to the 1st floor bedroom, I don't remember who sleeps here, probally my grandparents as they struggle to go up stairs.",
    image: "PH",
    map: "FirstBedroom",
    choices: [
      {
        label: "To the Bedrooms Bathroom",
        next: "Fst_BR_Bathroom",
        sound: "Pressed",
      },
      {
        label: "Back to the living Room",
        next: "LivingRoom",
        sound: "Pressed",
      },
    ],
  },
  // 1st Floor Bedroom Bathroom:
  Fst_BR_Bathroom: {
    text: "Honestly I don't remember much about this room I rarely ever been here.",
    image: "PH",
    map: "Fst_BR_Bathroom",
    choices: [
      {
        label: "To the Bedrooms Bathroom",
        next: "FirstBedroomBathroom",
        sound: "Pressed",
      },
      {
        label: "Back to the Bed Room",
        next: "FirstBedroom",
        sound: "Pressed",
      },
    ],
  },
  // Main Stairs:
  Stairs: {
    text: "Oh the main stairs to the 2nd floor you can go up or you can look around still on the first floor.",
    image: "PH",
    map: "BTMStairs",
    choices: [
      {
        label: "Up to the 2nd Floor",
        next: "SecondFloorStairs",
        sound: "Pressed",
      },
      {
        label: "Back to the Living Room",
        next: "LivingRoom",
        sound: "Pressed",
      },
      { label: "Back to the Side Room", next: "SideRoom", sound: "Pressed" },
    ],
  },
  // Other Stairs:
  OtherStairs: {
    text: "The other stairs to the 2nd floor there are no gaurd rails here, so its best to be careful when walking up or down these stairs.",
    image: "PH",
    map: "O_BTMStairs",
    choices: [
      {
        label: "Up to the 2nd Floor",
        next: "SecondFloorOtherStairs",
        sound: "Pressed",
      },
      { label: "To the Laundry Room", next: "Laundry", sound: "Pressed" },
    ],
  },
  // =============================================
  // The 2nd Floor.
  // =============================================
  // 2nd Floor Main Stairs
  SecondFloorStairs: {
    text: "</br></br>Oh the top of the 2nd floor stairs, theres alot of rooms around here, such as. </br></br>To your right is the kids bedroom. </br></br> To your left is the general room that leads to multiple other rooms. </br></br> And behind you is the stairs back down.</br></br> Where to?",
    image: "Top_Stairs",
    size: "small",
    map: "TopStairs",
    choices: [
      { label: "To the General Room", next: "GeneralRoom", sound: "Pressed" },
      { label: "To the Bedroom", next: "SFA_Bedroom", sound: "Pressed" },
      { label: "Back Down", next: "Stairs", sound: "Pressed" },
    ],
  },
  // General Room
  GeneralRoom: {
    text: "I don't know that this kind of room is called, but I'll just call it the general room as it leads to many other rooms and a balcony outside. </br></br> To your left is the balcony to the front of the house. </br></br> In front of you is the door to my Uncles bedroom</br></br> To your right is a empty room, there's not even a door to that room.</br></br>And to the right of that room is the door to my Grandparents room atleast from my memory, it has been nearly a decade since I've last been here.",
    image: "Uncs_Door",
    size: "small",
    map: "General_Room",
    choices: [
      { label: "Uncles Bedroom", next: "UnclesBedroom", sound: "Pressed" },
      { label: "Who's Bedroom", next: "WhoBedroom", sound: "Pressed" },
      { label: "Empty Bedroom", next: "EmptyBedroom", sound: "Pressed" },
      { label: "To the Balcony", next: "Balcony", sound: "Pressed" },
      { label: "Whats that Shrine?", next: "Shrine_A", sound: "Pressed" },
      {
        label: "Whats that Fishing Rod?",
        next: "FishingRod_A",
        sound: "Pressed",
      },
      {
        label: "To the Main Stairs",
        next: "SecondFloorStairs",
        sound: "Pressed",
      },
    ],
  },
  // Front Balcony
  Balcony: {
    text: "The front balcony, I rarely been up here cause my grandparents told me not to go up here else I'd fall of. </br> I remember there were so many plants up here though when I snuck up here.",
    size: "small",
    image: "SF_Plants",
    map: "F_Balcony",
    choices: [
      {
        label: "The plants, what kind are they",
        next: "SF_Plants_A",
        sound: "Raise",
      },
      { label: "Back Inside", next: "GeneralRoom", sound: "Pressed" },
    ],
  },
  // SF Plants
  SF_Plants_A: {
    text: "2nd Floor Plants",
    size: "small",
    image: "SF_Plants",
    choices: [{ label: "The Plants?", next: "SF_Plants_B", sound: "Pressed" }],
  },
  // Uncles Bedroom
  UnclesBedroom: {
    text: "My uncles bedroom I remember hanging out here with my cousins, they'd allways be playing video games on the TV here facing the bed. </br> ",
    image: "PH",
    map: "Unc_Bedroom",
    choices: [
      { label: "The TV?", next: "UBR_PS5_A", sound: "Pressed" },
      { label: "To the makeup room", next: "MakeupRoom", sound: "Pressed" },
      {
        label: "Back to the general Room",
        next: "GeneralRoom",
        sound: "Pressed",
      },
    ],
  },
  // Makeup Room
  MakeupRoom: {
    text: "My auntie's makeup room, I don't ever remember if she used this room but it does have her stuff so I guess so.",
    image: "PH",
    map: "Makeup",
    choices: [
      { label: "Who uses this room?", next: "Aunt_A", sound: "Pressed" },
      { label: "To Uncles Bathroom", next: "UnclesBathroom", sound: "Pressed" },
      {
        label: "Back to uncles Bedroom",
        next: "UnclesBedroom",
        sound: "Pressed",
      },
    ],
  },
  // Uncles Bathroom
  UnclesBathroom: {
    text: "Same old bathroom, honestly theres not much to it.",
    image: "PH",
    map: "Unc_Bathoom",
    choices: [
      { label: "Really?", next: "Uncle_Bath_A", sound: "Pressed" },
      {
        label: "Back to the makeup room",
        next: "MakeupRoom",
        sound: "Pressed",
      },
    ],
  },
  // Who's Bedroom
  WhoBedroom: {
    text: "I don't remember, who this bedroom is for, maybe one of my uncle or aunt?",
    image: "PH",
    map: "Who",
    choices: [
      { label: "Really?", next: "WHo_Room_A", sound: "Pressed" },
      { label: "To the bathroom", next: "WhoBathRoom", sound: "Pressed" },
      {
        label: "Back to the general Room",
        next: "GeneralRoom",
        sound: "Pressed",
      },
    ],
  },
  // Who's bathroom
  WhoBathroom: {
    text: "Another bathroom, probally one of the more nicer ones in the house.",
    image: "PH",
    map: "Bath_Who",
    choices: [
      { label: "Weird?", next: "Who_Bathroom_A", sound: "Pressed" },
      { label: "Back to the BedRoom", next: "WhoBedRoom", sound: "Pressed" },
    ],
  },
  // Kids Bedroom
  SFA_Bedroom: {
    text: "This room was my mothers bedroom when she was younger now its a kids bedroom for one of my cousins.",
    image: "PH",
    map: "Kids_Room",
    choices: [
      { label: "Your Mothers Room?", next: "KBR_A", sound: "Pressed" },
      { label: "To the other Balcony", next: "OtherBalcony", sound: "Pressed" },
      {
        label: "Back to the stairs",
        next: "SecondFloorStairs",
        sound: "Pressed",
      },
    ],
  },
  // Other Balcony
  OtherBalcony: {
    text: "I don't remember much about this part of the house, I do remember its here but not anything particular stands out here",
    image: "PH",
    map: "O_Balcony",
    choices: [
      {
        label: "What is place used for?",
        next: "OtherBal_A",
        sound: "Pressed",
      },
      { label: "Back Inside", next: "SFA_Bedroom", sound: "Pressed" },
    ],
  },
  // Empty Bedroom
  EmptyBedroom: {
    text: "This room allways creeps me out, I'm unsure as to why there is no door here. Theres a mattress here that one of my uncles use to sleep here.",
    image: "PH",
    map: "E_Bedroom",
    choices: [
      { label: "Why is it empty?", next: "EmptyBedroom_A", sound: "Pressed" },
      { label: "To the Bathroom", next: "EmptyBathroom", sound: "Pressed" },
      {
        label: "To the other stairs",
        next: "SecondFloorOtherStairs",
        sound: "Pressed",
      },
      {
        label: "Back To the general Room",
        next: "GeneralRoom",
        sound: "Pressed",
      },
    ],
  },
  // Empty Bathroom
  EmptyBathroom: {
    text: "Another weird looking bathroom this one is just long but short.",
    image: "PH",
    map: "E_Bathroom",
    choices: [
      {
        label: "Seems Unremarkable and small",
        next: "EmptyBathroom_A",
        sound: "Pressed",
      },
      { label: "Back to the bedroom", next: "EmptyBedroom", sound: "Pressed" },
    ],
  },
  // 2nd Floor Other Stairs
  SecondFloorOtherStairs: {
    text: "The top of the other sets of stairs be sure to be careful while going up and down.",
    image: "PH",
    map: "O_TopStairs",
    choices: [
      { label: "Back Down", next: "OtherStairs", sound: "Pressed" },
      { label: "To the Empty Bedroom", next: "EmptyBedroom", sound: "Pressed" },
    ],
  },
  // =============================================
  // The Exit to act 3.
  // =============================================
  ExitGate: {
    text: "</br>Are you sure about this</br> there will be no going back after this?",
    image: "TheSign",
    size: "huge",
    map: "Exit",
    choices: [
      { label: "Yeah", next: "Act3.html", sound: "Pressed" },
      {
        label: "Not yet",
        next: "Front",
        sound: "Pressed",
      },
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
const mapbtn = document.querySelector("#map-button");
const map = document.querySelector("#map");
const mutebtn = document.querySelector("#mute-button");
const BG_Audio = document.querySelector("#background_audio");

//SFX
const sound = {
  Hover: new Audio("assets/audio/ui_button_mouseover.ogg"),
  Pressed: new Audio("assets/audio/ui_button_pressed.ogg"),
  Raise: new Audio("assets/audio/ui_reputation_raise.ogg"),
  Drop: new Audio("assets/audio/ui_reputation_drop.ogg"),
  Boom: new Audio("assets/audio/VineBoom.mp3"),
  FoundIT: new Audio("assets/audio/story_point_gain_v3.ogg"),
};
//Ascii Sizes
const asciiSizes = {
  small: "ascii-small",
  medium: "ascii-medium",
  large: "ascii-large",
  huge: "ascii-huge",
  PH: "ascii-PH",
};

// Track simple game state here.
function setAsciiSize(size = "medium") {
  ascii.classList.remove(...Object.values(asciiSizes));
  ascii.classList.add(asciiSizes[size] || asciiSizes.medium);
}
// =============================================
// 3. Map Images
// =============================================
const mapImages = {
  // Outside the House
  Front: "assets/Pictures/Map/Outside_House/Front.png",
  Exit: "assets/Pictures/Map/Outside_House/Exit.png",
  Gate: "assets/Pictures/Map/Outside_House/Gate.png",
  OutGarrage: "assets/Pictures/Map/Outside_House/Out_Garrage.png",
  FrontDoor: "assets/Pictures/Map/Outside_House/Front_Door.png",
  Courtyard: "assets/Pictures/Map/Outside_House/Courty_Yard.png",
  OpenAirGarrage: "assets/Pictures/Map/Outside_House/Open_Air_Garrage.png",

  //1st Floor
  SideHallway: "assets/Pictures/Map/1st_Floor/SideHallway.png",
  Garrage: "assets/Pictures/Map/1st_Floor/Garrage.png",
  LivingRoom: "assets/Pictures/Map/1st_Floor/Living_Room.png",
  SideRoom: "assets/Pictures/Map/1st_Floor/Side_Room.png",
  BTMStairs: "assets/Pictures/Map/1st_Floor/Main_Stairs_Bottom.png",
  O_BTMStairs: "assets/Pictures/Map/1st_Floor/Other_Stairs_Bottom.png",
  DiningRoom: "assets/Pictures/Map/1st_Floor/Dining_Room.png",
  Bar: "assets/Pictures/Map/1st_Floor/Bar.png",
  Kitchen: "assets/Pictures/Map/1st_Floor/Kitchen.png",
  Laundry: "assets/Pictures/Map/1st_Floor/Laundry.png",
  FirstBathroom: "assets/Pictures/Map/1st_Floor/1stBathroom.png",
  FirstBedroom: "assets/Pictures/Map/1st_Floor/1stBedroom.png",
  Fst_BR_Bathroom: "assets/Pictures/Map/1st_Floor/BedroomBathroom.png",

  //2nd Floor
  TopStairs: "assets/Pictures/Map/2nd_Floor/Top_Stairs.png",
  General_Room: "assets/Pictures/Map/2nd_Floor/General_Room.png",
  F_Balcony: "assets/Pictures/Map/2nd_Floor/Main_Balcony.png",
  Unc_Bedroom: "assets/Pictures/Map/2nd_Floor/Unc_Bedroom.png",
  Makeup: "assets/Pictures/Map/2nd_Floor/Makeup.png",
  Unc_Bathroom: "assets/Pictures/Map/2nd_Floor/Unc_Bathroom.png",
  Who: "assets/Pictures/Map/2nd_Floor/Who.png",
  Bath_Who: "assets/Pictures/Map/2nd_Floor/Bath_Who.png",
  Kids_Room: "assets/Pictures/Map/2nd_Floor/Kids_Room.png",
  O_Balcony: "assets/Pictures/Map/2nd_Floor/O_Balcony.png",
  E_Bedroom: "assets/Pictures/Map/2nd_Floor/E_Bedroom.png",
  E_Bathroom: "assets/Pictures/Map/2nd_Floor/E_Bathroom.png",
  O_TopStairs: "assets/Pictures/Map/2nd_Floor/O_Top_Stairs.png",
};
// =============================================
// 4. GO TO SCENE
// This runs every time the player clicks a choice.
// =============================================

function goToScene(name) {
  // --- Look up the scene ---
  const scene = scenes[name];

  let storyText = scene.text;

  // --- Update the page ---
  story.innerHTML = storyText;
  ascii.innerHTML = asciiArt[scene.image];
  setAsciiSize(scene.size);

  // --- Update Map Image ---
  if (scene.map && mapImages[scene.map]) {
    map.src = mapImages[scene.map];
  }

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
// RESTART Scene
// =============================================

reset.addEventListener("click", function () {
  goToScene("scene1");
});
// =============================================
// Map
// =============================================
mapbtn.addEventListener("mouseenter", () => {
  sound.Hover.currentTime = 0;
  sound.Hover.play();
});
mapbtn.addEventListener("click", () => {
  sound.Pressed.currentTime = 0;
  sound.Pressed.play();
  toggleImage();
});
// Map shows up
function toggleImage() {
  const isHidden = map.style.display === "none";
  map.style.display = isHidden ? "block" : "none";
  mapbtn.textContent = isHidden
    ? "Press 'K' to Hide Map"
    : "Press 'K' to Show Map";
}
// =============================================
// Mute
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
// =============================================
// On Key Press
// =============================================
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "m") {
    sound.Pressed.currentTime = 0;
    sound.Pressed.play();
    toggleMute();
  }
  if (e.key.toLowerCase() === "k") {
    sound.Pressed.currentTime = 0;
    sound.Pressed.play();
    toggleImage();
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
goToScene("Front");
