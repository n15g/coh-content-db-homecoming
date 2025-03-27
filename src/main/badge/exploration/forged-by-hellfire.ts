import { BadgeData, mapLink } from 'coh-content-db'
import { SharkheadIsle } from '../../map/sharkhead-isle'

export const ForgedByHellfire: BadgeData = {
  type: 'EXPLORATION',
  key: 'forged-by-hellfire',
  setTitle: { id: 296 },
  name: [{ value: 'Forged by Hellfire' }],
  alignment: ['V'],
  mapKey: SharkheadIsle.key,
  loc: [1970, 64, -192],
  badgeText: [{
    value: `The Hell Forge is the largest above ground furnace on the planet.`,
  }],
  notes: `Located in ${mapLink(SharkheadIsle)}, in the Hell Forge neighborhood.

Just west of the Hell Forge marker, there are three large silo tanks.
 The badge marker is on the ground just north of the northernmost tank.`,
  links: [
    { title: 'Forged by Hellfire Badge', href: 'https://homecoming.wiki/wiki/Forged_by_Hellfire_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '2',
}
