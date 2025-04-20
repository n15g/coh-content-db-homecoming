import { BadgeData } from 'coh-content-db'
import { SharkheadIsle } from '../../zone/sharkhead-isle'

export const ForgedByHellfire: BadgeData = {
  type: 'exploration',
  key: 'forged-by-hellfire',
  setTitleId: [296],
  name: 'Forged by Hellfire',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `The Hell Forge is the largest above ground furnace on the planet.`,
  notes: `Located in the Hell Forge neighborhood, just west of the Hell Forge marker there are three large silo tanks, the badge marker is on the ground just north of the northernmost tank.`,
  links: [
    { title: 'Forged by Hellfire Badge', href: 'https://homecoming.wiki/wiki/Forged_by_Hellfire_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SharkheadIsle.key, coords: [1970, 64, -192], icon: 'badge', iconText: '2' } },
  ],
}
