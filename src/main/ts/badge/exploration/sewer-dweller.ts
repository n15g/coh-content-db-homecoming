import { BadgeData } from 'coh-content-db'
import { Grandville } from '../../zone/grandville'

export const SewerDweller: BadgeData = {
  type: 'exploration',
  key: 'sewer-dweller',
  setTitleId: [284],
  name: 'Sewer Dweller',
  morality: 'rogue-isles-access',
  badgeText: `A new low, even for a villain, you've stumbled through the very very bottom of Grandville in the area known as 'The Gutter.'`,
  notes: `Located in The Gutter neighborhood of Grandville, on top of a sewer pipe located 216 yards northeast of The Gutter marker.`,
  links: [
    { title: 'Sewer Dweller Badge', href: 'https://homecoming.wiki/wiki/Sewer_Dweller_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Grandville.key, coords: [2682, -443, -731], icon: 'badge', iconText: '2' } },
  ],
}
