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
    templates: {
		w: {
			sprite: `
            00000000
            02222020
            00000000
            02022220
            02022220
            00000000
            02222020
            00000000
            `,
            solid: true
		},
        f: {
			sprite: `
            22222122
            22222122
            11111111
            22122222
            22122222
            11111111
            22222122
            22222122
            `,
            solid: false
		},
        s: {
			sprite: `
            ......3.
            .....313
            ....313.
            ...313..
            3.313...
            .313....
            133.....
            31.3....
            `,
		},
        
    },
    map: `
    wwwwwwwwwwww
    wffffffffffw
    wffffffffffw
    wfffffffsffw
    wffffffffffw
    wffffffffffw
    wwwwwwwwwwww
    `
})