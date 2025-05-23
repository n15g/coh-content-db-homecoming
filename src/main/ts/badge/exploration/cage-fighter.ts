import { BadgeData } from 'coh-content-db'
import { ArenaCageMatch } from '../../zone/arena-cage-match'

export const CageFighter: BadgeData = {
  type: 'exploration',
  key: 'cage-fighter',
  setTitleId: [716],
  name: 'Cage Fighter',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'Fighting in a nice big arena is one thing, but fighting in a cage is completely... different. Only the strong survive a cage match.',
  notes: `When staging a PvP duel via the terminals in Pocket D or in the Arena, there is a duel map that matches the Monkey Fight Club in Pocket D, placing you in the cage for the match.

In the center of the cage is the exploration badge. The badge may be earned by either Heroes or Villains, and can even be earned by using spectator mode on someone else's match in the same map.

Note that it is possible to brute-force a character into the cage in the actual Pocket D zone, but the badge is not available there. It is only present on the Arena map.`,
  links: [
    { title: 'Cage Fighter Badge', href: 'https://homecoming.wiki/wiki/Cage_Fighter_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: ArenaCageMatch.key, coords: [-190, -24, -1329] } },
  ],
}
