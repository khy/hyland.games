import { createGame } from 'odyc'

let currentRoom = 'start'

let gotsword=false


const maps = {
    start() {
        let X = 's'

        if (gotsword) {
            X = 'f'
        }

        return {
        width: 12,
        layout: `
        wwwwwwwwwwww
        wffffffffffw
        wffffffffffw
        wfffffff${X}ffd
        wffffffffffw
        wfffbffffffw
        wwwwwwwwwwww
        `
        }
    },
    next() {
        return {
        width: 10,
        layout: `
        wwwwwwwwww
        wffffffffw
        wffffffffw
        dffffffffw
        wffffffefw
        wffffffffw
        wffffffffw
        wffffffffw
        wwwwwwwwww
        `
        }
    },
}

const doors = {
    start: {
        destination: 'next'
    },
    next: {
        destination: 'start'
    }
}

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
        e: {
            sprite: `
            ........
            .555555.
            .595595.
            85555558
            85500558
            95000059
            95555559
            944..449
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
            onCollide(target) {
                gotsword=true
                game.addToCell(target.position[0], target.position[1], 'f')
                game.openDialog('You got the sword!')
			},
		},
        b: {
            sprite: `
            50505050
            05044505
            53477453
            35477435
            53477453
            35477435
            66744766
            67733776
            `,
            onCollide(target) {
                game.openDialog('please deafeat him,deafeat X-taro')
			},
		},
        d: {
            sprite: `
            444444..
            499994..
            466994..
            466994..
            499954..
            466994..
            466994..
            444444..
            `,
            onCollide(target) {
                const door = doors[currentRoom]
                currentRoom = door.destination
                const map = maps[door.destination]()

                let playerX = 1

                if (target.position[0] === 0) {
                    playerX = map.width - 2
                }

                game.loadMap(map.layout, [playerX,3])
			},
        }
    },
    map: maps.start().layout
})