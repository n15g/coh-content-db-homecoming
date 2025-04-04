import { BadgeData } from 'coh-content-db'
import { Grandville } from '../../zone/grandville'

export const Overlord: BadgeData = {
  type: 'exploration',
  key: 'overlord',
  setTitleId: [283],
  name: 'Overlord',
  morality: 'villainous',
  zoneKey: Grandville.key,
  loc: [1358, -441, -596],
  badgeText: `You've visited the beach outside the Grandville city walls, where Lord Recluse viciously repelled an invasion of Longbow landing craft.`,
  notes: `Located in the Gutter neighborhood (but outside the main walls).

1. From The Gutter marker, head one tick right of northeast on the compass (slightly east of due northeast) until you reach the door for beach access and go outside.
2. On the other side of the door, head due east until you reach a small concrete bunker just before reaching the beach.
    - If you reach the sand, you've got too far—turn around and you will see the bunker.
3. The badge marker is located on top of the bunker, just above the door.`,
  links: [
    { title: 'Overlord Badge', href: 'https://homecoming.wiki/wiki/Overlord_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  vidiotMapKey: '1',
}
