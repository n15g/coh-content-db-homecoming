import { BadgeData } from 'coh-content-db'
import { ImperialCity } from '../../zone/imperial-city'

export const TiberianOverseer: BadgeData = {
  type: 'exploration',
  key: 'tiberian-overseer',
  setTitleId: [1634],
  name: 'Tiberian Overseer',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `From this high perch the Tiberian Overseer casts their gaze across the city-state of Praetoria, taking in its beauty while seeking out the corruption that threatens it.`,
  notes: `Located 185 yards N of the Tiberian Bluff marker.`,
  links: [
    { title: 'Tiberian Overseer Badge', href: 'https://homecoming.wiki/wiki/Tiberian_Overseer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: ImperialCity.key, coords: [564, 109, 3168], icon: 'badge', iconText: '7' } },
  ],
}
