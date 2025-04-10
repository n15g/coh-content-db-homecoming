import { BadgeData } from 'coh-content-db'
import { MercyIsland } from '../../zone/mercy-island'

export const FirstRule: BadgeData = {
  type: 'exploration',
  key: 'first-rule',
  setTitleId: [1484],
  name: 'First Rule',
  morality: 'rogue-isles-access',
  badgeText: `The first rule of Infected Fight Club is that you don't talk about it. At least that's what the RIP told you after you walked in on one of their Infected Fighting Rings in Mercy.`,
  notes: `Located in the Darwin's Landing neighborhood, in the middle of the triangular fight club arena 612 yards WSW of the neighborhood marker.`,
  links: [
    { title: 'First Rule Badge', href: 'https://homecoming.wiki/wiki/First_Rule_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: MercyIsland.key, coords: [-74, 65, -1602], icon: 'badge', iconText: '7' } },
  ],
}
