import { BadgeData } from 'coh-content-db'
import { Grandville } from '../../zone/grandville'

export const GutterBait: BadgeData = {
  type: 'exploration',
  key: 'gutter-bait',
  setTitleId: [1513],
  name: 'Gutter Bait',
  morality: 'rogue-isles-access',
  badgeText: `These dangerous catwalks have resulted in a handful of Arachnos soldiers unwittingly falling into the depths of the Gutter, disappearing forever.
At first, search and rescue missions were initiated to attempt to recover the missing soldiers, but were soon called off.
Arachnos uses the disappearances as a valuable lesson on being alert during patrol.`,
  notes: `Located in the Spider City neighborhood, on a catwalk overlooking the North Ward of the Gutter, 154 yards east of the Gutter neighborhood marker.`,
  links: [
    { title: 'Gutter Bait Badge', href: 'https://homecoming.wiki/wiki/Gutter_Bait_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Grandville.key, coords: [2573, -282, -238], icon: 'badge', iconText: '8' } },
  ],
}
