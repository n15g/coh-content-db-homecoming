import { BadgeData } from 'coh-content-db'
import { TheHive } from '../../map/the-hive'

export const TheWoundedEarth: BadgeData = {
  type: 'EXPLORATION',
  key: 'the-wounded-earth',
  setTitle: { id: 1849 },
  name: [{ value: 'The Wounded Earth' }],
  alignment: ['H'],
  mapKey: TheHive.key,
  loc: [1550, 84, -4165],
  badgeText: [{
    value: `You can sense a palpable anger radiating from the Devouring Earth when you stand upon this, the last remnant of mankind's creation in Hamidon's pristine garden.
The Devouring Earth do not hold back their thoughts about this place: it is a scab, a wound, an affront.
When you look at the green sward blanketing the land around you, it is hard not to feel something akin to that, looking down at the rusting hulks and decaying metal beneath your feet.`,
  }],
  notes: `Located in [map:${TheHive.key}] 1.02 miles from the Eden transfer point, in the center of the southern edge of the elongated building.`,
  links: [
    { title: 'The Wounded Earth Badge', href: 'https://homecoming.wiki/wiki/The_Wounded_Earth_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '4',
}
