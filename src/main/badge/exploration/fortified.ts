import { BadgeData } from 'coh-content-db'
import { MercyIsland } from '../../map/mercy-island'

export const Fortified: BadgeData = {
  type: 'EXPLORATION',
  key: 'fortified',
  setTitle: { id: 266 },
  name: [{ value: 'Fortified' }],
  alignment: ['V'],
  mapKey: MercyIsland.key,
  loc: [-2497, 304, -440],
  badgeText: [{
    value: `Arachnos built the wall around Mercy to keep it safe.`,
  }],
  notes: `Located on [map:${MercyIsland.key}], on one of the wall supports around the Mercy neighborhood.

The support is far east of the elevator into Mercy from Darwin's Landing.

To reach it, walk east along the Mercy side of the wall until it makes a 45° turn to the southeast. The support is just on the other side of the wall after that turn.

It is possible to reach the badge marker without flying or teleporting.
 There is a spiral ramp that leads up the next-to-last buiding before the turn.
 One can leap from the top of that ramp onto a pipe, then onto the roof of that building.
 From there, leap to the lower roof of the next building (the one in the corner).
 Then with careful timing and the Sprint power on, leap onto the top of the wall.
 (Note: You must leap onto the diagonal northwest-southeast wall, not the east-west wall.)
 From there, look over the edge of the wall for the outside support, and the badge marker is visible on the tip of it.`,
  links: [
    { title: 'Fortified Badge', href: 'https://homecoming.wiki/wiki/Fortified_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '4',
}
