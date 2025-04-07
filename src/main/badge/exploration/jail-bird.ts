import { BadgeData, zoneLink } from 'coh-content-db'
import { Breakout } from '../../zone/breakout'
import { Ouroboros } from '../../zone/ouroboros'

export const JailBird: BadgeData = {
  type: 'exploration',
  key: 'jail-bird',
  setTitleId: [437],
  name: 'Jail Bird',
  morality: 'villainous',
  zoneKey: Breakout.key,
  loc: [-2314, -103, 970],
  badgeText: `It is rumored around the Zig that the Bug Man escaped from this location.`,
  notes: `
1. From where you start outside your cell, turn right, walking away from H.T.
2. When you get to the cell walls, turn around and you'll see a staircase leading up.
3. Go all the way upstairs, and walk left, with the cells to your right.
4. The badge marker is inside the last cell on the right. It isn't visible, but once you pass close enough to it by entering the cell, you will earn the badge.

This badge is also available while revisiting the Zig during the ${zoneLink(Ouroboros)} Initiation Story Arc.`,
  links: [
    { title: 'Jail Bird Badge', href: 'https://homecoming.wiki/wiki/Jail_Bird_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  vidiotMapKey: '1',
}
