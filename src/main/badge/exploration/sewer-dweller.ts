import { BadgeData } from 'coh-content-db'
import { Grandville } from '../../map/grandville'

export const SewerDweller: BadgeData = {
  type: 'EXPLORATION',
  key: 'sewer-dweller',
  setTitle: { id: 284 },
  name: [{ value: 'Sewer Dweller' }],
  alignment: ['V'],
  mapKey: Grandville.key,
  loc: [2682, -443, -731],
  badgeText: [{
    value: `A new low, even for a villain, you've stumbled through the very very bottom of Grandville in the area known as 'The Gutter.'`,
  }],
  notes: `Located in [map:${Grandville.key}], in The Gutter neighborhood of Grandville.

It is on top of a sewer pipe located 216 yards northeast of The Gutter marker.`,
  links: [
    { title: 'Sewer Dweller Badge', href: 'https://homecoming.wiki/wiki/Sewer_Dweller_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '2',
}
