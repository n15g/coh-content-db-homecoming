import { BadgeData } from 'coh-content-db'
import { SkywayCity } from '../../map/skyway-city'

export const BridgeToNowhere: BadgeData = {
  type: 'EXPLORATION',
  key: 'bridge-to-nowhere',
  setTitle: { id: 1538 },
  name: [{ value: 'Bridge to Nowhere' }],
  alignment: ['H'],
  mapKey: SkywayCity.key,
  loc: [251, -12, -3644],
  badgeText: [{
    value: 'The construction of Skyway\'s next set of bridges was halted by the first Rikti War and remains on hold.'
      + ' Citizens walking nearby constantly look at this bridge with some fear, noticing that its foundations grow weaker by the day.'
      + ' It may be only a matter of time until this bridge collapses.',
  }],
  notes: 'The Bridge to Nowhere Badge is in The Gruff neighborhood of Skyway City.'
    + '\n\nIt is in the middle of a free-standing section of bridge 490 yards SSE of the north Paragon City Monorail station.',
  links: [
    { title: 'Bridge to Nowhere Badge', href: 'https://homecoming.wiki/wiki/Bridge_to_Nowhere_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '8',
}
