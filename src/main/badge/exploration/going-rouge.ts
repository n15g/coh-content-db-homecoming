import { BadgeData, mapLink } from 'coh-content-db'
import { ImperialCity } from '../../map/imperial-city'

export const GoingRouge: BadgeData = {
  type: 'EXPLORATION',
  key: 'going-rouge',
  setTitle: { id: 1731 },
  name: [{ value: 'Going Rouge' }],
  alignment: ['H', 'V', 'P'],
  mapKey: ImperialCity.key,
  loc: [-2358, -16, 934],
  badgeText: [{
    value: 'Rita Mayfair\'s cosmetic biochemistry and plastic surgery skills perfectly compliment her taste and sense of style.'
      + ' She is so good, there are rumors in shadowy corners that she even taught the elusive Doppelganger a thing or two.',
  }],
  notes: `Located in ${mapLink(ImperialCity)} 365 yards E of the Industry Avenue marker, and directly in front of Rita Mayfair.`,
  links: [
    { title: 'Going Rouge Badge', href: 'https://homecoming.wiki/wiki/Going_Rouge_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '9',
}
