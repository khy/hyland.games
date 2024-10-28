import kaplay from "kaplay";

kaplay();

const SpriteScale = 5;
const TileWidth = 16 * SpriteScale;
const TileHeight = 16 * SpriteScale;

loadSprite("grassTiles", "./assets/Grass_tiles_v2.png", {
    sliceX: 11,
    sliceY: 7
});

loadSprite("jack", "./assets/Premium Charakter Spritesheet.png", {
    sliceX: 8,
    sliceY: 24,
    anims: {
        idleDown: { from: 0, to: 7, loop: true },
        idleUp: { from: 8, to: 15, loop: true },
        idleRight: { from: 16, to: 23, loop: true },
        idleLeft: { from: 24, to: 31, loop: true },
        walkDown: { from: 32, to: 39, loop: true },
        walkUp: { from: 40, to: 47, loop: true },
        walkRight: { from: 48, to: 55, loop: true },
        walkLeft: { from: 48, to: 55, loop: true },
    }
})

function setTile(column, row, spriteType, spriteFrame) {
    add([
        sprite(spriteType, { frame: spriteFrame }),
        pos(column * TileWidth, row * TileHeight),
        scale(SpriteScale)
    ])
}

setTile(0, 0, "grassTiles", 0);
setTile(1, 0, "grassTiles", 1);
setTile(2, 0, "grassTiles", 2);
setTile(0, 1, "grassTiles", 11);
setTile(1, 1, "grassTiles", 12);
setTile(2, 1, "grassTiles", 13);
setTile(0, 2, "grassTiles", 11);
setTile(1, 2, "grassTiles", 12);
setTile(2, 2, "grassTiles", 13);
setTile(2, 3, "grassTiles", 9);
setTile(1, 3, "grassTiles", 23);
setTile(0, 3, "grassTiles", 22);
setTile(3, 3, "grassTiles", 2);
setTile(2, 4, "grassTiles", 22);
setTile(3, 4, "grassTiles", 9);

const jack = add([
    sprite("jack", { anim: "idleDown" }),
    scale(SpriteScale),
    pos(0, 0),
    area(),
    body()
]);

onKeyDown("right", () => {
    jack.play("walkRight");
    jack.move(100, 0);
});