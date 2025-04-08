import { BadgeData } from 'coh-content-db'
import { UndergroundNeutropolis } from '../../zone/underground-neutropolis'

export const ReadyForAnything: BadgeData = {
  type: 'exploration',
  key: 'ready-for-anything',
  setTitleId: [1746],
  name: 'Ready for Anything',
  morality: 'all',
  badgeText: `This training room under Lambda Sector serves as a harsh urban combat 'shoothouse' for the Imperial Defense Force and PPD TEST. Live fire exercises are also known as 'Resistance assaults.'`,
  notes: `Located in the square at the far north of the map.`,
  links: [
    { title: 'Ready for Anything Badge', href: 'https://homecoming.wiki/wiki/Ready_for_Anything_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: UndergroundNeutropolis.key, coords: [-1859, -1248, -4112] }, vidiotMapKey: '6' },
  ],
}
