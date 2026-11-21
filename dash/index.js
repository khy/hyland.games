import kaplay from "kaplay";

let move = 0

kaplay({
  width: 400,
  height: 400,
  scale: 3
});

loadSprite("sprites", "/assets/dash.png", {
  sliceX: 33,
  sliceY: 3,
});

const jack = add([
  sprite("sprites", { frame: 41 }),
  pos(0, 304),
  area(),
  body(),
  scale(3)
]);

// add floor sprites
for (let i = 0; i < 10; i++) {
  add([
    sprite("sprites", { frame: 1 }),
    pos(i * 48, 352),
    area(),
    body(),
    scale(3)
  ]);
}

let right = true

onKeyPress(["up", "space"], () => {
  jack.jump()})
