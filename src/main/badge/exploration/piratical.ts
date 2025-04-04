import { BadgeData } from 'coh-content-db'
import { SirensCall } from '../../zone/sirens-call'

export const Piratical: BadgeData = {
  type: 'exploration',
  key: 'piratical',
  setTitleId: [262],
  name: 'Piratical',
  morality: 'all',
  zoneKey: SirensCall.key,
  loc: [-1631, -144, -866.5],
  badgeText: 'The dread pirate Randall set up this lighthouse to lure ships to their demise.',
  notes: `Located in a grassy area close the water on the villain base island, south of the base.`,
  links: [{ title: 'Piratical Badge', href: 'https://homecoming.wiki/wiki/Piratical_Badge' }],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '4',
}
