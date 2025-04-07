import { BadgeData, zoneLink } from 'coh-content-db'
import { UndergroundNova } from '../../zone/underground-nova'

export const UrbanSpelunker: BadgeData = {
  type: 'exploration',
  key: 'urban-spelunker',
  setTitleId: [1642],
  name: 'Urban Spelunker',
  morality: 'all',
  zoneKey: UndergroundNova.key,
  badgeText: `It takes courage and an adventurous spirit to brave the miles of corridors, tunnels, and maintenance chambers beneath Praetoria. You risk arrest by the PPD, conscription by the Resistance, or a messy end at the hands of Neuron's mistakes.`,
  notes: `The Urban Spelunker Badge has three locations in ${zoneLink(UndergroundNova)}, all located just inside the Underground Access doors.

Its coordinates are (-3094, 704, 1616), (-2976, 704, -323) and (-3839, 704, -2135). It is necessary to visit only one location to earn this badge.`,
  links: [
    { title: 'Urban Spelunker Badge', href: 'https://homecoming.wiki/wiki/Urban_Spelunker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  vidiotMapKey: '7',
}
