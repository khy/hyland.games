export const nodes = {
  start: {
    text: `You open your eyes to find yourself lying in tall grass at the base of a crumbling stone tower. The sky is a bruised purple, and a wind carries the smell of rain. You have no memory of how you got here.`,
    options: [
      { label: 'Enter the tower', next: 'tower_entrance' },
      { label: 'Explore the forest', next: 'forest' },
      { label: 'Walk toward the river', next: 'river' },
    ],
  },

  forest: {
    text: `The forest is dense and ancient. Roots twist across your path like sleeping serpents. Deeper in, you spot a flickering light between the trees.`,
    options: [
      { label: 'Move toward the light', next: 'forest_shrine' },
      { label: 'Return to the tower', next: 'start' },
    ],
  },

  forest_shrine: {
    text: `You find a mossy stone altar. A brass oil lamp burns atop it — somehow still lit. Beside it rests a small iron amulet on a chain, etched with a symbol you almost recognize.`,
    options: [
      { label: 'Take the amulet', next: 'forest_amulet' },
      { label: 'Leave it and return', next: 'start' },
    ],
  },

  forest_amulet: {
    text: `The amulet is cold and heavier than it looks. As you lift it, the lamp extinguishes. The symbol glows faintly for a moment, then goes dark. You pocket it and make your way back to the tower.`,
    options: [
      { label: 'Return to the tower', next: 'start' },
    ],
  },

  river: {
    text: `The river runs fast and dark. On the far bank you can make out the lights of a small settlement. A rotting wooden bridge spans the water — it does not look trustworthy.`,
    options: [
      { label: 'Try to cross the bridge', next: 'river_cross' },
      { label: 'Follow the riverbank south', next: 'river_south' },
      { label: 'Return to the tower', next: 'start' },
    ],
  },

  river_cross: {
    text: `Halfway across, two planks give way simultaneously. You plunge into the freezing current. The river is faster than you are. It carries you a long way before it lets you go.\n\nYou do not find the tower again.`,
    options: [],
  },

  river_south: {
    text: `Following the bank south, you discover the remains of an old mill. Rotting timbers lean over the water, forming a natural crossing. You pick your way across and climb the far bank toward the lights.`,
    options: [
      { label: 'Continue to the settlement', next: 'village' },
      { label: 'Turn back', next: 'start' },
    ],
  },

  village: {
    text: `The settlement is small and weathered. An old woman sits by a fire and looks up without surprise.\n\n"The tower," she says before you can speak.\n\nShe tells you that people appear at its base from time to time — none of them remember how. Most wander until they don't. "The door is at the top," she says, poking the fire. "It only opens at dusk."`,
    options: [
      { label: 'Return to the tower', next: 'tower_entrance' },
    ],
  },

  tower_entrance: {
    text: `The tower's entrance is a low arch of black stone. Inside it smells of cold ash and something older — like paper that's been wet and dried a thousand times. A spiral staircase winds upward into darkness.`,
    options: [
      { label: 'Climb the stairs', next: 'tower_mid' },
      { label: 'Search the ground floor first', next: 'tower_ground' },
    ],
  },

  tower_ground: {
    text: `In a crumbling alcove you find a logbook, its pages warped and brown. The entries are dated across three different centuries, written in different hands. But they all end the same way:\n\n"The door opens at dusk. Do not wait for dawn."`,
    options: [
      { label: 'Climb the stairs', next: 'tower_mid' },
    ],
  },

  tower_mid: {
    text: `The second floor is a single round room. A large window faces west, where the sun is sinking toward the horizon. The light catches motes of dust and turns them gold. There is nothing here but a broken chair and time.\n\nYou continue up.`,
    options: [
      { label: 'Continue to the top', next: 'tower_top' },
    ],
  },

  tower_top: {
    text: `The top of the tower is open to the sky. The view is vast — forest, river, the distant village, and beyond them all, a gray expanse of ocean you hadn't suspected.\n\nAt the center of the platform stands a door. Just a door, unattached to anything, standing on its own. The sun touches the horizon. The door swings open by itself. Beyond it is warm light — familiar in a way this world is not.`,
    options: [
      { label: 'Step through the door', next: 'ending_escape' },
      { label: 'Wait and watch the sunset', next: 'ending_wait' },
    ],
  },

  ending_escape: {
    text: `You step through.\n\nFor a moment you feel everything at once — the cold weight in your pocket, the ache in your legs, that strange purple sky pulling at your heels like a tide.\n\nThen: your kitchen. The smell of coffee. Your phone on the counter, dark. Three missed calls from your sister.\n\nOutside the window, an ordinary morning. You stand there for a long time before reaching for the phone.`,
    options: [],
  },

  ending_wait: {
    text: `You sit on the edge of the platform and watch the sun go down. The door stays open a while longer — you can feel the warmth of it on your face — and then, gently, it closes.\n\nBy the time you think to try the handle, it's just wood. The tower grows cold. Somewhere below, in the forest, the lamp in the shrine flickers back to life.\n\nYou are here now. That is all.`,
    options: [],
  },
}
