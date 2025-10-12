import { createGame } from 'odyc'

const game = createGame({
    screenWidth: 16,
    screenHeight: 11,
    title: ['Pixel Kingdom', 'A retro RPG'],
    player: {
        sprite: `
..9999..
..6666..
..0660..
..6006..
...44...
..6446..
...33...
..6..6..
    `,
        position: [1,1]
    },
})