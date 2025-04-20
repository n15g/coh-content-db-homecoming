import { BadgeData } from 'coh-content-db'
import { ImperialCity } from '../../zone/imperial-city'

export const GoingRouge: BadgeData = {
  type: 'exploration',
  key: 'going-rouge',
  setTitleId: [1731],
  name: 'Going Rouge',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `Rita Mayfair's cosmetic biochemistry and plastic surgery skills perfectly compliment her taste and sense of style.
She is so good, there are rumors in shadowy corners that she even taught the elusive Doppelganger a thing or two.`,
  notes: `Located 365 yards E of the Industry Avenue marker, directly in front of Rita Mayfair.`,
  links: [
    { title: 'Going Rouge Badge', href: 'https://homecoming.wiki/wiki/Going_Rouge_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: ImperialCity.key, coords: [-2358, -16, 934], icon: 'badge', iconText: '9' } },
  ],
}
