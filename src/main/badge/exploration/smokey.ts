import { BadgeData } from 'coh-content-db'
import { KingsRow } from '../../zone/kings-row'

export const Smokey: BadgeData = {
  type: 'EXPLORATION',
  key: 'smokey',
  setTitle: { id: 100 },
  name: [{ value: 'Smokey' }],
  alignment: ['H'],
  zoneKey: KingsRow.key,
  loc: [-3042, -41, -1358],
  badgeText: [{
    value: 'King Garment Works dominated the Kings Row economy for years. These smoke stacks were part of their manufacturing facility.',
  }],
  notes: 'The Smokey Badge is located in Kings Row, in the far NE corner of the Royal Refinery neighborhood.',
  links: [
    { title: 'Smokey Badge', href: 'https://homecoming.wiki/wiki/Smokey_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '5',
}
