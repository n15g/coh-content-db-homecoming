import { BadgeData } from 'coh-content-db'
import { Croatoa } from '../../zone/croatoa'

export const BarrierHolder: BadgeData = {
  type: 'exploration',
  key: 'barrier-holder',
  setTitleId: [1540],
  name: 'Barrier Holder',
  morality: 'paragon-city-access',
  badgeText: `Croatoa's own little Stonehenge has been the site of several battles against the supernatural powers who seek to consume this small town.
Each attack has been foiled, though nearby residents still can't help but look at this site with some uneasiness.`,
  notes: `Located in the Salamanca neighborhood, in the middle of a small pond 135 yards west of the neighborhood marker.`,
  links: [
    { title: 'Barrier Holder Badge', href: 'https://homecoming.wiki/wiki/Barrier_Holder_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Croatoa.key, coords: [386, 0, 1689] }, vidiotMapKey: '4' },
  ],
}
