import { BadgeData } from 'coh-content-db'
import { MercyIsland } from '../../map/mercy-island'

export const FirstRule: BadgeData = {
  type: 'EXPLORATION',
  key: 'first-rule',
  setTitle: { id: 1484 },
  name: [{ value: 'First Rule' }],
  alignment: ['V'],
  mapKey: MercyIsland.key,
  loc: [-74, 65, -1602],
  badgeText: [{
    value: `The first rule of Infected Fight Club is that you don't talk about it. At least that's what the RIP told you after you walked in on one of their Infected Fighting Rings in Mercy.`,
  }],
  notes: `Located on [map:${MercyIsland.key}], in the Darwin's Landing neighborhood.

It is in the middle of the triangular fight club arena 612 yards WSW of the neighborhood marker.`,
  links: [
    { title: 'First Rule Badge', href: 'https://homecoming.wiki/wiki/First_Rule_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '7',
}
