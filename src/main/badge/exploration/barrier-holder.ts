import { BadgeData, zoneLink } from 'coh-content-db'
import { Croatoa } from '../../zone/croatoa'

export const BarrierHolder: BadgeData = {
  type: 'EXPLORATION',
  key: 'barrier-holder',
  setTitle: { id: 1540 },
  name: [{ value: 'Barrier Holder' }],
  alignment: ['H'],
  zoneKey: Croatoa.key,
  loc: [386, 0, 1689],
  badgeText: [{
    value: 'Croatoa\'s own little Stonehenge has been the site of several battles against the supernatural powers who seek to consume this small town.'
      + ' Each attack has been foiled, though nearby residents still can\'t help but look at this site with some uneasiness.',
  }],
  notes: `Located in the Salamanca neighborhood of ${zoneLink(Croatoa)}.

          It is in the middle of a small pond 135 yards west of the neighborhood marker.`,
  links: [
    { title: 'Barrier Holder Badge', href: 'https://homecoming.wiki/wiki/Barrier_Holder_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '4',
}
