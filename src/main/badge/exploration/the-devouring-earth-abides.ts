import { BadgeData } from 'coh-content-db'
import { Eden } from '../../map/eden'

export const TheDevouringEarthAbides: BadgeData = {
  type: 'EXPLORATION',
  key: 'the-devouring-earth-abides',
  setTitle: { id: 1845 },
  name: [{ value: 'The Devouring Earth Abides' }],
  alignment: ['H'],
  mapKey: Eden.key,
  loc: [-357, 0, 2789],
  badgeText: [{
    value: `Strange whispers echo through this sheltered vale, a place where the Devouring Earth rest and meditate, receiving strange missives from their lord and master: Hamidon.
If you listen hard enough you can catch brief glimmers of understanding.
Hamidon speaks to his children and urges them to be patient, that the time to take back what is rightfully theirs will soon be here.
How does one reckon time when they are immortal? What is "soon" to something with a life-span measured in millennia?`,
  }],
  notes: `Located in [map:${Eden.key}] 170 yards north of The Serpentine marker, in the grassy area within a small clearing in the trees.`,
  links: [
    { title: 'The Devouring Earth Abides Badge', href: 'https://homecoming.wiki/wiki/The_Devouring_Earth_Abides_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '6',
}
