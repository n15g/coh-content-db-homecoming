import { BadgeData } from 'coh-content-db'

export const RippleRaider: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'ripple-raider',
  setTitle: { id: 2479 },
  name: [
    { value: 'Ripple Raider' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: `You've shown yourself to be incredibly adaptable by overcoming every threat found in the familiar-yet-different dimensional ripples Golden Roller tossed your team into without a single defeat being suffered by your team.` },
  ],
  acquisition: `Conquer all three challenge encounters within Golden Roller's dimensional ripples in a single attempt in Dr. Aeon's Strike Force.`,
  notes: `
This includes defeating the specific archvillains listed below:

* Nosferatu
* Arakhn
* Maestro
* Protean
* Emperor Requiem
* Gale
* Tundra
* Slate
* Quill
* Terra, the All-Mother
* Hero 1
* Incandescent`,
  links: [
    { title: 'Ripple Raider Badge', href: 'https://homecoming.wiki/wiki/Ripple_Raider_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/sf-aeon.png' },
  ],
}
