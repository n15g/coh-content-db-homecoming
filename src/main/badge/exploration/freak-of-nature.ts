import { BadgeData } from 'coh-content-db'
import { SharkheadIsle } from '../../zone/sharkhead-isle'

export const FreakOfNature: BadgeData = {
  type: 'exploration',
  key: 'freak-of-nature',
  setTitleId: [297],
  name: 'Freak of Nature',
  morality: 'villainous',
  zoneKey: SharkheadIsle.key,
  loc: [1229, 90, -2183],
  badgeText: `The Freakshow have managed to find utopia in this forsaken slag heap.`,
  notes: `Located just east of the center of the Freakshow shanty 295 yards north of The Crush neighborhood marker.

There is a metal grate bridge leading to a lookout point. The marker is at the start of that metal grate bridge.`,
  links: [
    { title: 'Freak of Nature Badge', href: 'https://homecoming.wiki/wiki/Freak_of_Nature_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  vidiotMapKey: '3',
}
