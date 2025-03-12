import { BadgeData } from 'coh-content-db'
import { Grandville } from '../../map/grandville'

export const Overlord: BadgeData = {
  type: 'EXPLORATION',
  key: 'overlord',
  setTitle: { id: 283 },
  name: [{ value: 'Overlord' }],
  alignment: ['V'],
  mapKey: Grandville.key,
  loc: [1358, -441, -596],
  badgeText: [{
    value: `You've visited the beach outside the Grandville city walls, where Lord Recluse viciously repelled an invasion of Longbow landing craft.`,
  }],
  notes: `Located in [map:${Grandville.key}], in the Gutter neighborhood (but outside the main walls).

From The Gutter marker, head one tick right of northeast on the compass (slightly east of due northeast) until you reach the door for beach access and go outside.
On the other side of the door, head due east until you reach a small concrete bunker just before reaching the beach.
If you reach the sand, you've got too far—turn around and you will see the bunker.
The badge marker is located on top of the bunker, just above the door.`,
  links: [
    { title: 'Overlord Badge', href: 'https://homecoming.wiki/wiki/Overlord_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '1',
}
