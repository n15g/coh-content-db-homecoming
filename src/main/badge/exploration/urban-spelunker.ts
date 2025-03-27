import { BadgeData, mapLink } from 'coh-content-db'
import { UndergroundNova } from '../../map/underground-nova'

export const UrbanSpelunker: BadgeData = {
  type: 'EXPLORATION',
  key: 'urban-spelunker',
  setTitle: { id: 1642 },
  name: [{ value: 'Urban Spelunker' }],
  alignment: ['H', 'V', 'P'],
  mapKey: UndergroundNova.key,
  badgeText: [{
    value: `It takes courage and an adventurous spirit to brave the miles of corridors, tunnels, and maintenance chambers beneath Praetoria.
            You risk arrest by the PPD, conscription by the Resistance, or a messy end at the hands of Neuron's mistakes.`,
  }],
  notes: `The Urban Spelunker Badge has three locations in ${mapLink(UndergroundNova)}, all located just inside the Underground Access doors.

          Its coordinates are (-3094, 704, 1616), (-2976, 704, -323) and (-3839, 704, -2135). It is necessary to visit only one location to earn this badge.`,
  links: [
    { title: 'Urban Spelunker Badge', href: 'https://homecoming.wiki/wiki/Urban_Spelunker_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '7',
}
