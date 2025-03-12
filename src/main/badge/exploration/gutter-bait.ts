import { BadgeData } from 'coh-content-db'
import { Grandville } from '../../map/grandville'

export const GutterBait: BadgeData = {
  type: 'EXPLORATION',
  key: 'gutter-bait',
  setTitle: { id: 1513 },
  name: [{ value: 'Gutter Bait' }],
  alignment: ['V'],
  mapKey: Grandville.key,
  loc: [2573, -282, -238],
  badgeText: [{
    value: `These dangerous catwalks have resulted in a handful of Arachnos soldiers unwittingly falling into the depths of the Gutter, disappearing forever.
At first, search and rescue missions were initiated to attempt to recover the missing soldiers, but were soon called off.
Arachnos uses the disappearances as a valuable lesson on being alert during patrol.`,
  }],
  notes: `Located in [map:${Grandville.key}], in the Spider City neighborhood.

It is on a catwalk overlooking the North Ward of the Gutter, 154 yards east of the Gutter neighborhood marker.`,
  links: [
    { title: 'Gutter Bait Badge', href: 'https://homecoming.wiki/wiki/Gutter_Bait_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '8',
}
