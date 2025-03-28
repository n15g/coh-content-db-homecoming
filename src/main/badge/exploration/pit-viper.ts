import { BadgeData, zoneLink } from 'coh-content-db'
import { SharkheadIsle } from '../../zone/sharkhead-isle'

export const PitViper: BadgeData = {
  type: 'EXPLORATION',
  key: 'pit-viper',
  setTitle: { id: 298 },
  name: [{ value: 'Pit Viper' }],
  alignment: ['V'],
  zoneKey: SharkheadIsle.key,
  loc: [148, -377, 1500],
  badgeText: [{
    value: `This hole is used by the locals as a makeshift arena for fighting and wagering.`,
  }],
  notes: `Located in ${zoneLink(SharkheadIsle)}, at the bottom of the pit in The Pit neighborhood.

The badge marker is located 70 feet west of The Pit marker.`,
  links: [
    { title: 'Pit Viper Badge', href: 'https://homecoming.wiki/wiki/Pit_Viper_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '4',
}
