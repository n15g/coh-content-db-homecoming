import { BadgeData, zoneLink } from 'coh-content-db'
import { ImperialCity } from '../../zone/imperial-city'

export const TiberianOverseer: BadgeData = {
  type: 'exploration',
  key: 'tiberian-overseer',
  setTitleId: [1634],
  name: 'Tiberian Overseer',
  morality: 'all',
  zoneKey: ImperialCity.key,
  loc: [564, 109, 3168],
  badgeText: `From this high perch the Tiberian Overseer casts their gaze across the city-state of Praetoria, taking in its beauty while seeking out the corruption that threatens it.`,
  notes: `Located in ${zoneLink(ImperialCity)} 185 yards N of the Tiberian Bluff marker.`,
  links: [
    { title: 'Tiberian Overseer Badge', href: 'https://homecoming.wiki/wiki/Tiberian_Overseer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  vidiotMapKey: '7',
}
