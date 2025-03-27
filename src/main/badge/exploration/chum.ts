import { BadgeData, mapLink } from 'coh-content-db'
import { MercyIsland } from '../../map/mercy-island'

export const Chum: BadgeData = {
  type: 'EXPLORATION',
  key: 'chum',
  setTitle: { id: 265 },
  name: [{ value: 'Chum' }],
  alignment: ['V'],
  mapKey: MercyIsland.key,
  loc: [-4048, 6, -1854],
  badgeText: [{
    value: `Just when you thought it was safe...`,
  }],
  notes: `Located on ${mapLink(MercyIsland)}, on a small island due south of Fort Darwin (a base taken over by Longbow). It is on a small beach on the northwest side of the island.`,
  links: [
    { title: 'Chum Badge', href: 'https://homecoming.wiki/wiki/Chum_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '3',
}
