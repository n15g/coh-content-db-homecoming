import { BadgeData, zoneLink } from 'coh-content-db'
import { Breakout } from '../../zone/breakout'

export const JailBird: BadgeData = {
  type: 'EXPLORATION',
  key: 'jail-bird',
  setTitle: { id: 437 },
  name: [{ value: 'Jail Bird' }],
  alignment: ['V'],
  zoneKey: Breakout.key,
  loc: [-2314, -103, 970],
  badgeText: [{
    value: `It is rumored around the Zig that the Bug Man escaped from this location.`,
  }],
  notes: `Located in the ${zoneLink(Breakout)} tutorial mission.

From where you start outside your cell, turn right, walking away from H.T. When you get to the cell walls, turn around and you'll see a staircase leading up.
 Go all the way upstairs, and walk left, with the cells to your right.
 The badge marker is inside the last cell on the right.
 It isn't visible, but once you pass close enough to it by entering the cell, you will earn the badge.

This badge is also available while revisiting the Zig during the Ouroboros Initiation Story Arc.`,
  links: [
    { title: 'Jail Bird Badge', href: 'https://homecoming.wiki/wiki/Jail_Bird_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '1',
}
