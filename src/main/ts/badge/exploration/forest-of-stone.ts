import { BadgeData, zoneLink } from 'coh-content-db'
import { TheHive } from '../../zone/the-hive'
import { Eden } from '../../zone/eden'

export const ForestOfStone: BadgeData = {
  type: 'exploration',
  key: 'forest-of-stone',
  setTitleId: [1853],
  name: 'Forest of Stone',
  morality: 'paragon-city-access',
  badgeText: `Towering pillars of stone abound in this region, as they do in other areas where the Devouring Earth have launched full-scale attacks.
It has become their unwelcome calling card.
The devastation they wreak is extensive, as they thrust upward from the ground toppling buildings, shattering roadways, and punching through even the most solidly built human-made constructs.`,
  notes: `Located 0.78 miles NW of the ${zoneLink(Eden)} transfer point, in a valley close to a barricade of monsters just off the northwest edge of the crater.`,
  links: [
    { title: 'Forest of Stone Badge', href: 'https://homecoming.wiki/wiki/Forest_of_Stone_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TheHive.key, coords: [703, 0, -3195], icon: 'badge', iconText: '8' } },
  ],
}
