import { BadgeData, mapLink } from 'coh-content-db'
import { MercyIsland } from '../../map/mercy-island'

export const SnakeCharmer: BadgeData = {
  type: 'EXPLORATION',
  key: 'snake-charmer',
  setTitle: { id: 264 },
  name: [{ value: 'Snake Charmer' }],
  alignment: ['V'],
  mapKey: MercyIsland.key,
  loc: [-385, 42, -1712],
  badgeText: [{
    value: `This is the main entrance to the Snakes' underground lair. You really don't want to go down there.`,
  }],
  notes: `Located on ${mapLink(MercyIsland)}, in a snake pit approximately 507 yards due west of the Darwin's Landing marker in Mercy Island. It is in the Darwin's Landing neighborhood.`,
  links: [
    { title: 'Snake Charmer Badge', href: 'https://homecoming.wiki/wiki/Snake_Charmer_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '2',
}
