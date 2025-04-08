import { BadgeData, zoneLink } from 'coh-content-db'
import { TheHive } from '../../zone/the-hive'
import { Eden } from '../../zone/eden'

export const TheWoundedEarth: BadgeData = {
  type: 'exploration',
  key: 'the-wounded-earth',
  setTitleId: [1849],
  name: 'The Wounded Earth',
  morality: 'paragon-city-access',
  badgeText: `You can sense a palpable anger radiating from the Devouring Earth when you stand upon this, the last remnant of mankind's creation in Hamidon's pristine garden.
The Devouring Earth do not hold back their thoughts about this place: it is a scab, a wound, an affront.
When you look at the green sward blanketing the land around you, it is hard not to feel something akin to that, looking down at the rusting hulks and decaying metal beneath your feet.`,
  notes: `Located 1.02 miles from the ${zoneLink(Eden)} transfer point, in the center of the southern edge of the elongated building.`,
  links: [
    { title: 'The Wounded Earth Badge', href: 'https://homecoming.wiki/wiki/The_Wounded_Earth_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TheHive.key, coords: [1550, 84, -4165] }, vidiotMapKey: '4' },
  ],
}
