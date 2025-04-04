import { BadgeData, zoneLink } from 'coh-content-db'
import { Grandville } from '../../zone/grandville'

export const SewerDweller: BadgeData = {
  type: 'exploration',
  key: 'sewer-dweller',
  setTitleId: [284],
  name: 'Sewer Dweller',
  morality: 'villainous',
  zoneKey: Grandville.key,
  loc: [2682, -443, -731],
  badgeText: [{
    value: `A new low, even for a villain, you've stumbled through the very very bottom of Grandville in the area known as 'The Gutter.'`,
  }],
  notes: `Located in ${zoneLink(Grandville)}, in The Gutter neighborhood of Grandville.

It is on top of a sewer pipe located 216 yards northeast of The Gutter marker.`,
  links: [
    { title: 'Sewer Dweller Badge', href: 'https://homecoming.wiki/wiki/Sewer_Dweller_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  vidiotMapKey: '2',
}
