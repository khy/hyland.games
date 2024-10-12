import kaplay from "kaplay";

kaplay();

setGravity(2400);

loadSprite("bean", "/bean.png");

const bean = add([sprite("bean"), pos(80, 40), area(), body()]);

add([
  rect(1000, 50),
  area(),
  outline(4),
  pos(300, 100),
  body({
    isStatic: true,
  }),
]);

add([
  rect(300, 50),
  area(),
  outline(4),
  pos(50, 300),
  body({
    isStatic: true,
  }),
]);

onKeyPress("space", () => {
    bean.jump();
  });
  
  onKeyDown("right", () => {
    bean.move(100, 0);
  });
  
  onKeyDown("left", () => {
    bean.move(-100, 0);
  });
  