import { BadgeData } from 'coh-content-db'
import { StrigaIsle } from '../../zone/striga-isle'

export const SeaDog: BadgeData = {
  type: 'exploration',
  key: 'sea-dog',
  setTitleId: [197],
  name: 'Sea Dog',
  morality: 'paragon-city-access',
  badgeText: `Port Noble's shipping industry has declined of late, as Paragon City's manufacturing has taken a hit in the wake of the Rikti War.
Now, with the Council plaguing Striga Isle, the situation has gone from bad to worse.`,
  notes: `Located at the end of a dock 440 yards east of the ferry.`,
  links: [
    { title: 'Sea Dog Badge', href: 'https://homecoming.wiki/wiki/Sea_Dog_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: StrigaIsle.key, coords: [-470, 0, 1020] }, vidiotMapKey: '2' },
  ],
}
