import { BadgeData } from 'coh-content-db'
import { MercyIsland } from '../../map/mercy-island'

export const Cesspool: BadgeData = {
  type: 'EXPLORATION',
  key: 'cesspool',
  setTitle: { id: 263 },
  name: [{ value: 'Cesspool' }],
  alignment: ['V'],
  mapKey: MercyIsland.key,
  loc: [-322, 68, -2656],
  badgeText: [{
    value: `Many would-be Villains have drunk their fill from the cesspool in hopes it might grant super power. Mostly they go insane.`,
  }],
  notes: `Located on [map:${MercyIsland.key}].

The marker is on a ledge between two large tanks in a pool of greenish water.
The tanks are in the far northwestern part of the island, and the badge marker is 602 yards west-northwest of the Darwin's Landing marker.`,
  links: [
    { title: 'Cesspool Badge', href: 'https://homecoming.wiki/wiki/Cesspool_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '1',
}
