import { BadgeData } from 'coh-content-db'
import { KingsRow } from '../../zone/kings-row'

export const KeenSighted: BadgeData = {
  type: 'EXPLORATION',
  key: 'keen-sighted',
  setTitle: { id: 99 },
  name: [{ value: 'Keen Sighted' }],
  alignment: ['H'],
  zoneKey: KingsRow.key,
  loc: [-2176, 97, 1142],
  badgeText: [{
    value: 'Mantihttps://n15g.github.io/coh-content-db-homecoming/images/badges/ one of the Surviving Eight, was first sighted at this location after keeping to the shadows for months/.png',
  }],
  notes: 'The Keen Sighted Badge is located in Kings Row on a high voltage tower 230 yards to the SE of the Monorail.',
  links: [
    { title: 'Keen Sighted Badge', href: 'https://homecoming.wiki/wiki/Keen_Sighted_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '4',
}
