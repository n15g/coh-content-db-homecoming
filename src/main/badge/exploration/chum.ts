import { BadgeData } from 'coh-content-db'
import { MercyIsland } from '../../zone/mercy-island'

export const Chum: BadgeData = {
  type: 'exploration',
  key: 'chum',
  setTitleId: [265],
  name: 'Chum',
  morality: 'villainous',
  zoneKey: MercyIsland.key,
  loc: [-4048, 6, -1854],
  badgeText: `Just when you thought it was safe...`,
  notes: `Located on a small island due south of Fort Darwin (a base taken over by Longbow), on a small beach on the northwest side of the island.`,
  links: [
    { title: 'Chum Badge', href: 'https://homecoming.wiki/wiki/Chum_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  vidiotMapKey: '3',
}
