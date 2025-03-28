import { BadgeData, zoneLink } from 'coh-content-db'
import { Grandville } from '../../zone/grandville'

export const LineHolder: BadgeData = {
  type: 'EXPLORATION',
  key: 'line-holder',
  setTitle: { id: 1512 },
  name: [{ value: 'Line Holder' }],
  alignment: ['V'],
  zoneKey: Grandville.key,
  loc: [1728, -400, 656],
  badgeText: [{
    value: `Arachnos stationed here are the first line of defense against any Arachnoids trying to break out of the Gutter.
Arachnoids foolish enough to attempt an attack from above ground never succeed, though it's well known that most Arachnoids utilize their own underground tunnels to travel.`,
  }],
  notes: `Located in ${zoneLink(Grandville)}, in the Gutter neighborhood.

It is at the gate between the North and East Wards, 64 yards ENE of the East Ward 2 Lift marker.`,
  links: [
    { title: 'Line Holder Badge', href: 'https://homecoming.wiki/wiki/Line_Holder_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '7',
}
