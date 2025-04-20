import { BadgeData } from 'coh-content-db'
import { MercyIsland } from '../../zone/mercy-island'

export const SnakeCharmer: BadgeData = {
  type: 'exploration',
  key: 'snake-charmer',
  setTitleId: [264],
  name: 'Snake Charmer',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `This is the main entrance to the Snakes' underground lair. You really don't want to go down there.`,
  notes: `Located in a snake pit approximately 507 yards due west of the Darwin's Landing marker.`,
  links: [
    { title: 'Snake Charmer Badge', href: 'https://homecoming.wiki/wiki/Snake_Charmer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: MercyIsland.key, coords: [-385, 42, -1712], icon: 'badge', iconText: '2' } },
  ],
}
