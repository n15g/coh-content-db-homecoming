import { BadgeData } from 'coh-content-db'
import { Grandville } from '../../zone/grandville'

export const Overlord: BadgeData = {
  type: 'exploration',
  key: 'overlord',
  setTitleId: [283],
  name: 'Overlord',
  morality: 'rogue-isles-access',
  badgeText: `You've visited the beach outside the Grandville city walls, where Lord Recluse viciously repelled an invasion of Longbow landing craft.`,
  notes: `Located in the Gutter neighborhood, outside the main walls.

1. From the Gutter marker, head slightly east of due northeast (about one tick right of NE on the compass) to reach the beach access door and exit outside.
2. Once through the door, head due east toward a small concrete bunker near the beach, uf you reach the sand, you've gone too far—turn around and you will see the bunker.
3. The badge marker is located on top of the bunker, just above the door.`,
  links: [
    { title: 'Overlord Badge', href: 'https://homecoming.wiki/wiki/Overlord_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Grandville.key, coords: [1358, -441, -596], icon: 'badge', iconText: '1' } },
  ],
}
