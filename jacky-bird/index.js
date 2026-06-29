import kaplay from "kaplay";

console.log("Hi Jack ");

kaplay({
  canvas: document.getElementById("app"),
  width: 144,
  height: 256,
  letterbox: true,
  background: "#000000",
});

loadSpriteAtlas("/jacky-bird.png", {
  bg_day: {
    x: 0,
    y: 0,
    width: 144,
    height: 256,
  },
  ground: {
    x: 292,
    y: 0,
    width: 144,
    height: 56,
  },
  pipe_green_top: {
    x: 56,
    y: 323,
    width: 26,
    height: 160,
  },
  pipe_green_bottom: {
    x: 84,
    y: 323,
    width: 26,
    height: 160,
  },
  bird_yellow: {
    x: 0,
    y: 483,
    width: 84,
    height: 28,
    sliceX: 3,
    anims: {
      fly: { from: 0, to: 2, loop: true, speed: 10 },
    },
  },
});

const bg = add[(sprite("bg_day"), pos[(0, 0)])];
