import { BadgeData } from 'coh-content-db'
import { MonsterIsland } from '../../zone/monster-island'

export const MonstersPlaythings: BadgeData = {
  type: 'exploration',
  key: 'monsters-playthings',
  setTitleId: [1871],
  name: `Monsters' Playthings`,
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `About you lies shattered heavy machinery, evidence of the power the Devouring Earth monsters possess.
Hulks of metal weighing tons have been tossed about and shredded like a dog's chew toy.
You can only imagine what they did to the island's former masters. You vow to not let the same happen to you.`,
  notes: `Located 388 yards northwest of the Cutlass Isles marker, between the cluster of boxes just off the northwest corner of the two elongated buildings.`,
  links: [
    { title: `Monsters' Playthings Badge`, href: 'https://homecoming.wiki/wiki/Monsters%27_Playthings_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: MonsterIsland.key, coords: [-1300, 0, -7608], icon: 'badge', iconText: '4' } },
  ],
}
