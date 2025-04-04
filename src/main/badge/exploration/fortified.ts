import { BadgeData } from 'coh-content-db'
import { MercyIsland } from '../../zone/mercy-island'

export const Fortified: BadgeData = {
  type: 'exploration',
  key: 'fortified',
  setTitleId: [266],
  name: 'Fortified',
  morality: 'villainous',
  zoneKey: MercyIsland.key,
  loc: [-2497, 304, -440],
  badgeText: `Arachnos built the wall around Mercy to keep it safe.`,
  notes: `Located on one of the wall supports around the Mercy neighborhood, far east of the elevator into Mercy from Darwin's Landing.
To reach it, walk east along the Mercy side of the wall until it makes a 45° turn to the southeast. The support is just on the other side of the wall after that turn.

It is possible to reach the badge marker without flying or teleporting:
1. There is a spiral ramp that leads up the next-to-last buiding before the turn.
2. One can leap from the top of that ramp onto a pipe, then onto the roof of that building.
3. From there, leap to the lower roof of the next building (the one in the corner).
4. Then with careful timing and the Sprint power on, leap onto the top of the wall.
5. (Note: You must leap onto the diagonal northwest-southeast wall, not the east-west wall.)
6. From there, look over the edge of the wall for the outside support, and the badge marker is visible on the tip of it.`,
  links: [
    { title: 'Fortified Badge', href: 'https://homecoming.wiki/wiki/Fortified_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  vidiotMapKey: '4',
}
