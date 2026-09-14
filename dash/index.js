import kaplay from "kaplay";

kaplay({
  width: 400,
  height: 400,
});

loadSprite("sprites", "/assets/dash.png", {
  sliceX: 33,
  sliceY: 3,
});

const jack = add([
  sprite("sprites", { frame: 38 }),
  pos(200, 200),
  area(),
  body()
]);
