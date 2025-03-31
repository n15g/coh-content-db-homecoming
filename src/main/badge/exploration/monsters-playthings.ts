import { BadgeData, zoneLink } from 'coh-content-db'
import { MonsterIsland } from '../../zone/monster-island'

export const MonstersPlaythings: BadgeData = {
  type: 'EXPLORATION',
  key: 'monsters-playthings',
  setTitle: { id: 1871 },
  name: [{ value: 'Monsters\' Playthings' }],
  alignment: ['V'],
  zoneKey: MonsterIsland.key,
  loc: [-1300, 0, -7608],
  badgeText: [{
    value: `About you lies shattered heavy machinery, evidence of the power the Devouring Earth monsters possess.
Hulks of metal weighing tons have been tossed about and shredded like a dog's chew toy.
You can only imagine what they did to the island's former masters. You vow to not let the same happen to you.`,
  }],
  notes: `Located in ${zoneLink(MonsterIsland)}, 388 yards northwest of the Cutlass Isles marker, between the cluster of boxes just off the northwest corner of the two elongated buildings.`,
  links: [
    { title: 'Monsters\' Playthings Badge', href: 'https://homecoming.wiki/wiki/Monsters%27_Playthings_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '4',
}
