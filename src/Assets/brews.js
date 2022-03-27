const assets = require("./assets");
const brews = [
  {
    title: "James Hoffmann",
    coffeeWeight: 30,
    waterWeight: 500,
    brewTime: 210,
    img: assets.hoffmann,
    pre: "Rinse filter and pre-heat V60. Grind coffee medium-fine, add to V60 with a well in the middle.",
    steps: [
      [45, "Add 60g of water, swirl brewer until slurry is even"],
      [30, "Add 240g of water"],
      [30, "Add 200g of water"],
      [
        15,
        "Stir gently clockwise and anticlockwise to kick grounds from the sides",
      ],
      [90, "Gently swirl brewer until drawdown is complete"],
    ],
  },
  {
    title: "Tetsu Kasuya",
    coffeeWeight: 20,
    waterWeight: 300,
    brewTime: 210,
    img: assets.tetsu,
    pre: "Rinse filter and pre-heat V60. Grind coffee coursely and add to V60.",
    steps: [
      [45, "Add 70g of water"],
      [45, "Add 50g of water"],
      [45, "Add 60g of water"],
      [45, "Add 60g of water"],
      [45, "Add 60g of water"],
    ],
  },
  {
    title: "Hario",
    coffeeWeight: 12,
    waterWeight: 120,
    brewTime: 180,
    img: assets.hario,
    pre: "Fold filter paper and place on dripper, before rinsing and warming with boiling water. Pour in 12g of coffee, shaking the V60 lightly to level the grounds.",
    steps: [
      [
        15,
        "Pour boiling water from the centre of the grounds, spiralling outwards",
      ],
      [30, "Let grounds pre-wet."],
      [60, "Pour the rest of the brew with the same spiral motion."],
      [75, "Wait for drawdown to complete, should take just over a minute."],
    ],
  },
  {
    title: "Scott Rao",
    coffeeWeight: 22,
    waterWeight: 360,
    brewTime: 180,
    img: assets.rao,
    pre: "Rinse filter & pre-heat V60. Pour in grounds, flatten.",
    steps: [
      [15, "Pre-wet with 66g water."],
      [45, "Gently excavate to wet all the grounds."],
      [
        60,
        "Start main pour until 360g, gently stirring to stop grounds from clinging to sides.",
      ],
      [60, "Swirl V60 until drawdown is complete."],
    ],
  },
];

module.exports = brews;
