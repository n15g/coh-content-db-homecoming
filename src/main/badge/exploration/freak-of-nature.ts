import { BadgeData } from 'coh-content-db'
import { SharkheadIsle } from '../../map/sharkhead-isle'

export const FreakOfNature: BadgeData = {
  type: 'EXPLORATION',
  key: 'freak-of-nature',
  setTitle: { id: 297 },
  name: [{ value: 'Freak of Nature' }],
  alignment: ['V'],
  mapKey: SharkheadIsle.key,
  loc: [1229, 90, -2183],
  badgeText: [{
    value: `The Freakshow have managed to find utopia in this forsaken slag heap.`,
  }],
  notes: `Located in [map:${SharkheadIsle.key}], just east of the center of the Freakshow shanty 295 yards north of The Crush neighborhood marker.

There is a metal grate bridge leading to a lookout point. The marker is at the start of that metal grate bridge.`,
  links: [
    { title: 'Freak of Nature Badge', href: 'https://homecoming.wiki/wiki/Freak_of_Nature_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '3',
}
