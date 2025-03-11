import { BadgeData } from 'coh-content-db'
import { ImperialCity } from '../../map/imperial-city'

export const TiberianOverseer: BadgeData = {
  type: 'EXPLORATION',
  key: 'tiberian-overseer',
  setTitle: { id: 1634 },
  name: [{ value: 'Tiberian Overseer' }],
  alignment: ['H', 'V', 'P'],
  mapKey: ImperialCity.key,
  loc: [564, 109, 3168],
  badgeText: [{
    value: 'From this high perch the Tiberian Overseer casts their gaze across the city-state of Praetoria, taking in its beauty while seeking out the corruption that threatens it.',
  }],
  notes: 'Located in [map:imperial-city] 185 yards N of the Tiberian Bluff marker.',
  links: [
    { title: 'Tiberian Overseer Badge', href: 'https://homecoming.wiki/wiki/Tiberian_Overseer_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '7',
}
