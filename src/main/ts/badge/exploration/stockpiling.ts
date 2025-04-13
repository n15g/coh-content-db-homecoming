import { BadgeData } from 'coh-content-db'
import { Neutropolis } from '../../zone/neutropolis'

export const Stockpiling: BadgeData = {
  type: 'exploration',
  key: 'stockpiling',
  setTitleId: [1728],
  name: 'Stockpiling',
  morality: 'all',
  badgeText: `Lambda Sector is the core of the Imperial Defense Force's armaments and heavy machinery stockpile, fed daily by the anti-matter powered factories of Neutropolis.
What is not immediately needed elsewhere is kept here for a 'rainy day.'`,
  notes: `Located 217 yards NE of the Lambda Sector marker.`,
  links: [
    { title: 'Stockpiling Badge', href: 'https://homecoming.wiki/wiki/Stockpiling_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Neutropolis.key, coords: [5182, -56, -457], icon: 'badge', iconText: '6' } },
  ],
}
