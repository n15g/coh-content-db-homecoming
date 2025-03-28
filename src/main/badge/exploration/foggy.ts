import { BadgeData, zoneLink } from 'coh-content-db'
import { FoundersFalls } from '../../zone/founders-falls'

export const Foggy: BadgeData = {
  type: 'EXPLORATION',
  key: 'foggy',
  setTitle: { id: 134 },
  name: [{ value: 'Foggy' }],
  alignment: ['H'],
  zoneKey: FoundersFalls.key,
  loc: [968, 0, 2621],
  badgeText: [{
    value: 'This building is in the final stages of preparing suites for the use of the city\'s Super Groups.',
  }],
  notes: `Located in The Gaspee neighborhood of ${zoneLink(FoundersFalls)}. It is located by a fountain in front (east) of a tall building 100 yards south of The Gaspee marker.`,
  links: [
    { title: 'Foggy Badge', href: 'https://homecoming.wiki/wiki/Foggy_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '1',
}
