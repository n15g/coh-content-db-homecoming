import { BadgeData, mapLink } from 'coh-content-db'
import { MonsterIsland } from '../../map/monster-island'

export const DarkGarden: BadgeData = {
  type: 'EXPLORATION',
  key: 'dark-garden',
  setTitle: { id: 1872 },
  name: [{ value: 'Dark Garden' }],
  alignment: ['V'],
  mapKey: MonsterIsland.key,
  loc: [-2171, -1, -6446],
  badgeText: [{
    value: `In this sheltered little corner, someone spent considerable time and effort to cultivate a garden of rare plants known for their reluctance to grow outside of their native soil.
How many hours must they have spent carefully trimming their boughs, cleaning them of parasites, monitoring their nutrition and water intake?
Where was this unknown gardener when the island was overrun?
Did they remain here to await death alongside their leafy charges? Did they give the ultimate sacrifice for them?
Did their remains provide nourishment for them? The plants do not deign to answer you.`,
  }],
  notes: `Located in ${mapLink(MonsterIsland)}, 131 yards due south of the Cutlass Isles marker, near the door on the inside of the walled-in area.`,
  links: [
    { title: 'Dark Garden Badge', href: 'https://homecoming.wiki/wiki/Dark_Garden_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '5',
}
