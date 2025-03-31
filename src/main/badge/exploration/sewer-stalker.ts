import { BadgeData, zoneLink } from 'coh-content-db'
import { SewerNetwork } from '../../zone/sewer-network'
import { SkywayCity } from '../../zone/skyway-city'

export const SewerStalker: BadgeData = {
  type: 'EXPLORATION',
  key: 'sewer-stalker',
  setTitle: { id: 1833 },
  name: [{ value: 'Sewer Stalker' }],
  alignment: ['H'],
  zoneKey: SewerNetwork.key,
  loc: [64, 2, 2995],
  badgeText: [{
    value: `
The sewers are full of predators.
They stalk the shadows and strike without warning, preying upon each other and upon those foolish enough to trespass upon their hunting grounds.
You are one of those, yet you have the power to turn the tables against them.
Where they hunt, you hunt. Where they lurk, you are the eyes in the darkness watching them.
You are the predator that they now fear, it is the stories of your exploits they use as cautionary tales among themselves.`,
  }],
  notes: `Located in ${zoneLink(SewerNetwork)} 49 yards north of the ${zoneLink(SkywayCity)} transfer point, straight back from the entrance.`,
  links: [
    { title: 'Sewer Stalker Badge', href: 'https://homecoming.wiki/wiki/Sewer_Stalker_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '5',
}
