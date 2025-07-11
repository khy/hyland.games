import { createGame } from 'odyc'

const game = createGame({
  screenWidth: 16,
	screenHeight: 11,
	title: ['Jake', 'by Jack and Harry'],
    filter: {
		name: 'crt'
	},
    player: {
	    sprite: `
77777777
77777777
77777777
77007007
77007007
77777777
77000007
77077707
    `,
        position: [1,1]
	},
  templates: {
		x: { sprite: 0 },
    y: { sprite: 0, solid: false },
		g: {
      sprite: 7,
      dialog: '%<3>belell the secret door<3>%',
      sound: 'https://achtaitaipai.github.io/pfxr/?fx=1%2C0.25%2C1.14%2C0.07%2C0%2C0.3%2C379%2C0%2C1%2C0%2C36%2C0%2C0%2C0%2C0%2C0%2C4000%2C0%2C208%2C50%2C329%2C0'
    },
		r: {
      sprite: `
..4.4...
..4.4.4.
..4.4.4.
4.44444.
4443434.
.444444.
..43344.
..4444..`,
      dialog: "Hi bro! Its me your brother. I know you lost your memory!",
      onCollide(target) {
			  target.dialog = 'We meet again!'
			}
    },
      k: {
        sprite: `
...55...
...5....
...55...
...5....
...5555.
...5..5.
...5555.
........`,
        onCollide(target) {
          game.playSound("POWERUP")
          game.setCell(8, 4, { visible: false, solid: false })
          game.setCell(8, 5, { visible: false, solid: false })
          game.setCell(8, 6, { visible: false, solid: false })
        }
      }
    },
    map: `
    xxxxxxxxxxxxxxyyyyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    x..............xyyyyyxxxxxxxxxxxxxxxxxxxxxxxxxxx
    x..............xxxxxyyyyyyyyxxxxyyyyyyyyyyyyxxxx
    x..xxxxxxxxxxxyxxxxxxxxxxxyyyyyyyxxxxxxxxxxyyyyy
    x.......x....x.xxxxxxxxxxxxxxxxxxxxxxxxxxxx....x
    x.......x..xgx.xx..............................x
    x.......x..xxx.xx..............................x
    x....r..x......xx..............................x
    x.......x......xx..............................x
    xk......x......xx...............................
    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  `
})